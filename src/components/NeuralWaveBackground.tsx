import React, { useEffect, useRef } from 'react';

interface NeuralWaveBackgroundProps {
  className?: string;
  /** World-space spacing between grid points in pixels */
  spacing?: number;
  /** Color of the particles, as an "R, G, B" string */
  color?: string;
  /** Overall opacity multiplier (0-1) */
  intensity?: number;
  /** Vanishing point of the perspective grid, in fractional viewport coords */
  focal?: { x: number; y: number };
}

/**
 * A lightweight, dependency-free canvas animation rendering a 3D perspective
 * mesh of square particles arranged in a grid, rippling with a sinusoidal
 * wave. Points further from the camera (deeper into the grid) are projected
 * smaller and dimmer to sell the sense of depth. This is an original
 * implementation, tuned to be freely re-themed.
 */
const NeuralWaveBackground: React.FC<NeuralWaveBackgroundProps> = ({
  className = '',
  spacing = 46,
  color = '57, 255, 136',
  intensity = 1,
  focal = { x: 0.55, y: 0.32 },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame: number;
    let t = 0;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.min(46, Math.max(24, Math.round(width / spacing)));
      rows = Math.min(30, Math.max(16, Math.round(height / spacing) + 6));
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    // Perspective camera tuning
    const focalLength = 260;
    const groundDrop = 320; // vertical distance from horizon to the nearest row
    const waveAmp = 22;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width * focal.x;
      const horizonY = height * focal.y;
      const xSpacing = spacing;
      const zSpacing = spacing * 1.1;

      // Draw far rows first (painter's algorithm) so nearer squares overlay them.
      for (let j = rows - 1; j >= 0; j--) {
        const z = j * zSpacing;
        const scale = focalLength / (focalLength + z);

        for (let i = 0; i < cols; i++) {
          const x = (i - (cols - 1) / 2) * xSpacing;

          const wave =
            Math.sin(x * 0.045 + t) * waveAmp * 0.6 +
            Math.cos(z * 0.03 - t * 1.3) * waveAmp;

          const screenX = centerX + x * scale;
          const screenY = horizonY + (groundDrop - wave) * scale;

          if (
            screenX < -10 ||
            screenX > width + 10 ||
            screenY < -10 ||
            screenY > height + 10
          ) {
            continue;
          }

          const depthAlpha = Math.pow(scale, 1.4);
          const shimmer = 0.75 + 0.25 * Math.sin(x * 0.08 + z * 0.06 + t * 1.5);
          const alpha = Math.min(1, depthAlpha * shimmer) * intensity;
          if (alpha <= 0.02) continue;

          const size = Math.max(0.8, 4.6 * scale);

          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          if (scale > 0.55) {
            ctx.shadowColor = `rgba(${color}, ${Math.min(1, alpha)})`;
            ctx.shadowBlur = 4 * scale;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillRect(screenX - size / 2, screenY - size / 2, size, size);
        }
      }
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      t += 0.012;
      draw();
      animationFrame = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [spacing, color, intensity, focal.x, focal.y]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
};

export default NeuralWaveBackground;

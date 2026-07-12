import React from 'react';

import tableau from '@/assets/logos/tableau.png';
import powerbi from '@/assets/logos/powerbi.svg';
import excel from '@/assets/logos/excel.svg';
import databricks from '@/assets/logos/databricks.svg';
import sqlserver from '@/assets/logos/sqlserver.svg';
import n8n from '@/assets/logos/n8n.svg';
import supabase from '@/assets/logos/supabase.svg';
import aws from '@/assets/logos/aws.svg';

interface Logo {
  name: string;
  src?: string;
}

const logos: Logo[] = [
  { name: 'Tableau', src: tableau },
  { name: 'Power BI', src: powerbi },
  { name: 'Excel', src: excel },
  { name: 'QuickSight' },
  { name: 'Databricks', src: databricks },
  { name: 'SQL Server', src: sqlserver },
  { name: 'n8n', src: n8n },
  { name: 'Supabase', src: supabase },
  { name: 'AWS', src: aws },
];

const track = [...logos, ...logos];

const TechStackMarquee = () => {
  return (
    <div
      className="mt-10 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Ferramentas com as quais trabalhamos"
    >
      <div className="flex w-max items-center gap-14 animate-marquee motion-reduce:animate-none">
        {track.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex items-center justify-center shrink-0 h-8">
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain grayscale invert brightness-110 opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <span className="text-lg font-medium tracking-wide text-white/50 hover:text-white/90 transition-colors duration-300">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackMarquee;

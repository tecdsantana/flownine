import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NeuralWaveBackground from "@/components/NeuralWaveBackground";
const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('solucoes');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToCalendarMeeting = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('calendar-meeting');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section className="pt-32 md:pt-40 pb-24 md:pb-32 relative overflow-hidden bg-futuristic-gradient">
      <NeuralWaveBackground spacing={30} intensity={0.9} focal={{ x: 0.72, y: 0.3 }} />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.15),transparent_70%)] opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-automato-blue/5 to-transparent blur-3xl"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-automato-gold/20 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 border border-automato-gold/10 rounded-full opacity-10"></div>

      <div className="container mx-auto relative z-10 container-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight max-w-3xl tracking-wider text-white">
              Consultoria de <span className="heading-gradient font-normal">Dados, IA e People Analytics</span> para empresas
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
              Somos o time de Dados e IA para grandes empresas. Da arquitetura à operação, ajudamos a transformar dados em velocidade, eficiência e resultado.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="button-gradient gold-glow text-base tracking-wide flex gap-2" onClick={scrollToCalendarMeeting}>
                AGENDAR DIAGNÓSTICO
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border border-automato-gold/70 text-automato-gold bg-transparent hover:bg-automato-gold/10 hover:gold-glow transition-all text-base tracking-wide" onClick={scrollToSolutions}>
                CONHECER SOLUÇÕES
              </Button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-automato-neon-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">JM</div>
                <div className="w-8 h-8 rounded-full bg-automato-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">KL</div>
                <div className="w-8 h-8 rounded-full bg-automato-dark-blue border-2 border-automato-gold/30 flex items-center justify-center text-xs text-white">RB</div>
                <div className="w-8 h-8 rounded-full bg-automato-black border-2 border-automato-gold/30 flex items-center justify-center text-xs text-automato-gold">+</div>
              </div>
              <p className="ml-4 text-sm text-white/70">+20 empresas já transformaram seus negócios</p>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-automato-blue/50 to-automato-gold/30 rounded-lg blur-md opacity-50"></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
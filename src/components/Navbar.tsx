import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const scrollToCalendarMeeting = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const contactSection = document.getElementById('calendar-meeting');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#calendar-meeting');
    }
  };
  
  return (
    <header className={`w-full py-4 fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-automato-black/95 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between container-padding">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden md:flex space-x-10">
          <a href="#data-ai" onClick={(e) => handleNavClick(e, 'data-ai')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">DATA&AI</a>
          <a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">SERVIÇOS</a>
          <a href="#como-funciona" onClick={(e) => handleNavClick(e, 'como-funciona')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">COMO FUNCIONA</a>
          <a href="#beneficios" onClick={(e) => handleNavClick(e, 'beneficios')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">BENEFÍCIOS</a>
          <a href="#solucoes" onClick={(e) => handleNavClick(e, 'solucoes')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">SOLUÇÕES</a>
          <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">DEPOIMENTOS</a>
          <a href="/blog" className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">BLOG</a>
          <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-white/80 hover:text-automato-gold transition-colors text-sm tracking-wider">CONTATO</a>
        </nav>
        
        <div>
          <Button 
            className="border border-automato-gold text-automato-gold bg-transparent hover:bg-automato-gold/10 hover:gold-glow transition-all duration-300" 
            onClick={scrollToCalendarMeeting}
          >
            AGENDAR DIAGNÓSTICO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

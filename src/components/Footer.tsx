import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return <footer className="bg-futuristic-gradient text-white py-16">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/60 mb-6">
              Consultoria de Dados, IA e People Analytics para empresas. Da arquitetura à operação.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/flownine" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-automato-gold/40 flex items-center justify-center hover:bg-automato-gold/10 hover:border-automato-gold transition-colors" aria-label="LinkedIn da FlowNine">
                <Linkedin className="h-5 w-5 text-automato-gold" />
              </a>
              
              <a href="https://www.instagram.com/flownine.ai/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-automato-gold/40 flex items-center justify-center hover:bg-automato-gold/10 hover:border-automato-gold transition-colors" aria-label="Instagram da FlowNine">
                <svg className="h-5 w-5 text-automato-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-normal text-automato-gold mb-4 tracking-wider">SOLUÇÕES</h4>
            <div className="gold-line mb-6 w-16"></div>
            <ul className="space-y-3">
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="text-white/60 hover:text-automato-gold transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" onClick={(e) => handleNavClick(e, 'como-funciona')} className="text-white/60 hover:text-automato-gold transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" onClick={(e) => handleNavClick(e, 'beneficios')} className="text-white/60 hover:text-automato-gold transition-colors">Benefícios</a></li>
              <li><a href="#solucoes" onClick={(e) => handleNavClick(e, 'solucoes')} className="text-white/60 hover:text-automato-gold transition-colors">Soluções</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-normal text-automato-gold mb-4 tracking-wider">EMPRESA</h4>
            <div className="gold-line mb-6 w-16"></div>
            <ul className="space-y-3">
              <li><a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="text-white/60 hover:text-automato-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#cases" onClick={(e) => handleNavClick(e, 'cases')} className="text-white/60 hover:text-automato-gold transition-colors">Cases de Sucesso</a></li>
              <li><a href="/blog" className="text-white/60 hover:text-automato-gold transition-colors">Blog</a></li>
              <li><a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-white/60 hover:text-automato-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-normal text-automato-gold mb-4 tracking-wider">CONTATO</h4>
            <div className="gold-line mb-6 w-16"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-automato-gold mr-2">•</span>
                <a href="mailto:contato@flownine.com.br" className="text-white/60 hover:text-automato-gold transition-colors">contato@flownine.com.br</a>
              </li>
              <li className="flex items-start">
                <span className="text-automato-gold mr-2">•</span>
                <a href="tel:+5511989399733" className="text-white/60 hover:text-automato-gold transition-colors">(11) 96125-0113</a>
              </li>
              <li className="flex items-start">
                <span className="text-automato-gold mr-2">•</span>
                <span className="text-white/60">Av. Aruanã, 601 - Barueri, SP</span>
              </li>
              <li className="flex items-start">
                <span className="text-automato-gold mr-2">•</span>
                <span className="text-white/60">CNPJ 45.217.293/0001-00</span>
              </li>
            </ul>
            <div className="mt-4">
              
            </div>
          </div>
        </div>
        
        <div className="gold-line my-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} FlowNine. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacidade" onClick={(e) => handleNavClick(e, 'privacidade')} className="text-white/40 hover:text-automato-gold text-sm transition-colors">Política de Privacidade</a>
            <a href="#termos" onClick={(e) => handleNavClick(e, 'termos')} className="text-white/40 hover:text-automato-gold text-sm transition-colors">Termos de Uso</a>
            <a href="#cookies" onClick={(e) => handleNavClick(e, 'cookies')} className="text-white/40 hover:text-automato-gold text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
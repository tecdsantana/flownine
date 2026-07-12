
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
const HowItWorks = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();
  return <section id="como-funciona" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como Funciona</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">A IA otimiza seus gastos, permitindo que sua equipe foque no que realmente importa: as pessoas.</p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Análise & Diagnóstico</h3>
            <p className="text-white/70 mb-6">
              Analisamos seus processos atuais e identificamos oportunidades específicas para implementação de agentes de IA.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Mapeamento completo de processos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Identificação de gargalos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Cálculo de ROI estimado</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Desenvolvimento & Treinamento</h3>
            <p className="text-white/70 mb-6">
              Criamos agentes de IA personalizados que se integram perfeitamente aos seus sistemas existentes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Agentes treinados com seus dados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Integrações com sistemas atuais</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Testes rigorosos de qualidade</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Implementação & Monitoramento</h3>
            <p className="text-white/70 mb-6">
              Garantimos uma transição suave com suporte contínuo e otimizações baseadas em desempenho real.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Implementação sem interrupções</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Dashboard de métricas em tempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Otimização contínua de desempenho</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;

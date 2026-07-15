
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
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Um processo estruturado para transformar dados em decisão — da arquitetura à operação.</p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Diagnóstico & Arquitetura</h3>
            <p className="text-white/70 mb-6">
              Mapeamos sua maturidade de dados, arquitetura atual e processos de negócio para identificar as oportunidades de analytics e IA com maior potencial de impacto.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Diagnóstico de maturidade de dados e governança</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Mapeamento de fontes, qualidade e integrações</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Priorização por potencial de ROI</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Construção & Integração</h3>
            <p className="text-white/70 mb-6">
              Desenvolvemos dashboards, modelos e soluções de IA sob medida, integrados aos seus sistemas e à sua stack de dados existente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Modelagem de dados e pipelines de analytics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Dashboards e modelos treinados com seus dados</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Integrações com sistemas e ferramentas atuais</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="bg-automato-dark-blue/40 p-8 rounded-xl shadow-lg border border-automato-gold/20 hover:gold-glow transition-shadow futuristic-card">
            <div className="h-14 w-14 rounded-full bg-automato-blue/10 flex items-center justify-center mb-6 border border-automato-gold/30">
              <span className="text-2xl font-bold text-automato-gold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Operação & Evolução</h3>
            <p className="text-white/70 mb-6">
              Garantimos a operação contínua da solução, com monitoramento de performance e otimizações baseadas em resultado real de negócio.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Suporte e monitoramento contínuo</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Dashboards de métricas em tempo real</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-automato-gold mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Otimização e evolução baseada em dados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;

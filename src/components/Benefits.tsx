import React from 'react';
import { Clock, TrendingUp, Search, Users, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NeuralWaveBackground from '@/components/NeuralWaveBackground';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Benefits = () => {
  const headingReveal = useScrollReveal<HTMLDivElement>();
  const gridReveal = useScrollReveal<HTMLDivElement>();
  const ctaReveal = useScrollReveal<HTMLDivElement>();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="beneficios" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div ref={headingReveal} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Benefícios de uma Operação Data-Driven</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Dados bem estruturados mudam a forma como sua empresa decide, executa e cresce.
          </p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1-6 cards... keep existing code */}
          {/* Benefit 1 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Clock className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Decisões em Minutos, Não em Dias</h3>
            <p className="text-white/70">
              Relatórios que levavam dias para ficar prontos passam a estar disponíveis em tempo real, liberando sua equipe para decisões estratégicas.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <TrendingUp className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Mais Eficiência Operacional</h3>
            <p className="text-white/70">
              Elimine o retrabalho manual em planilhas e ganhe até 200% de produtividade com pipelines de dados automatizados e confiáveis.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Search className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Dados Confiáveis, Menos Retrabalho</h3>
            <p className="text-white/70">
              Governança e qualidade de dados reduzem inconsistências e eliminam o tempo gasto corrigindo números errados.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Decisões Alinhadas em Toda a Empresa</h3>
            <p className="text-white/70">
              Dashboards e definições únicas de métricas garantem que todas as áreas enxerguem os mesmos números — e cheguem às mesmas conclusões.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Zap className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Escala Sem Aumentar Complexidade</h3>
            <p className="text-white/70">
              Arquiteturas de dados bem desenhadas crescem junto com o seu negócio, sem exigir mais headcount para sustentar a operação.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <CheckCircle className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">ROI Mensurável</h3>
            <p className="text-white/70">
              Cada projeto de dados e IA nasce com metas claras de impacto — e resultado comprovado em menos de 3 meses.
            </p>
          </div>
        </div>

        <div ref={ctaReveal} className="scroll-reveal relative overflow-hidden bg-gradient-to-r from-automato-blue to-automato-dark-blue p-8 md:p-12 rounded-2xl text-white text-center border border-automato-gold/20">
          <NeuralWaveBackground spacing={26} intensity={0.5} focal={{ x: 0.5, y: 0.5 }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Agende uma consulta gratuita e descubra como estruturar seus dados para gerar resultado real.
            </p>
            <Button
              size="lg"
              className="button-gradient gold-glow"
              onClick={scrollToContact}
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

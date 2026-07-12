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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Benefícios das Automações com IA</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-automato-blue to-automato-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Nossas soluções de automação com IA trazem resultados comprovados para empresas de diversos segmentos.
          </p>
        </div>

        <div ref={gridReveal} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1-6 cards... keep existing code */}
          {/* Benefit 1 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Clock className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Economia de Tempo</h3>
            <p className="text-white/70">
              Reduza em até 80% o tempo gasto em tarefas repetitivas, liberando sua equipe para atividades estratégicas.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <TrendingUp className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Aumento de Produtividade</h3>
            <p className="text-white/70">
              Impulsione a eficiência operacional em até 200% com processos automatizados que funcionam 24/7.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Search className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Redução de Erros</h3>
            <p className="text-white/70">
              Minimize erros humanos e inconsistências com processos automatizados de alta precisão.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Experiência do Cliente</h3>
            <p className="text-white/70">
              Ofereça respostas instantâneas e personalizadas para seus clientes, aumentando a satisfação.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <Zap className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Escalabilidade</h3>
            <p className="text-white/70">
              Escale suas operações rapidamente sem a necessidade de contratar mais pessoal para tarefas operacionais.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="p-6 rounded-xl hover:shadow-lg transition-shadow bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card">
            <div className="h-12 w-12 rounded-lg bg-automato-blue/20 flex items-center justify-center mb-5">
              <CheckCircle className="h-6 w-6 text-automato-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">ROI Comprovado</h3>
            <p className="text-white/70">
              Obtenha retorno sobre o investimento em menos de 3 meses com nossas soluções de automação.
            </p>
          </div>
        </div>

        <div ref={ctaReveal} className="scroll-reveal relative overflow-hidden bg-gradient-to-r from-automato-blue to-automato-dark-blue p-8 md:p-12 rounded-2xl text-white text-center border border-automato-gold/20">
          <NeuralWaveBackground spacing={26} intensity={0.5} focal={{ x: 0.5, y: 0.5 }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Agende uma consulta gratuita e descubra como nossos agentes de IA podem automatizar seus processos.
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

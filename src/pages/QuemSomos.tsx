import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';

const stats = [
  { value: '12+', label: 'anos de experiência em dados e analytics' },
  { value: '6', label: 'empresas — de varejo a bancos e fintechs' },
  { value: '20mil+', label: 'colaboradores impactados por soluções de People Analytics' },
  { value: '2h → 5min', label: 'tempo de processamento de dados reduzido no Banco Safra' },
];

const QuemSomos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Quem Somos | FlowNine</title>
        <meta name="description" content="Conheça a história da FlowNine: mais de uma década de experiência em dados, analytics e IA aplicada a negócio, em varejo, bancos e fintechs." />
        <meta property="og:title" content="Quem Somos | FlowNine" />
        <meta property="og:description" content="Conheça a história da FlowNine: mais de uma década de experiência em dados, analytics e IA aplicada a negócio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flownine.com.br/quem-somos" />
        <link rel="canonical" href="https://flownine.com.br/quem-somos" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-automato-black">
        <Navbar />

        <main className="flex-1 pt-24">
          <section className="py-16 container-padding">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Quem <span className="text-automato-gold">Somos</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Uma consultoria nascida da prática, não da teoria.
              </p>
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl pb-8">
            <div className="prose prose-invert max-w-none space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Depois de mais de 10 anos de experiência, passando por várias empresas e segmentos,
                Douglas Santana decidiu empreender e fundou a FlowNine em 2022.
              </p>
              <p>
                A trajetória passou por gigantes do varejo, como o Grupo Pão de Açúcar, pela área
                bancária no Banco Safra, por fintechs como PicPay, Marvin e MDR, e por uma
                multinacional do setor de beleza com mais de 20 mil colaboradores, a Natura. Em cada
                uma dessas empresas, o desafio se repetia: dados dispersos, decisões lentas, e times
                inteiros dependendo de uma única pessoa para entender o que estava acontecendo no
                negócio.
              </p>
              <p>
                Foi ver esse padrão se repetir — em bancos, fintechs, varejo e indústria — que trouxe
                a certeza: o problema nunca foi falta de dado. Foi falta de estrutura, governança e
                gente que soubesse transformar dado bruto em decisão.
              </p>
              <p className="text-white font-semibold">
                A FlowNine nasceu para resolver exatamente isso.
              </p>
              <p>
                Hoje, aplicamos mais de uma década de experiência prática — arquitetura de dados, BI,
                People Analytics e Inteligência Artificial aplicada a negócio — para ajudar empresas
                a sair de relatórios manuais e decisões no feeling para uma operação verdadeiramente
                orientada por dados.
              </p>
              <p>
                Não vendemos tecnologia pela tecnologia. Vendemos clareza, velocidade e resultado —
                construídos com o mesmo rigor técnico que usamos para reduzir o tempo de
                processamento de dados de 2 horas para 5 minutos no Banco Safra, prever risco de
                saída de colaboradores na Natura, ou aumentar em 18 pontos percentuais o alinhamento
                estratégico de metas em uma multinacional de 20 mil pessoas.
              </p>
              <p>
                Esse é o padrão que trazemos para cada projeto: técnico, direto ao ponto, e focado no
                resultado que importa para o seu negócio.
              </p>
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-4xl py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-automato-dark-blue/40 border border-automato-gold/20 futuristic-card"
                >
                  <div className="text-2xl md:text-3xl font-bold text-automato-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vamos estruturar os dados do seu negócio?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Agende um diagnóstico gratuito e descubra por onde começar.
            </p>
            <Link to="/#contato">
              <Button size="lg" className="button-gradient gold-glow text-base tracking-wide">
                AGENDAR DIAGNÓSTICO
              </Button>
            </Link>
          </section>
        </main>

        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default QuemSomos;

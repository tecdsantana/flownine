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

const timeline = [
  {
    period: '2014 – 2016',
    role: 'Data Engineer — BI & Pricing',
    company: 'GPA — Grupo Pão de Açúcar',
    description:
      'Liderou a arquitetura de um banco de dados SQL para todo o grupo, escalando o acesso à informação de 10 para mais de 100 usuários, e construiu ferramentas de precificação que ajudaram a impulsionar cerca de 20% de crescimento em vendas.',
  },
  {
    period: '2016 – 2020',
    role: 'People Analytics Consultant',
    company: 'Banco Safra',
    description:
      'Implementou do zero um banco de dados SQL Server com ETL automatizado, reduzindo o tempo de processamento de 2 horas para 5 minutos, e passou a entregar dashboards executivos com Power BI e SSRS para toda a liderança de RH.',
  },
  {
    period: '2020 – 2022',
    role: 'Senior People Analytics',
    company: 'PicPay',
    description:
      'Foi responsável por democratizar dados de RH em uma das maiores fintechs do Brasil, criando a primeira camada estruturada de reporting de pessoas, além de liderar uma análise de sentimento durante a pandemia para identificar risco de burnout em mais de 1.200 colaboradores.',
  },
  {
    period: '2022 – 2023',
    role: 'Analytics Engineering Manager',
    company: 'Marvin',
    description:
      'Liderou um time de 4 analistas e migrou processos inteiros de planilhas Excel para dashboards em tempo real (Grafana e Power BI), reduzindo o atraso de relatórios de 2 dias para tempo real numa fintech de antecipação de recebíveis.',
  },
  {
    period: '2023 – 2025',
    role: 'People Analytics Coordinator (LATAM)',
    company: 'Natura &Co',
    description:
      'Construiu um modelo preditivo de turnover voluntário, um motor de análise semântica com LLMs para mais de 80 mil metas de colaboradores (elevando a aderência estratégica de 62% para 80%), e ferramentas de redesenho organizacional para uma multinacional com mais de 20 mil pessoas.',
  },
  {
    period: '2025 – atual',
    role: 'Data Analytics Lead',
    company: 'MDR',
    description:
      'Estabeleceu um framework de governança de dados do zero e migrou relatórios manuais para uma arquitetura em tempo real na AWS, sustentando a inteligência comercial e financeira de uma fintech B2B.',
  },
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
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Trajetória</h2>
            <div className="space-y-8">
              {timeline.map((item) => (
                <div
                  key={item.company}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 border-b border-white/10 last:border-b-0"
                >
                  <div className="md:w-40 shrink-0">
                    <span className="text-sm font-mono text-automato-gold">{item.period}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-sm text-automato-gold/80 mb-2">{item.company}</p>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl pb-8">
            <div className="prose prose-invert max-w-none space-y-6 text-white/80 text-lg leading-relaxed">
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

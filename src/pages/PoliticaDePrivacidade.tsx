import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Política de Privacidade | FlowNine</title>
        <meta
          name="description"
          content="Saiba como a FlowNine coleta, usa e protege seus dados pessoais, em conformidade com a LGPD."
        />
        <meta property="og:title" content="Política de Privacidade | FlowNine" />
        <meta
          property="og:description"
          content="Saiba como a FlowNine coleta, usa e protege seus dados pessoais, em conformidade com a LGPD."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flownine.com.br/politica-de-privacidade" />
        <link rel="canonical" href="https://www.flownine.com.br/politica-de-privacidade" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-automato-black">
        <Navbar />

        <main className="flex-1 pt-24">
          <section className="py-16 container-padding">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Política de <span className="text-automato-gold">Privacidade</span>
              </h1>
              <p className="text-white/60 text-lg">Última atualização: setembro de 2026</p>
            </div>
          </section>

          <section className="container mx-auto container-padding max-w-3xl pb-24">
            <div className="prose prose-invert max-w-none space-y-8 text-white/80 text-base leading-relaxed [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-white">
              <p>
                A FlowNine, inscrita no CNPJ 45.217.293/0001-00 ("FlowNine", "nós"), respeita a
                privacidade de quem visita nosso site e entra em contato conosco. Esta Política de
                Privacidade explica quais dados pessoais coletamos, como usamos, com quem
                eventualmente compartilhamos e quais direitos você tem sobre eles, em conformidade
                com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>

              <h2 id="quem-somos">1. Quem somos</h2>
              <p>
                Nome fantasia: FlowNine
                <br />
                CNPJ: 45.217.293/0001-00
                <br />
                Endereço: Av. Aruanã, 601 — Barueri/SP — Brasil
                <br />
                E-mail: contato@flownine.com.br
                <br />
                Site: www.flownine.com.br
              </p>

              <h2 id="dados-coletados">2. Quais dados coletamos</h2>
              <p>
                <strong>2.1 Dados fornecidos por você.</strong> Quando você preenche o formulário de
                contato em nosso site ou fala com a gente pelo WhatsApp, podemos coletar:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome completo</li>
                <li>Nome da empresa</li>
                <li>E-mail corporativo</li>
                <li>Telefone / WhatsApp</li>
                <li>Descrição da sua necessidade ou desafio informado no formulário</li>
              </ul>
              <p>
                <strong>2.2 Dados de interações via WhatsApp.</strong> Quando você entra em contato
                pelo nosso número de WhatsApp, o histórico da conversa fica registrado para fins de
                atendimento e acompanhamento comercial.
              </p>
              <p>
                <strong>2.3 Dados coletados automaticamente.</strong> Utilizamos o Google Tag Manager
                para gerenciar tags de rastreamento em nosso site, incluindo o Google Ads, usado para
                mensurar o desempenho das nossas campanhas de anúncios. Essas ferramentas podem
                coletar automaticamente dados técnicos como endereço IP e localização aproximada,
                tipo de dispositivo, navegador e sistema operacional, páginas visitadas e tempo de
                navegação, e a origem do acesso ao site (por exemplo, se você chegou por um anúncio).
              </p>

              <h2 id="como-usamos">3. Como usamos seus dados</h2>
              <p>Utilizamos os dados pessoais coletados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder às suas solicitações de contato e orçamento (execução pré-contratual / legítimo interesse)</li>
                <li>Qualificar e acompanhar oportunidades comerciais (legítimo interesse)</li>
                <li>Cumprir obrigações legais, contratuais e regulatórias, quando aplicável</li>
              </ul>

              <h2 id="compartilhamento">4. Compartilhamento de dados com terceiros</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
                comerciais independentes dos nossos serviços. Utilizamos os seguintes fornecedores
                como operadores de dados, sob nossa instrução, para viabilizar a operação do site e
                do nosso atendimento:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Supabase (banco de dados e infraestrutura do site e do blog)</li>
                <li>Klaviyo (automação de e-mail e comunicação a partir do formulário de contato)</li>
                <li>Google Tag Manager e Google Ads (gerenciamento de tags e mensuração de campanhas de anúncios)</li>
                <li>WhatsApp Business (atendimento e comunicação comercial)</li>
                <li>Vercel (hospedagem do site)</li>
              </ul>
              <p>
                Podemos também divulgar dados quando exigido por lei, ordem judicial ou autoridade
                competente.
              </p>

              <h2 id="cookies">5. Cookies e tecnologias de rastreamento</h2>
              <p>
                Além dos cookies estritamente necessários ao funcionamento básico do site, utilizamos
                o <strong>Google Tag Manager</strong> para gerenciar tags de rastreamento, incluindo
                cookies do <strong>Google Ads</strong> usados para mensurar a eficácia das nossas
                campanhas de anúncios (por exemplo, saber se um clique em um anúncio resultou em uma
                visita ou contato pelo formulário).
              </p>
              <p>
                Você sempre pode gerenciar ou bloquear cookies diretamente nas configurações do seu
                navegador, ou usar as ferramentas de controle de anúncios do Google, disponíveis em{' '}
                <a
                  href="https://myadcenter.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-automato-gold"
                >
                  myadcenter.google.com
                </a>
                . Bloquear cookies pode impactar algumas funcionalidades do site.
              </p>

              <h2 id="retencao">6. Por quanto tempo armazenamos seus dados</h2>
              <p>
                Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta
                política:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dados de contato comercial: enquanto houver interesse comercial ativo, ou até solicitação de exclusão</li>
                <li>Histórico de conversas via WhatsApp: até 2 anos, para fins de atendimento</li>
                <li>Dados de navegação e cookies do Google Tag Manager/Google Ads: pelo prazo padrão dessas ferramentas, definido pelo Google</li>
                <li>Dados fiscais e contratuais, quando aplicável: conforme prazo mínimo exigido pela legislação brasileira</li>
              </ul>

              <h2 id="direitos">7. Seus direitos como titular de dados</h2>
              <p>Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmação e acesso: saber se tratamos seus dados e ter acesso a eles</li>
                <li>Correção: solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização ou eliminação: solicitar a exclusão de dados desnecessários ou tratados em desconformidade com a LGPD</li>
                <li>Portabilidade: solicitar a transferência dos seus dados a outro fornecedor</li>
                <li>Revogação do consentimento: retirar seu consentimento a qualquer momento</li>
                <li>Oposição: se opor ao tratamento realizado com base em legítimo interesse</li>
                <li>Informação sobre compartilhamento: saber com quais entidades compartilhamos seus dados</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail{' '}
                <a href="mailto:contato@flownine.com.br" className="text-automato-gold">
                  contato@flownine.com.br
                </a>
                . Responderemos sua solicitação em até 15 dias úteis.
              </p>

              <h2 id="seguranca">8. Segurança dos dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados
                pessoais contra acesso não autorizado, perda, destruição ou divulgação indevida,
                incluindo acesso restrito aos dados apenas a colaboradores autorizados e uso de
                infraestrutura com práticas de segurança reconhecidas no mercado. Em caso de
                incidente de segurança que possa acarretar risco relevante aos titulares,
                notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares
                afetados nos prazos previstos em lei.
              </p>

              <h2 id="transferencia">9. Transferência internacional de dados</h2>
              <p>
                Alguns dos fornecedores que utilizamos para operar nossa infraestrutura podem
                processar ou armazenar dados em servidores localizados fora do Brasil. Quando isso
                ocorrer, buscamos garantir que a transferência aconteça com salvaguardas adequadas,
                em conformidade com o artigo 33 da LGPD.
              </p>

              <h2 id="dpo">10. Encarregado de Proteção de Dados (DPO)</h2>
              <p>
                Dúvidas ou solicitações relacionadas ao tratamento dos seus dados pessoais podem ser
                enviadas para{' '}
                <a href="mailto:contato@flownine.com.br" className="text-automato-gold">
                  contato@flownine.com.br
                </a>
                .
              </p>

              <h2 id="alteracoes">11. Alterações nesta política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir
                mudanças nas nossas práticas, nas ferramentas que utilizamos ou na legislação
                aplicável. A data da última atualização estará sempre indicada no topo desta página.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default PoliticaDePrivacidade;

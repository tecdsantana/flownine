import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DataAIPillars from '@/components/DataAIPillars';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CalendarMeeting from '@/components/CalendarMeeting';
import ComparisonTable from '@/components/ComparisonTable';
import ContactForm from '@/components/ContactForm';
import ClientTestimonials from '@/components/ClientTestimonials';
import BtnWhatsappFloat from '@/components/BtnWhatsappFloat';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>FlowNine | Consultoria de Dados, IA e People Analytics</title>
        <meta name="description" content="Consultoria de Dados, IA e People Analytics para empresas. Da arquitetura à operação, ajudamos a transformar dados em velocidade, eficiência e resultado." />
        <meta name="keywords" content="consultoria de dados, inteligência artificial, people analytics, business analytics, agentic AI, GenAI, data governance" />
        <meta property="og:title" content="FlowNine | Consultoria de Dados, IA e People Analytics" />
        <meta property="og:description" content="Consultoria de Dados, IA e People Analytics para empresas. Da arquitetura à operação, ajudamos a transformar dados em velocidade, eficiência e resultado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flownine.com.br/" />
        <link rel="canonical" href="https://flownine.com.br/" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <DataAIPillars />
          <Services />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <CalendarMeeting />
          <ComparisonTable />
          <ContactForm />
          <ClientTestimonials />
        </main>
        <Footer />
      </div>
      <BtnWhatsappFloat />
    </>
  );
};

export default Index;

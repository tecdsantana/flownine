
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
  company: z.string().min(2, { message: "Nome da empresa é obrigatório." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulating sending email
      console.log("Sending form data to contato@flownine.com.br:", data);
      
      // In a real implementation, you would use a service like EmailJS, Formspree or your backend API
      // Since we can't actually send emails from the frontend, we'll simulate a successful submission
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-futuristic-gradient">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6 text-white">Vamos transformar seu negócio <span className="heading-gradient">juntos</span></h2>
            <div className="gold-line mb-8 w-24"></div>
            <p className="text-lg text-white/80 mb-8">
              Preencha o formulário para um diagnóstico gratuito e descubra como estruturar seus dados, dashboards e IA para gerar resultado real no seu negócio.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Análise Gratuita</h3>
                  <p className="text-white/70">
                    Avaliamos sua maturidade de dados e identificamos as oportunidades de analytics e IA com maior potencial de impacto, sem compromisso.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Soluções Personalizadas</h3>
                  <p className="text-white/70">
                    Desenvolvemos arquiteturas de dados, dashboards e soluções de IA sob medida para as necessidades específicas do seu negócio.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full border border-automato-gold/50 flex items-center justify-center mr-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-automato-gold/70"></div>
                </div>
                <div>
                  <h3 className="font-normal text-automato-gold mb-1">Suporte Contínuo</h3>
                  <p className="text-white/70">
                    Oferecemos suporte técnico e otimizações contínuas para garantir resultados duradouros.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="futuristic-card p-8 gold-glow animate-fade-in relative">
              <div className="klaviyo-form-SpJXJg"></div>

              <p className="text-xs text-white/50 mt-4 text-center">
                Ao enviar este formulário, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

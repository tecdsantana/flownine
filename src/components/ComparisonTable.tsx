
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section id="comparacao" className="section-padding bg-automato-black">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Compare as suas Opções</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Descubra por que a FlowNine é a escolha mais inteligente para automatizar seus processos de negócio
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full border-collapse" role="table" aria-label="Comparação entre FlowNine e outras opções">
            <TableHeader className="bg-automato-dark-blue/50">
              <TableRow className="border-b border-automato-gold/20">
                <TableHead className="w-1/5 py-6 text-white/80" scope="col">Critério</TableHead>
                <TableHead className="w-1/5 py-6 text-white/80" scope="col">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold text-automato-gold">
                      <span className="heading-gradient">FlowNine</span>
                    </div>
                    <div className="rounded-full bg-automato-blue/10 p-2 border border-automato-gold/30" aria-label="Vantagem">
                      <Check className="h-6 w-6 text-automato-gold" aria-hidden="true" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6 text-white/80" scope="col">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold text-white">Freelancers</div>
                    <div className="rounded-full bg-red-900/20 p-2 border border-red-500/30" aria-label="Desvantagem">
                      <X className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6 text-white/80" scope="col">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold text-white">In-house</div>
                    <div className="rounded-full bg-red-900/20 p-2 border border-red-500/30" aria-label="Desvantagem">
                      <X className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-1/5 py-6 text-white/80" scope="col">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 font-bold text-white">Outras Agências</div>
                    <div className="rounded-full bg-red-900/20 p-2 border border-red-500/30" aria-label="Desvantagem">
                      <X className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-automato-dark-blue/30">
              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Tempo para contratar</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Poucas Horas</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">5-7 dias</TableCell>
                <TableCell className="text-center text-white/70">Meses</TableCell>
                <TableCell className="text-center text-white/70">2-3 Semanas</TableCell>
              </TableRow>
              
              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Nível de Experiência</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Nível Sênior</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Iniciante ou<br />Nível Junior
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Boa (Cruze os<br />dedos)
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Confie na<br />Sorte
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Comunicação</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Diária</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Inexistente</TableCell>
                <TableCell className="text-center text-white/70">Muitas falhas</TableCell>
                <TableCell className="text-center text-white/70">Fantasma</TableCell>
              </TableRow>
              
              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Primeira Entrega</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">2-3 dias</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Várias Semanas</TableCell>
                <TableCell className="text-center text-white/70">6-7 Semanas</TableCell>
                <TableCell className="text-center text-white/70">2-3 Meses</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="font-medium py-6 text-white" scope="row">Rescisão</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Um clique + 0 R$</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Demorada</TableCell>
                <TableCell className="text-center text-white/70">
                  Pesadelo + Dores<br />de Cabeça
                </TableCell>
                <TableCell className="text-center text-white/70">Demorada</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="max-w-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Por que escolher a FlowNine?</h3>
            <p className="text-white/70">
              Somos o time de dados, analytics e IA que grandes empresas chamam para transformar
              informação dispersa em decisão rápida — com arquitetura sólida, governança e o mesmo
              rigor técnico que já reduziu relatórios de horas para minutos e elevou resultados
              estratégicos em operações de milhares de pessoas. Sem letra miúda: conhecimento que
              fica com o seu time, não com o fornecedor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

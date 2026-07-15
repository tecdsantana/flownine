
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
            Descubra por que a FlowNine é a escolha mais inteligente para estruturar dados, analytics e IA na sua empresa
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
                <TableCell className="font-medium py-6 text-white" scope="row">Tempo para gerar valor</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Semanas, não meses</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Depende da disponibilidade</TableCell>
                <TableCell className="text-center text-white/70">
                  Meses de contratação<br />e ramp-up
                </TableCell>
                <TableCell className="text-center text-white/70">Trimestres</TableCell>
              </TableRow>

              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Senioridade do time</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">
                      Especialistas seniores, ponta a ponta
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Variável, sem histórico<br />validado
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Depende de quem<br />você contratar
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Squads júnior com<br />supervisão remota
                </TableCell>
              </TableRow>

              <TableRow className="border-b border-automato-gold/10">
                <TableCell className="font-medium py-6 text-white" scope="row">Comunicação</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">Direta e contínua</span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Inconsistente</TableCell>
                <TableCell className="text-center text-white/70">
                  Sujeita a prioridades<br />internas
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Reportes formais<br />e espaçados
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium py-6 text-white" scope="row">Conhecimento gerado</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <span className="bg-automato-blue text-white text-sm px-3 py-1 rounded-full border border-automato-gold/30">
                      Documentado e transferido ao seu time
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-white/70">Raramente documentado</TableCell>
                <TableCell className="text-center text-white/70">
                  Depende do processo<br />interno
                </TableCell>
                <TableCell className="text-center text-white/70">
                  Fica retido com<br />o fornecedor
                </TableCell>
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

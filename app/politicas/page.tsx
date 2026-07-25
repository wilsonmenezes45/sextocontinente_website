"use client";
import React from 'react';
import Link from 'next/link';

export default function PoliticasEmpresaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* Header com o logotipo na esquerda e o botão de voltar no canto oposto (direita) */}
      <nav className="p-6 max-w-4xl mx-auto flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-lg font-black tracking-wider uppercase text-slate-900">
          Sexto<span className="text-orange-500">Continente</span>
        </Link>
        
        <Link href="/" className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-orange-600 transition">
          ← Voltar ao Início
        </Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
            Políticas Internas
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-2">
            Políticas da Empresa
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: 10 de Julho de 2026
          </p>
        </div>

        <div className="w-full h-px bg-slate-200" />

        {/* Secções das Políticas */}
        <div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Compromisso de Transparência</h2>
            <p>
              Na Sexto Continente, comprometemo-nos a apresentar valores claros e sem taxas ocultas na cotação de passagens, pacotes e serviços de assessoria de vistos. Todas as taxas administrativas são comunicadas previamente ao cliente antes da validação final do pagamento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Política de Privacidade e Dados</h2>
            <p>
              Os dados recolhidos para a emissão de bilhetes e reservas de alojamento (como cópias de passaportes, passagens anteriores e dados de contacto) são utilizados estritamente para os fins contratuais e partilhados apenas com os fornecedores oficiais da sua viagem, em total conformidade com as boas práticas de proteção de dados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Atendimento Ético e Inclusivo</h2>
            <p>
              Promovemos um ambiente de atendimento baseado no respeito mútuo. A nossa equipa nas agências de Benguela e Luanda está instruída para prestar suporte equitativo a todos os cidadãos, rejeitando qualquer tipo de discriminação com base na nacionalidade, género, religião ou origem.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Tratamento de Reclamações e Críticas</h2>
            <p>
              Toda e qualquer insatisfação registada através do nosso canal <em>ReclamaAqui-Blog</em> ou diretamente nas nossas instalações é encaminhada para a direção interna no prazo máximo de 48 horas úteis, visando uma resolução célere e justa para o passageiro.
            </p>
          </section>

        </div>

        {/* Rodapé de Encerramento */}
        <div className="pt-8 border-t border-slate-100 text-center space-y-4">
          <p className="text-xs text-slate-400">
            Precisa de esclarecimentos sobre as nossas diretrizes corporativas?
          </p>
          <Link href="/contactos" className="inline-block border border-slate-300 hover:border-slate-900 text-slate-900 text-xs font-bold py-2.5 px-6 rounded-full transition">
            Falar com a Administração
          </Link>
        </div>

      </main>
    </div>
  );
}
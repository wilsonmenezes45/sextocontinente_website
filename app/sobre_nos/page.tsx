"use client";

import React from 'react';
import Menu from "@/app/components/menu";
import Footer from "@/app/components/rodape";

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Menu />
      
      <main className="w-full text-slate-900 font-sans antialiased pt-2 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* ================= BLOCO 1: HERO & METRICAS ================= */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Texto Hero */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-orange-500 tracking-wider">
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-600 md:text-slate-600 tracking-tight leading-none">
                  Criando Excelência <br />
                  Em Cada Viagem
                </h1>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  Na Sexto Continente, acreditamos no poder da dedicação personalizada para alcançar resultados excecionais. Com uma equipa de profissionais qualificados e um compromisso com a qualidade, trabalhamos lado a lado com os nossos clientes para dar vida às suas férias de sonho ou deslocações corporativas.
                </p>
              </div>

              {/* Imagem Direita com Selo Circular Giratório */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
                <div className="w-full max-w-xl h-[400px] rounded-[32px] overflow-hidden shadow-md bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000" 
                    alt="Sexto Continente Aviação" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Distintivo Circular Estilo Emblema */}
                <div className="absolute -bottom-6 left-6 md:left-12 w-28 h-28 bg-white border border-slate-100 rounded-full shadow-xl flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full border border-dashed border-slate-200 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                    <span className="absolute text-[9px] font-bold tracking-widest text-slate-400 uppercase">Sexto • Continente • </span>
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      ✈️
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manifesto Centralizado & Grelha de Números */}
            <div className="space-y-12 text-center pt-8">
              <p className="text-xl md:text-2xl font-bold text-slate-800 max-w-4xl mx-auto leading-relaxed">
                Na Sexto Continente, estamos empenhados em revolucionar o setor do turismo com soluções inovadoras, sustentáveis e eficientes. Combinamos <span className="text-slate-400 font-medium">perícia especializada e abordagens centradas no cliente</span> para aproximar os seus objetivos.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-6">
                <div>
                  <p className="text-4xl font-black text-slate-900">150+</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Destinos Concluídos</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900">100+</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Membros na Equipa</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900">200+</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Avaliações Positivas</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900">30</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Prémios de Qualidade</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BLOCO 2: MISSÃO & VISÃO ================= */}
          <div className="space-y-28">
            {/* Missão */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
                <div className="w-[80%] aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1517840901100-8179e982ca34?q=80&w=600" alt="Aeroporto" className="w-full h-full object-cover" />
                </div>
                <div className="absolute right-0 top-1/4 w-[45%] aspect-[3/4] rounded-[20px] overflow-hidden border-4 border-white shadow-xl bg-slate-200 hidden sm:block">
                  <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=500" alt="Planeamento" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-3xl font-black text-slate-900">A Nossa Missão</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Prestar serviços turísticos e corporativos excecionais que superem as expectativas através da inovação, qualidade e integridade. O nosso objetivo é construir parcerias duradouras que valorizem as comunidades, inspirando a descoberta de novas rotas.
                </p>
                <ul className="space-y-2 text-sm font-bold text-slate-700">
                  <li className="flex items-center gap-2 text-emerald-600">✓ <span className="text-slate-700">Promover o Crescimento Sustentável</span></li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ <span className="text-slate-700">Inovar Roteiros para o Futuro</span></li>
                  <li className="flex items-center gap-2 text-emerald-600">✓ <span className="text-slate-700">Abordagem Centrada no Passageiro</span></li>
                </ul>
              </div>
            </div>

            {/* Visão */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
                <h2 className="text-3xl font-black text-slate-900">A Nossa Visão</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A nossa visão passa por redefinir o futuro do turismo através da modernidade, inovação digital e excelência de serviço. Pretendemos criar roteiros que não só inspirem, mas que contribuam para a ligação intercultural global.
                </p>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center lg:justify-end">
                <div className="w-[80%] aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=600" alt="Horizonte" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= BLOCO 3: COMO TRABALHAMOS ================= */}
          <div className="space-y-12 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-slate-900">Como Nós Trabalhamos</h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Seguimos um processo transparente e colaborativo, assegurando uma comunicação clara em cada etapa da sua viagem.
              </p>
            </div>
            <div className="w-full max-w-5xl mx-auto h-[450px] rounded-[32px] overflow-hidden relative shadow-lg bg-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1200" 
                alt="Vídeo Placeholder" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 m-auto w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-all cursor-pointer">
                <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ================= BLOCO 4: EQUIPA ================= */}
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-black text-slate-900">Construindo Excelência em Equipa</h2>
                <p className="text-sm text-slate-500 max-w-lg">
                  O nosso sucesso baseia-se na dedicação e perícia dos nossos especialistas em itinerários.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { nome: "Jane Cooper", cargo: "Consultora de Viagens" },
                { nome: "Darlene Robertson", cargo: "Gestora de Vistos" },
                { nome: "Darrell Steward", cargo: "Apoio Corporativo" },
                { nome: "Jenny Wilson", cargo: "Operações Internacionais" },
              ].map((membro, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-full aspect-[4/5] rounded-[24px] bg-slate-100 overflow-hidden relative border border-slate-100">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + (index * 100000)}?q=80&w=400&auto=format&fit=crop`}
                      alt={membro.nome} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{membro.nome}</h4>
                    <p className="text-xs text-slate-400 font-semibold mt-0.5">{membro.cargo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
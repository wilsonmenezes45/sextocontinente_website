"use-client";
import { 
  Shield,FileText,Globe 
} from 'lucide-react';

export default function Seccao_1() {
  return (
      <section className="py-8 px-4 md:px-12 max-w-7xl mx-auto relative">
        {/* Elemento de design fluido ao fundo */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#9AD1D4]/20 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800">Trate tudo connosco</h2>
          <p className="text-slate-500 mt-2 font-medium">Em poucos minutos todo teu processo de emigração</p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Passaporte */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#9AD1D4]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-20 h-28 bg-[#1E3A8A] rounded-xl shadow-lg flex flex-col items-center justify-between p-3 text-white mb-6 transform group-hover:rotate-3 transition-transform">
              <div className="w-6 h-6 rounded-full border border-yellow-400/40 flex items-center justify-center text-[8px] font-bold text-yellow-400">★</div>
              <FileText className="w-8 h-8 text-slate-200" />
              <span className="text-[7px] uppercase tracking-widest font-bold opacity-80">Passaporte</span>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Passaporte</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              Assessoria para inscrição e agendamento de passaportes nacionais.
            </p>
            <button className="bg-[#FCD34D]/40 text-amber-900 font-bold text-xs px-6 py-2.5 rounded-full hover:bg-[#FCD34D] transition">
              Saber Mais
            </button>
          </div>

          {/* Card 2: Vistos */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-slate-100 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-24 h-24 bg-amber-50 rounded-2xl flex items-center justify-center text-[#E67E22] mb-6 shadow-inner">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Vistos</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              Assessoria completa para a submissão e acompanhamento de processos de vistos.
            </p>
            <button className="bg-[#E67E22] text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-[#d35400] transition shadow-md shadow-orange-500/10">
              Saber Mais
            </button>
          </div>

          {/* Card 3: Nacionalidade */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#9AD1D4]/10 rounded-full"></div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-400 via-emerald-400 to-yellow-300 p-[3px] shadow-md mb-6">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-slate-600 animate-spin-slow" />
              </div>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Nacionalidade</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
              Assessoria especializada para a aquisição de processos de dupla nacionalidade.
            </p>
            <button className="bg-[#FCD34D]/40 text-amber-900 font-bold text-xs px-6 py-2.5 rounded-full hover:bg-[#FCD34D] transition">
              Saber Mais
            </button>
          </div>

        </div>
      </section>
  );
}
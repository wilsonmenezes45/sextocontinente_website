"use-client";
import { 
  Plane, Calendar,Globe,ArrowRight 
} from 'lucide-react';

export default function Seccao_2() {
    return(  
    <section className="py-16 bg-slate-50 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-slate-800">Agendamentos</h2>
                    <p className="text-[#E67E22] font-semibold text-lg mt-1">Para atos consulares</p>
                    <p className="text-slate-400 text-xs font-medium uppercase mt-1 tracking-wider">Obtenha mais de nós</p>
                </div>
                <div className="flex gap-2 bg-white p-1.5 rounded-full shadow-inner border border-slate-100">
                    <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold">Agendamentos</button>
                    <button className="text-slate-600 hover:bg-slate-100 px-5 py-2 rounded-full text-xs font-semibold transition">Pacote Turístico</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[320px] group">
                    <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Globe className="w-64 h-64" />
                    </div>
                    <div>
                        <span className="bg-[#E67E22] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Destaque</span>
                        <h3 className="text-2xl font-bold mt-4 mb-2">Vistos Nacionais</h3>
                        <p className="text-slate-300 text-sm max-w-xs leading-relaxed">
                            Agendamento simplificado para vistos nacionais de forma rápida e segura.
                        </p>
                    </div>
                    <div className="mt-8">
                        <button className="bg-[#E67E22] hover:bg-[#d35400] text-white font-bold text-xs px-6 py-3 rounded-xl transition flex items-center gap-2">
                            Saber Mais <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-md relative overflow-hidden min-h-[320px] group">
                    <div className="absolute right-6 top-6 bg-[#9AD1D4]/10 text-[#9AD1D4] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                        Consular
                    </div>
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#E67E22] flex items-center justify-center mb-6">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Agendamento</h3>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Agendamento especializado focado para <span className="text-[#E67E22] font-semibold underline">atos consulares</span> diretos.
                        </p>
                    </div>
                    <div className="mt-8">
                        <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs px-6 py-3 rounded-xl transition">
                            Saber Mais
                        </button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center gap-2 my-12 text-slate-300">
                <div className="h-[1px] w-24 bg-slate-200"></div>
                <Plane className="w-4 h-4 transform rotate-90 text-slate-400" />
                <div className="h-[1px] w-24 bg-slate-200"></div>
            </div>

        </div>
    </section>
  );
}
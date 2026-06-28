'use-client';
import Image from 'next/image';
// import imageforplane from '@/public/aviao_frente.svg';
import imageforplane from '@/public/planeforbanner.svg';
import { useState } from "react";
import { 
  Search, Plane, Calendar, Phone, ChevronDown,
} from 'lucide-react';

export default function Markfast() {
    const [abaAtiva, setAbaAtiva] = useState("marcacao");
  return (
    <>
    <div className="relative -mt-20 w-full h-48 md:h-64 my-6 flex items-center justify-center">
        <Image src={imageforplane} className='w-260' alt='' />
    </div>
    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-500/80 p-4 border border-slate-100 relative z-20 -mt-8">
        <div className="flex flex-wrap gap-2 mb-4 border-b border-slate-100 pb-3">
            <button className={`flex items-center gap-2 text-slate-600 hover:bg-slate-900 px-4 py-2 rounded-full text-xs font-semibold shadow-sm ${
                abaAtiva === "marcacao"
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-transparent text-slate-600"
            }`} onClick={() => setAbaAtiva("marcacao")}>
                <Calendar className="w-3.5 h-3.5" /> Marcação
            </button>

            <button className={`flex items-center gap-2 text-slate-600 hover:bg-slate-900 px-4 shadow-sm py-2 rounded-full text-xs font-semibold transition ${
                abaAtiva === "voos"
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-transparent text-slate-600"
            }`} onClick={() => setAbaAtiva("voos")}>
                <Plane className="w-3.5 h-3.5" /> Reservar Voos
            </button>

            <button className={`flex items-center gap-2 text-slate-600 hover:bg-slate-900 px-4 shadow-sm py-2 rounded-full text-xs font-semibold transition ${
                abaAtiva === "contacto"
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-transparent text-slate-600"
            }`} onClick={() => setAbaAtiva("contacto")}>
                <Phone className="w-3.5 h-3.5" /> Deixar Contacto
            </button>
        </div>
        {abaAtiva === "marcacao" && (
        <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative w-full flex-1">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 shadow-sm py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20">
                    <option>Selecionar tipo de serviço...</option>
                    <option>Assessoria de Passaporte</option>
                    <option>Processo de Vistos</option>
                    <option>Nacionalidade</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button className="w-full md:w-auto bg-[#E67E22] text-white px-8 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#d35400] transition whitespace-nowrap shadow-md shadow-orange-500/20">
                Marcar <Search className="w-4 h-4" />
            </button>
        </div>
        )}
        {abaAtiva === "voos" && (
        <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative w-full flex-1">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20">
                    <option>Cidade onde estou...</option>
                    <option>Assessoria de Passaporte</option>
                    <option>Processo de Vistos</option>
                    <option>Nacionalidade</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative w-full flex-1">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20">
                    <option>Cidade de destino...</option>
                    <option>Assessoria de Passaporte</option>
                    <option>Processo de Vistos</option>
                    <option>Nacionalidade</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative w-full flex-1">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20">
                    <option>Data de partida...</option>
                    <option>Assessoria de Passaporte</option>
                    <option>Processo de Vistos</option>
                    <option>Nacionalidade</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button className="w-full md:w-auto bg-[#E67E22] text-white px-8 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#d35400] transition whitespace-nowrap shadow-md shadow-orange-500/20">
                Marcar <Search className="w-4 h-4" />
            </button>
        </div>
        )}
        {abaAtiva === "contacto" && (
        <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative w-full flex-1">
                <select className="w-25 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20">
                    <option>Selecionar tipo de serviço...</option>
                    <option>Assessoria de Passaporte</option>
                    <option>Processo de Vistos</option>
                    <option>Nacionalidade</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative w-full flex-1">
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20" />
            </div>
            <div className="relative w-full flex-1">
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#E67E22]/20" />
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <button className="w-full md:w-auto bg-[#E67E22] text-white px-8 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#d35400] transition whitespace-nowrap shadow-md shadow-orange-500/20">
                Marcar <Search className="w-4 h-4" />
            </button>
        </div>
        )}

    </div>
    </>
  );
}
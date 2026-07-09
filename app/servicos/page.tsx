"use client";
import Menu from '@/app/components/menu';
import "@/app/meus_estilos.css";
import Rodape from '@/app/components/rodape';
 import { 
   CalendarDays
 } from 'lucide-react';
export default function Servicos() {
  return (
    <>
      <div className="h-100 bg-[#4C4D4D] text-slate-800 font-sans">
        <header className="relative backgroudServicos pt-6 pb-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Menu */}
            <Menu />
            {/* Hero Content */}
            <div className="text-left mt-36 max-w-5xl mx-auto relative z-10">
              <h1 className="text-2xl md:text-5xl font-extrabold text-[#4B4100] tracking-tight leading-tight mb-3">
                Nossos serviços
              </h1>
              <div className="w-180 -ml-4">
                <div className="relative w-full max-w-3xl">
                  <input
                    type="text"
                    placeholder="Pesquisa os nossos serviços..."
                    className="w-full h-16 rounded-full border-1 border-[#4B4100] bg-white px-6 pr-36 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D88B1C]"
                  />

                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#D88B1C] px-6 py-3 text-white font-semibold transition hover:bg-[#b97310]">
                    Pesquisar
                  </button>
                </div>
              </div>
              <div className="flex flex-row text-xl md:text-xl font-light mt-2 text-[#4B4100]">
                <div className="bg-white rounded-full flex flex-row p-1">
                  <CalendarDays />
                  <p>Albummmm</p>
                </div>
                <div className="bg-white rounded-full flex flex-row p-1 ml-4">
                  <CalendarDays />
                  <p>Albummmm</p>
                </div>
                <div className="bg-white rounded-full flex flex-row p-1 ml-4">
                  <CalendarDays />
                  <p>Albummmm</p>
                </div>
              </div>

            </div>
          </div>
        </header>
      </div>
      {/* <Rodape /> */}
    </>

  );
}
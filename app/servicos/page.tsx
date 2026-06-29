"use client";
import Menu from '@/app/components/menu';
import Rodape from '@/app/components/rodape';

export default function Servicos() {
  return (
    <>
    <div className="h-100 bg-[#4C4D4D] text-slate-800 font-sans">
      <header className="relative bg-gradient-to-b from-[#9AD1D4]/40 via-[#50AFEA]/10 pt-6 pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Menu */}
          <Menu/>
          {/* Hero Content */}
          <div className="text-left mt-46 max-w-5xl mx-auto relative z-10">
            <h1 className="text-2xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Nossos serviços
            </h1>
            <p className="text-xl md:text-2xl font-light text-white mt-4">
              Trate tudo connosco
            </p>
          </div>
          </div>
      </header>
    <div className="h-200">
        <h1>Teste</h1>
    </div>
    </div>
    {/* <Rodape /> */}
    </>

    ); 
}
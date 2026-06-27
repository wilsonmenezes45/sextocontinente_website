"use client";
import Menu from '@/app/components/menu';
import Markfast from '@/app/components/markfast';
import Seccao_1 from '@/app/components/seccao_1';
import Seccao_2 from '@/app/components/seccao_2';
import Seccao_3 from '@/app/components/seccao_3';
import Seccao_4 from '@/app/components/seccao_4';
import Rodape from '@/app/components/rodape';

export default function SextoContinenteHome() {
  return (
    <div className="min-h-screen bg-[#F4F9F9] text-slate-800 font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION & NAVBAR */}
      <header className="relative bg-gradient-to-b from-[#9AD1D4]/40 via-[#50AFEA]/10 to-transparent pt-6 pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Menu */}
          <Menu/>
          {/* Hero Content */}
          <div className="text-center mt-16 max-w-3xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Todo seu processo de viagem facilitado <span className="text-[#E67E22]">Aqui!</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-600 mt-4">
              Trate tudo connosco
            </p>
          </div>
          <Markfast/>
        </div>
      </header>
      {/* 2. SECTION: TRATE TUDO CONNOSCO */}
      <Seccao_1/>
      {/* 3. SECTION: AGENDAMENTOS */}
      <Seccao_2 />
      {/* 4. SECTION: APLICATIVO */}
      <Seccao_3 />

      {/* 6. SECTION: REDE DE APOIO */}
      <Seccao_4 />
      {/* 7. FOOTER */}
      <Rodape/>
    </div>
  );
}
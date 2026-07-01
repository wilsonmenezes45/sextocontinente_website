// "use client";
// import Menu from '@/app/components/menu';
// import Markfast from '@/app/components/markfast';
// import Seccao_1 from '@/app/components/seccao_1';
// import Seccao_2 from '@/app/components/seccao_2';
// import Seccao_3 from '@/app/components/seccao_3';
// import Seccao_4 from '@/app/components/seccao_4';
// import Rodape from '@/app/components/rodape';

// export default function SextoContinenteHome() {
//   return (
//     <div className="min-h-screen bg-[#F4F9F9] text-slate-800 font-sans antialiased overflow-x-hidden">
      
//       {/* 1. HERO SECTION & NAVBAR */}
//       <header className="relative bg-gradient-to-b from-[#9AD1D4]/40 via-[#50AFEA]/10 to-transparent pt-6 pb-20 px-4 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Menu */}
//           <Menu/>
//           {/* Hero Content */}
//           <div className="text-center mt-16 max-w-3xl mx-auto relative z-10">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
//               Todo seu processo de viagem facilitado <span className="text-[#E67E22]">Aqui!</span>
//             </h1>
//             <p className="text-xl md:text-2xl font-light text-slate-600 mt-4">
//               Trate tudo connosco
//             </p>
//           </div>
//           <Markfast/>
//         </div>
//       </header>
//       {/* 2. SECTION: TRATE TUDO CONNOSCO */}
//       <Seccao_1/>
//       {/* 3. SECTION: AGENDAMENTOS */}
//       <Seccao_2 />
//       {/* 4. SECTION: APLICATIVO */}
//       <Seccao_3 />

//       {/* 6. SECTION: REDE DE APOIO */}
//       <Seccao_4 />
//       {/* 7. FOOTER */}
//       <Rodape/>
//     </div>
//   );
// }

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import logotipo from '@/public/logotipoPrincipal.svg';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">

      {/* Fundo */}
      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-orange-500 via-orange-300 to-transparent opacity-80"></div>

      {/* Conteúdo */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">

        {/* Logo */}
        <Image
          src={logotipo}
          alt="Sexto Continente"
          width={500}
          height={200}
          priority
          className="w-[320px] md:w-[520px]"
        />

        {/* Texto */}
        <h1 className="mt-10 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Estamos a construir algo incrível!
        </h1>

        <div className="mt-4 h-1 w-24 rounded-full bg-orange-500"></div>

        <p className="mt-6 max-w-2xl text-center text-lg text-gray-600">
          O nosso website está em construção para oferecer uma experiência
          moderna e intuitiva. Muito em breve estaremos online para ajudá-lo a
          descobrir novas oportunidades.
        </p>

        {/* Card */}
        <div className="mt-12 flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl border border-orange-100 bg-white/80 p-8 shadow-2xl backdrop-blur-lg md:flex-row">

          <div className="rounded-full bg-orange-100 p-6">
            <CalendarDays
              size={70}
              className="text-orange-500"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              Data de Lançamento
            </p>

            <h2 className="mt-2 text-5xl font-extrabold text-orange-600">
              30.07.2026
            </h2>

            <p className="mt-3 text-gray-500">
              Marque esta data no seu calendário.
            </p>
          </div>

        </div>

        {/* Rodapé */}
        <div className="mt-14 text-center">

          <h3 className="text-3xl font-bold text-gray-800">
            Obrigado pela sua paciência.
          </h3>

          <p className="mt-2 text-gray-500">
            Algo extraordinário está a caminho.
          </p>

        </div>

      </section>

      {/* Ondas */}
      <svg
        className="absolute bottom-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fb923c"
          fillOpacity="1"
          d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,256C1120,256,1280,192,1360,160L1440,128L1440,320L0,320Z"
        />
      </svg>

    </main>
  );
}
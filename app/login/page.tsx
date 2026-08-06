"use client";
import Link from 'next/link';
// import Rodape from '@/app/components/rodape';
import Image from 'next/image';
import Backgroud_ceu from '@/public/fundodoceu.svg';
import "@/app/meus_estilos.css";
import { useEffect } from "react";
import {
  ChevronDown
} from 'lucide-react';
export default function Login() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("pagina-login");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row alturadoconteudo">
        {/* Esquerda */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 sm:none">
          {/* Imagem */}
          <Image src={Backgroud_ceu} alt="" className='object-cover' />
        </div>

        {/* Direita */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center -mt-30 py-5 lg:py-0">
          <div className="w-full max-w-md px-6">
            <div className="flex rounded-full items-center px-10 py-4 justify-between bg-white -mt-20 backdrop-blur ">
              <Link href="/" className="text-[#E67E22] hover:opacity-80 transition font-light estilounicolg">Início</Link>
              <Link href="/servicos" className="hover:text-[#E67E22] transition flex font-light estilounicolg2">Serviços<ChevronDown className="text-slate-400 font-light w-5 " /></Link>
              <Link href="/sobre_nos" className="hover:text-[#E67E22] transition font-light">Sobre Nós</Link>
              <Link href="/contactos" className="hover:text-[#E67E22] transition font-light">Contactos</Link>
            </div>
            {/* Título */}
            <div className="text-left mt-5">
              <h1 className="text-4xl font-bold text-[#c87419]">
                Login
              </h1>

              <p className="text-[#c87419] mt-2 text-sm">
                Um Sexto Continente com novos horizontes, faça parte.
              </p>
            </div>

            {/* Formulário */}
            <form className="mt-2 space-y-6">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#c87419] mb-2">
                  E-mail ou Código de utilizador
                </label>

                <input
                  type="text"
                  placeholder="Digite o seu e-mail..."
                  className="w-full rounded-md border border-[#c87419] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87419]"
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-sm font-medium text-[#c87419] mb-2">
                  Senha
                </label>

                <input
                  type="password"
                  placeholder="Digite a sua senha..."
                  className="w-full rounded-md border border-[#c87419] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87419]"
                />
              </div>

              {/* Botão */}
              <button
                className="w-full rounded-full bg-[#d27b1f] py-3 font-semibold text-white hover:bg-[#b96d1b] transition"
              >
                Entrar
              </button>

              {/* Separador */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#e6c49a]" />

                <span className="text-xs text-[#c87419] whitespace-nowrap">
                  OU ENTRE COM SUA CONTA
                </span>

                <div className="flex-1 h-px bg-[#e6c49a]" />
              </div>

              {/* Redes sociais */}
              <div className="grid grid-cols-full gap-4">
                <div className="space-y-3 mb-5">
                  <button className="w-full flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-50 transition px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
                    Registar com o Google
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
"use client";
import MenuLogin from '@/app/components/menulogin';
// import Rodape from '@/app/components/rodape';
import Image from 'next/image';
import Backgroud_ceu from '@/public/fundodoceu.svg';
import "@/app/meus_estilos.css";
import { useEffect } from "react";
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
      <MenuLogin />
      <div className="min-h-screen flex flex-col lg:flex-row alturadoconteudo">
        {/* Esquerda */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 md:none">
          {/* Imagem */}
          <Image src={Backgroud_ceu} alt="" className='object-cover -mt-26' />
        </div>

        {/* Direita */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex items-center justify-center -mt-40 py-5 lg:py-0">

          <div className="w-full max-w-md px-6">

            {/* Título */}
            <div className="text-left">
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
              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  className="border rounded-md py-3 hover:bg-gray-100 transition"
                >
                  <i className="fa-brands fa-google mr-2"></i>
                  Google
                </button>

                <button
                  type="button"
                  className="bg-black text-white rounded-md py-3 hover:bg-neutral-800 transition"
                >
                  <i className="fa-brands fa-apple mr-2"></i>
                  Apple
                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </>
  );
}
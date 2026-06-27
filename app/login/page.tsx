"use-client";
import MenuLogin from '@/app/components/menulogin';
// import Rodape from '@/app/components/rodape';
import Image from 'next/image';
import Backgroud_ceu from '@/public/fundodoceu.svg';
import "@/app/meus_estilos.css";

export default function Login() {
  return (
    <>
      <MenuLogin />
      <section className='flex flex-row gap-2 w-full font-sans antialiased from-[#9AD1D4]/40 via-[#50AFEA]/10 pt-6 '>
        <div className="flex-6 h-200 -mt-30">
          <Image src={Backgroud_ceu} alt="" />
        </div>
        <div className="flex-6 ">
          <h1 className="text-3xl ml-15  font-semibold text-[#c87419]">Login</h1>
          <p className="text-[#c87419] ml-15  mt-1 text-sm">
            Um Sexto Continente com novos horizontes, faça parte
          </p>

          <form className="flex-4 mt-8 ml-15 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#c87419] font-medium mb-1 text-sm">
                E-mail ou Codigo-usuario
              </label>
              <input
                type="text"
                placeholder="Inserir o email ou codigo de usuario..."
                className="w-full border border-[#c87419] px-3 py-2 text-[#c87419] text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c87419]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#c87419] font-medium mb-1 text-sm">
                Senha
              </label>
              <input
                type="password"
                placeholder="Inserir senha para acesso..."
                className="w-full border border-[#c87419] text-[#c87419] px-3 py-2 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c87419]" itemType="password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#d27b1f] hover:bg-[#b66b1a] text-white text-sm font-semibold py-2 rounded-full transition"
            >
              Entrar
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1 h-[1px] bg-[#e1c6a4]" />
              <span className="text-[#e1c6a4] text-xs font-medium">OU ENTRE COM SUA CONTA</span>
              <div className="flex-1 h-[1px] bg-[#e1c6a4]" />
            </div>

            {/* Secondary Button */}
            <div className='flex flex-row'>
              <div className="flex-6 sm:flex-12">
                <button
                  type="button"
                  className="w-full border bg-white border-[#ffffff] text-[#000000] text-sm py-2 hover:bg-[#f5e7d4] transition">
                  <i className="fa-brands fa-google"></i> Conta Google
                
                </button>
              </div>
              <div className="flex-6 md:flex-12">
                <button
                  type="button"
                  className="w-full border bg-black border-[#000000] text-[#ffffff] text-sm py-2 hover:bg-[#f5e7d4] transition"
                >
                   <i className="fa-brands fa-apple"></i> Conta Apple
                </button>
              </div>

            </div>
          </form>
        </div>
      </section>
    </>
  );
}
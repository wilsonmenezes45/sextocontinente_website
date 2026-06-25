"use-client";
import Menu from '@/app/components/menu';
import Image from 'next/image';
import Backgroud_ceu from '@/public/fundodoceu.svg';

export default function Cadastro() {
  return (
    <>
      <Menu />
      <section className='flex flex-row gap-2 w-full font-sans antialiased from-[#9AD1D4]/40 via-[#50AFEA]/10 pt-6 '>
        <div className="flex-6 h-200 -mt-30">
          <Image src={Backgroud_ceu} alt="" />
        </div>
        <div className="flex-6 content-center p-5 -mt-60">
          <h1 className="text-3xl ml-15  font-semibold text-[#c87419]">Login</h1>
          <p className="text-[#c87419] ml-15  mt-1 text-sm">
            Um Sexto Continente com novos horizontes, faça parte
          </p>

          <form className="mt-8 ml-15 space-y-5 w-90">
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
              <span className="text-[#e1c6a4] text-xs font-medium">OU</span>
              <div className="flex-1 h-[1px] bg-[#e1c6a4]" />
            </div>

            {/* Secondary Button */}
            <button
              type="button"
              className="w-full border border-[#d27b1f] text-[#d27b1f] text-sm py-2 rounded-full hover:bg-[#f5e7d4] transition"
            >
              Pedir novas credenciais de acesso
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
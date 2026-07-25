"use client";
import Link from 'next/link';
import Menu from "@/app/components/menu"; 

export default function Cadastro() {
  return (
    <>
  <Menu />
  <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 font-sans bg-white text-slate-900 antialiased">
      {/* LADO ESQUERDO: FORMULÁRIO (ocupa 5 colunas no desktop) */}
      <div className="lg:col-span-8 flex flex-col justify-between p-8 md:p-12 lg:p-16 max-w-xl mx-auto w-full relative">    
        {/* Conteúdo do Formulário */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-1 mb-6">
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Crie a sua Conta Grátis
            </h1>
            <p className="text-sm text-slate-500">
              Comece a planear as suas viagens de sonho hoje mesmo.
            </p>
          </div>

          {/* Botões de Redes Sociais */}
          <div className="space-y-3 mb-5">
            <button className="w-full flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-50 transition px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              Registar com o Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-50 transition px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
              <img src="https://www.svgrepo.com/show/513008/x.svg" alt="X" className="w-4 h-4 text-slate-900" />
              Registar com o X
            </button>
          </div>

          {/* Divisor "OU" */}
          <div className="relative flex py-3 items-center mb-3">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-slate-400">OU</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Campos do Formulário */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nome</label>
              <input 
                type="text" 
                placeholder="Seu Nome Completo" 
                className="w-full border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition px-4 py-3 rounded-xl text-sm text-slate-800 outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                placeholder="seuemail@exemplo.com" 
                className="w-full border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition px-4 py-3 rounded-xl text-sm text-slate-800 outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Palavra-passe</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition px-4 py-3 rounded-xl text-sm text-slate-800 outline-none"
              />
            </div>

            {/* Botão de Enviar */}
            <button 
              type="submit" 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition mt-2 active:scale-98"
            >
              Criar Conta
            </button>
          </form>
        </div>

        {/* Rodapé do Formulário */}
        <div className="text-center text-xs text-slate-500 mt-8 pt-4 border-t border-slate-100">
          Já tem uma conta?{' '}
          <Link href="/login" className="font-bold text-slate-900 hover:text-orange-500 underline transition">
            Iniciar Sessão
          </Link>
        </div>
      </div>
      {/* LADO DIREITO: BANNER VISUAL (Fendas da Tundavala - Maravilha de Angola) */}
      <div className="hidden lg:block lg:col-span-4 relative bg-slate-950 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1605807641575-296245d8b76e?q=80&w=1200" 
          alt="Fendas da Tundavala - Angola" 
          className="absolute inset-0 w-full h-full object-cover opacity-75 scale-105"
        />
        {/* Gradiente quente para harmonizar com o tom laranja/africano do projeto */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-16 left-16 right-16 text-white space-y-4 z-10">
          <span className="text-xs font-bold tracking-widest uppercase bg-orange-500 px-3 py-1.5 rounded-full">
            7 Maravilhas de Angola
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-xl">
            A Sua Próxima Grande <br />
            Aventura Começa Aqui
          </h2>
          <p className="text-slate-200/90 text-sm max-w-md leading-relaxed">
            Explore destinos incríveis como as Fendas da Tundavala com o suporte de especialistas focados em tornar a sua experiência única, segura e inesquecível.
          </p>
        </div>

    </div>
    </div>
    </>
  );
}
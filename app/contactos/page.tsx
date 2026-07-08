import React from 'react';
import Menu from '@/app/components/menu';

export default function Contactos() {
  return (
    <>
    <Menu />
    <section 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-10 font-sans relative"
      style={{ backgroundImage: "url('/Imagens dos logotipos/aviao.png')" }} 
      /* Nota: Ajusta o caminho acima caso a imagem do fundo do céu tenha outro nome na pasta public */
    >
      {/* Camada escura de sobreposição opcional para dar mais leitura ao texto se o fundo for muito claro */}
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"></div>

      {/* Wrapper Principal - Agora SEMITRANSPARENTE com efeito de vidro fosco */}
      <div className="relative z-10 w-full max-w-6xl bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* COLUNA ESQUERDA */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <div className="text-sm text-slate-700 font-medium">
            Home / <span className="text-orange-600 font-bold">Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Sexto Continente <br />
            <span className="text-orange-600">Contactos</span>
          </h2>

          <p className="text-slate-800 text-base font-medium max-w-md">
            Não hesite em contactar-nos! A nossa equipa está pronta para ajudar com as suas reservas, vistos ou pacotes de turismo.
          </p>

          <div className="flex flex-col space-y-4 pt-4">
            {/* Email */}
            <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 hover:border-orange-400 transition-colors group shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">Email Us</p>
                  <p className="text-sm font-bold text-slate-900">geral@sextocontinente.com</p>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 hover:border-orange-400 transition-colors group shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">Call Us</p>
                  <p className="text-sm font-bold text-slate-900">+244 923 000 000</p>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 hover:border-orange-400 transition-colors group shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">Our Headquarter</p>
                  <p className="text-sm font-bold text-slate-900">Luanda, Angola</p>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - Formulário também semitransparente */}
        <div className="w-full lg:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border border-white/40">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h3>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Email</label>
                <input type="email" placeholder="johndoe@gmail.com" className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Phone Number</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-xs text-slate-500 font-bold flex items-center gap-1">
                    🇦🇴 +244
                  </span>
                  <input type="tel" placeholder="923 000 000" className="w-full pl-20 pr-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Subject</label>
                <input type="text" placeholder="enter your subject" className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Message</label>
              <textarea rows={4} placeholder="enter your text..." className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder-slate-400 font-medium"></textarea>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-wider">
              <span>Enviar Mensagem</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>

      </div>
    </section>
    </>
  );
}
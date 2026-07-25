"use client";

import React, { useState } from 'react';
import Menu from "@/app/components/menu"; 
export default function ContactSection() {
  // Estado para controlar se a janela da direita está aberta e qual o tipo ("email", "call", "location")
  const [activeForm, setActiveForm] = useState<'email' | 'call' | 'location' | null>(null);

  // Estados para os valores dos inputs dos formulários
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Handlers para os cliques
  const handleEmailClick = () => {
    setActiveForm('email');
    setPhone('');
    setSubject('Pedido de Informação via E-mail');
    setMessage('Olá, gostaria de obter informações sobre...');
  };

  const handleCallClick = () => {
    setActiveForm('call');
    setEmail('');
    setSubject('Solicitação de Contacto Telefónico');
    setMessage('Por favor, contactem-me de volta para o número indicado.');
  };

  const handleLocationClick = () => {
    setActiveForm('location');
  };

  return (
    <>
      <Menu /> {/* 👈 O Menu foi adicionado aqui no topo, antes do início da section */}

      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-10 font-sans relative"
        style={{ backgroundImage: "url('/Imagens dos logotipos/aviao.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"></div>

        {/* Wrapper Principal */}
        <div className="relative z-10 w-full max-w-6xl bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-start transition-all duration-500">

          {/* COLUNA ESQUERDA (Sempre Visível) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div className="text-sm text-slate-700 font-medium">
              Home / <span className="text-orange-600 font-bold">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Sexto Continent <br />
              <span className="text-orange-600">Contactos</span>
            </h2>

            <p className="text-slate-800 text-base font-medium max-w-md">
              Selecione uma das opções abaixo para abrir as informações ou o formulário de contacto direto.
            </p>

            <div className="flex flex-col space-y-4 pt-4">
              
              {/* Botão Email */}
              <button 
                type="button"
                onClick={handleEmailClick}
                className={`text-left flex items-center justify-between bg-white/60 backdrop-blur-md border rounded-2xl p-4 focus:outline-none transition-all group shadow-sm w-full ${activeForm === 'email' ? 'border-orange-500 scale-105 bg-white/80' : 'border-white/40 hover:border-orange-400'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Email Us</p>
                    <p className="text-sm font-bold text-slate-900">geral@sextocontinente.com</p>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </button>

              {/* Botão Call Us */}
              <button 
                type="button"
                onClick={handleCallClick}
                className={`text-left flex items-center justify-between bg-white/60 backdrop-blur-md border rounded-2xl p-4 focus:outline-none transition-all group shadow-sm w-full ${activeForm === 'call' ? 'border-orange-500 scale-105 bg-white/80' : 'border-white/40 hover:border-orange-400'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 0 1-5.99-5.99c-.154-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Call Us</p>
                    <p className="text-sm font-bold text-slate-900">+244 923 000 000</p>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </button>

              {/* Botão Localização (Atualizado para Benguela) */}
              <button 
                type="button"
                onClick={handleLocationClick}
                className={`text-left flex items-center justify-between bg-white/60 backdrop-blur-md border rounded-2xl p-4 focus:outline-none transition-all group shadow-sm w-full ${activeForm === 'location' ? 'border-orange-500 scale-105 bg-white/80' : 'border-white/40 hover:border-orange-400'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Our Headquarter</p>
                    <p className="text-sm font-bold text-slate-900">Benguela, Angola</p>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-orange-600 transition-colors mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </button>

              {/* FAIXA DE SEPARAÇÃO VISUAL */}
              <hr className="border-white/30 my-2" />

              {/* Botão do WhatsApp */}
              <a 
                href="https://wa.me/244923000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-4 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all group shadow-sm w-full"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-700 font-bold">Chat Online</p>
                    <p className="text-sm font-bold text-slate-900">Bate-papo ao vivo</p>
                  </div>
                </div>
                <div className="text-emerald-500 group-hover:text-emerald-600 transition-colors mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          {activeForm ? (
            <div className="w-full lg:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl border border-white/40 animate-fade-in transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeForm === 'email' && 'Contact via Email'}
                  {activeForm === 'call' && 'Request a Call'}
                  {activeForm === 'location' && 'Our Location'}
                </h3>
                <button 
                  onClick={() => setActiveForm(null)}
                  className="text-xs font-bold text-slate-400 hover:text-orange-600 uppercase tracking-wider"
                >
                  [ Fechar ]
                </button>
              </div>

              {/* SE FOR MAPA E LOCALIZAÇÃO */}
              {activeForm === 'location' ? (
                <div className="space-y-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62432.22301389421!2d13.376826694605963!3d-12.582455982855148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb16b8ffab3497b%3A0x6b44bebb15be96f6!2sBenguela!5e0!3m2!1spt!2s!4v1719878200000!5m2!1spt!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                      <span className="text-xs font-bold text-slate-700">O Nosso Bairro</span>
                      <div className="w-full h-32 rounded-xl bg-slate-200 overflow-hidden border border-slate-150">
                        <img 
                          src="/Imagens dos logotipos/bairro.jpg" 
                          alt="Bairro da Agência" 
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="text-xs font-bold text-slate-700">A Nossa Agência</span>
                      <div className="w-full h-32 rounded-xl bg-slate-200 overflow-hidden border border-slate-150">
                        <img 
                          src="/Imagens dos logotipos/agencia.jpg" 
                          alt="Interior da Agência" 
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-600 text-center">
                    Estamos localizados em Benguela, Angola. Visite-nos!
                  </p>
                </div>
              ) : (
                /* SE FOR FORMULÁRIO (Email ou Call) */
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium"
                      />
                    </div>
                    
                    {activeForm !== 'call' && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="johndoe@gmail.com"
                          className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium"
                        />
                      </div>
                    )}

                    {activeForm === 'call' && (
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Phone Number</label>
                        <div className="relative flex items-center">
                          <span className="absolute left-4 text-xs text-slate-500 font-bold flex items-center gap-1">
                            AO +244
                          </span>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="923 000 000"
                            className="w-full pl-20 pr-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="enter your subject"
                      className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="enter your text..."
                      className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder-slate-400 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                  >
                    <span>Enviar</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="w-full lg:w-1/2 flex items-center justify-center p-12 border-2 border-dashed border-white/40 rounded-3xl bg-white/10 text-slate-800 font-semibold text-center backdrop-blur-sm">
              Selecione uma opção à esquerda para ver os detalhes.
            </div>
          )}

        </div>
      </section>
    </>
  );
}
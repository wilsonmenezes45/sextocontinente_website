"use-client";
import { useState } from "react";
import {
    ChevronDown, Play, CheckCircle2
} from 'lucide-react';

export default function Seccao_3() {
        const [botaoAtivo2, setbotaoAtivo2] = useState("app");
    return (
        <>
            <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    {botaoAtivo2 === "app" && (
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-800">Todo o seu processo nas mãos</h2>
                        <p className="text-slate-500 mt-1">Acompanhe todo o seu processo no nosso aplicativo</p>
                    </div>
                    )}
                    {botaoAtivo2 === "download" && (
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-800">...</h2>
                        <p className="text-slate-500 mt-1">...</p>
                    </div>
                    )}
                    <div className="flex gap-2">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                            <div className="flex gap-2 bg-white p-1.5 rounded-full shadow-inner border border-slate-100">
                                <button className={`text-slate-600 hover:bg-slate-900 px-5 py-2 rounded-full text-xs font-semibold ${botaoAtivo2 === "app"
                                        ? "bg-slate-900 text-white shadow-lg"
                                        : "bg-transparent text-slate-600"
                                    }`} onClick={() => setbotaoAtivo2("app")}>App</button>

                                <button className={`text-slate-600 hover:bg-slate-900 px-5 py-2 rounded-full text-xs font-semibold ${botaoAtivo2 === "download"
                                        ? "bg-slate-900 text-white shadow-lg"
                                        : "bg-transparent text-slate-600"
                                    }`} onClick={() => setbotaoAtivo2("download")}>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
                {botaoAtivo2 === "app" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-72 h-[560px] bg-slate-900 rounded-[3rem] p-3.5 shadow-2xl shadow-slate-400 relative border-4 border-slate-800">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-2xl z-30"></div>
                            <div className="w-full h-full bg-gradient-to-b from-[#E67E22] via-[#d35400] to-slate-900 rounded-[2.5rem] p-6 overflow-hidden relative flex flex-col justify-between text-white">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-[11px] opacity-80">
                                        <span>9:41</span>
                                        <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-orange-200">Sexto Continente</span>
                                        <h4 className="text-lg font-bold leading-tight mt-1">Seu Guia Global</h4>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 mt-4 text-[11px]">
                                        <div className="flex justify-between font-bold">
                                            <span>Status do Passaporte</span>
                                            <span className="text-emerald-400">Ativo</span>
                                        </div>
                                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-emerald-400 w-3/4 h-full"></div>
                                        </div>
                                        <p className="opacity-70 text-[10px]">Previsão de entrega: 12 Dias</p>
                                    </div>
                                </div>
                                <div className="bg-white text-slate-900 rounded-2xl p-3 text-center text-xs font-bold shadow-lg">
                                    Aceder à Minha Conta
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800">A solução para si</h3>
                            <p className="text-slate-500 mt-1">Não fique mais às cegas sobre o teu processo</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Comunicação activa</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Directo com a base de atendimento dedicada.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Alertas em tempo real</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Notificações instantâneas sobre todos os processos operacionais.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Receba e rastreie</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Acompanhe detalhadamente a localização física e digital do seu documento.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Vídeo conferência</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Reuniões directas com a empresa para esclarecimentos minuciosos do processo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md shadow-sky-500/20">
                                Ver o tutorial <Play className="w-4 h-4 fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
                )}
                {botaoAtivo2 === "download" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800">A solução para si</h3>
                            <p className="text-slate-500 mt-1">Não fique mais às cegas sobre o teu processo</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Comunicação activa</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Directo com a base de atendimento dedicada.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Alertas em tempo real</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Notificações instantâneas sobre todos os processos operacionais.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Receba e rastreie</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Acompanhe detalhadamente a localização física e digital do seu documento.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Vídeo conferência</h4>
                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Reuniões directas com a empresa para esclarecimentos minuciosos do processo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md shadow-sky-500/20">
                                Ver o tutorial <Play className="w-4 h-4 fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </section>

            <section className="bg-gradient-to-r from-[#9AD1D4]/40 to-[#9AD1D4]/10 py-12 px-4 md:px-12  max-w-7xl mx-auto my-12 border border-white/60" id="backgroundSamakaka">
                <div className="max-w-4xl mx-auto text-left">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Para onde pretende ir!?</h2>
                    <p className="text-slate-600 text-sm mt-1">Indique a sua rota desejada e nós tratamos do resto</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="relative">
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 appearance-none focus:outline-none">
                                <option>Neste momento estou em...</option>
                                <option>Angola (Luanda)</option>
                                <option>Angola (Benguela)</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <div className="relative">
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 appearance-none focus:outline-none">
                                <option>Quero ir para...</option>
                                <option>Portugal</option>
                                <option>Brasil</option>
                                <option>Reino Unido</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl py-3 px-6 transition">
                            Submeter
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
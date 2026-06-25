"use-client";
// import { 
//    Search, Plane, Calendar, Phone, Shield, FileText, 
//    Globe, ChevronDown, Play, Video, CheckCircle2, ArrowRight 
//  } from 'lucide-react';
 
export default function Rodape() {
  return(
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 md:px-12 relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12">
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-lg font-black tracking-wider text-slate-200">SEXTO CONTINENTE</h4>
            <p className="text-xs text-slate-400">Contactos: +24498765421 || +2449876542</p>
            <ul className="space-y-2 text-xs text-slate-300 font-medium pt-2">
              <li><a href="#" className="hover:text-[#E67E22] transition">Documentação Legal</a></li>
              <li><a href="#" className="hover:text-[#E67E22] transition">Quem somos</a></li>
              <li><a href="#" className="hover:text-[#E67E22] transition">Contactos</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-4 lg:mt-15 md:pt-8">
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><a href="#" className="hover:text-[#E67E22] transition">Termos e Contratos</a></li>
              <li><a href="#" className="hover:text-[#E67E22] transition">Políticas da empresa</a></li>
              <li><a href="#" className="hover:text-[#E67E22] transition">ReclamaAqui-Blog</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-md font-bold tracking-wider uppercase text-slate-200">Contactos</h4>
            <div className="flex gap-4">
              {/* <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-[#E67E22] transition text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-[#E67E22] transition text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-[#E67E22] transition text-white">
                {/* Custom representation for TikTok alternative */}
                {/* <Video className="w-5 h-5" />
              </a> */}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-black border border-white/20 rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:border-white/50 transition w-32">
                <div className="text-[7px] font-bold uppercase tracking-wider text-slate-400 leading-none">Download on the <span className="text-white text-xs block font-bold normal-case mt-0.5">App Store</span></div>
              </div>
              <div className="bg-black border border-white/20 rounded-lg px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:border-white/50 transition w-32">
                <div className="text-[7px] font-bold uppercase tracking-wider text-slate-400 leading-none">GET IT ON <span className="text-white text-xs block font-bold normal-case mt-0.5">Google Play</span></div>
              </div>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
          <span>SextoContinente Benguela aos 226 Nif: 12343446780 ©</span>
          <span>Todos os direitos reservados. 2026</span>
        </div>
      </footer>
      
      );
    }
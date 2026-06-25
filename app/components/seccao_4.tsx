 "use-client";
 import { 
   Phone
 } from 'lucide-react';
 
export default function Seccao_4() {
  return(
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Box de Cor Abstrato Metálico (Substituindo a imagem cinza do mockup original) */}
          <div className="md:col-span-4 h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex flex-col items-center justify-center border border-slate-200/60 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/40 rounded-full filter blur-xl"></div>
            <Phone className="w-12 h-12 text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Suporte Técnico Especializado</span>
          </div>

          {/* Conteúdo de Texto */}
          <div className="md:col-span-8 space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-800">Nossa rede de apoio ao cliente</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Não fique muito perdido, por aqui podes entrar em contacto com a nossa linha de atendimento dedicada para resolver qualquer pendência ou dúvida em tempo recorde.
            </p>
            
            <div className="bg-orange-50 border-l-4 border-[#E67E22] p-4 rounded-r-xl">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">Att: Horário Laboral de Angola</p>
              <p className="text-xs text-amber-800 mt-0.5">Segunda a Sexta das 8h30 às 16h00</p>
            </div>

            <div>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs px-6 py-3.5 rounded-full flex items-center gap-2 transition">
                <Phone className="w-3.5 h-3.5" /> Contactar Atendente
              </button>
            </div>
          </div>

        </div>
      </section>
  );
}
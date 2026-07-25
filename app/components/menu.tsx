'use-client';
import Image from 'next/image';
import logotipo from '@/public/logotipoPrincipal.svg';
import Link from 'next/link';
 import { 
   ChevronDown
 } from 'lucide-react';
export default function Menu() {
    return (
        <nav className="flex items-center px-10 fixed py-4 justify-between bg-white backdrop-blur z-20 w-[100%]">
            <div className="flex items-center gap-2">
                {/* Logo Placeholder */}
                <Link href="/" className="flex items-center relative font-bold text-xl text-[#1E3A8A]">
                    <Image src={logotipo} className='w-39' alt='' />
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-md">
                <Link href="/" className="text-[#E67E22] hover:opacity-80 transition font-bold estilounicolg">Início</Link>
                <Link href="/servicos" className="hover:text-[#E67E22] transition flex font-bold estilounicolg2">Serviços<ChevronDown className="text-slate-400 font-bold w-5 " /></Link>
                <Link href="/sobre_nos" className="hover:text-[#E67E22] transition font-bold">Sobre Nós</Link>
                <Link href="/contactos" className="hover:text-[#E67E22] transition font-bold">Contactos</Link>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex gap-2 bg-white p-1 rounded-full shadow-inner border border-slate-100">
                    <Link href="/login" className="text-[#E67E22] cursor-pointer hover:bg-slate-100 px-5 py-2 rounded-full text-xs font-semibold transition">Login</Link>
                    <Link href="/cadastro" className="bg-[#E67E22] cursor-pointer text-white px-5 py-2 rounded-full text-xs font-semibold">Cadastro</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}
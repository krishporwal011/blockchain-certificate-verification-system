import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-[#050816]/70 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <ShieldCheck className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-50 transition-colors">
                Block<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cert</span>
              </span>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link 
              href="/verify" 
              className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            >
              Verify
            </Link>
            <Link 
              href="/admin" 
              className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#050816_0%,#22d3ee_50%,#050816_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                Issuer Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

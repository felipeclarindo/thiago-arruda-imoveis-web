import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { navigationItems } from "@/mock/layout";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/favicon.png"
            alt="Thiago Arruda"
            width={60}
            height={60}
            priority
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              Thiago Arruda
            </h1>

            <span className="text-sm text-blue-400">Corretor de Imóveis</span>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-[15px] font-medium text-gray-300 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div className="flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-3 text-right">
            <Phone size={18} className="text-blue-400" />

            <div>
              <p className="text-xs text-gray-400">Atendimento</p>

              <p className="font-semibold text-white">(85) 9128-4083</p>
            </div>
          </div>

          {/* Botão */}
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}

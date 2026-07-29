"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

import { navigationItems } from "@/mock/layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:h-24 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/favicon.png"
            alt="Thiago Arruda"
            width={52}
            height={52}
            priority
            className="rounded-full lg:h-[60px] lg:w-[60px]"
          />

          <div>
            <h1 className="text-base font-bold text-white lg:text-lg">
              Thiago Arruda
            </h1>

            <span className="text-xs text-blue-400 lg:text-sm">
              Corretor de Imóveis
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:flex">
          <nav>
            <ul className="flex items-center gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-gray-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />

              <div>
                <p className="text-xs text-gray-400">Atendimento</p>

                <p className="font-semibold text-white">(85) 99128-4083</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="mb-5 flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />

              <div>
                <p className="text-xs text-gray-400">Atendimento</p>

                <p className="font-semibold text-white">(85) 99128-4083</p>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white transition hover:bg-blue-500"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

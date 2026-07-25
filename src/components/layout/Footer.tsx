"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Imóveis", href: "/imoveis" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-white">Thiago Arruda</h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Especialista em encontrar o imóvel ideal para você investir, morar
            ou realizar o sonho da casa própria.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-5 font-semibold text-white">Navegação</h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-5 font-semibold text-white">Contato</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} />
              (85) 9128-4083
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} />
              contato@thiagoarruda.com.br
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} />
              Fortaleza - CE, Brasil
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="mb-5 font-semibold text-white">Acompanhe</h3>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/thiagoarrud_/"
              className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-600 hover:text-white"
            ></Link>

            <Link
              href="#"
              className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-600 hover:text-white"
            ></Link>

            <Link
              href="#"
              className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-600 hover:text-white"
            ></Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Atendimento personalizado para compra, venda e investimento em
            imóveis.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Thiago Arruda. Todos os direitos
            reservados.
          </p>

          <p>Desenvolvido para conectar pessoas aos melhores imóveis.</p>
        </div>
      </div>
    </footer>
  );
}

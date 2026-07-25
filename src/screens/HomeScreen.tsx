import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Home,
  TrendingUp,
} from "lucide-react";

export default function HomeScreen() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background */}
        <Image
          src="/images/banner-home.jpg"
          alt="Imóveis"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-900/50" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="grid w-full items-center gap-20 lg:grid-cols-2 my-15">
            {/* Conteúdo */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 ">
                <BadgeCheck size={18} />
                Atendimento personalizado
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
                Venda ou compre seu imóvel
                <span className="block text-blue-400">
                  com segurança e rapidez.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                Encontre as melhores oportunidades do mercado ou descubra quanto
                vale seu imóvel através de uma avaliação gratuita.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="#avaliacao"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
                >
                  Avaliar meu imóvel
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#imoveis"
                  className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-white/5"
                >
                  Ver imóveis
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-10">
                <div>
                  <h2 className="text-3xl font-bold text-white">+250</h2>

                  <p className="text-gray-400">Clientes atendidos</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">+R$ 40 Mi</h2>

                  <p className="text-gray-400">Em imóveis negociados</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">98%</h2>

                  <p className="text-gray-400">Clientes satisfeitos</p>
                </div>
              </div>
            </div>

            {/* Card de Conversão */}
            <div
              id="avaliacao"
              className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <Building2 className="text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Descubra quanto vale seu imóvel
                </h2>
              </div>

              <p className="mb-8 text-gray-300">
                Faça uma pré-avaliação gratuita e receba uma estimativa baseada
                no mercado atual.
              </p>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Cidade ou bairro"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 text-white outline-none transition focus:border-blue-500"
                />

                <input
                  type="text"
                  placeholder="Tipo do imóvel"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 text-white outline-none transition focus:border-blue-500"
                />

                <input
                  type="number"
                  placeholder="Área (m²)"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 p-4 text-white outline-none transition focus:border-blue-500"
                />

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 font-semibold text-white transition hover:bg-emerald-400">
                  <TrendingUp size={20} />
                  Receber Avaliação Gratuita
                </button>
              </form>

              <div className="mt-8 rounded-xl bg-slate-900/70 p-5">
                <div className="flex items-center gap-3">
                  <Home className="text-blue-400" />

                  <div>
                    <h3 className="font-semibold text-white">
                      O que você recebe?
                    </h3>

                    <p className="text-sm text-gray-400">
                      ✔ Estimativa de valor
                      <br />
                      ✔ Comparativo com imóveis semelhantes
                      <br />
                      ✔ Dicas para vender mais rápido
                      <br />✔ Atendimento personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

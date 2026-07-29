import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  Home,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function HomeScreen() {
  const benefits = [
    "Análise gratuita da sua renda",
    "Simulação completa de financiamento",
    "Descubra quanto o banco pode liberar",
    "Imóveis compatíveis com seu orçamento",
    "Atendimento personalizado do início ao fim",
    "Suporte em toda a documentação",
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/90 to-slate-950" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            <BadgeCheck size={18} />
            Atendimento especializado em financiamento imobiliário
          </span>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight lg:text-7xl">
            Seu primeiro imóvel
            <span className="block text-blue-400">
              pode estar mais perto do que você imagina.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Descubra gratuitamente quanto você pode financiar, quais imóveis se
            encaixam na sua renda e receba orientação completa para conquistar
            sua casa própria com segurança.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="https://wa.me/558591284083"
              target="_blank"
              className="flex items-center gap-3 rounded-xl bg-emerald-500 px-9 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-emerald-400"
            >
              Fazer análise gratuita
              <ArrowRight size={22} />
            </Link>

            <Link
              href="/properties"
              className="rounded-xl border border-white/20 px-9 py-5 text-lg font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              Ver imóveis disponíveis
            </Link>
          </div>

          {/* ESTATÍSTICAS */}
          <div className="mt-20 grid w-full max-w-6xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-4">
            <div>
              <Building2 className="mx-auto text-blue-400" size={40} />
              <h3 className="mt-4 text-4xl font-bold">250+</h3>
              <p className="mt-2 text-gray-400">Famílias atendidas</p>
            </div>

            <div>
              <TrendingUp className="mx-auto text-blue-400" size={40} />
              <h3 className="mt-4 text-4xl font-bold">R$ 40 Mi+</h3>
              <p className="mt-2 text-gray-400">Em imóveis negociados</p>
            </div>

            <div>
              <ShieldCheck className="mx-auto text-blue-400" size={40} />
              <h3 className="mt-4 text-4xl font-bold">98%</h3>
              <p className="mt-2 text-gray-400">Clientes satisfeitos</p>
            </div>

            <div>
              <BadgeCheck className="mx-auto text-blue-400" size={40} />
              <h3 className="mt-4 text-4xl font-bold">100%</h3>
              <p className="mt-2 text-gray-400">Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="text-center">
            <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Processo simples
            </span>

            <h2 className="mt-6 text-5xl font-bold">Como funciona?</h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Em poucos passos você descobre exatamente quais oportunidades
              estão disponíveis para o seu perfil.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-blue-500/30">
              <Calculator className="text-blue-400" size={50} />

              <span className="mt-8 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Passo 01
              </span>

              <h3 className="mt-6 text-2xl font-bold">Análise da sua renda</h3>

              <p className="mt-5 leading-8 text-gray-400">
                Avaliamos gratuitamente sua renda, crédito e capacidade de
                financiamento.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-blue-500/30">
              <TrendingUp className="text-blue-400" size={50} />

              <span className="mt-8 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Passo 02
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                Simulação personalizada
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Descobrimos quanto os bancos podem aprovar e o valor estimado da
                entrada e das parcelas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 transition hover:border-blue-500/30">
              <Home className="text-blue-400" size={50} />

              <span className="mt-8 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Passo 03
              </span>

              <h3 className="mt-6 text-2xl font-bold">Escolha seu imóvel</h3>

              <p className="mt-5 leading-8 text-gray-400">
                Você recebe oportunidades que realmente cabem no seu orçamento,
                sem perder tempo.
              </p>
            </div>
          </div>

          {/* BENEFÍCIOS */}
          <div className="mt-12 grid w-full max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-blue-500/30"
              >
                <CheckCircle2 className="shrink-0 text-emerald-400" size={22} />

                <span className="text-left text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 p-12 text-center shadow-2xl">
            <ShieldCheck className="mx-auto" size={60} />

            <h2 className="mt-8 text-5xl font-bold">
              Faça sua análise gratuitamente
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
              Descubra hoje mesmo quais imóveis você já pode financiar e receba
              uma consultoria personalizada sem qualquer compromisso.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="https://wa.me/558591284083"
                target="_blank"
                className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-slate-900 transition hover:scale-105"
              >
                Quero minha análise gratuita
              </Link>

              <Link
                href="/properties"
                className="rounded-xl border border-white/40 px-10 py-5 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Ver imóveis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

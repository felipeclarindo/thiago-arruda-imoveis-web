import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Building2,
  Home,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export default function AboutScreen() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparência",
      description:
        "Negociações claras, honestas e focadas na segurança do cliente.",
    },
    {
      icon: TrendingUp,
      title: "Experiência",
      description:
        "Conhecimento do mercado para encontrar as melhores oportunidades.",
    },
    {
      icon: Users,
      title: "Atendimento",
      description:
        "Cada cliente recebe um acompanhamento totalmente personalizado.",
    },
    {
      icon: Award,
      title: "Compromisso",
      description:
        "Do primeiro contato até a entrega das chaves, você não estará sozinho.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <BadgeCheck size={18} />
              Sobre o corretor
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Muito mais do que vender imóveis.
              <span className="block text-blue-400">
                Meu objetivo é realizar sonhos.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Meu compromisso é oferecer uma experiência segura, transparente e
              personalizada para quem deseja comprar, vender ou investir em um
              imóvel. Cada negociação é conduzida com atenção aos detalhes e
              foco nos seus objetivos.
            </p>

            {/* <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">250+</h2>
                <p className="mt-2 text-gray-400">Clientes atendidos</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">98%</h2>
                <p className="mt-2 text-gray-400">Satisfação</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">R$40Mi+</h2>
                <p className="mt-2 text-gray-400">Negociados</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">100%</h2>
                <p className="mt-2 text-gray-400">Dedicação</p>
              </div>
            </div> */}
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <Image
                src="/images/thiago-arruda.png"
                alt="Thiago Arruda"
                width={500}
                height={650}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Building2 className="mb-6 text-blue-400" size={42} />

            <h3 className="text-2xl font-bold">Missão</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Ajudar pessoas a conquistarem o imóvel ideal com segurança,
              transparência e atendimento humanizado.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <TrendingUp className="mb-6 text-blue-400" size={42} />

            <h3 className="text-2xl font-bold">Visão</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Ser referência em consultoria imobiliária, oferecendo soluções
              inteligentes e construindo relacionamentos duradouros.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Home className="mb-6 text-blue-400" size={42} />

            <h3 className="text-2xl font-bold">Valores</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Ética, confiança, responsabilidade, compromisso e excelência no
              atendimento ao cliente.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">
              Por que escolher meu atendimento?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
              Cada negociação é conduzida com planejamento, estratégia e foco
              total na melhor experiência para o cliente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
                >
                  <Icon size={42} className="text-blue-400" />

                  <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Minha história</h2>

        <p className="mt-8 text-lg leading-9 text-gray-400">
          Acredito que comprar ou vender um imóvel é uma das decisões mais
          importantes da vida. Por isso, meu trabalho vai muito além da
          negociação: acompanho cada cliente em todas as etapas do processo,
          oferecendo orientação, transparência e tranquilidade para que cada
          decisão seja tomada com segurança.
        </p>

        <p className="mt-8 text-lg leading-9 text-gray-400">
          Meu propósito é construir relacionamentos de confiança e entregar uma
          experiência diferenciada, baseada em atendimento próximo, conhecimento
          do mercado e compromisso com resultados.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Vamos conversar sobre o seu próximo imóvel?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Seja para comprar, vender ou investir, estou pronto para ajudar você
            a tomar a melhor decisão com segurança e tranquilidade.
          </p>

          <Link
            href="https://wa.me/558591284083"
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}

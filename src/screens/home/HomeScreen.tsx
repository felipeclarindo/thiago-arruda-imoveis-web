"use client";

import Image from "next/image";
import Link from "next/link";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  Home,
  Calculator,
} from "lucide-react";

export default function HomeScreen() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  const benefits = [
    "Análise gratuita da renda",
    "Simulação personalizada",
    "Especialista em financiamento",
    "Suporte documental completo",
    "Atendimento único e personalizado",
    "As melhores oportunidades",
  ];

  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      {/* Background */}

      <div className="fixed inset-0 -z-20 bg-slate-950" />

      <div className="fixed left-[-180px] top-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="fixed bottom-[-200px] right-[-150px] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* HERO */}

      <section className="relative">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-12 pb-20">
          <div className="grid w-full items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
                <BadgeCheck size={18} />
                Atendimento especializado
              </span>

              <h1 className="mt-2 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                Seu primeiro imóvel
                <span className="block text-blue-400">
                  começa pela decisão certa.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
                Descubra gratuitamente quanto você pode financiar, encontre os
                melhores imóveis para sua renda e conte com acompanhamento em
                todas as etapas até receber as chaves.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="https://wa.me/558591284083"
                  target="_blank"
                  className="group flex items-center gap-3 rounded-xl bg-emerald-500 px-8 py-5 text-lg font-bold transition hover:scale-105 hover:bg-emerald-400"
                >
                  Fazer análise gratuita
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={22}
                  />
                </Link>

                <Link
                  href="/about"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold transition hover:border-blue-500 hover:bg-white/10"
                >
                  Saiba mais
                </Link>
              </div>

              {/* BENEFÍCIOS */}

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="text-emerald-400" size={20} />

                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              {/* Glow */}

              <div className="absolute h-105 w-105 rounded-full bg-blue-600/20 blur-[130px]" />

              {/* Card */}

              <div className="relative">
                <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
                  <Image
                    src="/images/thiago-arruda.png"
                    alt="Thiago Arruda"
                    width={520}
                    height={760}
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Floating Card */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute -left-8 bottom-12 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
                >
                  <Users className="text-blue-400" />

                  <h3 className="mt-4 text-3xl font-black">+250</h3>

                  <p className="text-slate-400">Famílias atendidas</p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl"
                >
                  <ShieldCheck className="text-emerald-400" />

                  <h3 className="mt-4 text-3xl font-black">98%</h3>

                  <p className="text-slate-400">Clientes satisfeitos</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}

      <section ref={ref} className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-10 text-center">
                <Building2 className="mx-auto text-blue-400" size={42} />

                <h3 className="mt-6 text-4xl font-black">
                  {inView && <CountUp end={250} duration={2.5} />}+
                </h3>

                <p className="mt-3 text-slate-400">Famílias atendidas</p>
              </div>

              <div className="p-10 text-center">
                <TrendingUp className="mx-auto text-blue-400" size={42} />

                <h3 className="mt-6 text-4xl font-black">
                  R$
                  {inView && <CountUp end={40} duration={2.5} />}
                  Mi+
                </h3>

                <p className="mt-3 text-slate-400">Em imóveis negociados</p>
              </div>

              <div className="p-10 text-center">
                <ShieldCheck className="mx-auto text-emerald-400" size={42} />

                <h3 className="mt-6 text-4xl font-black">
                  {inView && <CountUp end={98} duration={2.5} />}%
                </h3>

                <p className="mt-3 text-slate-400">Satisfação</p>
              </div>

              <div className="p-10 text-center">
                <BadgeCheck className="mx-auto text-yellow-400" size={42} />

                <h3 className="mt-6 text-4xl font-black">
                  {inView && <CountUp end={100} duration={2.5} />}%
                </h3>

                <p className="mt-3 text-slate-400">Atendimento personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COMO FUNCIONA */}
      <section className="relative py-28 border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              Como funciona
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Da análise até a entrega das chaves.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Todo o processo é acompanhado de forma personalizada para garantir
              mais segurança, rapidez e tranquilidade.
            </p>
          </div>

          <div className="relative mt-24 grid gap-10 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Análise da renda",
                text: "Entendemos sua renda, crédito e perfil para identificar o melhor financiamento.",
                icon: Calculator,
              },
              {
                number: "02",
                title: "Simulação",
                text: "Realizamos simulações em diferentes bancos para encontrar as melhores condições.",
                icon: TrendingUp,
              },
              {
                number: "03",
                title: "Escolha do imóvel",
                text: "Selecionamos imóveis compatíveis com seu orçamento e seus objetivos.",
                icon: Home,
              },
              {
                number: "04",
                title: "Entrega das chaves",
                text: "Acompanhamos toda a documentação até a assinatura do contrato.",
                icon: ShieldCheck,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
                >
                  <div className="absolute right-8 top-8 text-6xl font-black text-white/5">
                    {item.number}
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                    <Icon size={30} className="text-blue-400" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-5 leading-8 text-slate-400">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
              Por que escolher o Thiago?
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Muito além da venda de imóveis.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400 leading-8">
              O objetivo é encontrar a melhor oportunidade para você, garantindo
              um atendimento completo do início ao fim.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Especialista em financiamento",
                desc: "Conhecimento completo das linhas de crédito imobiliário.",
              },
              {
                title: "Atendimento personalizado",
                desc: "Cada cliente recebe uma estratégia conforme seu perfil.",
              },
              {
                title: "Acompanhamento completo",
                desc: "Você nunca fica perdido durante a documentação.",
              },
              {
                title: "As melhores oportunidades",
                desc: "Imóveis selecionados de acordo com sua renda.",
              },
              {
                title: "Segurança jurídica",
                desc: "Processo transparente e acompanhamento durante toda a compra.",
              },
              {
                title: "Suporte pós-venda",
                desc: "O atendimento continua mesmo depois da entrega das chaves.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-500/30 hover:bg-white/10"
              >
                <CheckCircle2 className="text-emerald-400" size={30} />

                <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>

                <p className="mt-5 leading-8 text-slate-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMÓVEIS */}
      {/* 
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
                Oportunidades
              </span>

              <h2 className="mt-5 text-5xl font-black">Imóveis em destaque</h2>
            </div>

            <Link
              href="/properties"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 transition hover:border-blue-500"
            >
              Ver todos
            </Link>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="h-64 bg-slate-800" />

                <div className="p-8">
                  <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                    Disponível
                  </span>

                  <h3 className="mt-6 text-2xl font-bold">
                    Apartamento Alto Padrão
                  </h3>

                  <p className="mt-4 text-slate-400">
                    3 Quartos • 2 Banheiros • 2 Vagas
                  </p>

                  <h4 className="mt-8 text-4xl font-black text-blue-400">
                    R$ 450.000
                  </h4>

                  <Link
                    href="/properties/1"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:gap-4"
                  >
                    Ver imóvel
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===========================
          DEPOIMENTOS
      =========================== */}

      <section className="border-y border-white/10 bg-slate-900/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
              Quem confiou recomenda
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Histórias reais de quem realizou
              <span className="block text-blue-400">
                o sonho da casa própria.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A confiança dos clientes é o maior patrimônio de um corretor.
              Confira alguns depoimentos.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Mariana Oliveira",
                text: "Achei que nunca conseguiria financiar meu apartamento. O Thiago cuidou de tudo e hoje estou morando no meu primeiro imóvel.",
              },
              {
                name: "Carlos Henrique",
                text: "Atendimento excelente, sempre disponível para esclarecer dúvidas. Recomendo de olhos fechados.",
              },
              {
                name: "Juliana Santos",
                text: "Em poucos dias encontrei um imóvel que cabia no meu orçamento. Todo o processo foi muito tranquilo.",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="mt-6 leading-8 text-slate-300">{item.text}</p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="text-sm text-slate-400">Cliente</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          FAQ
      =========================== */}

      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
              Perguntas Frequentes
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Ainda ficou alguma dúvida?
            </h2>
          </div>

          <div className="mt-16 space-y-5">
            {[
              {
                question: "Preciso ter entrada para financiar?",
                answer:
                  "Depende do imóvel e do banco. Em alguns casos é possível utilizar o FGTS para reduzir a entrada.",
              },
              {
                question: "Posso financiar sendo autônomo?",
                answer:
                  "Sim. Existem diversas formas de comprovação de renda para profissionais autônomos.",
              },
              {
                question: "Quanto tempo demora a aprovação?",
                answer:
                  "Em muitos casos a análise inicial pode acontecer em poucos dias, dependendo da documentação.",
              },
              {
                question: "A análise possui algum custo?",
                answer:
                  "Não. A análise inicial é totalmente gratuita e sem compromisso.",
              },
              {
                question: "Vocês acompanham toda a documentação?",
                answer:
                  "Sim. O acompanhamento é realizado desde a análise até a entrega das chaves.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition open:border-blue-500/30"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-5 leading-8 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
    CTA FINAL
=========================== */}

      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-10 py-20 text-center shadow-[0_0_80px_rgba(59,130,246,.25)]">
            <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

            <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />

            <div className="relative">
              <BadgeCheck className="mx-auto text-white" size={70} />

              <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
                Está pronto para conquistar
                <span className="block">seu primeiro imóvel?</span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                Receba gratuitamente uma análise personalizada do seu perfil e
                descubra exatamente quais imóveis você já pode financiar.
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
                  className="rounded-xl border border-white/30 px-10 py-5 text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  Ver imóveis
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-10 text-blue-100">
                <span>✔ Atendimento personalizado</span>

                <span>✔ Simulação gratuita</span>

                <span>✔ Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

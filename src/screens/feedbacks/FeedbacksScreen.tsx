"use client";

import Image from "next/image";
import { BadgeCheck, Quote, Star, TrendingUp } from "lucide-react";
import { feedbacks } from "@/mock/feedbacks";

export default function FeedbacksScreen() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Hero */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <BadgeCheck size={18} />
              Histórias de sucesso
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              A confiança dos meus clientes{" "}
              <span className="block text-blue-400">
                é o meu maior patrimônio.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Cada imóvel vendido representa uma conquista. Confira alguns dos
              depoimentos de clientes que confiaram no meu trabalho para
              comprar, vender ou financiar seus imóveis.
            </p>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">250+</h2>
                <p className="text-gray-400">Famílias atendidas</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">98%</h2>
                <p className="text-gray-400">Satisfação dos clientes</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">R$ 40Mi+</h2>
                <p className="text-gray-400">Em imóveis negociados</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <Image
                src="/images/thiago-arruda.png"
                alt="Thiago Arruda"
                width={500}
                height={600}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feedbacks */}
        <section className="mt-28">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold">O que dizem meus clientes</h2>

            <p className="mt-4 text-gray-400">
              Resultados reais de quem confiou no meu trabalho.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.nome}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <Quote className="mb-6 text-blue-400" size={36} />

                <div className="mb-6 flex">
                  {Array.from({ length: feedback.nota }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="leading-7 text-gray-300">&ldquo;{feedback.texto}&rdquo;</p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="font-semibold text-white">{feedback.nome}</h3>

                  <span className="text-sm text-gray-400">
                    {feedback.cidade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <div className="rounded-3xl border border-blue-500/20 bg-linear-to-r from-blue-600 to-sky-500 p-12 text-center">
            <TrendingUp className="mx-auto mb-6" size={50} />

            <h2 className="text-4xl font-bold">
              Quer ser o próximo cliente satisfeito?
            </h2>

            <p className="mx-auto mt-6 mb-14 max-w-2xl text-lg text-blue-100">
              Entre em contato agora mesmo e descubra como posso ajudar você a
              comprar, vender ou financiar seu imóvel com segurança e
              tranquilidade.
            </p>

            <a
              href="https://wa.me/558591284083"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-10 py-6 text-lg font-semibold text-slate-900 transition hover:scale-105 "
            >
              Falar com Thiago Arruda
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export default function ContactScreen() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Entre em contato
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Vamos encontrar o imóvel ideal para você.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tire suas dúvidas, solicite uma avaliação gratuita ou agende um
            atendimento personalizado. Estou pronto para ajudar você em cada
            etapa da compra ou venda do seu imóvel.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Informações */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-blue-500/20">
                <Image
                  src="/images/thiago-arruda.png"
                  alt="Thiago Arruda"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mt-8 text-3xl font-bold">Thiago Arruda</h2>

              <p className="mt-2 text-blue-400">
                Consultor e Corretor de Imóveis
              </p>

              <p className="mt-6 max-w-md text-gray-400">
                Meu objetivo é oferecer um atendimento transparente,
                personalizado e focado em encontrar as melhores oportunidades
                para você comprar, vender ou investir em imóveis.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-4">
                <Phone className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="font-semibold">(85) 99128-4083</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-4">
                <Mail className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">E-mail</p>
                  <p className="font-semibold">seu-email-aqui@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-900/60 p-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Atendimento</p>
                  <p className="font-semibold">Fortaleza - CE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold">Solicite um atendimento</h2>

            <p className="mt-3 text-gray-400">
              Preencha os dados abaixo e retornarei o mais breve possível.
            </p>

            <form className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-300">Nome</label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Telefone
                </label>

                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Como posso ajudar?
                </label>

                <textarea
                  rows={5}
                  placeholder="Conte um pouco sobre o imóvel que procura ou deseja vender..."
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold transition hover:bg-blue-500"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

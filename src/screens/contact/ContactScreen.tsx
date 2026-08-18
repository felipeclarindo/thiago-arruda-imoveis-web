"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Home,
  BriefcaseBusiness,
  Wallet,
  MessageCircle,
} from "lucide-react";

type FormData = {
  nome: string;
  telefone: string;
  tipoImovel: string;
  detalhesImovel: string;
  faixaValor: string;
  tipoTrabalho: string;
  renda: string;
  observacoes: string;
};

export default function ContactScreen() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    tipoImovel: "",
    detalhesImovel: "",
    faixaValor: "",
    tipoTrabalho: "",
    renda: "",
    observacoes: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (!numericValue) return "";

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100);
  };

  const handleRendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);

    setFormData((prev) => ({
      ...prev,
      renda: formatted,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const mensagem = `
🏠 *NOVO CONTATO PELO SITE*

Olá, Thiago! Um novo cliente entrou em contato pelo seu site.

👤 *Nome:* ${formData.nome}

📱 *WhatsApp:* ${formData.telefone}

🏠 *Tipo de imóvel:* ${formData.tipoImovel}

🔎 *O que procura:*
${formData.detalhesImovel}

💰 *Faixa de valor:*
${formData.faixaValor || "Não informado"}

💼 *Tipo de trabalho:* ${formData.tipoTrabalho}

💵 *Renda mensal:*
${formData.renda || "Não informado"}

📝 *Observações:*
${formData.observacoes || "Nenhuma observação adicional."}

📍 *Origem do contato:* Site — Thiago Arruda
`;

    const numeroWhatsApp = "5585991284083";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank");

    setTimeout(() => {
      setIsSending(false);
    }, 1000);
  };

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Entre em contato
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Encontre o imóvel ideal para você.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Conte um pouco sobre o que você procura. Com essas informações,
            posso entender melhor o seu perfil e encontrar oportunidades que
            façam sentido para você.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* INFORMAÇÕES */}
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
                Atendimento transparente, personalizado e focado em encontrar as
                melhores oportunidades para comprar, vender ou investir em
                imóveis.
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

                  <p className="font-semibold">thiagoarruda09@alu.ufc.br</p>
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

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
              <MessageCircle className="text-green-400" />

              <p className="text-sm text-gray-300">
                Ao enviar, você será direcionado diretamente para o WhatsApp do
                Thiago.
              </p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div>
              <h2 className="text-3xl font-bold">Conte o que você procura</h2>

              <p className="mt-3 text-gray-400">
                Leva menos de 2 minutos e ajuda a encontrar opções mais
                adequadas ao seu perfil.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {/* NOME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Seu nome
                </label>

                <input
                  required
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Como podemos chamar você?"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* TELEFONE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  WhatsApp
                </label>

                <input
                  required
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(85) 99999-9999"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* TIPO DE IMÓVEL */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Home size={16} className="text-blue-400" />
                  Que tipo de imóvel você procura?
                </label>

                <select
                  required
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="">Selecione uma opção</option>

                  <option value="Apartamento">Apartamento</option>

                  <option value="Casa">Casa</option>

                  <option value="Terreno">Terreno</option>

                  <option value="Imóvel comercial">Imóvel comercial</option>

                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* DETALHES DO IMÓVEL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  O que você procura no imóvel?
                </label>

                <textarea
                  required
                  name="detalhesImovel"
                  value={formData.detalhesImovel}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ex.: 2 ou 3 quartos, suíte, varanda, 2 vagas, próximo ao trabalho..."
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Quanto mais detalhes você informar, melhor podemos entender o
                  imóvel ideal para você.
                </p>
              </div>

              {/* FAIXA DE VALOR */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Wallet size={16} className="text-blue-400" />
                  Qual faixa de valor você pretende investir?
                </label>

                <select
                  name="faixaValor"
                  value={formData.faixaValor}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="">Selecione uma faixa</option>

                  <option value="Até R$ 200.000">Até R$ 200 mil</option>

                  <option value="R$ 200.000 a R$ 300.000">
                    R$ 200 mil a R$ 300 mil
                  </option>

                  <option value="R$ 300.000 a R$ 500.000">
                    R$ 300 mil a R$ 500 mil
                  </option>

                  <option value="R$ 500.000 a R$ 800.000">
                    R$ 500 mil a R$ 800 mil
                  </option>

                  <option value="Acima de R$ 800.000">
                    Acima de R$ 800 mil
                  </option>

                  <option value="Ainda não sei">Ainda não sei</option>
                </select>
              </div>

              {/* TIPO DE TRABALHO */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <BriefcaseBusiness size={16} className="text-blue-400" />
                  Como é sua forma de trabalho?
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tipoTrabalho: "CLT",
                      }))
                    }
                    className={`rounded-xl border px-4 py-4 text-left transition ${
                      formData.tipoTrabalho === "CLT"
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-white/10 bg-slate-900 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <strong className="block text-white">CLT</strong>

                    <span className="text-xs">Trabalho registrado</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tipoTrabalho: "Autônomo",
                      }))
                    }
                    className={`rounded-xl border px-4 py-4 text-left transition ${
                      formData.tipoTrabalho === "Autônomo"
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-white/10 bg-slate-900 text-gray-400 hover:border-white/20"
                    }`}
                  >
                    <strong className="block text-white">Autônomo</strong>

                    <span className="text-xs">Trabalho por conta própria</span>
                  </button>
                </div>

                <input
                  type="hidden"
                  name="tipoTrabalho"
                  value={formData.tipoTrabalho}
                  required
                />
              </div>

              {/* RENDA */}
              {formData.tipoTrabalho && (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    {formData.tipoTrabalho === "CLT"
                      ? "Qual sua renda mensal?"
                      : "Qual sua renda média mensal?"}
                  </label>

                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    name="renda"
                    value={formData.renda}
                    onChange={handleRendaChange}
                    placeholder="R$ 5.000,00"
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Essa informação ajuda a entender melhor suas possibilidades
                    de financiamento.
                  </p>
                </div>
              )}

              {/* OBSERVAÇÕES */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Tem mais alguma informação?
                </label>

                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ex.: Tenho um imóvel para vender, já tenho entrada, quero financiar pela Caixa..."
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                disabled={isSending || !formData.tipoTrabalho}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? (
                  "Abrindo WhatsApp..."
                ) : (
                  <>
                    <Send size={20} />
                    Enviar e falar com Thiago
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                Ao clicar, o WhatsApp será aberto com todas as informações
                preenchidas no formulário.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

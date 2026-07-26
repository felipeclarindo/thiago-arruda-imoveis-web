import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Car,
  MapPin,
  MessageCircle,
  Ruler,
  Share2,
} from "lucide-react";
import { notFound } from "next/navigation";
import { properties } from "@/mock/properties";

interface PropertyScreenProps {
  id: number;
}

export default async function PropertyScreen({
  id,
}: Readonly<PropertyScreenProps>) {
  const property = properties.find((item) => item.id === id);
  if (!property) {
    notFound();
  }

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/properties"
          className="mb-8 inline-flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          Voltar para imóveis
        </Link>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Conteúdo */}
          <div>
            <div className="relative h-[550px] overflow-hidden rounded-3xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mt-10">
              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                À Venda
              </span>

              <h1 className="mt-5 text-5xl font-bold">{property.title}</h1>

              <div className="mt-5 flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                {property.neighborhood} • {property.city}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-4">
                <div className="text-center">
                  <BedDouble className="mx-auto mb-3 text-blue-400" />
                  <p className="text-2xl font-bold">{property.bedrooms}</p>
                  <span className="text-gray-400">Quartos</span>
                </div>

                <div className="text-center">
                  <Bath className="mx-auto mb-3 text-blue-400" />
                  <p className="text-2xl font-bold">{property.bathrooms}</p>
                  <span className="text-gray-400">Banheiros</span>
                </div>

                <div className="text-center">
                  <Car className="mx-auto mb-3 text-blue-400" />
                  <p className="text-2xl font-bold">{property.garage}</p>
                  <span className="text-gray-400">Vagas</span>
                </div>

                <div className="text-center">
                  <Ruler className="mx-auto mb-3 text-blue-400" />
                  <p className="text-2xl font-bold">{property.area}</p>
                  <span className="text-gray-400">m²</span>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="mb-5 text-3xl font-bold">Sobre este imóvel</h2>

                <p className="leading-8 text-gray-300">
                  {property.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sticky top-32 h-fit rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm text-gray-400">Valor do imóvel</p>

            <h2 className="mt-2 text-4xl font-bold text-blue-400">
              {property.price}
            </h2>

            <div className="mt-8 space-y-4">
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 py-4 font-semibold transition hover:bg-emerald-400"
              >
                <MessageCircle size={22} />
                Conversar no WhatsApp
              </Link>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 py-4 transition hover:border-blue-500 hover:bg-white/5">
                <Share2 size={20} />
                Compartilhar imóvel
              </button>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-900/70 p-6">
              <h3 className="font-semibold">Atendimento personalizado</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Tire dúvidas, agende uma visita ou solicite uma simulação de
                financiamento com o corretor.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

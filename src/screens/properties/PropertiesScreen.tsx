import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Building2,
  MapPin,
  Search,
  Square,
  MessageCircle,
} from "lucide-react";
import { properties } from "@/mock/properties/propertiesData";

export default function PropertiesScreen() {
  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              Encontre seu próximo imóvel
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Imóveis selecionados para
              <span className="block text-blue-400">realizar o seu sonho.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Explore oportunidades cuidadosamente selecionadas para morar,
              investir ou conquistar sua casa própria.
            </p>
          </div>

          {/* Pesquisa */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid gap-4 lg:grid-cols-5">
              <input
                type="text"
                placeholder="Cidade ou bairro"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-4 outline-none transition focus:border-blue-500"
              />

              <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-4 outline-none">
                <option>Tipo do imóvel</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Terreno</option>
              </select>

              <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-4 outline-none">
                <option>Faixa de preço</option>
                <option>Até R$ 500 mil</option>
                <option>R$ 500 mil - R$ 1 milhão</option>
                <option>Acima de R$ 1 milhão</option>
              </select>

              <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-4 outline-none">
                <option>Quartos</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold transition hover:bg-blue-500">
                <Search size={20} />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Imóveis disponíveis</h2>

          <span className="text-gray-400">
            {properties.length} imóveis encontrados
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <div className="relative h-72">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />

                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
                  {property.type}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">{property.price}</h3>

                <p className="mt-2 text-lg font-semibold">{property.title}</p>

                <div className="mt-3 flex items-center gap-2 text-gray-400">
                  <MapPin size={17} />
                  {property.city}
                </div>

                <div className="mt-8 flex justify-between border-y border-white/10 py-5 text-gray-300">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    {property.bedrooms}
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    {property.bathrooms}
                  </div>

                  <div className="flex items-center gap-2">
                    <Square size={18} />
                    {property.area}m²
                  </div>
                </div>

                <div className="mt-7 flex gap-4">
                  <Link
                    href={`/properties/${property.id}`}
                    className="flex-1 rounded-xl border border-blue-500 px-4 py-3 text-center font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
                  >
                    Ver detalhes
                  </Link>

                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    className="rounded-xl bg-emerald-500 px-5 transition hover:bg-emerald-400"
                  >
                    <MessageCircle className="my-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-12 text-center">
          <Building2 className="mx-auto mb-6" size={48} />

          <h2 className="text-4xl font-bold">Não encontrou o imóvel ideal?</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Entre em contato e receba oportunidades exclusivas antes mesmo de
            serem anunciadas no mercado.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Falar com o corretor
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Thiago Arruda",
  description:
    "Conquiste sua casa própria com a ajuda de um consultor especializado em financiamento imobiliário. Obtenha orientação personalizada, estratégias eficazes e suporte completo para realizar o sonho da casa própria.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

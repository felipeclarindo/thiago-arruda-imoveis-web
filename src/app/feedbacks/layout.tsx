import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depoimentos | Thiago Arruda",
  description:
    "Conquiste sua casa própria com a ajuda de um consultor especializado em financiamento imobiliário. Obtenha orientação personalizada, estratégias eficazes e suporte completo para realizar o sonho da casa própria.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function FeedbacksLayout({
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

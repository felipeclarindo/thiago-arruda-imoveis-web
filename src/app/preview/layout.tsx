import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avaliar",
  description:
    "Desenvolver",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function PreviewLayout({
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

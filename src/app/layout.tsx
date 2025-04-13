import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Container } from "@/components/ui/Container";
import { LogoPositivus } from "@/assets/svg";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus - A sua plataforma de gerenciamento de leads",
  description: "Positivus é uma plataforma de gerenciamento de leads que ajuda você a aumentar suas vendas e melhorar a experiência do cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Container as="header">
          <LogoPositivus aria-label="Logo Positivus" />
        </Container>
        {children}
      </body>
    </html>
  );
}

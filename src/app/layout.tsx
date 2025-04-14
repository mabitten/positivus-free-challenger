import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Container } from "@/components/foundation/Container";
import { LogoPositivus } from "@/assets/svg";
import { Navigation } from "@/components/foundation/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
        className={`${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <SidebarProvider defaultOpen={false}>
          <Container as="header" className="flex items-center py-16 justify-between">
            <LogoPositivus aria-label="Logo Positivus" />
            <Navigation />
          </Container>
          
            {children}
          
        </SidebarProvider>
      </body>
    </html>
  );
}

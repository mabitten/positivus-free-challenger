import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { 
  FooterSection, 
  SidebarProvider, 
  HeaderSection
} from "@/components";

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
          <div className="px-5">
            <HeaderSection />
            <main>
              {children}
            </main>
          </div>
          <FooterSection />
        </SidebarProvider>
      </body>
    </html>
  );
}

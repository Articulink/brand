import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Brand Guidelines — Articulink",
  description: "The complete guide to Articulink's visual identity, voice, and design system.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${leagueSpartan.variable} antialiased bg-blue-breeze`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-[280px] pt-[72px] lg:pt-0 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

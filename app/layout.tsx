import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Tripwise - Find Your Next Adventure",
  description: "Find your next adventure with Tripwise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${nunito.variable} bg-background text-foreground font-sans antialiased min-h-screen selection:bg-sky-blue/30 pb-24 md:pb-0`}
      >
        <TopNav />
        <main className="min-h-screen">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}

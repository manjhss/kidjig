import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/container";
import Header from "./_components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kidjig",
  description: "Transforming ideas into Innovative Software Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* background */}
        <div className="w-full h-screen fixed top-0 -z-50">
          <img src="bg.png" alt="bg" className="w-full h-full" />
        </div>

        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}

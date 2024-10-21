import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import "./normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShoeStyle",
  description: "E-commerce focused on stylish shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginHeader from "../components/LoginHeader/header";
import "../normalize.css";

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
                <LoginHeader />
                {children}
            </body>
        </html>
    );
}

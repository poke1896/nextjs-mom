import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guarakay - Joyería Natural",
  description: "Guarakay es una microempresa dedicada a la creación de joyería única hecha con elementos naturales como alas de mariposa, plumas de aves, y hojas o flores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </Head>
      <body className={`${inter.className} bg-gray-100 flex flex-col min-h-screen`}>
        <header className="fixed w-full bg-transparent z-50">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-black text-xl font-bold">Guarakay</div>
            {/* Puedes agregar más elementos en la Navbar aquí */}
          </nav>
        </header>
        <main className="flex-grow pt-16 p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} Guarakay. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}

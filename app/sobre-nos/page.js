"use client";

import { NavBar } from "@/components/NavBar";
import Image from "next/image";

const Sobre = () => {
  return (
    <>
      <nav className="fixed top-0 w-full shadow-md z-10">
        <NavBar />
      </nav>
      <main className="min-h-screen flex flex-col items-center text-black  mt-20  justify-center h-screen bg-white">
        <section className="w-full max-w-4xl px-4 py-8">
          <div className="text-center  shadow-lg rounded-lg p-6 md:p-10 shadow-slate-600">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-gray-600 pb-2">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Somos uma plataforma de gerenciamento de imagens em nuvem,
              otimizada por inteligência artificial para oferecer a melhor
              experiência de organização e acessibilidade.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/camera.jpg"
                  alt="Imagem sobre a empresa"
                  className="w-full h-64 object-cover rounded-lg shadow-md border border-white"
                  height={64}
                  width={100}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
                <p>
                  Nossa missão é transformar a maneira como você organiza e
                  acessa suas fotos, garantindo uma experiência intuitiva e
                  eficiente. Utilizamos as mais recentes tecnologias de
                  inteligência artificial para oferecer recursos avançados e uma
                  interface amigável.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;

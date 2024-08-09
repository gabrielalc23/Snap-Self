"use client";

import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";

const Precos = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow">
        <NavBar />
      </nav>
      <main className="mt-16 flex flex-col items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Planos e Preços</h1>
        <div className="flex flex-wrap justify-center gap-8 text-black">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">Pessoal</h2>
            <p className="text-gray-600 mb-6">Para indivíduos e freelancers</p>
            <p className="text-4xl font-bold mb-4">
              R$ 29<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">✓ Suporte a cloud storage</li>
              <li className="mb-2">✓ 50 GB de armazenamento</li>
              <li className="mb-2">✓ Suporte por e-mail</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 w-full hover:bg-gray-800">
              Assine agora
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-black">
            <h2 className="text-2xl font-semibold mb-4">Profissional</h2>
            <p className="text-gray-600 mb-6">Para pequenos times e startups</p>
            <p className="text-4xl font-bold mb-4">
              R$ 99<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">✓ 50 projetos</li>
              <li className="mb-2">✓ 50 GB de armazenamento</li>
              <li className="mb-2">✓ Suporte prioritário</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 w-full hover:bg-gray-800">
              Assine agora
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-black">
            <h2 className="text-2xl font-semibold mb-4">Empresarial</h2>
            <p className="text-gray-600 mb-6">
              Para empresas e grandes equipes
            </p>
            <p className="text-4xl font-bold mb-4">
              R$ 299<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">✓ Projetos ilimitados</li>
              <li className="mb-2">✓ 1 TB de armazenamento</li>
              <li className="mb-2">✓ Suporte dedicado</li>
              <li className="mb-2">✓ Agendamento automático de eventos</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 w-full hover:bg-gray-800">
              Assine agora
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Precos;

"use client";

import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const Contato = () => {
  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 w-full bg-white shadow">
        <NavBar />
      </nav>
      <main className="mt-16 flex flex-col items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 h-screen">
        <h1 className="text-3xl font-bold mb-8 underline-animation">
          Entre em Contato
        </h1>
        <form className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2 underline-animation"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 underline-animation"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2 underline-animation"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2 underline-animation"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;

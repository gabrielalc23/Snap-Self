"use client";

import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

const Modulos = () => {
  return (
    <>
      <nav className="fixed top-0 w-full shadow-md z-10">
        <NavBar />
      </nav>
      <main className="bg-white min-h-screen">
        <div className="flex justify-center text-black font-bold text-3xl mt-10">
          <h1 className="mt-20 text-center">
            Conheça os módulos presentes no sistema:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/visao-geral.png"
              alt="Visão Geral"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Visão Geral</h3>
            <p className="text-gray-700 mt-2">
              Fornece uma visão abrangente e em tempo real das atividades e
              indicadores-chave da empresa.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/calendario.png"
              alt="Calendário de Sessões"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Calendário de Sessões</h3>
            <p className="text-gray-700 mt-2">
              Ferramenta de agendamento intuitiva para organizar e gerenciar
              sessões fotográficas com facilidade.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/gerenciamento-clientes.png"
              alt="Gerenciamento de Clientes"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">
              Gerenciamento de Clientes
            </h3>
            <p className="text-gray-700 mt-2">
              Centraliza todas as informações dos clientes, incluindo histórico
              de serviços e preferências.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/controle-financeiro.png"
              alt="Controle Financeiro"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Controle Financeiro</h3>
            <p className="text-gray-700 mt-2">
              Monitora e gerencia todas as transações financeiras, incluindo
              faturamento e despesas.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/memoria-escolar.png"
              alt="Memórias Escolares"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Memórias Escolares</h3>
            <p className="text-gray-700 mt-2">
              Gerencia sessões fotográficas e pacotes de recordações para
              escolas, organizando por turmas e anos.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/analise-fotos.png"
              alt="Análise de Fotos"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Análise de Fotos</h3>
            <p className="text-gray-700 mt-2">
              Identifica e separa automaticamente fotos embaçadas, estouradas ou
              muito escuras, facilitando a revisão manual.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/biblioteca-fotos.png"
              alt="Biblioteca de Fotos"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Biblioteca de Fotos</h3>
            <p className="text-gray-700 mt-2">
              Sistema de armazenamento seguro e organizado para todas as
              fotografias, com opções de criação de álbuns e backup automático.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 py-6">
            <Image
              src="/modulo-images/preferencias-sistema.png"
              alt="Preferências do Sistema"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-4">Preferências do Sistema</h3>
            <p className="text-gray-700 mt-2">
              Permite a personalização de opções do sistema, incluindo gestão de
              usuários, segurança e notificações.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 px-4">
          <p className="text-gray-700 font-bold text-center p-16">
            Caso queira algo personalizado, contate nossa equipe que faremos um
            módulo personalizado especialmente para você e sua empresa!
          </p>
        </div>
      </main>
    </>
  );
};

export default Modulos;

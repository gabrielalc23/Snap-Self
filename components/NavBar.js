"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-black dark:bg-black dark:border-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.jpg"
            className="border-2 border-white rounded"
            width={80}
            height={80}
            alt="Penis Icon"
          />
          <span className="text-2xl font-semibold text-white dark:text-white underline-animation">
            Snap-Self
          </span>
        </Link>
        <button
          type="button"
          className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/modulos"
                className="underline-animation block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Módulos
              </Link>
            </li>
            <li>
              <Link
                href="/precos"
                className="underline-animation block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Preços
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="underline-animation block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-nos"
                className="underline-animation block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

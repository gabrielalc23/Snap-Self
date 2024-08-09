"use client";

import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full">
        <NavBar />
      </nav>
      <main
        className={`flex items-center justify-center h-screen bg-white ${pacifico.className}`}
      >
        <Image src="/main.png" width={100} height={100} alt="Main Image" />
        <div className="underline-animation mt-10">
          <p className="text-4xl font-bold text-black dark:text-black">
            Photo Snap suas fotos em um só lugar!!!
          </p>
        </div>
      </main>
    </>
  );
}

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      <a
        href="https://wa.me/5519988257631?text=Adorei%20seu%20artigo"
        className="fixed bottom-10 right-10 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={45} />
      </a>
    </footer>
  );
};

export default Footer;

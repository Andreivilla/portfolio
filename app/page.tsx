import Footer from './ui/Footer';
import Link from 'next/link';

import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';

import { Window } from './ui/Windows';
import Image from 'next/image';
import { Resumo, Dados } from './ui/Sobre';

import Formacao from './ui/Formacao';

export default function Home() {
  const baseUrl = process.env.BASE_URL;
  const sobre = ['sobre', 'sobre'];

  return (
    <div className="flex flex-col">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-around px-12 scroll-mt-20"
      >
        <div>
          <div>
            <p className="text-gray-400 italic">// Andrei Villa </p>
            <h1 className="text-6xl font-extrabold mt-2">
              Dev <br />
              Full-Stack
            </h1>
          </div>
          <div className="w-full h-100 relative">
            <Image
              src={baseUrl + '/perfil-pixel.gif'}
              alt="Andrei Villa"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-20 md:mb-12">
          <Link href="https://www.linkedin.com/in/andrei-villa-7729801b6/">
            <FaLinkedinIn className="w-8 h-8" />
          </Link>
          <Link href="https://github.com/Andreivilla">
            <FaGithub className="w-8 h-8" />
          </Link>
          <Link href="">
            <IoDocumentTextSharp className="w-8 h-8" />
          </Link>
        </div>
      </section>

      <section id="sobre" className="px-12 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <Window title="resumo">
            <Resumo />
          </Window>

          <Window title="dados">
            <Dados />
          </Window>
        </div>
      </section>

      <section id="projetos" className="px-12 mt-10 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Formação</h2>
        <Formacao />
      </section>

      <section id="projetos" className="px-12 mt-10 scroll-mt-20 mb-100">
        <h2 className="text-3xl font-bold mb-4">Experiencia proficional</h2>
        
      </section>
    </div>
  );
}

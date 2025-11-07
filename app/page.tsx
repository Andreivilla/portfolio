import Footer from './ui/Footer';
import Link from 'next/link';

import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';

import { Terminal } from './ui/Terminal';
import TerminalText from './ui/TerminalText';
import Image from 'next/image';

export default function Home() {
  const sobre = ['sobre', 'sobre'];

  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col justify-around px-12">
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
              src="/perfil-pixel.gif"
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

      <section id="sobre" className="min-h-screen px-12">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <TerminalText text={sobre} />
      </section>

      <section id="projetos">
        <h1>projetos</h1>
      </section>
    </div>
  );
}

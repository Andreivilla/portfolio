'use client';

//import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between">
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-400 transition">
          <span>git</span>
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <span>linkedi</span>
        </a>
      </div>
      <p className="text-sm text-gray-400">email@</p>
    </footer>
  );
}

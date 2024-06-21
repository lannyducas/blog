// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-300">
            Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300">
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
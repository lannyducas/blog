// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-primary-900">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-300 font-display">
            Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-blue-300 font-display">
            Posts
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300 font-display">
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
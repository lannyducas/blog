import React from 'react';

import Header from '../components/Header';

  export default function Home() {
  return (
    <div className = "flex flex-col min-h-screen bg-blue-100">
      <Header />
      <main className="flex-grow">
        <h1 className="text-primary-900 text-3xl text-center font-display">Welcome to Danny&#39;s blog!</h1>
        <p className="text-primary-800 font-body">This is where my blog posts will be.</p>
      </main>

      <footer className="bg-gray-800 bg-opacity-80 p-4 text-primary-800 text-center">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}
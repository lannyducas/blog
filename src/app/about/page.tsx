import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header'; // Import the Header component

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header /> {/* Use the Header component */}

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-black">About Page</h1>
        <p className="text-lg text-center text-black">This is the about page for my Next.js application.</p>
      </main>

      <footer className="bg-gray-800 bg-opacity-80 p-4 text-white text-center">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default About;
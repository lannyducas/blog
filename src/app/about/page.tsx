import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header'; // Import the Header component

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <h1 className="text-primary-900 text-3xl text-center font-display">About Me</h1>
        <Image 
          src="/me.jpg"
          alt="Picture of Danny"
          width={500}
          height={500}
          className="mx-auto my-4"
          // layout="responsive"
    
        />
        <p className="font-body text-lg text-center text-primary-900">I am Danny Lucas, a tutor and software engineer.  I am learning data science and applying to masters programs right now.  I am based in Greenpoint, Brooklyn and I live with my beautiful girlfriend Jamie, she is currently heating up some chicken nuggets for me!</p>
      </main>

      <footer className="bg-gray-800 bg-opacity-80 p-4 text-primary-800 text-center">
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default About;
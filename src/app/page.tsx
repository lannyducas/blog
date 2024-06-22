import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className = "bg-blue-100">
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to My Landing Page</h1>
        <p>This is a basic landing page for my Next.js application.</p>
      </main>

      <footer>
        <p>© 2022 My Website</p>
      </footer>
    </div>
  );
}
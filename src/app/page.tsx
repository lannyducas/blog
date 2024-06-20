import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
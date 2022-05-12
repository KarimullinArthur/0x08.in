import Head from 'next/head';
import React, { ReactElement } from 'react'
import Header from '@/shared/components/Header';
import css from './Layout.module.scss';

export default function Layout({ children }) {
  return;
}

Layout.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#3e3d2b" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={css.container}>
        <main className={css.main}>
          <Header />
          {page}
        </main>
      </div>
    </>
  );
}

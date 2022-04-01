import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import useLocale from 'hooks/useLocale';
import { useRouter } from 'next/router';

export default function Layout({ title, children, header = true, footer = true }) {
  const { dir } = useLocale();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>feather{title && ` - ${title}`}</title>
      </Head>

      {header && <Header />}
      <main className={router.query.embed === 'true' ? '' : 'container'} dir={dir}>
        {children}
      </main>
      {footer && <Footer />}
      <div id="__modals" dir={dir} />
    </>
  );
}

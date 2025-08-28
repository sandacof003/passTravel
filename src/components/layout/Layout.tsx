import { LayoutProps } from '@/types';
import Head from 'next/head';
import { defaultMeta } from '@/constants/siteMeta';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, meta }: LayoutProps) {
  const metaData = {
    ...defaultMeta,
    ...meta,
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        {metaData.keywords && (
          <meta name="keywords" content={metaData.keywords} />
        )}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:site_name" content={defaultMeta.openGraph.site_name} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metaData.title} />
        <meta property="twitter:description" content={metaData.description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}

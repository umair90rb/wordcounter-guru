import Head from 'next/head';

const siteUrl = 'https://wordcounter.local/'; // Replace with production URL
const pagePath = 'about';

export default function AboutPage() {
  const title = 'About Us - Free Online Word Counter';
  const description = 'Learn about our free word and character counter built for writers, students, and professionals. Fast, simple, and mobile-friendly.';
  const canonical = siteUrl + pagePath;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container-max py-6">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">About Us</h1>
          <p className="mt-2 text-sm text-gray-600">A fast, simple tool for everyone.</p>
        </div>
      </header>

      <main>
        <section className="container-max py-8">
          <p className="text-gray-700">
            The Free Online Word & Character Counter is designed to help writers, students, and professionals quickly check word and character counts. It focuses on speed, simplicity, and a mobile-friendly interface, so you can get accurate counts instantly—without distractions.
          </p>
        </section>
      </main>
    </>
  );
} 
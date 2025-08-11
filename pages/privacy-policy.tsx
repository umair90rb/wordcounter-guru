import Head from 'next/head';
import Link from 'next/link';

const siteUrl = 'https://wordcounter.guru/'; // Replace with production URL
const pagePath = 'privacy-policy';

export default function PrivacyPolicyPage() {
  const title = 'Privacy Policy - Free Online Word Counter';
  const description = 'We do not store, save, or share any text. The word counter runs entirely in your browser for complete privacy.';
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Privacy Policy</h1>
              <p className="mt-2 text-sm text-gray-600">Your privacy matters.</p>
            </div>
            <Link href="/" className="btn">
              Go Home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container-max py-8">
          <p className="text-gray-700">
            This tool does not store, save, or share any of your text. All counting happens locally in your browser.
            Your input never leaves your device and is not transmitted to any server.
          </p>
        </section>
      </main>
    </>
  );
} 
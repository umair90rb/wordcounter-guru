import Head from 'next/head';
import Link from 'next/link';

const siteUrl = 'https://wordcounter.local/'; // Replace with production URL
const pagePath = 'contact';

export default function ContactPage() {
  const title = 'Contact Us - Free Online Word Counter';
  const description = 'Contact us for feedback, questions, or suggestions about the free online word counter and character counter tool.';
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
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Contact Us</h1>
              <p className="mt-2 text-sm text-gray-600">We'd love to hear your feedback and questions.</p>
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
            If you have any suggestion or query, you can reach us anytime at
            {' '}<a href="mailto:wordcounter.guru@gmail.com" className="text-gray-900 underline font-medium">wordcounter.guru@gmail.com</a>.
          </p>
        </section>
      </main>
    </>
  );
} 
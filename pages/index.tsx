import { useMemo, useState } from 'react';
import Head from 'next/head';

const siteUrl = 'https://wordcounter.guru/';

function countWords(input: string): number {
  const trimmed = input.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export default function HomePage() {
  const [text, setText] = useState<string>('');

  const characterCount = useMemo(() => text.length, [text]);
  const wordCount = useMemo(() => countWords(text), [text]);

  const handleClear = () => setText('');

  const metaTitle = 'Free Online Word Counter & Character Counter | Fast Word Counter Tool';
  const metaDescription = 'Free online word counter and character counter to instantly count words and characters in your text. Fast, accurate, mobile-friendly, and fully private.';
  const metaKeywords = 'word counter, character counter, free online word counter, word count tool, character count tool, online text counter';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the word counter work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The tool splits your text by whitespace (spaces, tabs, newlines) and ignores multiple spaces to give an accurate word count. Character count includes all characters including spaces and line breaks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my text stored or uploaded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Everything runs locally in your browser. Your text never leaves your device and is not stored on any server.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Word Counter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our free online Word & Character Counter is a simple tool that instantly counts the number of words and characters in your text. Whether you are writing an article, essay, report, social media post, or any other content, this tool helps you stay within word and character limits easily. To use it, just type directly into the text box above or paste your text from any other source. The counter updates in real time, showing you the exact number of words and characters as you type, edit, or delete. You can also use the “Clear” button to reset and start fresh. Knowing your word count is important for many tasks — from meeting academic requirements to keeping social media posts within character limits. Writers, students, bloggers, and content creators can all benefit from this fast and accurate counting tool. Unlike complex editors, this tool focuses purely on speed and simplicity, so it loads quickly, works on any device, and doesn’t require any signup or installation.',
        },
      },
    ],
  } as const;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/og.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/og.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* FAQ Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container-max py-6">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Free Online Word Counter & Character Counter
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Count words and characters in real time. Fast, private, and free.
          </p>
        </div>
      </header>

      <main className="flex-1">
        <section className="container-max py-8 sm:py-10">
          <div className="card p-3 my-1 sm:p-3 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {wordCount.toString()} words {characterCount.toString()} characters
            </h1>
          </div>
          <div className="card p-4 sm:p-6">
            <label htmlFor="text-input" className="sr-only">
              Enter text to count words and characters
            </label>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here..."
              className="w-full h-64 sm:h-72 md:h-80 resize-y rounded-lg border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-300 outline-none p-4 text-base leading-6 bg-white"
              spellCheck={false}
              aria-label="Text input"
            />

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3">
                <div className="rounded-lg bg-gray-50 ring-1 ring-gray-200 px-3 py-2">
                  <div className="text-xs text-gray-500">Words</div>
                  <div className="text-lg font-semibold" aria-live="polite">{wordCount.toLocaleString()}</div>
                </div>
                <div className="rounded-lg bg-gray-50 ring-1 ring-gray-200 px-3 py-2">
                  <div className="text-xs text-gray-500">Characters</div>
                  <div className="text-lg font-semibold" aria-live="polite">{characterCount.toLocaleString()}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={handleClear} className="btn" disabled={!text}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container-max py-6">
          <h2 className="text-xl font-semibold tracking-tight">What is Word Counter?</h2>
          <p className="mt-2 text-gray-700">
            Our free online Word & Character Counter is a simple tool that instantly counts the number of words and characters in your text. Whether you are writing an article, essay, report, social media post, or any other content, this tool helps you stay within word and character limits easily.
            To use it, just type directly into the text box above or paste your text from any other source. The counter updates in real time, showing you the exact number of words and characters as you type, edit, or delete. You can also use the “Clear” button to reset and start fresh.
            Knowing your word count is important for many tasks — from meeting academic requirements to keeping social media posts within character limits. Writers, students, bloggers, and content creators can all benefit from this fast and accurate counting tool.
            Unlike complex editors, this tool focuses purely on speed and simplicity, so it loads quickly, works on any device, and doesn’t require any signup or installation.
            <strong>Tip: Bookmark this page so you can check your text anytime you need.</strong>
          </p>
        </section>

        <section className="container-max py-6">
          <h2 className="text-xl font-semibold tracking-tight">About this Word Counter</h2>
          <p className="mt-2 text-gray-700">
            This free tool instantly counts words and characters as you type. Words are calculated by splitting on whitespace—spaces, tabs, and newlines—while ignoring multiple spaces. Character count includes every character, including spaces and line breaks. Everything runs in your browser, so your text stays private.
          </p>
        </section>

        <section className="container-max py-6">
          <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
          <details className="mt-3">
            <summary className="cursor-pointer font-medium">How accurate is the word count?</summary>
            <p className="mt-2 text-gray-700">It uses a robust whitespace split to avoid counting extra spaces as words, providing an accurate result for most text.</p>
          </details>
          <details className="mt-3">
            <summary className="cursor-pointer font-medium">Does this tool store my text?</summary>
            <p className="mt-2 text-gray-700">No. All counting happens locally in your browser. Nothing is uploaded or stored.</p>
          </details>
        </section>
      </main>
    </>
  );
} 
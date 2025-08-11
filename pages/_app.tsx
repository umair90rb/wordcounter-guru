import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp; 
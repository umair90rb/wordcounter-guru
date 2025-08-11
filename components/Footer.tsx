import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-max py-6 text-center text-sm text-gray-600">
        <nav className="mb-3 flex items-center justify-center gap-4">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <span className="text-gray-300">•</span>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
          <span className="text-gray-300">•</span>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
        </nav>
        <div>© {new Date().getFullYear()} WordCounter.Guru</div>
      </div>
    </footer>
  );
} 
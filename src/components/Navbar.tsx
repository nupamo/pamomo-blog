import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1">
            <Terminal size={24} />
            <span className="font-bold text-xl tracking-tight">파모모의 블로그</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-300 hover:text-white font-medium px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500">
              게시글
            </Link>
            <a href="https://github.com/nupamo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

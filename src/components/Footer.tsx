export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Pamomo ✨. All rights reserved.</p>
        <p className="mt-2">Built with Vite, React, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

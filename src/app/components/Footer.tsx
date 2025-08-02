export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 font-mono text-sm px-6 md:px-24 py-6 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-center md:text-left tracking-tight">
          © {new Date().getFullYear()} Ayush Kumar 🕸️ All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-xs">
          <a
            href="mailto:ayushkr0104@gmail.com"
            className="hover:text-white transition duration-200"
          >
            Contact
          </a>
          <a
            href="https://github.com/Akdest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ayushkumar-akdest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

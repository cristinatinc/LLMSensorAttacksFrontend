import Link from 'next/link';
import { Home, Info, Mail, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black dark:bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white dark:text-white flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Physical Intrusion Detection System
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white dark:text-white flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white dark:text-white flex items-center">
                <Info className="w-4 h-4 mr-1" />
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white dark:text-white flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
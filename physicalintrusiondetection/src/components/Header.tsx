import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black dark:bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white dark:text-white">
          Physical Intrusion Detection System
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white dark:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white dark:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white dark:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

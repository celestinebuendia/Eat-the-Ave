"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname != "/studio") {
    return (
      <nav className="border-b border-white sticky top-0 bg-black text-gray-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-xl md:hover:text-primary-400">
            Home
          </Link>
          <ul className="flex items-center justify-end space-x-6 text-md font-medium">
            <li className="md:hover:text-primary-400">
              <Link href="/eateries">Eateries</Link>
            </li>
            <li className="md:hover:text-primary-400">
              <Link href="/eats">Eats</Link>
            </li>
            {/* <li className="md:hover:underline">
              <Link href="/blog">Blog</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

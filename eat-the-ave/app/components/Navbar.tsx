import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white sticky top-0 bg-black text-gray-100 z-10">
    <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
      <Link href="/" className="font-medium text-lg md:hover:underline">
      Eat the Ave
      </Link>
      <ul className="flex items-center justify-end space-x-4 text-sm font-medium">
      <li className="md:hover:underline">
        <Link href="/eats">Eats</Link>
      </li>
      <li className="md:hover:underline">
        <Link href="/history">History</Link>
      </li>
      <li className="md:hover:underline">
        <Link href="/about">About</Link>
      </li>
      </ul>
    </div>
    </nav>
  );
}
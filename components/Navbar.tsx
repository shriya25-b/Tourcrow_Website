import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-gradient-to-b from-black/50 to-transparent">
      <nav className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <button
            className="text-brand-yellow md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <div
            className={`absolute md:relative top-16 left-0 right-0 bg-black/80 md:bg-transparent transition-all ${
              isOpen ? "block" : "hidden"
            } md:block border-4 md:border-0 border-brand-yellow rounded-md md:rounded-none p-4 md:p-0`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-14 text-brand-yellow text-center">
              <li>
                <Link
                  href="/"
                  className="block py-2 md:py-0 hover:opacity-80 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 md:py-0 hover:opacity-80 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#discover"
                  className="block py-2 md:py-0 hover:opacity-80 transition-opacity"
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  href="#places"
                  className="block py-2 md:py-0 hover:opacity-80 transition-opacity"
                >
                  Places
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

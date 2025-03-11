import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <nav className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="border-4 border-brand-yellow rounded-full px-12 py-3 bg-black/80">
            <ul className="flex space-x-14 text-brand-yellow">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#discover" className="hover:opacity-80 transition-opacity">
                  Discover
                </Link>
              </li>
              <li>
                <Link href="#places" className="hover:opacity-80 transition-opacity">
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
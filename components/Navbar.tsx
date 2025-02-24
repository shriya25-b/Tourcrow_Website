const Navbar = ()=> {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <nav className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="border-2 border-brand-yellow rounded-full px-8 py-2 backdrop-blur-sm bg-black/20">
            <ul className="flex space-x-8 text-brand-yellow">
              <li>
                <a href="#home" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:opacity-80 transition-opacity">
                  Discover
                </a>
              </li>
              <li>
                <a href="#places" className="hover:opacity-80 transition-opacity">
                  Places
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
import Image from "next/image"
import Link from "next/link"

export default function Section7() {
  return (
    <main className="h-64 text-white relative">
      <div className=" bg-black absolute inset-0 z-0"></div>

      {/* Content */}
      <div className=" relative z-10">
        <nav className="w-3/4 container mx-auto px-4 py-6 flex items-center justify-around">
          {/* Logo */}
          <div className="flex items-center ml-[-60px]">
            <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-32 text-lg">
            <div className="space-y-2">
              <h2 className="font-semibold">Travel</h2>
              <p className="text-sm text-white max-w-[200px]">
                You choose the Destination, We offer you the Experience.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">About</h2>
              <ul className="space-y-1 text-sm text-white">
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    New & Blow
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Company</h2>
              <ul className="space-y-1 text-sm text-white">
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Plan & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Become a member
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Support</h2>
              <ul className="space-y-1 text-sm text-white">
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fec90f]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        {/* <button className="md:hidden fixed top-6 right-4 z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}

        {/* Decorative Footer */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <div className="w-full">
           <path d="M0,0 L1200,0 L1200,120 L0,120 Z" className="fill-black opacity-10" />
           </div>
        </div> */}
      </div>
    </main>
  )
}
import Image from "next/image"
import Link from "next/link"

export default function Section7() {
  return (
    <main className="h-auto text-white relative bg-black">
      <div className="relative z-10">
        <nav className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Logo + Travel Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-semibold text-lg">Travel</h2>
              <div className="flex flex-col">
                <p className="text-sm text-white max-w-xs">
                  You choose the Destination,
                </p>
                <p className="text-sm text-white max-w-xs">
                  We offer you the Experience.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mt-6 md:mt-0">
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">About</h2>
              <ul className="space-y-1 text-sm text-white">
                <li><Link href="#" className="hover:text-[#fec90f]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">Features</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">New & Blow</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Company</h2>
              <ul className="space-y-1 text-sm text-white">
                <li><Link href="#" className="hover:text-[#fec90f]">Team</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">Plan & Pricing</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">Become a member</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Support</h2>
              <ul className="space-y-1 text-sm text-white">
                <li><Link href="#" className="hover:text-[#fec90f]">FAQs</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">Support Center</Link></li>
                <li><Link href="#" className="hover:text-[#fec90f]">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </main>
  )
}
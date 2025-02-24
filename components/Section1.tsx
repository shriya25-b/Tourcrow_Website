import Link from "next/link"

export default function Section1() {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 pt-24">
        {/* Logo Section */}
        <div className="text-center md:text-left space-y-16">
          <img src="/TourCrowText.svg" alt="TourCrow text" className="mx-auto md:mx-0 w-full max-w-md" />

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8">
            <Link href="/host-trip" className="inline-block">
              <button className="w-full sm:w-auto bg-[#ffffff] hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-12 rounded-full transition-colors duration-300 text-xl">
                Host Trip
              </button>
            </Link>
            <Link href="/join-trip" className="inline-block">
              <button className="w-full sm:w-auto bg-[#ffffff] hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-12 rounded-full transition-colors duration-300 text-xl">
                Join Trip
              </button>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-white space-y-8">
          <section>
            <h2 className="text-brand-yellow text-3xl md:text-4xl font-bold mb-2">Why Travelers Love Us</h2>
            <p className="text-lg">Hassle-free trips | Exclusive experiences | Meet your favorite influencers</p>
          </section>

          <section>
            <h2 className="text-brand-yellow text-3xl md:text-4xl font-bold mb-2">Travel Beyond Screens!</h2>
            <p className="text-lg">
              A travel platform that bridges the gap between influencers and their audience through exclusive
              experiential trips.
            </p>
          </section>

          <section>
            <h2 className="text-brand-yellow text-3xl md:text-4xl font-bold mb-4">What's In It For Customers?</h2>
            <ul className="space-y-3 text-lg">
              <li>Travel with your favourite influencer and get to experience their world.</li>
              <li>Meet like-minded people from the same fan community.</li>
              <li>
                Get an opportunity to witness behind the scenes of content creation which will give insights to aspiring
                content creators.
              </li>
              <li>Once in a life time opportunity to bond with your favorite influencers, beyond the screen.</li>
              <li>Premium and well-organized travel experiences with safety and comfort ensured.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
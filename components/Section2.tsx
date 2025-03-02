import Image from "next/image";

export default function Section2() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-28">
        {/* Section Title */}
      
        
        {/* Row 1: Text on Left, Illustration on Right */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-64">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-[#ffcd13]">
              Why Travelers Love Us
            </h3>
            <div className="space-y-2">
              <p className="pl-4 text-2xl font-semibold text-black">
                Hassle-free trips | Exclusive experiences |
              </p>
              <p className="pl-4 text-2xl font-semibold text-black">
                Meet your favorite influencers
              </p>
            </div>
          </div>
          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-center">
            <div className="relative">
              <Image
                src="/section2_illustration1.svg"
                alt="Traveler with luggage"
                width={400}
                height={400}
                className="object-contain mt-40 max-h-96"
              />
            </div>
          </div>
        </div>
        
        {/* Row 2: Illustration on Left, Text on Right */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-64">
          {/* Left Column: Illustration */}
          <div className="flex justify-center md:justify-center order-2 md:order-1">
            <div className="relative">
              <Image
                src="/section2_illustration2.svg"
                alt="Excited traveler with luggage"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Column: Text */}
          <div className="space-y-6 flex flex-col order-1 md:order-2">
            <h3 className="text-5xl font-bold text-[#ffcd13]">
              Travel Beyond Screens!
            </h3>
            <div className="space-y-2">
              <p className="pl-4 text-2xl text-right font-semibold text-black">
                A travel platform that bridges the gap between
              </p>
              <p className="pl-4 text-2xl text-right font-semibold text-black">
                influencers and their audience through
              </p>
              <p className="pl-4 text-2xl text-right font-semibold text-black">
                exclusive experiential trips.
              </p>
            </div>
          </div>
        </div>
        
        {/* Row 3: Text on Left, Illustration on Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-[#ffcd13]">
            What’s in it for Customers?
            </h3>
            <div className="space-y-2">
              <p className="pl-4 text-2xl font-semibold text-black">
                Travel with your favourite influencer and get to experience their world.
              </p>
              <p className="pl-4 text-2xl font-semibold text-black">
                Meet like-minded people from the same fan community.
              </p>
              <p className="pl-4 text-2xl font-semibold text-black">
                Get an opportunity to witness behind the scenes of content creation which will give insights to aspiring content creators.
              </p>
              <p className="pl-4 text-2xl font-semibold text-black">
                Once in a life time opportunity to bond with your favorite influencers, beyond the screen.
              </p>
              <p className="pl-4 text-2xl font-semibold text-black">
                Premium and well-organized travel experiences with safety and comfort ensured.
              </p>
            </div>
          </div>
          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/section2_illustration3.svg"
                alt="Traveler with backpack and suitcase"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import Link from "next/link";
import Image from "next/image";

export default function Section1() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-8 overflow-hidden relative"
      style={{ backgroundImage: "url('/bg_section1.svg')" }}
    >
      {/* Flying Crow Animations */}
      <div className="absolute top-10 left-0 w-full pointer-events-none">
        {/* First Crow */}
        <img
          src="/bird.gif"
          alt="Flying Crow 1"
          className="w-24 sm:w-32 md:w-40 h-auto absolute animate-fly1 z-[9999]"
        />
        {/* Second Crow (Evenly Spaced) */}
        <img
          src="/bird.gif"
          alt="Flying Crow 2"
          className="w-24 sm:w-32 md:w-40 h-auto absolute animate-fly2 z-[9999]"
        />
      </div>

      {/* Title Image */}
      <div className="relative z-10 max-w-4xl text-center space-y-12">
        <div className="flex justify-center mt-[-60px] sm:mt-[-80px] md:mt-[-100px]">
          <Image
            src="/TourCrowText.svg"
            alt="TourCrow text"
            width={1000}
            height={500}
            layout="responsive"
            className="w-full h-auto max-w-3xl mx-auto opacity-0 animate-fadeIn"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <Link href="/host-trip" className="inline-block">
            <button className="w-[200px] sm:w-auto bg-white hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-8 sm:px-12 rounded-full transition-colors duration-300 text-lg sm:text-xl border-2 border-black">
              Host Trip
            </button>
          </Link>
          <Link href="/join-trip" className="inline-block">
            <button className="w-[200px] sm:w-auto bg-white hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-8 sm:px-12 rounded-full transition-colors duration-300 text-lg sm:text-xl border-2 border-black">
              Join Trip
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* Prevent Horizontal Scroll */
        html, body {
          overflow-x: hidden;
        }

        /* First Crow Animation */
        .animate-fly1 {
          position: absolute;
          left: -15%;
          top: 50px;
          animation: flyAcross 6s linear infinite;
        }

        /* Second Crow (Evenly Spaced from Start) */
        .animate-fly2 {
          position: absolute;
          left: -15%;
          top: 100px;
          animation: flyAcross 8s linear infinite;
        }

        @keyframes flyAcross {
          from {
            transform: translateX(-20%);
          }
          to {
            transform: translateX(110vw);
          }
        }
      `}</style>
    </section>
  );
}
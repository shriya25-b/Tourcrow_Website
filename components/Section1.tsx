import Link from "next/link";
import Image from "next/image";

export default function Section1() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/bg1.png')" }} // Replace with your image
    >
      <div className="relative z-10 max-w-4xl text-center space-y-12 px-4 sm:px-8 md:px-12">
        {/* GIFs on the left and right above the image */}
        <div className="absolute top-[-50px] left-0 right-0 flex justify-between px-4 sm:px-12">
          {/* Left Side GIFs */}
          <div className="flex flex-col items-start space-y-8 sm:space-y-10 md:space-y-12">
            {/* <img
              src="/gif/birdanimation_2.gif"
              alt="Flying Bird Left 1"
              className="w-96 sm:w-99 md:w-120 h-auto"
            /> */}
            {/* <img
              src="/gif/birdanimation_2.gif"
              alt="Flying Bird Left 2"
              className="w-90 sm:w-96 md:w-120 h-auto ml-4 sm:ml-6 -scale-x-100"
            />         */}
          </div>

          {/* Right Side GIFs */}
          <div className="flex flex-col items-end space-y-8 sm:space-y-10 md:space-y-12">
            {/* <img
              src="/gif/birdanimation_2.gif"
              alt="Flying Bird Right 1"
              className="w-96 sm:w-99 md:w-120 h-auto"
            /> */}
            {/* <img
              src="/gif/birdanimation_2.gif"
              alt="Flying Bird Right 2"
              className="w-90 sm:w-96 md:w-120 h-auto mr-4 sm:mr-6"
            /> */}
          </div>
        </div>

        {/* Increased Image Size */}
        <div className="flex justify-center mt-[-80px] sm:mt-[-100px] md:mt-[-120px]">
          <Image
            src="/TourCrowText.svg"
            alt="TourCrow text"
            width={1200}
            height={675}
            layout="responsive"
            className="w-full h-auto max-w-3xl mx-auto opacity-0 animate-fadeIn"
          />
        </div>

        {/* Buttons Centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <Link href="/host-trip" className="inline-block">
            <button className="w-full sm:w-auto bg-white hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-8 sm:px-12 rounded-full transition-colors duration-300 text-xl border-2 border-black">
              Host Trip
            </button>
          </Link>
          <Link href="/join-trip" className="inline-block">
            <button className="w-full sm:w-auto bg-white hover:bg-[#fec90f] text-[#231f20] font-bold py-4 px-8 sm:px-12 rounded-full transition-colors duration-300 text-xl border-2 border-black">
              Join Trip
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

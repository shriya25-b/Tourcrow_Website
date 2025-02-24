import Image from "next/image";

const Section3 = () => {
  return (
    <div className=" h-screen pt-6 flex flex-col items-center">
      <h1 className="w-full text-[#231F20] text-center font-montserrat text-4xl font-bold">Influencer Categories</h1>
      <div className="mt-6 grid grid-cols-4 place-items-center h-4/5 w-2/3">
        <div className="w-full h-full text-center flex flex-col items-center">
          {/* Image Box */}
          <div className="relative w-2/3 h-80 mb-3 border-4 border-white">
            <Image src="/images/img1.png" alt="Travel Influencers" fill className="object-cover" />
          </div>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Travel</h2>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Influencers</h2>
        </div>
        <div className="w-full h-full text-center flex flex-col items-center justify-end">
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Tech</h2>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Influencers</h2>
          <div className="relative w-2/3 h-80 mt-3 border-4 border-white">
            <Image src="/images/img2.png" alt="Tech Influencers" fill className="object-cover" />
          </div>
        </div>
        <div className="w-full h-full text-center flex flex-col items-center">
          <div className="relative w-2/3 h-80 mb-3 border-4 border-white">
            <Image src="/images/img3.png" alt="Fitness Influencers" fill className="object-cover" />
          </div>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Fitness</h2>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Influencers</h2>
        </div>
        <div className="w-full h-full text-center flex flex-col items-center justify-end">
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Fashion</h2>
          <h2 className="text-[#231F20] font-semibold font-montserrat text-xl">Influencers</h2>
          <div className="relative w-2/3 h-80 mt-3 border-4 border-white">
            <Image src="/images/img4.jpeg" alt="Fashion Influencers" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

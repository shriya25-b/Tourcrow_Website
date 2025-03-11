import Image from "next/image";

const Section4 = () => {
  return (
    <div className=" h-screen pt-6 flex flex-col items-center">

      <h1 className="text-center text-black text-5xl md:text-6xl font-bold mb-0">Influencer Categories</h1>
      <div className="mt-6 grid grid-cols-4 place-items-center h-4/5 w-2/3">
        <div className="w-full h-full text-center flex flex-col items-center">
          {/* Travel influcenser */}
          <Image
            src="/images/img1.svg"
            alt="Travel Influencers"
            width={200} // w-64 = 256px
            height={100} // h-48 = 192px
            className="object-cover mt-28"
          />
        </div>

         {/* Tech influcenser */}
        <div className="w-full h-full text-center flex flex-col items-center justify-end">
        <Image
            src="/images/img2.svg"
            alt="Tech Influencers"
            width={200} // w-64 = 256px
            height={100} // h-48 = 192px
            className="object-cover mb-28"
          />
        </div>

         {/* Fitness influcenser */}
        <div className="w-full h-full text-center flex flex-col items-center">
        <Image
            src="/images/img3.svg"
            alt="Fitness Influencers"
            width={200} // w-64 = 256px
            height={100} // h-48 = 192px
            className="object-cover mt-28"
          />
        </div>

        {/* Fashion influcenser */}
        <div className="w-full h-full text-center flex flex-col items-center justify-end">
        <Image
            src="/images/img4.svg"
            alt="Fashion Influencers"
            width={200} // w-64 = 256px
            height={100} // h-48 = 192px
            className="object-cover mb-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;

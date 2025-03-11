
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const tickerData = [
  {
    image: "/destination1.jpg",
    text: "Himachal Pradesh",
    subText: "Through the land of Snow",
  },
  {
    image: "/destination2.jpg",
    text: "Ladakh",
    subText: "The Moon Land",
  },
  {
    image: "/destination3.jpg",
    text: "Uttarpradesh",
    subText: "Through the land of Snow",
  },
];

export default function Section5({ speed = 50, direction = "left" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const calculateDuration = () => {
    if (contentWidth === 0) return 20;
    return contentWidth / speed;
  };

  useEffect(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    if (contentRef.current) setContentWidth(contentRef.current.scrollWidth);
  }, [tickerData]);

  useEffect(() => {
    if (contentWidth === 0 || containerWidth === 0 || isDragging || isPaused) return;

    const duration = calculateDuration();
    const distance = direction === "left" ? -contentWidth : contentWidth;

    controls.start({
      x: distance,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    return () => controls.stop();
  }, [contentWidth, containerWidth, speed, direction, isDragging, isPaused, controls]);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg5.png')" }}
    >

      {/* Heading */}
      <div className="absolute top-5 left-0 w-full">
        <h1 className="text-center text-black text-5xl md:text-6xl font-bold mb-24">
          Destination For Every Bucketlist
        </h1>
      </div>


       {/* Left Div with SVG Map */}
       <div className="w-[500px] h-[500px] ml-36 flex items-center justify-center">
        <img 
          src="/map.svg" 
          alt="India Map" 
          className="w-full h-full object-contain"
        />
      </div>


      <div
        ref={containerRef}
        className="relative overflow-hidden w-2/5 bg-opacity-40 ml-auto mr-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Left Blur Effect */}
        <div className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-amber-100 via-transparent to-transparent" />

        {/* Right Blur Effect */}
        <div className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-amber-100 via-transparent to-transparent" />
        {/* Scorlling content*/}
        <motion.div
          ref={contentRef}
          className="inline-flex items-center whitespace-nowrap py-3"
          initial={{ x: direction === "" ? 0 : -contentWidth }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -contentWidth, right: containerWidth }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          dragElastic={0.1}
        >
          {/* Original slides */}
          {tickerData.map((item, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[250px] rounded-xl overflow-hidden mx-3 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              {/* Overlay and Bottom Left Aligned Text */}
              <div className="absolute left-0 bottom-0 w-full p-3">
                <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                <p className="text-white text-sm  mt-1">
                  {item.subText}</p>
              </div>
            </div>
          ))}

          {/* Duplicate slides for seamless looping */}
          {tickerData.map((item, index) => (
            <div
              key={`dup-${index}`}
              className="relative w-[300px] h-[250px] rounded-xl overflow-hidden mx-3 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              {/* Overlay and Bottom Left Aligned Text */}
              <div className="absolute left-0 bottom-0 w-full p-3">
                <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                <p className="text-white text-sm  mt-1">
                  {item.subText}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

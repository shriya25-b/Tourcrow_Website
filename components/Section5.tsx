
// "use client";

// import * as d3 from "d3";
// import { useEffect, useRef, useState } from "react";

// export default function Section5() {
//   const mapRef = useRef<SVGSVGElement>(null);
//   const [tooltipData, setTooltipData] = useState({ show: false, text: "", x: 0, y: 0 });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/full_data-1.json");
//         if (!response.ok) throw new Error("Failed to fetch map data");
//         const data = await response.json();
//         drawMap(data);
//       } catch (error) {
//         console.error("Error loading map data:", error);
//       }
//     };

//     const drawMap = (geoData: any) => {
//       const width = 600;
//       const height = 800;

//       const projection = d3.geoMercator().fitSize([width, height], geoData);
//       const path = d3.geoPath().projection(projection);

//       const svg = d3
//         .select(mapRef.current)
//         .attr("width", width)
//         .attr("height", height);
//       svg.selectAll("*").remove(); // Clear previous map

//       // ✅ Draw states
//       svg
//         .selectAll("path")
//         .data(geoData.features)
//         .enter()
//         .append("path")
//         .attr("d", path as any)
//         .attr("fill", "#fec90f")
//         .attr("stroke", "#000")
//         .attr("stroke-width", 0.5)
//         .on("mouseover", function (event, d: any) {
//           const [x, y] = d3.pointer(event, document.body);
//           setTooltipData({
//             show: true,
//             text:
//               d.id === "Jammu & Kasmir"
//                 ? "Jammu & Kashmir"
//                 : d.id,
//             x: x + 10,
//             y: y + 10,
//           });
//           d3.select(this).attr("fill", "#ffdd57");
//         })
//         .on("mousemove", (event) => {
//           const [x, y] = d3.pointer(event, document.body);
//           setTooltipData((prev) => ({ ...prev, x: x + 10, y: y + 10 }));
//         })
//         .on("mouseout", function () {
//           setTooltipData({ show: false, text: "", x: 0, y: 0 });
//           d3.select(this).attr("fill", "#fec90f");
//         });

//       // ✅ Add markers and labels for specific states only
//       const targetStates = ["Jammu & Kasmir", "Himachal Pradesh", "Uttaranchal"];

//       geoData.features
//         .filter((d: any) => targetStates.includes(d.id))
//         .forEach((d: any) => {
//           const centroid = path.centroid(d);
//           if (centroid.some(isNaN)) return;

//           // ✅ Add marker
//           const marker = svg
//             .append("circle")
//             .attr("cx", centroid[0])
//             .attr("cy", centroid[1])
//             .attr("r", 4) // Normal size
//             .attr("fill", "red");

//           // ✅ Add label
//           const label = svg
//             .append("text")
//             .attr("x", centroid[0] + 5)
//             .attr("y", centroid[1] - 5)
//             .text(d.id === "Jammu & Kasmir" ? "Jammu & Kashmir" : d.id)
//             .attr("font-size", "12px") // Normal size
//             .attr("fill", "black")
//             .attr("font-weight", "bold");

//           // ✅ Increase size on hover
//           marker
//             .on("mouseover", function () {
//               d3.select(this)
//                 .transition()
//                 .duration(150)
//                 .attr("r", 8); // Increase size of marker
//               label
//                 .transition()
//                 .duration(150)
//                 .attr("font-size", "16px"); // Increase size of text
//             })
//             .on("mouseout", function () {
//               d3.select(this)
//                 .transition()
//                 .duration(150)
//                 .attr("r", 4); // Reset size of marker
//               label
//                 .transition()
//                 .duration(150)
//                 .attr("font-size", "12px"); // Reset size of text
//             });

//           label
//             .on("mouseover", function () {
//               d3.select(this)
//                 .transition()
//                 .duration(150)
//                 .attr("font-size", "16px"); // Increase size of text
//               marker
//                 .transition()
//                 .duration(150)
//                 .attr("r", 8); // Increase size of marker
//             })
//             .on("mouseout", function () {
//               d3.select(this)
//                 .transition()
//                 .duration(150)
//                 .attr("font-size", "12px"); // Reset size of text
//               marker
//                 .transition()
//                 .duration(150)
//                 .attr("r", 4); // Reset size of marker
//             });
//         });
//     };

//     fetchData();

//     return () => {
//       d3.select(mapRef.current).selectAll("*").remove(); // Cleanup
//     };
//   }, []);

//   return (
//     <section
//       className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: "url('/bg5.png')" }}
//     >
//       {/* Heading */}
//       <div className="w-full mb-12">
//         <h1 className="text-center text-black text-5xl md:text-6xl font-bold">
//           Destination For Every Bucketlist
//         </h1>
//       </div>

//       {/* ✅ Map container */}
//       <div className="relative flex justify-start mt-5 ml-[-700px]">
//         <svg ref={mapRef} className="rounded-lg"></svg>
//         {tooltipData.show && (
//           <div
//             className="absolute z-50 bg-white px-3 py-2 rounded-md shadow-md border border-gray-200 pointer-events-none"
//             style={{
//               left: `${tooltipData.x}px`,
//               top: `${tooltipData.y}px`,
//             }}
//           >
//             <span className="font-medium text-gray-800">{tooltipData.text}</span>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




//---------------------------------------------------------------------------------------done
'use client'
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import * as d3 from "d3";

const tickerData = [
  {
    image: "destination1.jpg",
    text: "Himachal Pradesh",
    subText: "Through the land of Snow",
  },
  {
    image: "destination2.jpg",
    text: "Jammu & Kashmir",
    subText: "The moon land",
  },
  {
    image: "destination3.jpg",
    text: "Uttaranchal",
    subText: "Through the land of snow",
  },
];

function App() {
  const mapRef = useRef<SVGSVGElement>(null);
  const [tooltipData, setTooltipData] = useState({ show: false, text: "", x: 0, y: 0 });

  // Ticker state and refs
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 40;
  const direction = "left";

  const calculateDuration = () => {
    if (contentWidth === 0) return 20;
    return contentWidth / speed;
  };

  // Ticker effects
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/full_data-1.json");
        if (!response.ok) throw new Error("Failed to fetch map data");
        const data = await response.json();
        drawMap(data);
      } catch (error) {
        console.error("Error loading map data:", error);
      }
    };

    const drawMap = (geoData: any) => {
      const width = 600;
      const height = 800;

      const projection = d3.geoMercator().fitSize([width, height], geoData);
      const path = d3.geoPath().projection(projection);

      const svg = d3
        .select(mapRef.current)
        .attr("width", width)
        .attr("height", height);
      svg.selectAll("*").remove();

      svg
        .selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path as any)
        .attr("fill", "#fec90f")
        .attr("stroke", "#000")
        .attr("stroke-width", 0.5)
        .on("mouseover", function (event, d: any) {
          const [x, y] = d3.pointer(event, document.body);
          setTooltipData({
            show: true,
            text: d.id === "Jammu & Kasmir" ? "Jammu & Kashmir" : d.id,
            x: x + 10,
            y: y + 10,
          });
          d3.select(this).attr("fill", "#ffdd57");
        })
        .on("mousemove", (event) => {
          const [x, y] = d3.pointer(event, document.body);
          setTooltipData((prev) => ({ ...prev, x: x + 10, y: y + 10 }));
        })
        .on("mouseout", function () {
          setTooltipData({ show: false, text: "", x: 0, y: 0 });
          d3.select(this).attr("fill", "#fec90f");
        });

      const targetStates = ["Jammu & Kasmir", "Himachal Pradesh", "Uttaranchal"];

      geoData.features
        .filter((d: any) => targetStates.includes(d.id))
        .forEach((d: any) => {
          const centroid = path.centroid(d);
          if (centroid.some(isNaN)) return;

          const marker = svg
            .append("circle")
            .attr("cx", centroid[0])
            .attr("cy", centroid[1])
            .attr("r", 4)
            .attr("fill", "red");

          const label = svg
            .append("text")
            .attr("x", centroid[0] + 5)
            .attr("y", centroid[1] - 5)
            .text(d.id === "Jammu & Kasmir" ? "Jammu & Kashmir" : d.id)
            .attr("font-size", "12px")
            .attr("fill", "black")
            .attr("font-weight", "bold");

          marker
            .on("mouseover", function () {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("r", 8);
              label
                .transition()
                .duration(150)
                .attr("font-size", "16px");
            })
            .on("mouseout", function () {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("r", 4);
              label
                .transition()
                .duration(150)
                .attr("font-size", "12px");
            });

          label
            .on("mouseover", function () {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("font-size", "16px");
              marker
                .transition()
                .duration(150)
                .attr("r", 8);
            })
            .on("mouseout", function () {
              d3.select(this)
                .transition()
                .duration(150)
                .attr("font-size", "12px");
              marker
                .transition()
                .duration(150)
                .attr("r", 4);
            });
        });
    };

    fetchData();

    return () => {
      d3.select(mapRef.current).selectAll("*").remove();
    };
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg5.png')" }}
    >
      {/* Heading */}
      <div className="w-full mb-12">
        <h1 className="text-center text-black text-5xl md:text-6xl font-bold">
          Destination For Every Bucketlist
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex w-full max-w-7xl mx-auto px-0">
        {/* Map Section */}
        <div className="w-1/2 relative">
          <div className="rounded-xl p-5">
            <svg ref={mapRef} className="w-full h-auto -ml-10"></svg>
            {tooltipData.show && (
              <div
                className="absolute z-50 bg-white px-3 py-2 rounded-md shadow-md border border-gray-200 pointer-events-none"
                style={{
                  left: `${tooltipData.x}px`,
                  top: `${tooltipData.y}px`,
                }}
              >
                <span className="font-medium text-gray-800">{tooltipData.text}</span>
              </div>
            )}
          </div>
        </div>

        {/* Ticker Section */}
        <div
          ref={containerRef}
          className="w-1/2 h-72 relative overflow-hidden rounded-xl mt-56"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Blur Effects */}
          <div className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-amber-100 via-transparent to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-amber-100 via-transparent to-transparent" />

          {/* Scrolling content */}
          <motion.div
            ref={contentRef}
            className="inline-flex items-center whitespace-nowrap py-3"
            initial={{ x: direction === "left" ? 0 : -contentWidth }}
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
                <div className="absolute left-0 bottom-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                  <p className="text-white text-sm mt-1">{item.subText}</p>
                </div>
              </div>
            ))}

            {/* Duplicate slides */}
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
                <div className="absolute left-0 bottom-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-lg font-semibold">{item.text}</h3>
                  <p className="text-white text-sm mt-1">{item.subText}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default App;




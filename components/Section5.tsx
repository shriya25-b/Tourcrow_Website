"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import * as d3 from "d3"

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
]

const Section5 = () => {
  const mapRef = useRef<SVGSVGElement>(null)
  const [tooltipData, setTooltipData] = useState({ show: false, text: "", x: 0, y: 0 })

  // Ticker state and refs
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const speed = 40
  const direction = "left"

  const calculateDuration = () => {
    if (contentWidth === 0) return 20
    return contentWidth / speed
  }

  // Ticker effects
  useEffect(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth)
    if (contentRef.current) setContentWidth(contentRef.current.scrollWidth)
  }, [tickerData])

  useEffect(() => {
    if (contentWidth === 0 || containerWidth === 0 || isDragging || isPaused) return

    const duration = calculateDuration()
    const distance = direction === "left" ? -contentWidth : contentWidth

    controls.start({
      x: distance,
      transition: {
        duration,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })

    return () => controls.stop()
  }, [contentWidth, containerWidth, speed, direction, isDragging, isPaused, controls])

  // Interactive India Map
  useEffect(() => {
    if (!mapRef.current) return

    d3.select(mapRef.current).selectAll("*").remove()

    const svg = d3.select(mapRef.current)
    const g = svg.append("g")

    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0)

    const stateData: Record<string, string> = {
      "IN-JK": "Jammu & Kashmir - Population: 13M",
      "IN-HP": "Himachal Pradesh - Population: 7.5M",
      "IN-UT": "Uttarakhand - Population: 10M",
    }

    fetch("/india.svg")
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data, "image/svg+xml")
        const mapElement = xmlDoc.documentElement

        g.node()?.appendChild(mapElement)

        const path = d3.geoPath()

        g.selectAll<SVGPathElement, unknown>("path")
          .attr("fill", "#fec90f")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 1)
          .each(function (_, i) {
            const stateId = d3.select(this).attr("id") || `State-${i + 1}`
            const stateInfo = stateData[stateId]

            if (stateInfo) {
              const centroid = getCentroid(this)
              if (centroid) {
                const marker = g
                  .append("circle")
                  .attr("cx", centroid[0])
                  .attr("cy", centroid[1])
                  .attr("r", 4)
                  .attr("fill", "#ff0000")
                  .attr("stroke", "#ffffff")
                  .attr("stroke-width", 1)
                  .attr("class", `marker-${stateId}`)

                const label = g
                  .append("text")
                  .attr("x", centroid[0])
                  .attr("y", centroid[1] - 10)
                  .attr("text-anchor", "middle")
                  .attr("font-size", "12px")
                  .attr("font-weight", "bold")
                  .attr("fill", "#000000")
                  .attr("stroke", "#000000")
                  .attr("stroke-width", 0.3)
                  .text(stateInfo.split(" - ")[0])
                  .attr("class", `label-${stateId}`)

                d3.select(this)
                  .on("mouseover", (event) => {
                    marker.transition().duration(200).attr("r", 8)
                    label.transition().duration(200).attr("font-size", "16px").attr("font-weight", "bold")

                    d3.select(this).transition().duration(200).attr("fill", "#FEE99F")
                  })
                  .on("mousemove", (event) => {
                    tooltip.style("left", event.pageX + 10 + "px").style("top", event.pageY - 10 + "px")
                  })
                  .on("mouseout", () => {
                    tooltip.style("opacity", 0)

                    marker.transition().duration(200).attr("r", 4)
                    label.transition().duration(200).attr("font-size", "12px").attr("font-weight", "bold")

                    d3.select(this).transition().duration(200).attr("fill", "#fec90f")
                  })
              }
            }
          })
      })
      .catch((error) => console.error("Error loading SVG:", error))

    function getCentroid(pathNode: SVGPathElement): [number, number] | null {
      try {
        const bbox = pathNode.getBBox()
        return [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2]
      } catch (e) {
        console.error("Error calculating centroid:", e)
        return null
      }
    }
  }, [])

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg Contact Section.png')" }}
    >
      {/* Heading */}
      <div className="w-full mb-12">
        <h1 className="text-center text-black text-5xl md:text-6xl font-bold">Destination For Every Bucketlist</h1>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="relative">
          <div className="rounded-xl p-3 overflow-hidden h-full">
            <svg ref={mapRef} className="w-full h-[700px] object-contain"></svg>
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
          className="w-full h-72 relative overflow-hidden rounded-xl mt-48"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-amber-100 via-transparent to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-amber-100 via-transparent to-transparent" />

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
            {tickerData.map((item, index) => (
              <div
                key={`dup-${index}`}
                className="relative w-[300px] h-[250px] rounded-xl overflow-hidden mx-3 shadow-lg"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.text} className="w-full h-full object-cover" />
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
  )
}

export default Section5


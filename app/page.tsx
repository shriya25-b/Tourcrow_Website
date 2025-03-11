// import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2"
import Section3 from "@/components/Section3"
import Section4 from "@/components/Section4"
import Section5 from "@/components/Section5"
import Section7 from "@/components/Section7"


export default function Page() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat">
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      {/* <Section3 /> */}
      <Section5/>
      <Section7 />
    </main>
  )
}
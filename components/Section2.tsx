"use client"

import { Users, Globe2, NotebookIcon as Lotus, Smartphone, MapPin } from "lucide-react"

export default function Section2() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
                <h1 className="text-center text-white text-5xl md:text-6xl font-bold mb-24">Why Choose Tourcrow?</h1>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    <Feature iconSrc="/users.svg" title="Community Focused" />
                    <Feature iconSrc="/globe.svg" title="Discover Hidden Gems" />
                    <Feature iconSrc="/yoga.svg" title="Stress-Free Travel" />
                    <Feature iconSrc="/mobile.svg" title="Meet Your Favourite Influencer" />
                    <Feature iconSrc="/location.svg" title="Local Experience" />
                </div>
            </div>
        </section>
    )
}

interface FeatureProps {
    iconSrc: string;
    title: string;
}


function Feature({ iconSrc, title }: { iconSrc: string; title: string }) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6 w-24 h-24">
                <div className="w-full h-full rounded-full border-2 border-[#fec90f] flex items-center justify-center bg-[#231f20]/50 group-hover:bg-[#231f20]/80 transition-colors">
                    <img src={iconSrc} alt={title} className="w-12 h-12" />
                </div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
        </div>
    );
}

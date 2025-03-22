"use client"

import { Users, Globe2, NotebookIcon as Lotus, Smartphone, MapPin } from "lucide-react"

export default function Section3() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        >
            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
                <h1 className="text-center text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-16 sm:mb-24">
                    Why Choose Tourcrow?
                </h1>

                {/* Features grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 max-w-6xl mx-auto">
    <Feature iconSrc="/community.svg" title="Community Focused" />
    <Feature iconSrc="/globe.svg" title="Discover Hidden Gems" />
    <Feature iconSrc="/yoga.svg" title="Stress-Free Travel" />
    <Feature iconSrc="/mobile.svg" title="Meet Your Favourite Influencer" />
    
    {/* Last icon centered on mobile */}
    <div className="col-span-full sm:col-auto flex justify-center">
        <Feature iconSrc="/location.svg" title="Local Experience" />
    </div>
</div>
            </div>
        </section>
    );
}

interface FeatureProps {
    iconSrc: string;
    title: string;
}

function Feature({ iconSrc, title }: FeatureProps) {
    return (
        
        <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6 w-20 h-20 sm:w-40 sm:h-40">
                <div className="bg-black w-full h-full rounded-full border-4 border-[#000000] flex items-center justify-center group-hover:bg-[#FEC90F]/80 transition-colors">
                    <img src={iconSrc} alt={title} className="w-14 h-14 sm:w-28 sm:h-28 group-hover:brightness-0" />
                </div>
            </div>
            <h3 className="text-black font-bold text-sm sm:text-lg md:text-xl">{title}</h3>
        </div>
    );
}

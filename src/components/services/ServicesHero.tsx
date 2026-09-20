import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Briefcase, GraduationCap, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // Team/Counseling
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", // Working/Lab
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", // Success/Professional
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", // Teaching
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", // Presentation
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", // Interview
];

interface ServicesHeroProps {
  onEnquire: () => void;
}

export function ServicesHero({ onEnquire }: ServicesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] to-[#F8FAFC] pt-[120px] pb-12 lg:pt-[160px] lg:pb-24 -mt-20 sm:-mt-24">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mt-12 md:mt-0 text-center md:text-left mx-auto md:mx-0"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">Premium Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-[#0A1A3A] leading-[1.05] tracking-tight mb-6 sm:mb-8 font-display">
            Beyond Learning. <br className="hidden sm:block"/>
            Towards <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Success.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            We provide an ecosystem of support to help you learn faster, build real-world experience, and land your dream job with confidence.
          </p>
          

        </motion.div>

        {/* Right: Vertical Marquee Waterfall */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 bg-slate-50/30 shadow-2xl shadow-blue-900/5 mt-8 md:mt-0">
          {/* Gradient Fades for smooth top/bottom edges */}
          <div className="absolute top-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-b from-[#FAFCFF] via-[#FAFCFF]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-t from-[#FAFCFF] via-[#FAFCFF]/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Rotated Grid Container */}
          <div className="absolute inset-0 transform -rotate-[8deg] scale-[1.3] origin-center grid grid-cols-2 gap-6 p-4">
            
            {/* Column 1: Scrolling UP */}
            <motion.div 
              animate={{ y: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex flex-col gap-6"
            >
              {[...SERVICE_IMAGES, ...SERVICE_IMAGES, ...SERVICE_IMAGES].map((img, i) => (
                <div key={`col1-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-lg group bg-white p-2">
                  <img src={img} className="w-full aspect-[4/5] object-cover rounded-3xl" />
                  <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-white font-bold leading-snug drop-shadow-md flex items-center gap-2">
                    <Target className="w-5 h-5" /> Career Growth
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Column 2: Scrolling DOWN */}
            <motion.div 
              animate={{ y: [-1200, 0] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex flex-col gap-6 -translate-y-1/2"
            >
              {[...SERVICE_IMAGES, ...SERVICE_IMAGES, ...SERVICE_IMAGES].reverse().map((img, i) => (
                <div key={`col2-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-lg group bg-white p-2">
                  <img src={img} className="w-full aspect-[3/4] object-cover rounded-3xl" />
                  {/* Glass hover effect */}
                  <div className="absolute inset-2 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                     <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                       Explore <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Central Floating Badge */}

          
        </div>

      </div>
    </section>
  );
}

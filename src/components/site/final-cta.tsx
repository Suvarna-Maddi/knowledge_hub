import { GraduationCap, Phone, ShieldCheck, Monitor, Rocket, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FinalCta() {
  return (
    <section className="relative py-32 w-full bg-white overflow-hidden flex items-center justify-center isolate">
      
      {/* 1. Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Tech Grid for Light Theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Central Content */}
      <div className="relative z-30 max-w-3xl mx-auto px-5 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide uppercase shadow-sm mb-8">
          <GraduationCap className="w-4 h-4" />
          Your Future Starts Here
        </div>

        {/* Headline */}
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
          Start Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Learning Journey</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Take the first step towards a successful future. Join Knowledge Hub and gain the skills, confidence, and real-world knowledge you need to grow.
        </p>

        {/* Single Action Button (Contact) */}
        <div className="relative z-20 flex justify-center mt-4">
          <a 
            href="tel:+917997908465" 
            className="group inline-flex items-center gap-4 bg-[#0B1F4D] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-blue-900 shadow-[0_10px_40px_-10px_rgba(11,31,77,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(11,31,77,0.7)] hover:-translate-y-1"
          >
            <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Users, Laptop, Briefcase, BookOpen, Target, Sparkles, Medal } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesHeroProps {
  onEnquire: () => void;
}

export function ServicesHero({ onEnquire }: ServicesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#020817] pt-[120px] pb-12 lg:pt-[160px] lg:pb-24 -mt-20 sm:-mt-24">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8 relative z-20"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 font-bold tracking-wide text-xs uppercase">Premium Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tight text-white font-display leading-[1.05]">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Learning.</span><br/>
              Towards <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Success.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We provide an ecosystem of support to help you learn faster, build real-world experience, and land your dream job with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={onEnquire}
                size="lg"
                className="h-14 rounded-full bg-blue-600 hover:bg-blue-500 px-8 text-sm font-extrabold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
              >
                Get Free Counseling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={onEnquire}
                size="lg"
                variant="outline"
                className="h-14 rounded-full border border-slate-600 bg-white/5 backdrop-blur-md px-8 text-sm font-extrabold text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-cyan-400" />
                See How It Works
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-bold text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <span>Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                </div>
                <span>Placement Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <Laptop className="w-4 h-4 text-purple-400" />
                </div>
                <span>Live Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Glass Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[500px] lg:h-[600px] hidden md:block perspective-1000"
          >
            {/* Center Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl animate-pulse" />
            
            {/* Floating Service Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[5%] z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-64 transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Career Guidance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Personalized roadmaps to help you navigate your tech career.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] right-[0%] z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-64 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">100% Placement</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Resume building, mock interviews, and guaranteed job assistance.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[5%] left-[20%] z-40 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30">
                <Medal className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Certifications</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Industry recognized certificates and global exam prep.</p>
            </motion.div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20" viewBox="0 0 500 600">
              <path d="M150,200 Q250,300 350,280" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M250,450 Q300,350 350,300" fill="none" stroke="#22D3EE" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="150" cy="200" r="4" fill="#60A5FA" />
              <circle cx="350" cy="280" r="4" fill="#60A5FA" />
              <circle cx="250" cy="450" r="4" fill="#22D3EE" />
            </svg>
          </motion.div>

        </div>
      </div>
      
      {/* Wave divider at bottom transitioning into the light slate-50 section below */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.6,103.9,86.1,154.5,76.5,209.64,66,265.17,66.45,321.39,56.44Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  );
}

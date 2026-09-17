import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone, Users, MonitorPlay, Briefcase, GraduationCap, Code2, Globe } from "lucide-react";

interface ServicesHeroProps {
  onEnquire: () => void;
}

export function ServicesHero({ onEnquire }: ServicesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#0B1E48] to-[#04112E] pt-[120px] pb-20 lg:pt-[160px] lg:pb-28 border-b border-white/5 -mt-20 sm:-mt-24">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[35rem] h-[35rem] bg-cyan-600/10 rounded-full blur-[90px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 lg:pr-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Enrolling Now for 2026 Batches
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                Master Skills <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Build Your Career</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Expert-led training programs in IT, Cloud, Software, and Communication with real-world learning and placement support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button 
                onClick={onEnquire}
                size="lg"
                className="group h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-base font-semibold text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] border-0"
              >
                Start Learning Today
                <ArrowUpRight className="ml-2 size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="group h-14 rounded-full border-white/10 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
              >
                <a href="tel:+917997908465">
                  <Phone className="mr-2 size-5 text-blue-300 group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
              </Button>
            </div>
            
            {/* Highlights */}
            <div className="pt-8 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Users className="size-5" />
                  <span className="text-xl font-bold text-white">500+</span>
                </div>
                <span className="text-sm font-medium text-blue-200/70">Students Trained</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <MonitorPlay className="size-5" />
                  <span className="text-xl font-bold text-white">30+</span>
                </div>
                <span className="text-sm font-medium text-blue-200/70">Courses Available</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <Briefcase className="size-5" />
                  <span className="text-xl font-bold text-white">100%</span>
                </div>
                <span className="text-sm font-medium text-blue-200/70">Placement Assist</span>
              </div>
            </div>
          </div>

          {/* Right Illustration/Visuals - Image */}
          <div className="relative hidden lg:flex h-[500px] w-full animate-in fade-in zoom-in-95 duration-1000 delay-200 items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Optional: Add a subtle glow behind the image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
              <img 
                src="/services.png" 
                alt="Knowledge Hub Services" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}

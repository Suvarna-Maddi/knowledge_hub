import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone, Users, MonitorPlay, Briefcase, GraduationCap, Code2, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ServicesHeroProps {
  onEnquire: () => void;
}

export function ServicesHero({ onEnquire }: ServicesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#0B1E48] to-[#04112E] pt-[120px] pb-20 lg:pt-[160px] lg:pb-28 border-b border-white/5 -mt-20 sm:-mt-24">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[35rem] h-[35rem] bg-cyan-600/20 rounded-full blur-[90px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-300 backdrop-blur-sm mx-auto lg:mx-0 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/20 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
              </span>
              Transform Your Career at Knowledge Hub
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter text-white font-display leading-[1.05] drop-shadow-2xl">
                Learn. Build. <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 filter drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">Succeed.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Knowledge Hub empowers students and professionals with <strong className="text-white font-bold">real-world IT skills, academic excellence, and language mastery</strong>. Let us bridge the gap between your ambition and industry demands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={onEnquire}
                size="lg"
                className="group h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-base font-extrabold uppercase tracking-wide text-white shadow-[0_4px_25px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(6,182,212,0.6)] border border-cyan-400/30"
              >
                Book Free Demo
                <ArrowUpRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button 
                onClick={onEnquire}
                size="lg"
                variant="outline"
                className="group h-14 rounded-xl border border-white/20 bg-white/5 px-8 text-base font-bold uppercase tracking-wide text-white hover:bg-white/15 hover:border-white/40 transition-all backdrop-blur-md shadow-[0_4px_25px_rgba(255,255,255,0.05)] hover:-translate-y-1"
              >
                <Phone className="mr-2 size-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                Get Free Counseling
              </Button>
            </div>
            
            {/* Highlights Bar */}
            <div className="pt-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(6,182,212,1)]" />
              
              <div className="flex flex-col items-center lg:items-start gap-1 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Users className="size-6 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                  <span className="text-2xl font-black text-white">1,500+</span>
                </div>
                <span className="text-sm font-bold text-blue-200/70 uppercase tracking-wider">Trained</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <MonitorPlay className="size-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <span className="text-2xl font-black text-white">40+</span>
                </div>
                <span className="text-sm font-bold text-blue-200/70 uppercase tracking-wider">Courses</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <Briefcase className="size-6 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  <span className="text-2xl font-black text-white">98%</span>
                </div>
                <span className="text-sm font-bold text-blue-200/70 uppercase tracking-wider">Success</span>
              </div>
            </div>
          </div>

          {/* Right Floating 3D Element (CSS Only) */}
          <div className="relative hidden lg:flex h-[600px] w-full items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300 perspective-1000">
            <div className="relative w-full max-w-[480px] aspect-square animate-[float_8s_ease-in-out_infinite]">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-4 rounded-full border border-cyan-500/30 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-blue-500/40 animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Central Glass Orb */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 backdrop-blur-xl border border-white/20 shadow-[0_0_100px_rgba(6,182,212,0.4),inset_0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_5s_infinite]" />
                
                {/* Floating Service Icons inside the Orb */}
                <div className="relative w-full h-full">
                  <div className="absolute top-[20%] left-[50%] -translate-x-1/2 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/30 animate-[float_3s_ease-in-out_infinite]">
                    <Code2 className="w-10 h-10 text-cyan-300" />
                  </div>
                  <div className="absolute top-[50%] left-[20%] -translate-y-1/2 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/30 animate-[float_4s_ease-in-out_infinite_reverse]">
                    <GraduationCap className="w-10 h-10 text-blue-300" />
                  </div>
                  <div className="absolute top-[50%] right-[20%] -translate-y-1/2 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/30 animate-[float_3.5s_ease-in-out_infinite_reverse]">
                    <Globe className="w-10 h-10 text-indigo-300" />
                  </div>
                  <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/30 animate-[float_4.5s_ease-in-out_infinite]">
                    <Briefcase className="w-10 h-10 text-emerald-300" />
                  </div>
                  
                  {/* Core Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-400/80 shadow-[0_0_50px_rgba(6,182,212,1)] animate-ping duration-[3000ms]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(255,255,255,1)]" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}


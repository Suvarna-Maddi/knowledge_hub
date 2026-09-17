import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight,
  Target, 
  Eye, 
  Gem, 
  CheckCircle2, 
  GraduationCap, 
  BriefcaseBusiness, 
  CalendarClock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

import classroomImage from "@/assets/classroom-training.jpg.asset.json";
import studentImage from "@/assets/knowledge-hub-student.jpg.asset.json";
import programmingImage from "@/assets/programming-session.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Knowledge Hub | Suncity Hyderabad" },
      { name: "description", content: "Meet Knowledge Hub, a practical computer training institute helping learners build confident, career-ready skills." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-300/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-300/20 blur-[100px] pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-48 px-5 lg:px-8 mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Welcome to Knowledge Hub
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Empowering Your Future Through{" "}
            <span className="text-gradient">
              Knowledge
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We are a premier computer training institute in Suncity, dedicated to transforming beginners into industry-ready professionals through practical, hands-on learning.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/40">
              <Link to="/courses">Explore Courses <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-slate-100 transition-all">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>

        {/* Right Image Layout */}
        <div className="flex-1 w-full relative z-10">
           <div className="relative w-full max-w-lg mx-auto aspect-square">
             <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[80px]"></div>
             
             {/* Main Image */}
             <div className="absolute inset-4 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80 transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img src="/premium-classroom.jpg" alt="Premium Classroom training" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
             </div>

             {/* Decorative Particle */}
             <div className="absolute -top-6 right-10 w-8 h-8 bg-yellow-400 rounded-full blur-[2px] animate-pulse"></div>
           </div>
        </div>
      </section>

      {/* --- STATS SECTION (Floating Strip) --- */}
      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 -mt-32 mb-20 z-20">
        <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50">
            {[
              { label: "Active Students", value: "500+", icon: Users },
              { label: "Expert Courses", value: "35+", icon: BriefcaseBusiness },
              { label: "Success Rate", value: "98%", icon: Target },
              { label: "Years Experience", value: "10+", icon: CalendarClock },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-4 ${i === 0 ? 'border-none' : 'border-l-0 md:border-l'}`}>
                <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 font-display tracking-tight">{stat.value}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <section className="px-5 py-24 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
         <div className="flex-1 relative">
           <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-[3rem] transform -rotate-3 z-0"></div>
           <img src="/our-story.jpg" alt="Our story" className="relative z-10 rounded-[2.5rem] shadow-xl w-full object-cover aspect-[4/3] border-4 border-white" />
           
           <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 z-20 rotate-[-4deg]">
             <p className="font-handwriting text-3xl text-blue-600 whitespace-nowrap">Practice makes progress ✨</p>
           </div>
         </div>
         <div className="flex-1">
           <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-6">Our Story</h2>
           <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
             <p>
               Knowledge Hub started with a simple belief: computer education shouldn't just be about memorizing theories from a textbook. It should be about sitting at a screen, writing code, creating sheets, and solving real problems.
             </p>
             <p>
               Over the years, we've transformed from a small local center into Suncity’s most trusted destination for practical tech education. Our labs have witnessed thousands of students write their first lines of code and professionals upgrade their careers.
             </p>
             <p>
               We are committed to maintaining a welcoming, highly interactive environment where making mistakes is just step one to mastering a new skill.
             </p>
           </div>
         </div>
      </section>

      {/* --- CURVED DIVIDER --- */}
      <div className="w-full overflow-hidden leading-none text-slate-100/50 mt-10 relative z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[60px] block transform rotate-180">
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="currentColor"></path>
        </svg>
      </div>

      {/* --- MISSION / VISION / VALUES --- */}
      <section className="bg-slate-100/50 py-24 relative z-10 -mt-[1px]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-4">What Drives Us Forward</h2>
            <p className="text-lg text-slate-600">The core principles that shape our curriculum, our classrooms, and our commitment to your success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: Target, desc: "To make quality, industry-standard computer education accessible and practical, ensuring every learner can confidently step into their desired career path." },
              { title: "Our Vision", icon: Eye, offset: "md:translate-y-8", desc: "To be the most trusted and innovative technology training hub in Hyderabad, continuously evolving with the tech landscape to bridge the skill gap." },
              { title: "Our Values", icon: Gem, desc: "Integrity in teaching, commitment to student success, continuous innovation, and fostering a supportive, inclusive community for all learners." },
            ].map((item, i) => (
              <div key={i} className={`group relative bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05),0_1px_1px_rgba(255,255,255,0.8)_inset] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.3),0_1px_1px_rgba(255,255,255,1)_inset] hover:bg-white/80 overflow-hidden ${item.offset || ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 transform group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-700">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-32 px-5 lg:px-8 max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-6">Why Learn With Us?</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We don't just teach software; we teach workflows. Here is why hundreds of students choose Knowledge Hub every year.
              </p>
              
              <div className="space-y-6">
                {[
                  "Highly experienced mentors with industry background.",
                  "1:1 attention and dedicated doubt-clearing sessions.",
                  "State-of-the-art computer labs with latest software.",
                  "Real-world projects to build a strong portfolio.",
                  "Flexible batch timings for working professionals."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-white/60 hover:shadow-sm border border-transparent hover:border-white/80 transition-all duration-300 -ml-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 group-hover:bg-blue-600 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative order-1 lg:order-2">
              {/* Subtle Background Element */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] z-0"></div>
              <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

              {/* Main Image Base */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border-4 border-white transform transition-transform duration-700 hover:-translate-y-2">
                <img src="/why-learn-with-us.jpg" alt="Students coding in classroom" className="w-full h-full object-cover aspect-[4/3]" />
              </div>


            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="px-5 pb-10 lg:px-8 max-w-7xl mx-auto relative z-20">
         <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
           {/* Abstract background shapes */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none"></div>
           
           <div className="relative z-10 px-6 py-20 md:py-28 text-center max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-6">
               Let’s Build Your Future Together
             </h2>
             <p className="text-lg md:text-xl text-blue-100/80 mb-10 font-medium">
               Enroll today and take the first step towards mastering the skills that will shape your career.
             </p>
             <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] border-0">
               <Link to="/contact">Join Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
             </Button>
           </div>
         </div>
      </section>

    </div>
  );
}

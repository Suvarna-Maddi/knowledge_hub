import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  Play, Quote, Star, ArrowRight, BookOpen, Code2, 
  Briefcase, Trophy, 
  Users, Navigation, GraduationCap, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const STUDENT_IMAGES = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
];

const JOURNEY_STEPS = [
  { id: 1, title: "Learn", desc: "Build new skills at your own pace.", icon: BookOpen },
  { id: 2, title: "Practice", desc: "Apply knowledge with real projects.", icon: Code2 },
  { id: 3, title: "Build", desc: "Create a portfolio that stands out.", icon: Briefcase },
  { id: 4, title: "Get Placed", desc: "Turn your effort into a career.", icon: Trophy },
];

const JOURNEY_TESTIMONIALS = {
  1: {
    quote: "The curriculum is so well structured. I went from zero coding knowledge to building full web apps.",
    name: "Megha T.",
    role: "Beginner to Pro",
    company: "Amazon",
    rating: 5,
    image: STUDENT_IMAGES[2]
  },
  2: {
    quote: "Knowledge Hub gave me the right guidance, real-world projects, and constant support.",
    name: "Ananya R.",
    role: "B.Tech CSE, 2024",
    company: "TCS",
    rating: 5,
    image: STUDENT_IMAGES[0]
  },
  3: {
    quote: "Building live projects for my portfolio was the game-changer for my job interviews.",
    name: "Karthik R.",
    role: "Full Stack Developer",
    company: "Deloitte",
    rating: 5,
    image: STUDENT_IMAGES[3]
  },
  4: {
    quote: "I transitioned from a completely different field. The placement support here made the impossible feel natural.",
    name: "Rahul K.",
    role: "Career Switcher",
    company: "Accenture",
    rating: 5,
    image: STUDENT_IMAGES[1]
  }
};


export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage
});

function TestimonialsPage() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      
      {/* --- 1. HERO (WATERFALL) --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mt-12 md:mt-0 text-center md:text-left mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="h-[2px] w-8 bg-blue-600"></div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">Real Stories. Real People.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black text-[#0A1A3A] leading-[1.1] tracking-tight mb-6 sm:mb-8 font-display">
              From Learning to <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Life-Changing</span> <br className="hidden sm:block"/>
              Careers.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Stories from our learners who turned curiosity into skills, skills into opportunities, and dreams into reality with Knowledge Hub.
            </p>
            

          </motion.div>

          {/* Right: Vertical Marquee Waterfall */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 bg-slate-50/30 shadow-2xl shadow-blue-900/5 mt-8 md:mt-0">
            {/* Gradient Fades for smooth top/bottom edges */}
            <div className="absolute top-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            
            {/* Rotated Grid Container */}
            <div className="absolute inset-0 transform -rotate-[8deg] scale-[1.3] origin-center grid grid-cols-2 gap-6 p-4">
              
              {/* Column 1: Scrolling UP */}
              <motion.div 
                animate={{ y: [0, -1200] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex flex-col gap-6"
              >
                {[...STUDENT_IMAGES, ...STUDENT_IMAGES, ...STUDENT_IMAGES].map((img, i) => (
                  <div key={`col1-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-lg group bg-white p-2">
                    <img src={img} className="w-full aspect-[4/5] object-cover rounded-3xl" />
                    <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <Quote className="w-6 h-6 text-white/50 mb-3" />
                      <p className="text-white font-bold leading-snug drop-shadow-md">"A life-changing experience."</p>
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
                {[...STUDENT_IMAGES, ...STUDENT_IMAGES, ...STUDENT_IMAGES].reverse().map((img, i) => (
                  <div key={`col2-${i}`} className="relative rounded-[2rem] overflow-hidden shadow-lg group bg-white p-2">
                    <img src={img} className="w-full aspect-[3/4] object-cover rounded-3xl" />
                    {/* Glass hover effect */}
                    <div className="absolute inset-2 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                       <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                         Read Story <ArrowRight className="w-4 h-4" />
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

      {/* --- 2. STATS STRIP --- */}
      <section className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-x-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">1,500+</h3>
                <p className="text-sm text-slate-500 font-medium">Learners Trained</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">98%</h3>
                <p className="text-sm text-slate-500 font-medium">Placement Support</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">500+</h3>
                <p className="text-sm text-slate-500 font-medium">Hiring Partners</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">4.9/5</h3>
                <p className="text-sm text-slate-500 font-medium">Average Rating</p>
              </div>
            </div>
            {/* Trusted by avatars */}
            <div className="hidden lg:flex items-center gap-4 pl-8">
              <div className="flex -space-x-3">
                {STUDENT_IMAGES.slice(0, 3).map((img, i) => (
                  <img key={i} src={img} className="w-10 h-10 rounded-full border-2 border-white relative z-[3-i]" alt="Avatar" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium max-w-[100px]">Trusted by learners across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. & 4. JOURNEY TIMELINE & FEATURED TESTIMONIAL --- */}
      <section className="py-24 bg-[#FAFCFF] relative overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F6FF] to-white opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4">
            <div className="h-[1px] w-8 sm:w-12 bg-slate-300"></div>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">The Learner Journey</span>
            <div className="h-[1px] w-8 sm:w-12 bg-slate-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1A3A] mb-4 font-display tracking-tight">
            Different Steps. <br className="block sm:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Real Stories.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Every learner's journey is unique, but the transformation is real. Click through the steps to see how they grew.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="max-w-5xl mx-auto px-6 relative mb-16">
          {/* SVG Connecting Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[2px] hidden md:block">
             <svg width="100%" height="100%" preserveAspectRatio="none">
               <path d="M 0,0 C 250,50 250,-50 500,0 C 750,50 750,-50 1000,0" 
                     vectorEffect="non-scaling-stroke" 
                     fill="none" 
                     stroke="#E2E8F0" 
                     strokeWidth="2" 
                     strokeDasharray="8 8" />
             </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {JOURNEY_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;
              return (
                <div 
                  key={step.id} 
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span className="text-xs font-bold text-slate-400 mb-2">0{step.id}</span>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 ${isActive ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl shadow-blue-500/30' : 'bg-white border-2 border-slate-100 shadow-sm group-hover:border-blue-200'}`}>
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}`} />
                  </div>
                  <h4 className={`text-base sm:text-lg font-bold mb-1 ${isActive ? 'text-[#0A1A3A]' : 'text-slate-700'}`}>{step.title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium max-w-[140px] leading-relaxed hidden sm:block">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured Testimonial Card (Changes based on active step) */}
        <div className="max-w-5xl mx-auto px-6">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden"
            >
              {/* Soft abstract background blob inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
                {/* Left: Image */}
                <div className="w-full sm:w-[80%] md:w-[40%] shrink-0 relative max-w-sm mx-auto md:mx-0">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                    <img src={JOURNEY_TESTIMONIALS[activeStep as keyof typeof JOURNEY_TESTIMONIALS].image} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Floating Tag */}
                  <div className="absolute -bottom-6 -right-6 md:-left-8 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 transform -rotate-3 hidden md:flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500">From Curious to</p>
                      <p className="text-sm font-black text-blue-600">Confident</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left">
                  <Quote className="w-10 h-10 md:w-16 md:h-16 text-blue-100 mb-4 md:mb-6 rotate-12 mx-auto md:mx-0" />
                  <p className="text-lg sm:text-2xl md:text-3xl text-slate-800 font-medium leading-snug mb-8 md:mb-10 font-display">
                    "{JOURNEY_TESTIMONIALS[activeStep as keyof typeof JOURNEY_TESTIMONIALS].quote}"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-0">
                    <div className="text-center sm:text-left">
                      <div className="flex justify-center sm:justify-start gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 tracking-tight">{JOURNEY_TESTIMONIALS[activeStep as keyof typeof JOURNEY_TESTIMONIALS].name}</h4>
                      <p className="text-sm text-slate-500 font-medium">{JOURNEY_TESTIMONIALS[activeStep as keyof typeof JOURNEY_TESTIMONIALS].role}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Placed At</p>
                      <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {JOURNEY_TESTIMONIALS[activeStep as keyof typeof JOURNEY_TESTIMONIALS].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* --- 5. SUCCESS ACCORDION (REPLACED VIDEO STRIP) --- */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1A3A] font-display">Life-Changing Outcomes</h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">Read how our learners transformed their careers.</p>
        </div>

        {/* On mobile, it's a horizontal scroll snap. On md+, it's a hover accordion. */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex overflow-x-auto snap-x snap-mandatory md:overflow-visible md:flex-row gap-4 pb-8 md:pb-0 h-[450px] md:h-[600px] no-scrollbar">
          {[
            { id: 1, name: "Rahul K.", from: "B.Com Graduate", to: "Data Analyst", company: "Accenture", quote: "I never thought I could code. Knowledge Hub broke everything down so perfectly that I landed a tech job within 6 months.", img: STUDENT_IMAGES[1], color: "from-slate-900" },
            { id: 2, name: "Megha T.", from: "Non-Tech", to: "Frontend Dev", company: "Amazon", quote: "The mentors didn't just teach me syntax; they taught me how to think like an engineer. That made all the difference.", img: STUDENT_IMAGES[2], color: "from-blue-900" },
            { id: 3, name: "Karthik R.", from: "Support", to: "Full Stack", company: "Deloitte", quote: "Building live projects for my portfolio was the game-changer. Interviewers were amazed by what I had built.", img: STUDENT_IMAGES[3], color: "from-indigo-900" },
            { id: 4, name: "Pooja M.", from: "Self-Taught", to: "UI/UX", company: "Infosys", quote: "The design feedback and career support helped me polish my portfolio to a professional standard.", img: STUDENT_IMAGES[5], color: "from-slate-900" },
          ].map((story) => (
            <div 
              key={story.id} 
              className="group relative flex-none w-[85vw] sm:w-[60vw] md:w-auto md:flex-1 snap-center md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-xl"
            >
              <img src={story.img} alt={story.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${story.color} via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex flex-col gap-2 md:gap-4 h-full justify-end relative z-10">
                  
                  {/* Always visible minimal info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                      <Quote className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="min-w-0 transition-transform duration-500 group-hover:-translate-y-2">
                      <h4 className="text-white font-bold text-lg md:text-xl truncate drop-shadow-md">{story.name}</h4>
                      <p className="text-white/90 text-xs md:text-sm font-medium truncate drop-shadow-md">{story.to} @ {story.company}</p>
                    </div>
                  </div>

                  {/* Expanded Content (Shown by default on mobile, hover on desktop) */}
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 md:opacity-0 md:group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <div className="pt-2 border-t border-white/20 mt-2">
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-4 sm:mb-6 drop-shadow-md">
                          "{story.quote}"
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          <span className="text-xs text-white/70 uppercase tracking-widest font-bold hidden md:inline">Transformation:</span>
                          <span className="text-sm text-white font-bold">{story.from}</span>
                          <ArrowRight className="w-4 h-4 text-white/50" />
                          <span className="text-sm text-white font-bold">{story.to}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* --- 7. COMPANY LOGOS STRIP --- */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Our Learners Work At</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['TCS', 'Accenture', 'Deloitte', 'Amazon', 'Google', 'Infosys'].map((logo, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black font-display text-slate-800">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA (CINEMATIC END) --- */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-[#0A1A3A] text-white">
        {/* Scenic / Soft blurred background image representing a journey/path */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000" alt="Journey" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-[#0A1A3A]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 font-display drop-shadow-lg">
            Your Story <br className="block sm:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Starts Here.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 font-medium mb-10 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of learners who are building brighter futures with Knowledge Hub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/courses" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full bg-white text-[#0A1A3A] hover:bg-blue-50 h-14 px-8 font-bold text-lg shadow-xl w-full">
                Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>
        </div>

        {/* Hand drawn arrow pointing to CTA */}
        <div className="absolute bottom-20 right-20 font-handwriting text-2xl text-blue-300 hidden md:flex items-center gap-4">
          <div className="text-right">
            Same Learners <br/> Bigger Futures
          </div>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform -scale-x-100 rotate-45">
             <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

    </div>
  );
}

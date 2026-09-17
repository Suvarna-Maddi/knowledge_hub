import { GraduationCap, Star, Quote, ChevronLeft, ChevronRight, BriefcaseBusiness, BookOpen, StarHalf } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    tag: "Great Learning Experience",
    quote: "Knowledge Hub helped me build strong programming skills with practical training. The faculty are very supportive and explain concepts clearly. The hands-on projects really boosted my confidence.",
    name: "Rahul Sharma",
    course: "Python Full Stack",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    tag: "Supportive Trainers",
    quote: "The trainers are excellent and explain every concept step-by-step. The learning environment is very friendly and motivating. I gained real-time knowledge and also got placement support.",
    name: "Sneha Reddy",
    course: "Java Development",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    tag: "Improved Confidence",
    quote: "I joined Knowledge Hub for Spoken English and now I can speak confidently in meetings and interviews. The classes are interactive and very useful. Highly recommend for anyone who wants to improve communication skills.",
    name: "Akhil Verma",
    course: "Spoken English",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    tag: "Real-world Skills",
    quote: "The Cloud & DevOps course is structured perfectly for beginners. They focus a lot on real-world implementation which helped me secure an internship within months of joining.",
    name: "Priya Patel",
    course: "Cloud & DevOps",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const stats = [
  { icon: GraduationCap, iconColor: "text-blue-500", iconBg: "bg-blue-100", title: "899999", suffix: "+", subtitle: "Students Trained" },
  { icon: BriefcaseBusiness, iconColor: "text-emerald-500", iconBg: "bg-emerald-100", title: "98", suffix: "+", subtitle: "Placements" },
  { icon: BookOpen, iconColor: "text-purple-500", iconBg: "bg-purple-100", title: "149", suffix: "+", subtitle: "Courses" },
  { icon: Star, iconColor: "text-amber-500", iconBg: "bg-amber-100", title: "4.8", suffix: "/5", subtitle: "Student Rating" }
];

function CountingNumber({ endValue, suffix = "" }: { endValue: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(endValue);
  
  useEffect(() => {
    if (isNaN(target)) {
      setCount(target);
      return;
    }
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);
  
  const displayValue = isNaN(target) ? endValue : (target % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString());
  
  return <>{displayValue}{suffix}</>;
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[20rem] bg-blue-200/30 rounded-t-[100%] blur-3xl transform translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[20rem] bg-blue-200/30 rounded-t-[100%] blur-3xl transform translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto relative mb-16">
          
          {/* Hand-drawn accents */}
          <div className="absolute -left-32 top-0 hidden lg:block opacity-80">
            <div className="font-handwriting text-3xl text-slate-600 -rotate-12 mb-2">
              Students<br/>Today<br/>Leaders<br/>Tomorrow
            </div>
            <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-blue-500 fill-none ml-16" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 10 10 Q 70 10, 70 80" />
              <path d="M 60 70 L 70 80 L 80 70" />
            </svg>
          </div>
          
          <div className="absolute -right-24 top-0 hidden lg:block opacity-80">
            <div className="font-handwriting text-3xl text-blue-600 -rotate-6">
              Success<br/>Stories
            </div>
            <svg width="40" height="40" viewBox="0 0 100 100" className="stroke-blue-500 fill-none absolute -top-2 -right-4" strokeWidth="3" strokeLinecap="round">
              <line x1="20" y1="50" x2="80" y2="20" />
              <line x1="50" y1="80" x2="90" y2="50" />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 font-bold px-4 py-1.5 rounded-full text-xs tracking-widest mb-6">
            <GraduationCap className="w-4 h-4" /> STUDENT TESTIMONIALS
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          
          <p className="text-slate-600 text-lg">
            Real stories. Real experiences. Real growth. Hear from our students who have transformed their skills and built brighter futures with Knowledge Hub.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          {/* Scrolling Container */}
          <div className="flex overflow-hidden relative w-full hide-scrollbar">
            <div className="flex gap-6 animate-marquee hover:animate-marquee-hover w-max min-w-[200%] pb-8">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                <div key={idx} className="w-[320px] md:w-[360px] flex-shrink-0 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative border border-slate-100 flex flex-col">
                
                {/* Top Row: Quotes & Tag */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-6xl font-serif text-blue-200 leading-none h-8 font-bold">“</div>
                  <div className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">{t.tag}</div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow font-medium mb-6 relative z-10">
                  "{t.quote}"
                </p>

                {/* Bottom Row: User Info & Closing Quotes */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-slate-200" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-slate-500 text-xs font-medium">{t.course}</p>
                    </div>
                  </div>
                  <div className="text-6xl font-serif text-blue-100 leading-none h-8 font-bold rotate-180 mb-4">“</div>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-white via-blue-50/50 to-white backdrop-blur-2xl rounded-[2rem] md:rounded-full border border-blue-100/50 p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10 max-w-6xl mx-auto">
          
          {/* Subtle inner highlight */}
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-5 flex-1 justify-center py-2 md:py-0 w-full relative">
              <div className={`w-16 h-16 rounded-full ${stat.iconBg} flex items-center justify-center shrink-0 shadow-inner relative group-hover:scale-110 transition-transform`}>
                <div className="absolute inset-0 bg-white/40 rounded-full blur-md mix-blend-overlay"></div>
                <stat.icon className={`w-8 h-8 ${stat.iconColor} relative z-10`} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 leading-none tracking-tight mb-1">
                  <CountingNumber endValue={stat.title} suffix={stat.suffix} />
                </h4>
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{stat.subtitle}</p>
              </div>
              
              {/* Divider line between items (only on md and up) */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
              )}
            </div>
          ))}
          
        </div>

        {/* Bottom Quote */}
        <div className="mt-10 text-center">
          <p className="font-serif text-xl italic text-slate-600">
            "Your success is our biggest achievement."
          </p>
          <div className="w-16 h-1 bg-blue-200 mx-auto mt-4 rounded-full" />
        </div>

      </div>
    </section>
  );
}

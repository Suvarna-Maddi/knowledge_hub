import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star, ArrowRight, TrendingUp, Users, Award, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const extendedReviews = [
  {
    name: "Anusha R.",
    course: "Python Full Stack",
    role: "Placed as Software Engineer",
    quote: "The trainer explained every topic patiently and gave us enough practice. I now feel confident writing programs on my own and building actual projects. The placement support was phenomenal.",
    avatar: "AR",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Mohammed Faizan",
    course: "Advanced Excel",
    role: "Data Analyst",
    quote: "The lessons were clear and directly useful for my work. The practical exercises and dashboard creations made a real difference in my daily tasks. I immediately got a promotion after completing this.",
    avatar: "MF",
    color: "from-purple-500 to-indigo-400"
  },
  {
    name: "Sai Kiran",
    course: "AWS & DevOps",
    role: "Cloud Architect",
    quote: "I liked the structured learning path and personal guidance. Complex cloud topics became much easier to understand, and I cracked my first interview! The real-world projects were the key.",
    avatar: "SK",
    color: "from-cyan-500 to-teal-400"
  },
  {
    name: "Priya M.",
    course: "Tally Prime",
    role: "Accountant",
    quote: "Flexible timings helped me continue learning alongside college. The classroom atmosphere is friendly, focused, and very professional. The hands-on practice gave me true confidence.",
    avatar: "PM",
    color: "from-pink-500 to-rose-400"
  },
  {
    name: "Karthik Reddy",
    course: "Spoken English",
    role: "Student",
    quote: "Before this course, I was terrified of interviews. The communication training completely changed my mindset. I am now fluent and confident.",
    avatar: "KR",
    color: "from-amber-500 to-orange-400"
  },
  {
    name: "Sonia T.",
    course: "Digital Marketing",
    role: "Freelancer",
    quote: "Learning here was the best decision. The mentors don't just teach theory; they make you run live campaigns. It's totally transformed my career.",
    avatar: "ST",
    color: "from-emerald-500 to-green-400"
  }
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Testimonials | Knowledge Hub" },
      { name: "description", content: "Read how Knowledge Hub students built practical confidence in programming, cloud, Excel, Tally, and more." },
      { property: "og:title", content: "Knowledge Hub Student Stories" },
      { property: "og:description", content: "Real feedback from learners building practical computer skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }),
  component: TestimonialsPage
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#020817] font-sans selection:bg-cyan-500/30 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-[120px] pb-16 lg:pt-[160px] lg:pb-20 border-b border-white/5">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-0 left-0 -ml-20 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-5 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 text-cyan-400 border border-blue-500/20 backdrop-blur-sm mx-auto shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Quote className="size-8" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.1] mb-6 drop-shadow-lg">
            Real Stories, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Real Success.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Hear from learners who strengthened their skills, gained confidence, and moved closer to their career goals with Knowledge Hub.
          </p>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="relative z-20 -mt-8 mb-20 px-5 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl">
            <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-blue-200/70 text-sm font-semibold uppercase tracking-wider">Placement Rate</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl">
            <div className="h-14 w-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-black text-white">1,500+</div>
              <div className="text-blue-200/70 text-sm font-semibold uppercase tracking-wider">Careers Launched</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-5 shadow-2xl">
            <div className="h-14 w-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-black text-white">4.9/5</div>
              <div className="text-blue-200/70 text-sm font-semibold uppercase tracking-wider">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MASONRY GRID SECTION --- */}
      <section className="pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          
          {/* Staggered Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {extendedReviews.map((r, i) => (
              <div 
                key={r.name} 
                className="break-inside-avoid relative group animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-full bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:-translate-y-1">
                  
                  <Quote className="absolute top-6 right-6 size-12 text-white/5 group-hover:text-blue-400/20 transition-colors duration-300 pointer-events-none" />

                  <div className="flex gap-1 mb-6 relative z-10">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-amber-400 text-amber-400 drop-shadow-md" />
                    ))}
                  </div>

                  <blockquote className="text-blue-50 text-lg leading-relaxed flex-grow relative z-10 mb-8 font-medium">
                    "{r.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                      {r.avatar}
                    </div>
                    <div>
                      <strong className="block text-white font-display text-lg tracking-wide">{r.name}</strong>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-slate-900 bg-cyan-400 px-2 py-0.5 rounded-sm">
                          {r.course}
                        </span>
                        <span className="text-xs font-semibold text-blue-300">
                          {r.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-32 overflow-hidden border-t border-white/10 bg-[#040d21]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white font-display tracking-tight mb-6 drop-shadow-md">
            Ready to Write Your <br className="hidden md:block"/> Own Success Story?
          </h2>
          <p className="text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto font-medium">
            Join Knowledge Hub today and take the first step towards mastering the skills you need for a brighter career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 text-base font-black text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition-all border-0 group">
              <Link to="/courses">
                Browse Our Courses
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full px-8 text-base font-bold text-white border-white/20 hover:bg-white/10 hover:text-white transition-all bg-transparent backdrop-blur-md">
              <Link to="/contact">
                Contact Admissions
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

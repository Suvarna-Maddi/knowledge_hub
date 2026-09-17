import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/components/site/shared";
import { Link } from "@tanstack/react-router";

const reviews = [
  {
    name: "Anusha R.",
    course: "Python Full Stack",
    quote: "The trainer explained every topic patiently and gave us enough practice. I now feel confident writing programs on my own and building actual projects.",
    avatar: "AR"
  },
  {
    name: "Mohammed Faizan",
    course: "Advanced Excel",
    quote: "The lessons were clear and directly useful for my work. The practical exercises and dashboard creations made a real difference in my daily tasks.",
    avatar: "MF"
  },
  {
    name: "Sai Kiran",
    course: "AWS & DevOps",
    quote: "I liked the structured learning path and personal guidance. Complex cloud topics became much easier to understand, and I cracked my first interview!",
    avatar: "SK"
  },
  {
    name: "Priya M.",
    course: "Tally Prime",
    quote: "Flexible timings helped me continue learning alongside college. The classroom atmosphere is friendly, focused, and very professional.",
    avatar: "PM"
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
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#0B1E48] to-[#04112E] pt-[120px] pb-24 lg:pt-[160px] lg:pb-32 border-b border-white/5 -mt-20 sm:-mt-24">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 text-cyan-400 border border-blue-500/20 backdrop-blur-sm mx-auto">
            <Quote className="size-8" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] mb-6">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Hear from learners who strengthened their skills, gained confidence, and moved closer to their career goals with Knowledge Hub.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((r, i) => (
              <article 
                key={r.name} 
                className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-8 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-md" />
                <Quote className="absolute top-8 right-8 size-16 text-slate-100 group-hover:text-blue-50 transition-colors duration-300 pointer-events-none" />

                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-lg leading-relaxed flex-grow relative z-10 mb-8 font-medium">
                  "{r.quote}"
                </blockquote>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg shadow-inner">
                    {r.avatar}
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-display text-lg">{r.name}</strong>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block mt-1 border border-blue-100">
                      {r.course}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strong Closing CTA Section */}
      <section className="bg-white py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center animate-in fade-in zoom-in-95 duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join Knowledge Hub today and take the first step towards mastering the skills you need for a brighter career.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="group h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25 border-0">
              <Link to="/courses">
                Browse Our Courses
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

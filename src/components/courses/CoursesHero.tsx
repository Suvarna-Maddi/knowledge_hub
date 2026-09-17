import { motion } from "framer-motion";
import { Search, CheckCircle2, Users, BookOpen, Award, ArrowUpRight } from "lucide-react";

export const categories = [
  "All",
  "IT & Software",
  "Cloud & DevOps",
  "Office Tools",
  "Non-IT Skills",
  "Academic"
];

interface CoursesHeroProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function CoursesHero({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }: CoursesHeroProps) {
  
  const scrollToCourses = () => {
    const el = document.getElementById("courses-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-[120px] pb-16 lg:pt-[160px] lg:pb-24 border-b border-slate-200 -mt-20 sm:-mt-24">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content & Interactive Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6 shadow-sm">
              <BookOpen className="size-4" />
              Course Discovery Experience
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.1] mb-6">
              Find the Right Course <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">For Your Career</span>
            </h1>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Browse, compare, and choose from industry-ready programs. Learn from experts and build practical skills.
            </p>

            {/* Interactive Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  scrollToCourses();
                }}
                placeholder="Search courses (e.g., Python, AWS, Excel...)"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-base shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
              />
              <button 
                onClick={scrollToCourses}
                className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-blue-600 text-white px-4 rounded-xl font-medium transition-colors"
              >
                Search
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    scrollToCourses();
                  }}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm hover:shadow-md"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Stats Below Content */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BookOpen className="size-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">20+ Courses</div>
                  <div className="text-xs text-slate-500 font-medium">Expert curated</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="size-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">5000+ Students</div>
                  <div className="text-xs text-slate-500 font-medium">Trained successfully</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Award className="size-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Certified Training</div>
                  <div className="text-xs text-slate-500 font-medium">Placement support</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Floating UI Preview */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-10 z-20 w-72 bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rotate-3"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center p-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Python Full Stack</div>
                  <div className="text-xs text-slate-500 font-medium">5 Months • IT & Software</div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">Python</span>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">Django</span>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">React</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-green-500" /> Placement
                </div>
                <div className="text-xs font-bold text-blue-600 flex items-center">
                  Preview <ArrowUpRight className="size-3 ml-0.5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 z-10 w-72 bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] -rotate-3"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center p-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">AWS Cloud Computing</div>
                  <div className="text-xs text-slate-500 font-medium">2.5 Months • Cloud</div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded">EC2</span>
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded">S3</span>
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded">IAM</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-green-500" /> Placement
                </div>
                <div className="text-xs font-bold text-blue-600 flex items-center">
                  Preview <ArrowUpRight className="size-3 ml-0.5" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

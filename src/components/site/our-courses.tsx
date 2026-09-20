import { useState } from "react";
import { ArrowRight, BookOpen, Cloud, Code2, LineChart, Monitor, Users, BriefcaseBusiness, GraduationCap, MonitorCog, ShieldCheck, LayoutGrid, LayoutTemplate, BookOpenCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const newCourseData = [
  {
    category: "IT & Software",
    title: "Software & Programming",
    image: <img src="/pythonlogo.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Programming" />,
    tags: ["Python (Full Stack)", "Java", "C", "C++", "Data Structures", ".NET", "Oracle", "SQL", "PL/SQL"],
    description: "Build strong programming foundations and develop real-world applications with in-demand technologies.",
  },
  {
    category: "Cloud & DevOps",
    title: "Cloud & DevOps",
    image: <img src="/cloud.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md p-2" alt="Cloud & DevOps" />,
    tags: ["AWS Cloud", "Microsoft Azure", "GCP Cloud", "DevOps", "Docker", "Kubernetes"],
    description: "Learn modern cloud technologies and deployment tools used in today's IT industry.",
  },
  {
    category: "Data & Analytics",
    title: "Data & Analytics",
    image: <img src="/data_analytics_real.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Data & Analytics" />,
    tags: ["Advanced Excel", "Power BI", "SQL"],
    description: "Analyze data, create meaningful dashboards, and gain valuable insights using industry tools.",
  },
  {
    category: "Office & Computer Basics",
    title: "Office & Computer Skills",
    image: <img src="/microsoftofc.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Office Skills" />,
    tags: ["MS Office", "Tally", "DTP", "DCA", "PGDCA", "Hardware & Networking"],
    description: "Build essential computer skills required for office, business and technical environments.",
  },
  {
    category: "Communication & English",
    title: "Spoken English & Exam Prep",
    image: <img src="/spokenenglish.png" className="w-full h-full object-contain mix-blend-multiply drop-shadow-md" alt="Spoken English" />,
    tags: ["Spoken English", "IELTS", "TOEFL", "GRE", "PTE", "SELT", "Duolingo"],
    description: "Improve your communication skills and prepare for international exams with confidence.",
  },
  {
    category: "Academic Coaching",
    title: "Academic Coaching",
    image: <img src="/academic.png" className="w-full h-full object-contain drop-shadow-md rounded-xl" alt="Academic Coaching" />,
    tags: ["SSC", "CBSE", "ICSE", "Intermediate", "EAMCET", "All Subjects (1st - 12th)", "Engineering Subjects"],
    description: "Strong academic support with concept clarity, regular tests and expert faculty.",
  }
];

const allTabs = [
  { name: "All Courses", icon: LayoutGrid },
  { name: "IT & Software", icon: Monitor },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Data & Analytics", icon: LineChart },
  { name: "Office & Basics", icon: LayoutTemplate },
  { name: "English & Exams", icon: BookOpenCheck },
  { name: "Academic", icon: GraduationCap }
];

const features = [
  { icon: Users, title: "Expert Trainers", desc: "Learn from industry professionals" },
  { icon: BookOpen, title: "Practical Learning", desc: "Hands-on projects & real-world skills" },
  { icon: BriefcaseBusiness, title: "Placement Support", desc: "Guidance for a brighter career" },
  { icon: ShieldCheck, title: "Affordable Fees", desc: "Quality education for everyone" }
];

export function OurCourses() {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(1); // Default active is index 1 (Cloud)

  const getFilteredCourses = () => {
    if (activeTab === "All Courses") return newCourseData;
    if (activeTab === "Office & Basics") return newCourseData.filter(c => c.title === "Office & Computer Skills");
    if (activeTab === "English & Exams") return newCourseData.filter(c => c.title === "Spoken English & Exam Prep");
    if (activeTab === "Academic") return newCourseData.filter(c => c.category === "Academic Coaching");
    return newCourseData.filter(c => c.category === activeTab || c.title === activeTab);
  };

  const filteredCourses = getFilteredCourses();

  return (
    <section className="relative py-24 overflow-hidden">


      {/* Hand-drawn Accents */}
      <div className="absolute top-16 left-4 lg:left-12 opacity-80 hidden md:block z-10">
        <div className="font-handwriting text-2xl text-slate-500 -rotate-12 mb-2">Skills<br/>for a Brighter<br/>Future</div>
        <svg width="60" height="60" viewBox="0 0 100 100" className="stroke-slate-400 fill-none -mt-4 ml-6" strokeWidth="2" strokeLinecap="round">
          <path d="M 20 20 Q 80 20, 80 80" />
          <path d="M 70 70 L 80 80 L 90 70" />
        </svg>
      </div>

      <div className="absolute top-16 right-4 lg:right-12 opacity-80 hidden md:block z-10">
        <div className="font-handwriting text-3xl text-blue-500 rotate-6 mb-2">Learn<br/>Practice<br/>Grow</div>
        <svg width="40" height="40" viewBox="0 0 100 100" className="stroke-blue-400 fill-none mt-2 -ml-4" strokeWidth="3" strokeLinecap="round">
          <line x1="10" y1="50" x2="90" y2="20" />
          <line x1="20" y1="80" x2="90" y2="50" />
        </svg>
        <div className="absolute inset-0 bg-blue-100/50 blur-xl -z-10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">Our Courses</span>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Learn Today, Build a <span className="text-blue-600">Better Tomorrow</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a wide range of career-focused and academic courses designed to build strong skills, gain practical knowledge, and help you achieve your goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTabs.map(tab => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive 
                    ? "bg-[#0A1128] text-white border-[#0A1128] shadow-md scale-105" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                {tab.name}
              </button>
            )
          })}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 relative">
          {/* Subtle glow behind the active card row */}
          <div className="absolute top-[40%] w-full h-[60%] bg-blue-500/10 blur-[100px] pointer-events-none" />

          {filteredCourses.map((course, idx) => {
            const isActive = true;
            
            return (
              <Link
                to="/courses"
                key={idx} 
                onClick={() => setActiveCardIndex(idx)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-500 flex flex-col group relative overflow-hidden block ${
                  isActive 
                    ? "bg-gradient-to-br from-[#1E3A8A] to-[#0A1128] border border-blue-400/30 shadow-[0_0_30px_rgba(37,99,235,0.25)] scale-[1.02] transform-gpu"
                    : "bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)]"
                }`}
              >
                {/* Active Card Internal Glow */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="flex gap-4 mb-3 h-16 relative z-10">
                  {/* Image Placeholder */}
                  <div className={`w-1/4 flex-shrink-0 transition-transform duration-500 ${isActive ? "scale-110 drop-shadow-xl" : "group-hover:scale-105 group-hover:-rotate-3"}`}>
                    {isActive ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
                        {course.image}
                      </div>
                    ) : (
                      course.image
                    )}
                  </div>
                  
                  {/* Titles */}
                  <div className="w-3/4 flex flex-col justify-center">
                    <span className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 ${isActive ? "text-blue-300" : "text-blue-600"}`}>
                      {course.category}
                    </span>
                    <h3 className={`font-display font-bold text-lg leading-tight line-clamp-1 ${isActive ? "text-white" : "text-slate-900"}`}>
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3 relative z-10 h-6 overflow-hidden">
                  {course.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded border whitespace-nowrap ${
                      isActive 
                        ? "bg-white/10 border-white/20 text-blue-50 backdrop-blur-md shadow-sm"
                        : "bg-blue-50/70 border-blue-100/50 text-slate-700"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-4 flex-grow relative z-10 line-clamp-2 ${isActive ? "text-blue-100/90" : "text-slate-500"}`}>
                  {course.description}
                </p>

                {/* Button */}
                <div className={`self-end inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 relative z-10 ${
                  isActive 
                    ? "text-blue-100 border border-white/10 bg-white/5 hover:bg-white/10" 
                    : "text-blue-600 bg-blue-50 hover:bg-blue-100"
                }`}>
                  View Details 
                  <span className={`flex items-center justify-center w-5 h-5 rounded-full ${isActive ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}`}>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>



      </div>
    </section>
  );
}

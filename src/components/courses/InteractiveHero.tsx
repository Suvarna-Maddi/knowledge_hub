import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  BarChart3, 
  Award, 
  Briefcase, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock
} from "lucide-react";

export function InteractiveHero() {
  const [currentPage, setCurrentPage] = useState(0);

  // Book pages structured directly from CoursesPage coursesData
  const bookPages = [
    {
      id: "job-1",
      chapter: "PROGRAM 01",
      title: "PYTHON FULL STACK DEVELOPMENT",
      category: "Job-Ready Programs",
      duration: "6 Months",
      tags: ["Job Guarantee", "Full Stack", "Python"],
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      accentGradient: "from-blue-600 via-sky-500 to-indigo-600",
      leftPage: {
        heading: "Python Full Stack Development",
        subheading: "An intensive, job-oriented program covering front-to-back Python web development.",
        overview: "Get hired faster with our job-ready Python Full Stack program. Focus on practical, real-world development and interview prep.",
        modules: [
          "Module 1 - Frontend & UI (HTML, CSS, JS, React)",
          "Module 2 - Python & Django Web Framework",
          "Module 3 - Databases, ORM & REST APIs",
          "Module 4 - Real-World Live Projects & Capstone"
        ],
        codeSnippet: `class PythonFullStackCourse:\n    def __init__(self):\n        self.duration = "6 Months"\n        self.status = "Job Ready"`
      },
      rightPage: {
        heading: "What You Will Learn",
        subheading: "Master industry-standard developer skills",
        learnings: [
          "End-to-End Web Development",
          "Real-World Projects & Repos",
          "Corporate Interview Prep",
          "100% Placement Support"
        ]
      }
    },
    {
      id: "job-2",
      chapter: "PROGRAM 02",
      title: "DATA ANALYTICS PROGRAM",
      category: "Job-Ready Programs",
      duration: "5 Months",
      tags: ["Data Science", "Analytics", "Job Ready"],
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      accentGradient: "from-emerald-600 via-teal-500 to-cyan-600",
      leftPage: {
        heading: "Data Analytics Program",
        subheading: "Comprehensive data program with SQL, Excel, Python, and Power BI for data roles.",
        overview: "Step into the world of data. Learn the exact stack required by top employers and build a strong portfolio.",
        modules: [
          "Module 1 - Advanced Excel & SQL Queries",
          "Module 2 - Python for Data Science & Pandas",
          "Module 3 - Power BI Interactive Dashboards",
          "Module 4 - Capstone Industry Project"
        ],
        codeSnippet: `SELECT department, COUNT(*),\n       AVG(salary) AS avg_salary\nFROM analytics_data\nGROUP BY department;`
      },
      rightPage: {
        heading: "What You Will Learn",
        subheading: "Transform raw data into business intelligence",
        learnings: [
          "Data Wrangling & Cleaning",
          "Executive Dashboard Creation",
          "Statistical & Trend Analysis",
          "Business Intelligence Stack"
        ]
      }
    },
    {
      id: "job-3",
      chapter: "PROGRAM 03",
      title: "CLOUD & DEVOPS PROGRAM",
      category: "Job-Ready Programs",
      duration: "6 Months",
      tags: ["AWS", "DevOps", "Placement"],
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
      accentGradient: "from-orange-500 via-amber-500 to-indigo-600",
      leftPage: {
        heading: "Cloud & DevOps Program",
        subheading: "End-to-end cloud infrastructure and automation program tailored for IT operations.",
        overview: "Become a Cloud/DevOps Engineer. Master the most in-demand infrastructure automation tools in the industry.",
        modules: [
          "Module 1 - Linux Administration & Networking",
          "Module 2 - AWS Cloud Architecture (EC2, S3)",
          "Module 3 - Docker & Kubernetes Containerization",
          "Module 4 - CI/CD Pipelines & Infrastructure as Code"
        ],
        codeSnippet: `version: '3.8'\nservices:\n  devops_app:\n    image: aws/cloud:latest\n    ports: ["80:80"]`
      },
      rightPage: {
        heading: "What You Will Learn",
        subheading: "Automate continuous delivery pipelines",
        learnings: [
          "Infrastructure as Code (IaC)",
          "Docker & K8s Containerization",
          "Cloud Architecture Design",
          "Continuous Deployment (CI/CD)"
        ]
      }
    },
    {
      id: "job-4",
      chapter: "PROGRAM 04",
      title: "SPOKEN ENGLISH MASTERY",
      category: "English & Exams",
      duration: "3 Months",
      tags: ["Fluency", "Personality", "Interviews"],
      logoUrl: "https://cdn-icons-png.flaticon.com/512/3269/3269817.png",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      accentGradient: "from-indigo-600 via-purple-500 to-rose-500",
      leftPage: {
        heading: "Spoken English Mastery",
        subheading: "Intensive fluency and personality development program to ace corporate interviews.",
        overview: "Transform your communication skills. Perfect for job seekers looking to confidently crack corporate interviews.",
        modules: [
          "Module 1 - Foundation Grammar & Vocabulary",
          "Module 2 - Advanced Fluency & Pronunciation",
          "Module 3 - Public Speaking & Debates",
          "Module 4 - Corporate Mock Interviews"
        ],
        codeSnippet: `// Communication Goal:\nSpeak English Confidently\n& Crack Top HR Interviews`
      },
      rightPage: {
        heading: "What You Will Learn",
        subheading: "Speak with corporate elegance and confidence",
        learnings: [
          "Flawless Pronunciation",
          "Corporate Etiquette & Presence",
          "Public Speaking Skills",
          "Confidence Building & Mock HRs"
        ]
      }
    },
    {
      id: "it-3",
      chapter: "PROGRAM 05",
      title: "DATA STRUCTURES & JAVA",
      category: "IT & Programming",
      duration: "3 Months",
      tags: ["DSA", "Java", "Algorithms"],
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      accentGradient: "from-purple-600 via-indigo-500 to-blue-600",
      leftPage: {
        heading: "Data Structures & Java",
        subheading: "Essential data structures and algorithms for competitive programming and interviews.",
        overview: "Crack top tech interviews by mastering core computer science concepts, algorithmic thinking, and problem-solving.",
        modules: [
          "Module 1 - Java OOP & Arrays/Strings",
          "Module 2 - Linked Lists, Stacks & Queues",
          "Module 3 - Trees, Graphs & Traversal (BFS/DFS)",
          "Module 4 - Dynamic Programming & Backtracking"
        ],
        codeSnippet: `public class Solution {\n    public static void main(String[] args) {\n        System.out.println("DSA Mastered");\n    }\n}`
      },
      rightPage: {
        heading: "What You Will Learn",
        subheading: "Master algorithmic problem solving",
        learnings: [
          "Time & Space Complexity Analysis",
          "Sorting & Searching Optimization",
          "Graph Traversal Algorithms",
          "Dynamic Programming Patterns"
        ]
      }
    }
  ];

  // Continuous Auto Flip Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % bookPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bookPages.length]);

  const handleNext = () => {
    setCurrentPage(prev => (prev + 1) % bookPages.length);
  };

  const handlePrev = () => {
    setCurrentPage(prev => (prev - 1 + bookPages.length) % bookPages.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50/70 text-slate-900 pt-0 pb-6 px-4 sm:px-8 lg:px-12 selection:bg-cyan-500/20 border-b border-slate-200/80">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-32 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[130px]"></div>
        <div className="absolute top-[25%] right-[5%] w-[650px] h-[550px] bg-cyan-200/40 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[580px]">
        
        {/* LEFT COLUMN: Hero Copy & Controls (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pt-2">
          
          {/* Tagline Pill */}
          <div className="clay-pill px-4 py-2 flex items-center gap-2.5 border border-white/80 w-fit shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-600 animate-spin" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-800">INTERACTIVE COURSE CATALOG</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-slate-900">
            Flip Through <br />
            Our Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
              Curriculum & Programs
            </span>
          </h1>

          {/* Active Chapter Highlights (Clay Card) */}
          <div className="clay-card p-6 border border-white/90 shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className={`clay-pill px-3.5 py-1 text-[10px] font-black uppercase border border-white ${bookPages[currentPage]?.badgeColor || 'bg-blue-100 text-blue-800'}`}>
                {bookPages[currentPage]?.category}
              </span>
              <div className="clay-pill px-3 py-1 flex items-center gap-1.5 text-slate-700 text-xs font-black border border-white">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <span>{bookPages[currentPage]?.duration}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 font-display">
              <span>{bookPages[currentPage]?.title}</span>
            </h3>
            
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              {bookPages[currentPage]?.leftPage?.subheading}
            </p>

            {/* Course Tag Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {bookPages[currentPage]?.tags?.map(tag => (
                <span key={tag} className="clay-pill text-[10px] font-extrabold text-slate-700 px-3 py-1 border border-white">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Flip Book Navigation */}
          <div className="flex items-center gap-3 pt-1">
            <button 
              onClick={handlePrev}
              className="clay-pill p-3 text-slate-700 border border-white hover:scale-110 active:scale-95 transition-all shadow-xs"
              title="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={handleNext}
              className="clay-pill p-3 text-slate-700 border border-white hover:scale-110 active:scale-95 transition-all shadow-xs"
              title="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Main CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#course-list"
              className="rounded-full inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all border border-white/40"
            >
              <span>Explore All Courses Below</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200/60">
            {[
              { icon: GraduationCap, label: "Expert Faculty" },
              { icon: BarChart3, label: "Hands-on Labs" },
              { icon: Award, label: "Certification" },
              { icon: Briefcase, label: "Job Assistance" }
            ].map((f, i) => (
              <div key={i} className="clay-pill flex items-center gap-2 p-2.5 border border-white text-xs font-extrabold text-slate-800 shadow-2xs">
                <f.icon className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="truncate">{f.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Real 3D Page-Flipping Book Experience (7 cols) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] perspective-[2000px]">
          
          {/* Subtle Ambient Floor Shadow under the Book */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-14 bg-slate-900/15 rounded-[100%] blur-xl pointer-events-none"></div>

          {/* 3D BOOK SHELL CONTAINER */}
          <div 
            className="relative w-[340px] sm:w-[540px] lg:w-[650px] h-[360px] sm:h-[430px] lg:h-[490px] flex justify-center items-center"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "rotateX(10deg) rotateY(-2deg)"
            }}
          >
            
            {/* HARDCOVER BOOK BINDER (Base leather/slate cover) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-[1.8rem] border-2 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex overflow-hidden">
              <div className="w-1/2 border-r border-slate-700/80 rounded-l-[1.7rem] shadow-[inset_25px_0_40px_rgba(0,0,0,0.6)]"></div>
              <div className="w-1/2 rounded-r-[1.7rem] shadow-[inset_-25px_0_40px_rgba(0,0,0,0.6)]"></div>
            </div>

            {/* STATIC LEFT PAGE STACK (Bottom left page showing active syllabus modules) */}
            <div className="absolute top-3 bottom-4 left-4 right-1/2 bg-white rounded-l-lg border-y border-l border-slate-300 shadow-[inset_25px_0_35px_rgba(0,0,0,0.06)] pl-3 pr-5 py-4 sm:p-7 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-700">
                  {bookPages[currentPage]?.chapter}
                </span>
                <span className="text-[10px] font-bold text-slate-400">Knowledge Hub Syllabus</span>
              </div>

              <div className="my-2 space-y-3">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                  {bookPages[currentPage]?.leftPage?.heading}
                </h4>
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Course Curriculum Modules:</div>
                  {bookPages[currentPage]?.leftPage?.modules?.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[10px] sm:text-[11px] font-semibold text-slate-700 bg-slate-50 p-1.5 rounded border border-slate-200">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code / Logic Box preview */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-300 font-mono text-[9px] sm:text-[10px] leading-tight overflow-hidden shadow-inner">
                <pre>{bookPages[currentPage]?.leftPage?.codeSnippet}</pre>
              </div>

              {/* Page Spine Crease Line */}
              <div className="absolute top-0 bottom-0 right-0 w-4 bg-gradient-to-l from-black/15 to-transparent pointer-events-none"></div>
            </div>

            {/* STATIC RIGHT PAGE STACK (Bottom right page showing active course preview & takeaways) */}
            <div className="absolute top-3 bottom-4 right-4 left-1/2 bg-white rounded-r-lg border-y border-r border-slate-300 shadow-[inset_-25px_0_35px_rgba(0,0,0,0.06)] pr-3 pl-5 py-4 sm:p-7 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-extrabold text-slate-900 truncate pr-2">
                  {bookPages[currentPage]?.title}
                </span>
                <BookOpen className="w-4 h-4 text-cyan-600 shrink-0" />
              </div>

              {/* Course Graphic Image */}
              <div className="relative my-2 flex-1 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src={bookPages[currentPage]?.bgImage} 
                  alt={bookPages[currentPage]?.title || "Course"} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${bookPages[currentPage]?.badgeColor || 'bg-blue-100 text-blue-800'}`}>
                    {bookPages[currentPage]?.duration}
                  </span>
                  <span className="text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    {bookPages[currentPage]?.category}
                  </span>
                </div>
              </div>

              {/* Key Learnings List */}
              <div className="space-y-1 pt-1 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">What You Will Learn:</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {bookPages[currentPage]?.rightPage?.learnings?.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-slate-700 bg-slate-50 p-1 rounded border border-slate-200 truncate">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Page Spine Crease Line */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/15 to-transparent pointer-events-none"></div>
            </div>

            {/* ENHANCED 3D REALISTIC FLIPPING PAGE LEAVES */}
            {bookPages.map((page, index) => {
              const isFlipped = index < currentPage;
              const isCurrent = index === currentPage;

              return (
                <div
                  key={page.id}
                  className="absolute top-3 bottom-4 right-4 left-1/2 origin-left transition-all duration-[1200ms]"
                  style={{
                    transformStyle: "preserve-3d",
                    transitionTimingFunction: "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
                    transform: isFlipped 
                      ? "rotateY(-180deg) translateZ(2px)" 
                      : "rotateY(0deg) translateZ(0px)",
                    zIndex: isCurrent ? 35 : isFlipped ? 10 + index : 25 - index
                  }}
                >
                  {/* FRONT FACE OF FLIPPING PAGE (Facing Right side initially) */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-r-xl border-y border-r border-slate-300/90 shadow-[-18px_20px_35px_rgba(0,0,0,0.22),0_0_15px_rgba(34,211,238,0.15)] pr-3 pl-5 py-4 sm:p-7 flex flex-col justify-between overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Glowing light edge highlight on outer turning page margin */}
                    <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-cyan-400/80 via-blue-400/50 to-cyan-400/80 pointer-events-none"></div>

                    <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
                      <span className="text-xs font-extrabold text-slate-900 truncate pr-2 tracking-tight">{page.title}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold shrink-0 shadow-2xs ${page.badgeColor}`}>
                        {page.duration}
                      </span>
                    </div>

                    <div className="relative my-2 flex-1 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm group">
                      <img src={page.bgImage} alt={page.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                      <div className="absolute bottom-2 left-3 text-white font-extrabold text-xs tracking-wide drop-shadow-md">
                        {page.rightPage.heading}
                      </div>
                    </div>

                    <div className="space-y-1.5 z-10 pt-1 border-t border-slate-200/90">
                      <div className="text-[10px] font-bold text-slate-700">{page.leftPage.subheading}</div>
                      <div className="flex flex-wrap gap-1">
                        {page.tags.map(t => (
                          <span key={t} className="text-[9px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60">#{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Paper Spine Crease Gradient Overlay */}
                    <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* BACK FACE OF FLIPPING PAGE (Facing Left side after flip) */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 rounded-l-xl border-y border-l border-slate-300/90 shadow-[inset_30px_0_40px_rgba(0,0,0,0.12),18px_20px_35px_rgba(0,0,0,0.22)] pl-3 pr-5 py-4 sm:p-7 flex flex-col justify-between overflow-hidden"
                    style={{ 
                      backfaceVisibility: "hidden", 
                      transform: "rotateY(180deg)" 
                    }}
                  >
                    {/* Glowing light edge highlight on outer turning page margin */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-400/80 via-blue-400/50 to-cyan-400/80 pointer-events-none"></div>

                    <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
                      <span className="text-[10px] font-extrabold text-cyan-700 uppercase tracking-widest">{page.chapter}</span>
                      <span className="text-[10px] font-bold text-slate-400">Knowledge Hub</span>
                    </div>

                    <div className="my-2 space-y-2">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">{page.leftPage.heading}</h4>
                      <div className="space-y-1.5">
                        {page.leftPage.modules.slice(0, 3).map((mod, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold text-slate-700 bg-white p-1.5 rounded border border-slate-200/80 truncate shadow-2xs">
                            <span className="text-cyan-600 font-bold">•</span>
                            <span className="truncate">{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-300 font-mono text-[9px] truncate shadow-inner">
                      {page.leftPage.codeSnippet.split('\n')[0]}
                    </div>

                    {/* Paper Spine Crease Gradient Overlay */}
                    <div className="absolute top-0 bottom-0 right-0 w-5 bg-gradient-to-l from-black/25 via-black/10 to-transparent pointer-events-none"></div>
                  </div>

                </div>
              );
            })}

            {/* REALISTIC 3D CENTER SPINE BINDER SEAM */}
            <div className="absolute inset-y-0 left-1/2 -ml-2.5 w-5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-xs shadow-2xl z-40 border-x border-slate-600/50"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

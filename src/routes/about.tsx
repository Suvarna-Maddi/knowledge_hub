import { useState, useRef, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight,
  Target, 
  Eye, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  BookOpen,
  Code2,
  Cloud,
  BarChart3,
  Monitor,
  Globe2,
  BrainCircuit,
  Clock,
  Building2,
  ShieldCheck,
  Zap,
  Users,
  ChevronDown,
  ChevronRight,
  Star,
  Check,
  X,
  HelpCircle,
  UserCheck,
  Flame,
  Laptop,
  Trophy,
  MessageSquareQuote,
  Compass,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseEnrollmentModal } from "@/components/courses/CourseEnrollmentModal";
import { type Course } from "@/data/courses";
import realLaptopImg from "@/assets/real-laptop.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Knowledge Hub | Suncity Hyderabad" },
      { name: "description", content: "Knowledge Hub in Suncity Hyderabad is a premier computer training institute offering IT programming, Cloud, Data Analytics, English fluency, and Academic coaching." },
    ],
  }),
  component: AboutPage,
});

const AnimatedNumber = ({ valueStr }: { valueStr: string }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  const target = parseFloat(valueStr.replace(/,/g, '').replace(/[^0-9.]/g, ''));
  const suffix = valueStr.replace(/[0-9.,]/g, '');
  const isComma = valueStr.includes(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          let startTime: number;
          const duration = 2000;
          
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCurrent(Math.floor(easeProgress * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrent(target);
            }
          };
          requestAnimationFrame(animate);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayValue = isComma ? current.toLocaleString() : current;
  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export function AboutPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [enrollCourse, setEnrollCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Live Interactive Hero Simulation States
  const [simTab, setSimTab] = useState<number>(0);
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [phraseIdx, setPhraseIdx] = useState<number>(0);
  const [isSimAutoPlay, setIsSimAutoPlay] = useState<boolean>(true);
  const [cursorOnButton, setCursorOnButton] = useState<boolean>(false);
  const [cursorClicking, setCursorClicking] = useState<boolean>(false);
  const simContainerRef = useRef<HTMLDivElement>(null);

  const runSimulation = () => {
    setSimRunning(true);
    setTimeout(() => {
      setSimRunning(false);
    }, 1800);
  };

  // Perfect Synchronized Auto-Display, Virtual Cursor Movement & Code Auto-Scroll
  useEffect(() => {
    if (!isSimAutoPlay) {
      setCursorOnButton(false);
      setCursorClicking(false);
      return;
    }

    const cycleInterval = setInterval(() => {
      // 1. T = 0ms: Code content smooth auto-scrolls down as user reads
      if (simContainerRef.current) {
        simContainerRef.current.scrollTo({ top: 60, behavior: "smooth" });
      }

      // 2. T = 800ms: Cursor glides towards "Run Lab Demo" button
      const moveTimeout = setTimeout(() => {
        setCursorOnButton(true);

        // 3. T = 1500ms (700ms after cursor starts moving): Cursor lands on button & clicks!
        const clickTimeout = setTimeout(() => {
          setCursorClicking(true);
          runSimulation();

          // 4. T = 1800ms: Release click effect
          const releaseTimeout = setTimeout(() => {
            setCursorClicking(false);
          }, 300);

          // 5. T = 3800ms: After simulation finishes, scroll back up, reset cursor & advance tab!
          const resetTimeout = setTimeout(() => {
            if (simContainerRef.current) {
              simContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
            }
            setCursorOnButton(false);
            setSimTab((prev) => (prev + 1) % 4);
          }, 2300);

          return () => {
            clearTimeout(releaseTimeout);
            clearTimeout(resetTimeout);
          };
        }, 700);

        return () => clearTimeout(clickTimeout);
      }, 800);

      return () => clearTimeout(moveTimeout);
    }, 5000);

    return () => clearInterval(cycleInterval);
  }, [isSimAutoPlay]);

  const heroPhrases = [
    "Python Full Stack",
    "Cloud & DevOps",
    "Data Analytics & BI",
    "IELTS Band 8.0",
    "Academic Coaching"
  ];

  // Auto phrase rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx(prev => (prev + 1) % heroPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroPhrases.length]);

  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse move handler for 3D hero tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -16,
      y: (x / rect.width) * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const openEnrollmentForDomain = (domainTitle: string, category: string) => {
    setEnrollCourse({
      id: "domain-enroll",
      title: domainTitle,
      category: category,
      duration: "Flexible (1 to 6 Months)",
      description: `Comprehensive training program in ${domainTitle} at Knowledge Hub, Suncity, Hyderabad.`,
      dotColor: "bg-blue-600",
      themeText: "text-blue-600",
      themeBorder: "border-blue-600",
      logoUrl: "",
      overview: `Comprehensive training program in ${domainTitle} at Knowledge Hub, Suncity, Hyderabad.`,
      learnings: ["100% Practical Labs", "Live Industry Projects", "1:1 Expert Mentorship", "Placement Assistance"],
      modules: ["Core Concepts", "Real-World Projects", "Interview Drills"],
      tags: ["Practical Training", "Certified", "Suncity Hub"],
    });
    setIsModalOpen(true);
  };

  const courseDomains = [
    {
      id: "it",
      icon: Code2,
      badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
      title: "1. IT & Programming",
      desc: "Master modern software engineering foundations, object-oriented programming, algorithms, and full-stack web applications.",
      courses: [
        "Python (Full Stack Development)",
        "Java Enterprise Stack",
        "C & C++ Programming",
        "Data Structures & Algorithms",
        ".NET Framework & C#",
        "Oracle Database Systems",
        "SQL & PL/SQL Query Tuning"
      ]
    },
    {
      id: "cloud",
      icon: Cloud,
      badgeColor: "bg-sky-100 text-sky-900 border-sky-200",
      title: "2. Cloud & DevOps",
      desc: "Architect, deploy, scale, and automate enterprise cloud infrastructure using industry-standard DevOps tools.",
      courses: [
        "AWS Cloud Architecture",
        "Microsoft Azure Administrator",
        "Google Cloud Platform (GCP)",
        "DevOps CI/CD Pipelines",
        "Docker Containerization",
        "Kubernetes Orchestration"
      ]
    },
    {
      id: "data",
      icon: BarChart3,
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-200",
      title: "3. Data & Analytics",
      desc: "Transform raw unstructured business data into interactive executive dashboards and predictive analytical models.",
      courses: [
        "Power BI Dashboards & DAX",
        "Advanced Excel & VBA Macros",
        "Complex SQL Queries",
        "Business Intelligence Analytics"
      ]
    },
    {
      id: "office",
      icon: Monitor,
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
      title: "4. Office & Computer Skills",
      desc: "Essential digital productivity, financial accounting, desktop publishing, and PC hardware foundations.",
      courses: [
        "MS Office Suite Mastery",
        "Tally Prime & GST Filing",
        "Desktop Publishing (DTP)",
        "DCA / PGDCA Diploma",
        "Hardware & Computer Networking"
      ]
    },
    {
      id: "english",
      icon: Globe2,
      badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
      title: "5. English & Competitive Exams",
      desc: "Comprehensive preparation for international language proficiency and higher education admissions worldwide.",
      courses: [
        "Spoken English & Fluency",
        "IELTS Academic & General (7+ Band)",
        "TOEFL Exam Prep",
        "GRE General Test",
        "PTE Academic Coaching",
        "SELT Exam Preparation",
        "Duolingo English Test"
      ]
    },
    {
      id: "academics",
      icon: GraduationCap,
      badgeColor: "bg-slate-100 text-slate-900 border-slate-200",
      title: "6. Academic Coaching",
      desc: "Rigorous tutoring for school boards, intermediate MPC/BiPC, engineering core subjects, and EAMCET entrance exams.",
      courses: [
        "SSC, CBSE & ICSE (Class 1st to 12th)",
        "Intermediate 1st & 2nd Year",
        "EAMCET Entrance Coaching",
        "All Core School Subjects",
        "Engineering Core Subjects"
      ]
    }
  ];

  const keyStrengths = [
    {
      title: "Expert Trainers",
      desc: "Experienced faculty who simplify complex tech stacks and guide students step-by-step with patience.",
      icon: Users,
      gradient: "from-blue-600 to-sky-500"
    },
    {
      title: "Practical Learning",
      desc: "Hands-on computer training with real-world projects, live coding labs, and debugging sessions.",
      icon: Zap,
      gradient: "from-blue-700 to-indigo-600"
    },
    {
      title: "Placement Support",
      desc: "Dedicated career guidance, resume building, corporate mock interviews, and active job referrals.",
      icon: Briefcase,
      gradient: "from-sky-600 to-blue-600"
    },
    {
      title: "Regular Mock Tests",
      desc: "Weekly mock exams, continuous code reviews, and detailed performance feedback reports.",
      icon: Target,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Industry Certification",
      desc: "Recognized certificates upon course completion to validate your technical skill set to recruiters.",
      icon: Award,
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Flexible Batch Timings",
      desc: "Convenient morning, evening, and weekend batches designed for students and working professionals.",
      icon: Clock,
      gradient: "from-sky-500 to-blue-600"
    },
    {
      title: "Affordable Fee Structure",
      desc: "Top-tier quality education made accessible to all learners with flexible installment options.",
      icon: ShieldCheck,
      gradient: "from-blue-700 to-sky-600"
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "JOIN & COUNSEL",
      subtitle: "Personalized Career Mapping",
      desc: "We analyze your academic background, career goals, and interest to recommend the ideal course track.",
      icon: UserCheck,
      badgeBg: "bg-blue-600 text-white",
      details: ["Free Skill Assessment", "Custom Course Selection", "Flexible Batch Timing Allocation"]
    },
    {
      step: "02",
      title: "LEARN CONCEPTS",
      subtitle: "Step-by-Step Mentorship",
      desc: "Master foundational concepts with structured lectures delivered by experienced industry trainers.",
      icon: BookOpen,
      badgeBg: "bg-sky-600 text-white",
      details: ["Interactive Daily Lectures", "Simplified Module Guides", "Doubts Resolved Instantly"]
    },
    {
      step: "03",
      title: "PRACTICE IN LABS",
      subtitle: "1:1 Hands-On Execution",
      desc: "Work on real-world projects, live coding repositories, and practical business scenarios in our computer lab.",
      icon: Laptop,
      badgeBg: "bg-indigo-600 text-white",
      details: ["1:1 Lab Mentorship", "Real-World Mini Projects", "GitHub Code Repository Building"]
    },
    {
      step: "04",
      title: "MASTER & CERTIFY",
      subtitle: "Mock Tests & Evaluation",
      desc: "Evaluate your progress with weekly mock tests, interview drills, and earn your course certification.",
      icon: Trophy,
      badgeBg: "bg-blue-700 text-white",
      details: ["Weekly Written & Lab Tests", "Course Completion Certificate", "Skill Scorecard Evaluation"]
    },
    {
      step: "05",
      title: "JOB & PLACEMENT",
      subtitle: "Career Transformation",
      desc: "Benefit from resume optimization, LinkedIn profiling, mock HR interviews, and active hiring referrals.",
      icon: Briefcase,
      badgeBg: "bg-cyan-700 text-white",
      details: ["Resume & Portfolio Building", "1:1 Corporate Mock Interviews", "Hiring Referral Assistance"]
    }
  ];

  const comparisonData = [
    { feature: "Learning Methodology", knowledgeHub: "100% Practical Hands-On Labs", traditional: "Rote Memory & Theory Lectures" },
    { feature: "Batch Size & Attention", knowledgeHub: "Focused Small Batches (1:1 Mentorship)", traditional: "Overcrowded 50-100 Student Halls" },
    { feature: "Project Experience", knowledgeHub: "Live Projects & Real Repositories", traditional: "Bookish Assignments Only" },
    { feature: "Faculty Expertise", knowledgeHub: "Active Industry Professionals", traditional: "Inexperienced Academic Tutors" },
    { feature: "Career & Job Guidance", knowledgeHub: "Resume, Mock Interviews & Referrals", traditional: "Zero Placement Assistance" },
    { feature: "Batch Flexibility", knowledgeHub: "Morning, Evening & Weekend Batches", traditional: "Rigid Non-Flexible Schedules" },
  ];

  const mentorTeam = [
    {
      name: "S. K. Verma",
      role: "Lead Python & Full Stack Mentor",
      exp: "10+ Years Exp",
      desc: "Specializes in Python Full Stack, Data Structures, Django, and Enterprise Web Development.",
      badge: "Tech Lead",
      icon: Code2,
      gradient: "from-blue-600 to-sky-500"
    },
    {
      name: "Priya Sharma",
      role: "Cloud & DevOps Architect",
      exp: "8+ Years Exp",
      desc: "Certified AWS Architect guiding students through Cloud deployment, Docker, and Kubernetes.",
      badge: "Cloud Certified",
      icon: Cloud,
      gradient: "from-sky-600 to-indigo-600"
    },
    {
      name: "Rajesh Kulkarni",
      role: "Advanced Data Analytics Lead",
      exp: "9+ Years Exp",
      desc: "Expert in Power BI, Advanced Excel, SQL optimization, and business intelligence models.",
      badge: "BI Specialist",
      icon: BarChart3,
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      name: "Anjali Rao",
      role: "IELTS & Corporate Fluency Master",
      exp: "7+ Years Exp",
      desc: "Trained 800+ students to achieve Band 7.5+ in IELTS and master fluent English speaking.",
      badge: "7.5+ Band Coach",
      icon: Globe2,
      gradient: "from-indigo-600 to-sky-600"
    }
  ];

  const testimonials = [
    {
      name: "Rahul N.",
      role: "Python Full Stack Graduate",
      company: "Software Engineer",
      content: "Knowledge Hub changed my career trajectory! The hands-on coding labs in Python and SQL helped me clear technical interviews with full confidence.",
      rating: 5,
      avatarBg: "bg-blue-600"
    },
    {
      name: "Sneha M.",
      role: "Cloud & DevOps Student",
      company: "AWS Cloud Associate",
      content: "The 1:1 lab mentorship is unbeatable. Learning AWS and Docker practically gave me real experience that books could never provide.",
      rating: 5,
      avatarBg: "bg-sky-600"
    },
    {
      name: "Mohammed F.",
      role: "IELTS Candidate",
      company: "Achieved Band 8.0",
      content: "Small batch size and personalized feedback on speaking and writing helped me score an overall 8.0 Band in my first IELTS attempt!",
      rating: 5,
      avatarBg: "bg-indigo-600"
    }
  ];

  const faqs = [
    {
      q: "Where is Knowledge Hub located in Suncity, Hyderabad?",
      a: "Knowledge Hub is conveniently located at Suncity Main Road, Bandlaguda Jagir, Hyderabad. Visit us for center tours, batch schedules, and free demo classes."
    },
    {
      q: "Do you offer practical hands-on computer lab training?",
      a: "Yes! 100% of our tech courses (Python, Java, Cloud, Data, Tally) are taught with practical computer lab sessions where every student works on individual projects under trainer guidance."
    },
    {
      q: "What batch timings are available for students and working professionals?",
      a: "We offer flexible Morning Batches (7:30 AM - 10:00 AM), Regular Batches throughout the day, Evening Batches (5:30 PM - 8:30 PM), and Special Weekend Batches for working professionals."
    },
    {
      q: "How does placement support work at Knowledge Hub?",
      a: "We provide end-to-end career assistance: professional resume building, 1:1 corporate mock interviews, soft skills training, and active hiring referrals to leading companies."
    },
    {
      q: "Can I attend a free demo class before enrolling?",
      a: "Absolutely! We encourage all prospective students to attend a free 1-on-1 demo session with our expert trainers before deciding to enroll."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-sky-50 min-h-screen pb-24 text-slate-900">
      
      {/* Background Ambience Orbs (Pale Blue & Sky Accent) */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-100/60 blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute top-[30%] left-[-150px] w-[600px] h-[600px] rounded-full bg-sky-100/60 blur-[150px] pointer-events-none -z-10"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-8">
          <div className="clay-pill px-6 py-2.5 flex items-center gap-3 border border-blue-200/80 bg-white/95 shadow-xs">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-wide uppercase text-blue-950">
              Suncity, Hyderabad • Computer Training Institute • Since 2017
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Empowering Careers Through{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent block sm:inline">
                Practical Education
              </span>
            </h1>

            {/* Dynamic Auto-Cycling Phrase Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 text-blue-950 text-xs font-extrabold border border-blue-200 shadow-xs animate-in fade-in duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Training Focus: </span>
              <span className="text-blue-700 font-black underline decoration-blue-400 decoration-2">{heroPhrases[phraseIdx]}</span>
            </div>

            {/* Positioning Statement Callout Box */}
            <div className="mt-6 p-6 rounded-3xl bg-white border-l-4 border-l-blue-600 border border-blue-100 shadow-md relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-slate-900 text-base sm:text-lg font-extrabold leading-relaxed italic">
                “Knowledge Hub is not just a training institute — it is a complete learning ecosystem that transforms students from beginners into confident, skilled, and career-ready individuals.”
              </p>
            </div>

            {/* 30-Second Executive Pitch Summary */}
            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Knowledge Hub is a Hyderabad-based computer training institute offering IT programming, Cloud computing, Data analytics, English fluency, and Academic coaching. We focus on practical learning, 1:1 mentorship, and placement support to help you achieve career success.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => openEnrollmentForDomain("General Course Counseling", "Job-Ready Programs")}
                size="lg" 
                className="rounded-full h-14 px-8 text-base font-bold shadow-xl shadow-blue-600/25 bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 border-0"
              >
                Book Free Demo Class <Sparkles className="ml-2 w-5 h-5" />
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base font-bold clay-pill border-blue-200 text-slate-900 hover:bg-white transition-all hover:scale-105">
                <a href="tel:7997908465" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" /> Call 7997908465
                </a>
              </Button>
            </div>

            {/* ISO Certifications */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200 shadow-sm">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-700">ISO 29990:2010 Certified</span>
              </div>
            </div>
          </div>

          {/* Right 3D Interactive Computer Lab & Skill Engine Simulator */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div 
              ref={heroRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-xl transition-transform duration-200 ease-out select-none"
            >
              {/* --- REAL LAPTOP PNG IMAGE FRAME --- */}
              <div className="relative w-full">
                
                {/* Clean PNG Laptop Image */}
                <img 
                  src={realLaptopImg} 
                  alt="Knowledge Hub Computer Training Laptop" 
                  className="w-full h-auto object-contain block pointer-events-none select-none"
                />

                {/* Embedded Live Screen Area Overlaid inside the Laptop Display Screen bounds */}
                <div className="absolute top-[5.5%] left-[14.5%] right-[14.5%] bottom-[33%] overflow-hidden rounded-t-[6px] sm:rounded-t-[14px] rounded-b-[2px] bg-slate-950 flex flex-col border border-slate-800/80 shadow-inner">
                  
                  {/* Glass Screen Reflection Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-20"></div>

                  {/* Live Terminal UI Simulator */}
                  <div 
                    onMouseEnter={() => setIsSimAutoPlay(false)}
                    onMouseLeave={() => setIsSimAutoPlay(true)}
                    className="w-full h-full bg-slate-950/95 p-2 sm:p-3.5 text-slate-100 relative overflow-hidden flex flex-col justify-between select-auto"
                  >
                    {/* Virtual Auto-Clicking Cursor Pointer */}
                    <div
                      className={`absolute z-30 pointer-events-none transition-all duration-700 ease-out flex items-center gap-1 ${
                        isSimAutoPlay ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                      style={{
                        bottom: cursorOnButton ? "16px" : "110px",
                        right: cursorOnButton ? "18px" : "120px",
                      }}
                    >
                      <div className="relative">
                        <MousePointer2
                          className={`w-4 h-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] transition-transform duration-150 ${
                            cursorClicking ? "scale-75 text-emerald-400" : "scale-100"
                          }`}
                        />
                        {cursorClicking && (
                          <span className="absolute -inset-1.5 rounded-full bg-emerald-400/50 animate-ping"></span>
                        )}
                      </div>
                    </div>
                    
                    {/* Simulator Top Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block"></span>
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 ml-1.5">knowledgehub-lab.py</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setIsSimAutoPlay(prev => !prev)}
                          className="px-2 py-0.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1 transition-all shadow-xs cursor-pointer"
                          title={isSimAutoPlay ? "Click to pause auto-display" : "Click to resume auto-display"}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isSimAutoPlay ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`}></span>
                          <span>{isSimAutoPlay ? "AUTO" : "PAUSED"}</span>
                        </button>
                        <span className="px-2 py-0.5 sm:px-2.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          LIVE LAB
                        </span>
                      </div>
                    </div>

                    {/* Domain Simulation Selector Tabs */}
                    <div className="grid grid-cols-4 gap-1 my-2 bg-slate-900/90 p-1 rounded-xl border border-slate-800 shrink-0">
                      {[
                        { label: "Python", icon: Code2, color: "text-blue-400" },
                        { label: "Cloud", icon: Cloud, color: "text-sky-400" },
                        { label: "Data", icon: BarChart3, color: "text-cyan-400" },
                        { label: "English", icon: Globe2, color: "text-indigo-400" }
                      ].map((tab, idx) => {
                        const TabIcon = tab.icon;
                        const isActive = simTab === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSimTab(idx)}
                            className={`py-1 px-1 rounded-lg text-[10px] sm:text-[11px] font-extrabold flex items-center justify-center gap-1 transition-all duration-300 ${
                              isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-600/40 scale-[1.02]"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                            }`}
                          >
                            <TabIcon className={`w-3 h-3 ${isActive ? "text-white animate-bounce" : tab.color}`} />
                            <span className="truncate">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dynamic Screen Content for Active Tab */}
                    <div 
                      ref={simContainerRef}
                      className="bg-slate-900/95 rounded-xl p-2 sm:p-3 border border-slate-800/90 flex-1 min-h-0 flex flex-col justify-between font-mono text-[10px] sm:text-xs relative overflow-y-auto scroll-smooth scrollbar-none"
                    >
                      {simRunning && (
                        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-xs flex items-center justify-center z-20">
                          <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-[10px] sm:text-xs font-mono font-bold animate-pulse flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Running Practical Lab Verification...
                          </div>
                        </div>
                      )}

                      {/* TAB 0: PYTHON FULL STACK */}
                      {simTab === 0 && (
                        <div className="space-y-1 sm:space-y-1.5">
                          <div className="text-slate-400 flex items-center justify-between text-[10px]">
                            <span># Python Full Stack Student Project</span>
                            <span className="text-emerald-400 font-bold">Python 3.12</span>
                          </div>
                          <div className="text-sky-300">
                            <span className="text-purple-400">class</span> <span className="text-amber-300 font-bold">KnowledgeHubStudent</span>:
                          </div>
                          <div className="pl-3 text-slate-300">
                            <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):
                          </div>
                          <div className="pl-6 text-slate-300">
                            self.labs = <span className="text-emerald-300">"100% Practical"</span>
                          </div>
                          <div className="pl-6 text-slate-300">
                            self.projects = [<span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">"SQL DB"</span>]
                          </div>
                          <div className="pl-3 text-slate-300">
                            <span className="text-purple-400">def</span> <span className="text-amber-300">get_placed</span>(self):
                          </div>
                          <div className="pl-6 text-emerald-400 font-bold">
                            return <span className="text-emerald-300">"Software Engineer 🚀"</span>
                          </div>
                        </div>
                      )}

                      {/* TAB 1: CLOUD & DEVOPS */}
                      {simTab === 1 && (
                        <div className="space-y-1.5">
                          <div className="text-slate-400 flex items-center justify-between text-[10px]">
                            <span># AWS & DevOps Cloud Deployments</span>
                            <span className="text-sky-400 font-bold">AWS Live</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                              <span className="text-slate-300 text-[10px]">EC2 Web Cluster</span>
                              <span className="text-emerald-400 text-[9px] font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">RUNNING (24ms)</span>
                            </div>
                            <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                              <span className="text-slate-300 text-[10px]">Docker Container</span>
                              <span className="text-sky-400 text-[9px] font-bold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/30">PORT 8080 HEALTHY</span>
                            </div>
                            <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                              <span className="text-slate-300 text-[10px]">Kubernetes Cluster</span>
                              <span className="text-purple-400 text-[9px] font-bold bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/30">3 REPLICAS SYNCED</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 2: DATA ANALYTICS & BI */}
                      {simTab === 2 && (
                        <div className="space-y-1.5">
                          <div className="text-slate-400 flex items-center justify-between text-[10px]">
                            <span># Power BI & Executive Dashboards</span>
                            <span className="text-cyan-400 font-bold">Power BI</span>
                          </div>
                          
                          {/* Live Data Bar Chart Animation */}
                          <div className="flex items-end justify-between h-16 pt-1 px-3 gap-2 bg-slate-800/60 rounded-lg border border-slate-700/50">
                            {[
                              { val: "75%", label: "Q1", h: "h-[60%]", color: "bg-blue-500" },
                              { val: "88%", label: "Q2", h: "h-[78%]", color: "bg-sky-400" },
                              { val: "95%", label: "Q3", h: "h-[90%]", color: "bg-emerald-400" },
                              { val: "100%", label: "Q4", h: "h-[100%]", color: "bg-cyan-400" }
                            ].map((bar, bIdx) => (
                              <div key={bIdx} className="flex-1 flex flex-col items-center gap-0.5">
                                <span className="text-[8px] text-slate-400">{bar.val}</span>
                                <div className={`w-full ${bar.h} ${bar.color} rounded-t-xs transition-all duration-700 animate-pulse`} />
                                <span className="text-[8px] text-slate-400 font-bold">{bar.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* TAB 3: IELTS & ENGLISH FLUENCY */}
                      {simTab === 3 && (
                        <div className="space-y-1.5">
                          <div className="text-slate-400 flex items-center justify-between text-[10px]">
                            <span># IELTS & Fluency Band Tracker</span>
                            <span className="text-indigo-400 font-bold">8.0 Band</span>
                          </div>

                          {/* Equalizer Audio Waveform */}
                          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-1 h-12">
                            {[40, 75, 90, 60, 100, 85, 45, 95, 70, 80, 50, 90, 65].map((val, wIdx) => (
                              <div 
                                key={wIdx} 
                                className="flex-1 bg-gradient-to-t from-indigo-500 to-sky-400 rounded-full animate-pulse"
                                style={{ 
                                  height: `${val}%`, 
                                  animationDuration: `${0.6 + (wIdx % 4) * 0.2}s` 
                                }} 
                              />
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-sans font-bold text-slate-300 px-0.5">
                            <span>Pronunciation: 8.5</span>
                            <span>Fluency: 8.0</span>
                            <span>Overall: <strong className="text-indigo-400">8.0 ★</strong></span>
                          </div>
                        </div>
                      )}

                      {/* Terminal Execution Output */}
                      <div className="mt-1.5 pt-1.5 border-t border-slate-800 text-[9px] sm:text-[10px] text-emerald-400 flex items-center justify-between shrink-0">
                        <span className="truncate">
                          {simTab === 0 && "> python test.py → [SUCCESS] Practical Ready"}
                          {simTab === 1 && "> terraform apply → [SUCCESS] Cloud Active"}
                          {simTab === 2 && "> DAX Measure → [SUCCESS] Dashboard Ready"}
                          {simTab === 3 && "> Voice Fluency → [SUCCESS] Band 8.0 Target"}
                        </span>
                        <button 
                          onClick={runSimulation}
                          className={`px-2 py-0.5 rounded text-white font-sans text-[9px] sm:text-[10px] font-bold transition-all shrink-0 ml-1.5 shadow-xs ${
                            cursorClicking 
                              ? "bg-emerald-500 scale-95 ring-2 ring-emerald-400" 
                              : "bg-blue-600 hover:bg-blue-500"
                          }`}
                        >
                          Run Lab Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INSTITUTE KEY STATISTICS COUNTER GRID --- */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "1,500+", label: "Skilled Graduates", sub: "Placed in Tech & Academics", icon: GraduationCap, color: "text-blue-600" },
            { value: "98%", label: "Success Rate", sub: "Verified Course Outcome", icon: Award, color: "text-sky-600" },
            { value: "6", label: "Core Domains", sub: "IT, Cloud, Data & Academics", icon: Code2, color: "text-indigo-600" },
            { value: "100%", label: "Practical Labs", sub: "1:1 Hands-on Computer Practice", icon: Zap, color: "text-blue-700" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="clay-card p-6 border border-white flex flex-col items-center text-center hover:scale-105 transition-transform">
                <div className={`h-12 w-12 rounded-2xl bg-blue-50 ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-display text-3xl sm:text-4xl font-black text-slate-900">
                  <AnimatedNumber valueStr={stat.value} />
                </span>
                <span className="font-bold text-sm text-slate-800 mt-1">{stat.label}</span>
                <span className="text-xs text-slate-500 mt-0.5 font-medium">{stat.sub}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- VISION & MISSION SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Foundation & Core Purpose
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Vision Card (Claymorphism Highlight) */}
          <div className="lg:col-span-5 clay-card-blue p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-white">
            <div className="h-16 w-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700">Strategic Direction</span>
              <h3 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4 font-display">Our Vision</h3>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                To become a <strong className="text-blue-900 font-bold">trusted learning platform</strong> that empowers students with <strong className="text-blue-900 font-bold">in-demand skills</strong>, confidence, and career opportunities in both IT and academics.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-200/60 flex items-center justify-between text-xs font-extrabold text-blue-800">
              <span>Future-Ready Ecosystem</span>
              <span>Suncity • Hyderabad</span>
            </div>
          </div>

          {/* Mission 4-Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Practical Hands-On Training",
                desc: "Focus on real-world projects, live coding, and practical execution rather than pure theory.",
                icon: Zap,
                color: "text-blue-600 bg-blue-50"
              },
              {
                title: "Affordable Quality Education",
                desc: "Delivering top-tier, industry-standard training at costs accessible to all students.",
                icon: ShieldCheck,
                color: "text-sky-600 bg-sky-50"
              },
              {
                title: "From Learning to Placement",
                desc: "Providing continuous mentorship, resume guidance, mock interviews, and career placement support.",
                icon: Briefcase,
                color: "text-blue-700 bg-blue-50"
              },
              {
                title: "Problem-Solving Mindset",
                desc: "Building strong analytical foundations to empower students to solve complex real-world challenges.",
                icon: BrainCircuit,
                color: "text-indigo-600 bg-blue-50"
              }
            ].map((mission, idx) => (
              <div key={idx} className="glass-card-3d p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-transform">
                <div className={`h-12 w-12 rounded-2xl ${mission.color} flex items-center justify-center mb-4`}>
                  <mission.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2 font-display">{mission.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{mission.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- COURSES OFFERED SECTION (6 DOMAINS) --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Comprehensive Curriculum
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            Explore Our 6 Core Training Domains
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            From cutting-edge IT full stack development to school academic coaching and international language prep.
          </p>
        </div>

        {/* Category Tabs Nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {courseDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "clay-pill text-slate-700 hover:bg-white hover:text-blue-600"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                {domain.title.split(". ")[1]}
              </button>
            );
          })}
        </div>

        {/* Selected Domain Spotlight Card */}
        {(() => {
          const currentDomain = courseDomains[activeTab] || courseDomains[0];
          if (!currentDomain) return null;
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Active Domain Spotlight */}
              <div className="lg:col-span-5 clay-card p-8 sm:p-10 flex flex-col justify-between border border-white">
                <div>
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black border mb-6 ${currentDomain.badgeColor}`}>
                    Domain #{activeTab + 1}
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 font-display mb-4">
                    {currentDomain.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium mb-6">
                    {currentDomain.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-xs font-black uppercase text-slate-400 mb-3 tracking-wider">Domain Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">1:1 Lab Guidance</span>
                      <span className="px-3.5 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-bold">Real Projects</span>
                      <span className="px-3.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold">Certification</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button 
                      onClick={() => openEnrollmentForDomain(currentDomain.title, "IT & Programming")}
                      className="w-full rounded-2xl h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md border-0"
                    >
                      Enroll in {currentDomain.title.split(". ")[1]} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Course List Pill Grid */}
              <div className="lg:col-span-7 glass-card-3d p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-6 font-display flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    Available Modules in {currentDomain.title.split(". ")[1]}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentDomain.courses.map((course, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-2xl bg-white/90 border border-slate-200 flex items-center gap-3 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
                        <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs">
                          {cIdx + 1}
                        </div>
                        <span className="font-extrabold text-slate-800 text-sm sm:text-base">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-blue-900">
                  <span>Looking for custom batch timings?</span>
                  <a href="tel:7997908465" className="underline font-bold text-blue-700">Enquire Now</a>
                </div>
              </div>

            </div>
          );
        })()}
      </section>

      {/* --- WHY KNOWLEDGE HUB VS TRADITIONAL INSTITUTES (COMPARISON MATRIX) --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="clay-card-blue p-8 sm:p-12 border border-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2 block">
              Clear Value Proposition
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Knowledge Hub Stands Out
            </h2>
            <p className="mt-2 text-slate-700 text-base">
              See how our practical ecosystem compares against traditional theoretical coaching centers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-blue-200/80 text-xs font-black uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-4 sm:px-6">Feature</th>
                  <th className="py-4 px-4 sm:px-6 text-blue-700 bg-blue-100/60 rounded-t-2xl font-black">Knowledge Hub (Suncity)</th>
                  <th className="py-4 px-4 sm:px-6 text-slate-400">Traditional Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-200/60 text-sm sm:text-base font-medium text-slate-800">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 sm:px-6 bg-blue-100/40 font-black text-blue-950 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      {row.knowledgeHub}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500">
                      <span className="line-through decoration-slate-400">{row.traditional}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- TIMELINE / JOURNEY UI (JOIN → LEARN → PRACTICE → MASTER → JOB) --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Structured Learning Pathway
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Your 5-Step Transformation Journey
          </h2>
          <p className="mt-3 text-slate-600 text-base font-medium">
            From beginner to confident, skilled, and job-ready professional. Click any stage to inspect details.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-600 -translate-y-1/2 rounded-full -z-0 opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {journeySteps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`clay-card p-6 border border-white flex flex-col justify-between cursor-pointer transition-all duration-300 relative group ${
                    isActive ? "ring-2 ring-blue-600 scale-105 shadow-xl bg-white" : "hover:-translate-y-2"
                  }`}
                >
                  <div>
                    {/* Step Pill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-black shadow-xs ${item.badgeBg}`}>
                        STEP {item.step}
                      </span>
                      <div className="h-10 w-10 rounded-2xl bg-blue-50 text-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 tracking-tight font-display mb-1">{item.title}</h3>
                    <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{item.subtitle}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-extrabold text-slate-400">
                    <span>Stage {idx + 1} of 5</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          {(() => {
            const step = journeySteps[activeStep] ?? journeySteps[0]!;
            return (
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-black uppercase text-blue-600 tracking-wider">Active Journey Inspection • Step {step.step}</span>
                  <h4 className="text-2xl font-black text-slate-900 font-display mt-1">{step.title}: {step.subtitle}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.details.map((d, dIdx) => (
                      <span key={dIdx} className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-950 text-xs font-extrabold border border-blue-200">
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  onClick={() => openEnrollmentForDomain(`Step ${step.step}: ${step.title}`, "Job-Ready Programs")}
                  className="rounded-2xl h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold shrink-0 border-0"
                >
                  Start This Step Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            );
          })()}
        </div>
      </section>

      {/* --- ENHANCED INTERACTIVE NETWORK NODE UI (LIGHT PALE BLUE & WHITE CANVAS) --- */}
      <NetworkNodeShowcase />

      {/* --- EXPERT MENTORS & FACULTY SPOTLIGHT --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Experienced Faculty
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            Meet Our Expert Mentors
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Learn directly from passionate instructors committed to your step-by-step success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentorTeam.map((mentor, idx) => {
            const Icon = mentor.icon;
            return (
              <div key={idx} className="clay-card p-6 border border-white flex flex-col justify-between group hover:-translate-y-2 transition-all">
                <div>
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${mentor.gradient} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 text-[10px] font-black uppercase tracking-wider">
                    {mentor.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display mt-3">{mentor.name}</h3>
                  <h4 className="text-xs font-bold text-blue-600 mb-2">{mentor.role} • {mentor.exp}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{mentor.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Suncity Faculty</span>
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- STUDENT TESTIMONIALS & REVIEWS --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Proven Outcomes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            Student Transformations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card-3d p-8 rounded-3xl flex flex-col justify-between hover:scale-105 transition-transform">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic font-medium mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className={`h-10 w-10 rounded-full ${t.avatarBg} text-white flex items-center justify-center font-black text-sm`}>
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm font-display">{t.name}</h4>
                  <span className="text-xs font-bold text-blue-600 block">{t.role}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE FAQ ACCORDION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="clay-card p-6 border border-white rounded-2xl cursor-pointer transition-all"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-display flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                </div>
                {isOpen && (
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed font-medium pl-8 border-l-2 border-blue-600">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* --- LOCATION & DIRECT CONTACT DETAILS --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Unique Factors Card */}
          <div className="lg:col-span-7 glass-card-3d p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
                Competitive Advantage
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 mb-6">
                What Makes Knowledge Hub Unique
              </h2>

              <div className="space-y-4">
                {[
                  "Combines IT + Academic + Language training under one unified roof",
                  "Uncompromising focus on practical, job-ready skills in computer labs",
                  "Covers local academic students & global international exam preparation",
                  "Personalized 1:1 attention with structured learning roadmaps"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-extrabold text-slate-800 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Suncity, Hyderabad, Telangana</span>
              <span className="text-blue-600 font-bold">Established for Student Success</span>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 clay-card p-8 sm:p-10 flex flex-col justify-between border border-white">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-2">
                Visit or Contact Us
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Get in touch for course details, demo sessions, and batch schedules.
              </p>

              <div className="space-y-4 text-sm font-semibold">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/80">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs font-bold block">LOCATION</span>
                    <span className="text-slate-800">Suncity, Hyderabad, Telangana</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/80">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs font-bold block">PHONE NUMBERS</span>
                    <a href="tel:7997908465" className="text-blue-700 hover:underline block">7997908465</a>
                    <a href="tel:8790116519" className="text-blue-700 hover:underline block">8790116519</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/80">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs font-bold block">EMAIL ADDRESS</span>
                    <a href="mailto:knowledgehub.suncity@gmail.com" className="text-blue-700 hover:underline break-all">
                      knowledgehub.suncity@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="w-full rounded-2xl h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md border-0">
                <Link to="/contact">Get Directions & Inquiry Form</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FINAL CTA BANNER --- */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8 sm:p-14 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs font-extrabold uppercase tracking-widest border border-white/20 mb-6 inline-block">
              Start Your Learning Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-4">
              Transform Your Career With Knowledge Hub
            </h2>
            <p className="text-blue-100/90 text-base sm:text-lg mb-8 font-medium">
              Join hundreds of successful students building real-world skills in IT, Cloud, Languages, and Academic Coaching at Suncity, Hyderabad.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                onClick={() => openEnrollmentForDomain("General Course Admissions", "Job-Ready Programs")}
                size="lg" 
                className="rounded-full h-14 px-8 text-base font-bold bg-white text-blue-950 hover:bg-slate-100 hover:scale-105 transition-all shadow-lg border-0"
              >
                Apply For Admissions Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-base font-bold text-white border-white/40 hover:bg-white/10 transition-all">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT MODAL INTEGRATION */}
      <CourseEnrollmentModal 
        course={enrollCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}

// --- INTERACTIVE KNOWLEDGE ECOSYSTEM SHOWCASE (EXACT AS USER'S REFERENCE IMAGE) ---
function NetworkNodeShowcase() {
  const [selectedNode, setSelectedNode] = useState<string>("it");
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const nodes = [
    {
      id: "it",
      title: "IT & Code",
      fullTitle: "IT & Programming",
      category: "FULL STACK & SOFTWARE",
      desc: "Explore core programming skills and technologies.",
      icon: Code2,
      skills: ["Python (Full Stack)", "Java Enterprise", "C & C++", "Data Structures & Algos", ".NET", "Oracle", "SQL"],
      highlight: "Real-world projects & GitHub repo building from scratch.",
      position: { top: "6%", left: "3%" },
      svgCoords: { x: "20%", y: "18%" },
      dotCoords: { x: "32%", y: "30%" }
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      fullTitle: "Cloud & DevOps",
      category: "INFRASTRUCTURE & SECURITY",
      desc: "Learn cloud platforms, DevOps tools and deployment.",
      icon: Cloud,
      skills: ["AWS Cloud", "Microsoft Azure", "GCP Cloud", "DevOps Pipelines", "Docker Containers", "Kubernetes"],
      highlight: "Cloud infrastructure deployment & container orchestration.",
      position: { top: "6%", right: "3%" },
      svgCoords: { x: "80%", y: "18%" },
      dotCoords: { x: "68%", y: "30%" }
    },
    {
      id: "data",
      title: "Data & BI",
      fullTitle: "Data & Analytics",
      category: "BUSINESS INTELLIGENCE",
      desc: "Analyze data and build real-world solutions.",
      icon: BarChart3,
      skills: ["Power BI Dashboards", "Advanced Excel & Macros", "SQL Queries", "PL/SQL Procedures", "ETL Pipelines"],
      highlight: "Turn complex data into executive dashboards & decision models.",
      position: { top: "42%", right: "1%" },
      svgCoords: { x: "86%", y: "50%" },
      dotCoords: { x: "72%", y: "50%" }
    },
    {
      id: "english",
      title: "Global Exams",
      fullTitle: "English & Abroad Exams",
      category: "LANGUAGE & PROFICIENCY",
      desc: "IELTS, TOEFL, GRE, PTE and more.",
      icon: Globe2,
      skills: ["Spoken English Fluency", "IELTS Academic/General", "TOEFL", "GRE General", "PTE", "SELT", "Duolingo"],
      highlight: "Fluency development & global exam band score guarantees.",
      position: { bottom: "6%", right: "3%" },
      svgCoords: { x: "80%", y: "82%" },
      dotCoords: { x: "68%", y: "70%" }
    },
    {
      id: "academics",
      title: "School & Inter",
      fullTitle: "Academic Coaching",
      category: "BOARD & COMPETITIVE PREP",
      desc: "Academic coaching for school and intermediate.",
      icon: GraduationCap,
      skills: ["SSC, CBSE & ICSE (1st-12th)", "Intermediate 1st & 2nd Year", "EAMCET Entrance", "Engineering Subjects"],
      highlight: "Comprehensive board exam strategies & core concept mastery.",
      position: { bottom: "6%", left: "3%" },
      svgCoords: { x: "20%", y: "82%" },
      dotCoords: { x: "32%", y: "70%" }
    },
    {
      id: "placement",
      title: "Job Placement",
      fullTitle: "Placement & Careers",
      category: "CAREER TRANSFORMATION",
      desc: "Get career guidance and placement support.",
      icon: Briefcase,
      skills: ["1:1 Career Mentorship", "Resume & LinkedIn Optimization", "Corporate Mock Interviews", "HR Referral Support"],
      highlight: "From training to active hiring support for guaranteed outcome.",
      position: { top: "42%", left: "1%" },
      svgCoords: { x: "14%", y: "50%" },
      dotCoords: { x: "28%", y: "50%" }
    }
  ];

  // Auto cycle active node
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setSelectedNode(prev => {
        const currentIndex = nodes.findIndex(n => n.id === prev);
        const nextIndex = (currentIndex + 1) % nodes.length;
        const nextNode = nodes[nextIndex];
        return nextNode ? nextNode.id : prev;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const currentNode = nodes.find(n => n.id === selectedNode) ?? nodes[0]!;
  const ActiveIcon = currentNode.icon;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-900" id="network-ecosystem">
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-900 text-xs font-black uppercase tracking-widest border border-blue-200 mb-3 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          INTERACTIVE KNOWLEDGE ECOSYSTEM NETWORK
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900">
          The Knowledge Ecosystem
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base font-medium">
          Click any domain card to explore curriculum modules and learning outcomes.
        </p>
      </div>

      {/* Main Radial Ecosystem Container */}
      <div 
        className="relative max-w-6xl mx-auto py-12 min-h-[580px] sm:min-h-[640px] flex items-center justify-center z-10 select-none"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Dotted Connector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {/* Connecting Dotted Lines & Halo Dots */}
          {nodes.map(n => {
            const isSelected = n.id === selectedNode;
            return (
              <g key={n.id}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={n.svgCoords.x}
                  y2={n.svgCoords.y}
                  stroke={isSelected ? "#2563eb" : "#93c5fd"}
                  strokeWidth={isSelected ? "2.5" : "1.5"}
                  strokeDasharray="6,6"
                  className={isSelected ? "animate-pulse" : "opacity-70"}
                />
                {/* Intermediate Connection Halo Dots */}
                <circle cx={n.dotCoords.x} cy={n.dotCoords.y} r="7" fill="none" stroke={isSelected ? "#2563eb" : "#bfdbfe"} strokeWidth="2" />
                <circle cx={n.dotCoords.x} cy={n.dotCoords.y} r="3.5" fill={isSelected ? "#2563eb" : "#3b82f6"} />
              </g>
            );
          })}
        </svg>

        {/* --- CENTER ACTIVE DETAIL CARD (COMPACT SIZE) --- */}
        <div className="relative z-20 w-full max-w-[320px] sm:max-w-[370px] bg-white rounded-3xl border-2 border-blue-500 p-4 sm:p-5 shadow-[0_15px_40px_rgba(37,99,235,0.15)] transition-all duration-300 animate-in fade-in zoom-in-95">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold shadow-2xs">
                <ActiveIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 block">{currentNode.category}</span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-display leading-tight">{currentNode.fullTitle}</h3>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center gap-1 shrink-0 ml-auto shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
              Active
            </span>
          </div>

          {/* Skills & Modules Section */}
          <div className="mt-3.5">
            <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2 block">SKILLS & MODULES</span>
            <div className="flex flex-wrap gap-1.5">
              {currentNode.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-2.5 py-1 rounded-full bg-blue-50/80 border border-blue-100/90 text-slate-900 text-[11px] font-extrabold shadow-2xs hover:bg-blue-100/80 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Highlight Feature Box */}
          <div className="mt-3.5 p-2.5 sm:p-3 rounded-xl bg-blue-50/90 border border-blue-100/90 flex items-center gap-2 text-xs font-bold text-blue-950">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{currentNode.highlight}</span>
          </div>
        </div>

        {/* --- 6 OUTER DOMAIN CARDS (EXACT AS SCREENSHOT) --- */}
        {nodes.map((node) => {
          const isSelected = node.id === selectedNode;
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              onMouseEnter={() => setSelectedNode(node.id)}
              style={{
                ...node.position,
              }}
              className={`absolute z-30 p-3.5 sm:p-4 rounded-[24px] sm:rounded-[28px] border cursor-pointer transition-all duration-300 flex items-center gap-3.5 min-w-[210px] sm:min-w-[250px] max-w-[280px] bg-white ${
                isSelected 
                  ? "ring-2 ring-blue-600 border-blue-400 shadow-[0_15px_35px_rgba(37,99,235,0.2)] scale-[1.05]" 
                  : "border-blue-100 shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:border-blue-300 hover:shadow-lg hover:scale-[1.02]"
              }`}
            >
              <div className="h-11 w-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 font-display leading-snug truncate">{node.title}</h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-normal font-medium mt-0.5 line-clamp-2">{node.desc}</p>
              </div>
              <ChevronRight className={`w-4 h-4 shrink-0 ml-auto stroke-[2.5] transition-transform ${isSelected ? "text-blue-600 translate-x-1" : "text-slate-700"}`} />
            </div>
          );
        })}

      </div>
    </section>
  );
}

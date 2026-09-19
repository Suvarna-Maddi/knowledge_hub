import { useState } from "react";
import { Service } from "../../types/service";
import { ServiceCard } from "./ServiceCard";
import { EnquiryModal } from "./EnquiryModal";
import { ServicesHero } from "./ServicesHero";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, MessageCircle, Sparkles, UserCheck, BookOpen, Clock, 
  Target, Users, Code, Cloud, Presentation, Book, CheckCircle, 
  LineChart, ChevronRight, Briefcase, Medal, Laptop, Rocket 
} from "lucide-react";

// 1. Updated Core Services (8 items)
const serviceCategories: Service[] = [
  {
    id: "career-guidance",
    title: "Career Guidance & Counseling",
    category: "Mentorship",
    description: "Get a personalized career roadmap with one-on-one guidance to identify your ideal career path.",
    tags: ["Personalized Roadmap", "1-on-1 Mentorship", "Goal Setting"],
    icon: "Target",
    fullDetails: "",
  },
  {
    id: "job-placement",
    title: "Job Placement Assistance",
    category: "Career",
    description: "End-to-end support including resume building, mock interviews, and guaranteed job assistance.",
    tags: ["Resume Building", "Mock Interviews", "Job Support"],
    icon: "Briefcase",
    fullDetails: "",
  },
  {
    id: "project-training",
    title: "Practical Project Training",
    category: "Training",
    description: "Learn by doing. Build real-world projects, develop a GitHub portfolio, and gain hands-on experience.",
    tags: ["Real-world Projects", "GitHub Portfolio", "Hands-on"],
    icon: "Laptop",
    fullDetails: "",
  },
  {
    id: "certification-support",
    title: "Certification Support",
    category: "Certification",
    description: "Earn recognized course certificates and get extensive preparation for global exams like IELTS & GRE.",
    tags: ["Course Certificates", "Global Exams", "Exam Prep"],
    icon: "Medal",
    fullDetails: "",
  },
  {
    id: "internships",
    title: "Internship Opportunities",
    category: "Career",
    description: "Bridge the gap between learning and working with live projects and invaluable industry exposure.",
    tags: ["Live Projects", "Industry Exposure", "Experience"],
    icon: "Rocket",
    fullDetails: "",
  },
  {
    id: "academic-coaching",
    title: "Academic Coaching",
    category: "Academic",
    description: "Comprehensive coaching for SSC, CBSE, ICSE, and Intermediate with regular weekly tests.",
    tags: ["SSC & CBSE", "ICSE", "Intermediate", "Weekly Tests"],
    icon: "Book",
    fullDetails: "",
  },
  {
    id: "spoken-english",
    title: "Spoken English & Communication",
    category: "Language",
    description: "Enhance fluency, boost confidence, and undergo complete personality development.",
    tags: ["Fluency", "Confidence", "Personality Development"],
    icon: "Presentation",
    fullDetails: "",
  },
  {
    id: "cloud-it",
    title: "Cloud & IT Skill Development",
    category: "IT & Software",
    description: "Master modern technologies including AWS, Azure, and DevOps with comprehensive hands-on labs.",
    tags: ["AWS & Azure", "DevOps", "Hands-on Labs"],
    icon: "Cloud",
    fullDetails: "",
  }
];

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = (service?: Service) => {
    setSelectedService(service || null);
    setIsEnquiryOpen(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in joining Knowledge Hub. Could you share more details about your training programs?");
    window.open(`https://wa.me/917997908465?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. Hero Section */}
      <ServicesHero onEnquire={() => handleOpenEnquiry()} />

      {/* 2. Intro Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/20" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <div className="glass-card-3d p-8 md:p-12 rounded-[2.5rem] animate-float-3d">
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
              At <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 font-black tracking-wide">Knowledge Hub</strong>, we offer more than just courses. We are dedicated to providing you with <span className="text-cyan-600 font-bold border-b-2 border-cyan-200">real-world skills, sustainable career growth, and continuous guidance</span>. Our expert-led approach ensures that every student is fully equipped to meet industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="pt-20 pb-24 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Explore our premium training programs tailored for students, professionals, and job seekers aiming for global success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-in fade-in slide-in-from-bottom-12 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard 
                  service={service} 
                  onOpenEnquiry={handleOpenEnquiry} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work (Process Section) */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent,white)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-sm font-bold uppercase tracking-wider mb-6">
              <LineChart className="w-4 h-4 text-blue-600" />
              Proven Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight mb-4">
              Your Journey to <span className="text-blue-600">Success</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Animated Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-slate-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-[shimmer_3s_infinite]" />
            </div>
            
            {[
              { title: "Enroll", desc: "Join your desired course", icon: UserCheck },
              { title: "Learn", desc: "Master core concepts", icon: BookOpen },
              { title: "Practice", desc: "Hands-on labs", icon: Code },
              { title: "Build", desc: "Real-world projects", icon: Laptop },
              { title: "Certify", desc: "Earn credentials", icon: Medal },
              { title: "Placed", desc: "Land your dream job", icon: Briefcase }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center mb-10 md:mb-0 w-full md:w-1/6 group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-100 shadow-[0_10px_30px_rgba(59,130,246,0.2)] flex items-center justify-center text-blue-600 mb-5 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] relative">
                  <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-8 h-8 relative z-10 group-hover:text-cyan-600 transition-colors" />
                </div>
                <h4 className="font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                <p className="text-xs font-semibold text-slate-500 text-center px-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Student Support Section */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-sm font-bold uppercase tracking-wider mb-6">
                <Users className="w-4 h-4 text-cyan-600" />
                Student First
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight mb-6">
                Unmatched Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Support</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 font-medium">
                We ensure every student receives the attention and resources they need to thrive. Our ecosystem is built entirely around your success.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="clay-card p-6 border border-white group">
                  <MessageCircle className="w-10 h-10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-extrabold text-slate-900 mb-2">Doubt Clearing</h4>
                  <p className="text-sm text-slate-600 font-medium">Dedicated time to resolve all your queries.</p>
                </div>
                <div className="clay-card p-6 border border-white group">
                  <Clock className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-extrabold text-slate-900 mb-2">Flexible Timings</h4>
                  <p className="text-sm text-slate-600 font-medium">Morning, evening, and weekend batches.</p>
                </div>
                <div className="clay-card p-6 border border-white group">
                  <Users className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-extrabold text-slate-900 mb-2">Small Batches</h4>
                  <p className="text-sm text-slate-600 font-medium">Personalized attention for every student.</p>
                </div>
                <div className="clay-card p-6 border border-white group">
                  <LineChart className="w-10 h-10 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-extrabold text-slate-900 mb-2">Progress Tracking</h4>
                  <p className="text-sm text-slate-600 font-medium">Continuous assessments to monitor growth.</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* Glowing decorative background behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-cyan-400/30 to-blue-600/30 blur-[80px] rounded-full animate-pulse-glow" />
              <img src="/services.png" alt="Student Support" className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trainers Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020817] to-[#0f172a] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          <div className="inline-block p-4 bg-white/5 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.2)] mb-8">
            <Users className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight mb-8 drop-shadow-lg">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expert Trainers</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
            Learn directly from seasoned industry professionals who bring years of real-time experience into the classroom. Our faculty is dedicated not just to teaching, but to <strong className="text-white font-black underline decoration-cyan-500 decoration-4 underline-offset-4">mentoring you</strong> through hands-on practical challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 font-bold text-cyan-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-default">Industry Experience</span>
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 font-bold text-cyan-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-default">Real-time Teaching</span>
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 font-bold text-cyan-300 shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-default">Dedicated Mentoring</span>
          </div>
        </div>
      </section>

      {/* 7. Why Our Services Stand Out */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />
        
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight mb-4">
              Why Knowledge Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stands Out</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Industry-Focused Training",
              "100% Practical Approach",
              "Dedicated Placement Support",
              "Affordable Fee Structure",
              "Highly Personalized Attention"
            ].map((point, i) => (
              <div key={i} className="clay-card-blue p-6 text-center group flex flex-col items-center justify-center h-full min-h-[220px]">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-[0_5px_15px_rgba(59,130,246,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{point}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Results / Impact Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900" />
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="glass-card-3d bg-white/10 border-white/20 rounded-[2.5rem] p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="py-2">
                <h3 className="text-5xl md:text-6xl font-black text-white mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">1,500+</h3>
                <p className="text-cyan-200 font-bold uppercase tracking-widest text-sm">Students Trained</p>
              </div>
              <div className="py-2">
                <h3 className="text-5xl md:text-6xl font-black text-white mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">400+</h3>
                <p className="text-cyan-200 font-bold uppercase tracking-widest text-sm">Projects Completed</p>
              </div>
              <div className="py-2">
                <h3 className="text-5xl md:text-6xl font-black text-white mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">98%</h3>
                <p className="text-cyan-200 font-bold uppercase tracking-widest text-sm">Placement Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Massive Glass CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50 px-5">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0B1E48] via-indigo-900 to-[#020817] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.3)] border border-white/10 text-center">
            
            {/* CTA Inner Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-6 leading-tight">
                Start Your Learning <br className="hidden sm:block" /> Journey Today
              </h2>
              <p className="text-lg md:text-xl text-blue-100/80 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                Take the first step towards a successful career. Join Knowledge Hub and gain the skills the industry demands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button 
                  onClick={() => handleOpenEnquiry()}
                  size="lg"
                  className="w-full sm:w-auto h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 text-lg font-black uppercase tracking-wide text-white shadow-[0_4px_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105 border-0"
                >
                  Enroll Now
                </Button>
                <Button 
                  onClick={() => handleOpenEnquiry()}
                  size="lg"
                  className="w-full sm:w-auto h-16 rounded-xl bg-white px-8 text-lg font-black uppercase tracking-wide text-blue-900 shadow-md transition-all hover:scale-105 border-0 hover:bg-slate-100"
                >
                  Book Free Demo
                </Button>
                <Button 
                  onClick={() => window.location.href = 'tel:7997908465'}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-16 rounded-xl border border-white/20 bg-white/10 px-8 text-lg font-black uppercase tracking-wide text-white hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-md hover:scale-105"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal 
        service={selectedService}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

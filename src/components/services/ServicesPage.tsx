import { useState } from "react";
import { Service } from "../../types/service";
import { ServiceCard } from "./ServiceCard";
import { EnquiryModal } from "./EnquiryModal";
import { ServicesHero } from "./ServicesHero";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  ArrowRight, MessageCircle, Sparkles, UserCheck, BookOpen, Clock, 
  Target, Users, Code, Cloud, Presentation, Book, CheckCircle, 
  LineChart, ChevronRight, Briefcase, Medal, Laptop, Rocket 
} from "lucide-react";
import journeyImage from "../../assets/journey.png";

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
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">

          <div className="max-w-4xl mx-auto px-5 text-center mt-10">
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
              At <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 font-black tracking-wide">Knowledge Hub</strong>, we offer more than just courses. We are dedicated to providing you with <span className="text-cyan-600 font-bold border-b-2 border-cyan-200">real-world skills, sustainable career growth, and continuous guidance</span>. Our expert-led approach ensures that every student is fully equipped to meet industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="pt-24 pb-20 relative bg-[#F8FAFC]">
        {/* Background decorative path (simplified as dotted line in css/svg) */}
        <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-20 hidden md:block">
           <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M-50 150 C 150 150, 300 50, 500 50 C 700 50, 900 150, 1250 100" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
           </svg>
        </div>

        {/* Glowing Orbs for Glassmorphism */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-slate-900">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Offer</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6 shadow-sm"></div>
              <p className="text-slate-600 font-medium text-lg">
                More than just courses — we provide end-to-end support for students from school to professional careers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard 
                  service={service} 
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work (Process Section) */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="text-center mb-20 relative">
            <span className="text-blue-600 font-black uppercase tracking-wider text-sm mb-3 block">OUR PROCESS</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-display tracking-tight mb-4">
              Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Success</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
            <p className="text-slate-500 font-medium max-w-lg mx-auto text-lg">
              A simple, structured, and proven path designed to transform you from a beginner to a hired professional.
            </p>
          </div>
          
          <div className="relative">
            {/* Dashed connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-10 right-10 h-[2px] bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 opacity-50 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

            <div className="flex flex-col md:flex-row items-start justify-between relative gap-10 md:gap-0">
              {/* Steps */}
              {[
                { id: "01", title: "Enroll", desc: "Choose your course and get started.", icon: <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>, ring: "border-blue-300", glow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]" },
                { id: "02", title: "Learn", desc: "Gain in-depth knowledge from experts.", icon: <BookOpen className="w-7 h-7 text-purple-600" />, ring: "border-purple-300", glow: "group-hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]" },
                { id: "03", title: "Practice", desc: "Work on assignments and hands-on labs.", icon: <svg className="w-7 h-7 text-cyan-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 C9.64,21.83,9.83,22,10.08,22h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>, ring: "border-cyan-300", glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]" },
                { id: "04", title: "Build", desc: "Develop real-world projects and portfolios.", icon: <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12,3C7.58,3,4,4.79,4,7s3.58,4,8,4s8-1.79,8-4S16.42,3,12,3z M12,13c-4.42,0-8-1.79-8-4v3c0,2.21,3.58,4,8,4 s8-1.79,8-4v-3C20,11.21,16.42,13,12,13z M12,18c-4.42,0-8-1.79-8-4v3c0,2.21,3.58,4,8,4s8-1.79,8-4v-3C20,16.21,16.42,18,12,18z"/></svg>, ring: "border-orange-300", glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]" },
                { id: "05", title: "Certify", desc: "Receive recognized certifications.", icon: <Medal className="w-7 h-7 text-pink-500" />, ring: "border-pink-300", glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]" },
                { id: "06", title: "Get Placed", desc: "Step into your dream career.", icon: <Rocket className="w-7 h-7 text-blue-700" />, ring: "border-blue-400", glow: "group-hover:shadow-[0_0_30px_rgba(29,78,216,0.4)]" }
              ].map((step, i, arr) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center relative group w-full"
                >
                  <div className={`w-[90px] h-[90px] rounded-full bg-white/60 backdrop-blur-xl border-4 ${step.ring} shadow-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:-translate-y-2 ${step.glow}`}>
                    <div className="absolute inset-0 rounded-full bg-white/40 group-hover:bg-transparent transition-colors"></div>
                    <span className="relative z-20 drop-shadow-sm">{step.icon}</span>
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-2 -right-2 bg-white border border-slate-200 text-slate-800 font-black text-xs px-2 py-1 rounded-full shadow-sm">
                      {step.id}
                    </div>
                  </div>
                  
                  <h4 className="font-extrabold text-slate-900 text-[17px] mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                  <p className="text-[14px] font-medium text-slate-500 leading-relaxed max-w-[140px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet Our Expert Trainers */}
      <section className="py-24 relative bg-slate-50 text-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-wider text-sm mb-2 block">EXPERT TRAINERS</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
                Meet Our Expert Trainers
              </h2>
            </div>
            <Link to="/about" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors mt-4 md:mt-0">
              View All Trainers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Syed Zia", role: "Veteran Trainer & Mentor", exp: "20+ Years", img: "/syed zia.png", skills: ["Enterprise Architecture", "Cloud"] },
              { name: "Rahul Sharma", role: "Data Science Lead", exp: "6+ Years", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", skills: ["Python", "Machine Learning"] },
              { name: "Priya Reddy", role: "Full Stack Developer", exp: "5+ Years", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", skills: ["React", "Node.js"] },
              { name: "Arjun Mehta", role: "Cloud & DevOps", exp: "8+ Years", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", skills: ["AWS", "Docker"] }
            ].map((trainer, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-[420px] rounded-[2rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(37,99,235,0.2)] transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:from-blue-900/90" />

                {/* Experience Badge */}
                <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm border border-white/30 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {trainer.exp}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-2xl font-black text-white mb-1 drop-shadow-md">{trainer.name}</h4>
                  <p className="text-sm font-medium text-blue-200 mb-4">{trainer.role}</p>
                  
                  <div className="flex flex-wrap gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {trainer.skills.map((skill, idx) => (
                      <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
              View All Trainers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 relative bg-[#0a192f] overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-[1200px] mx-auto px-5 relative z-10 text-center">
           <span className="text-cyan-400 font-black uppercase tracking-wider text-sm mb-2 block">WHY CHOOSE US</span>
           <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight mb-16">
              Why Knowledge Hub <span className="text-blue-400">Stands Out</span>
           </h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
             {[
               { title: "Industry-Focused Training", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
               { title: "100% Practical Approach", icon: <Laptop className="w-8 h-8 text-blue-500" /> },
               { title: "Dedicated Placement Support", icon: <Users className="w-8 h-8 text-blue-500" /> },
               { title: "Affordable Fee Structure", icon: <BookOpen className="w-8 h-8 text-blue-500" /> },
               { title: "Personalized Attention", icon: <CheckCircle className="w-8 h-8 text-blue-500" /> }
             ].map((feature, i) => (
               <div key={i} className="flex flex-col items-center bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 group">
                 <div className="mb-4 bg-white/60 p-4 rounded-xl border border-white/80 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 shadow-sm">
                   {feature.icon}
                 </div>
                 <h4 className="text-[15px] font-bold leading-snug text-center text-slate-700 group-hover:text-blue-700">{feature.title}</h4>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 8. We're With You at Every Step */}
      <section className="py-24 relative bg-slate-50 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
           <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
             
             {/* Centered Text */}
             <div className="mb-12">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-display tracking-tight mb-6 leading-tight">
                 We're With You at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Every Step</span>
               </h2>
               <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                 From your very first lesson to landing your dream job, Knowledge Hub provides comprehensive support designed to ensure your success.
               </p>
             </div>
             
             {/* Centered Image Layout */}
             <div className="w-full mt-6 flex justify-center relative perspective-1000">
                <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] inline-flex p-4 max-w-full">
                   <div className="relative rounded-2xl overflow-hidden bg-white/60 w-full h-full">
                     <img src={journeyImage} alt="Journey to Success" className="max-w-full h-auto object-contain block" />
                     <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
                   </div>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] p-10 sm:p-16 overflow-hidden text-center flex flex-col items-center">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <h2 className="text-3xl md:text-5xl font-black text-white font-display tracking-tight mb-6 max-w-2xl relative z-10">
              Start Your Learning Journey Today
            </h2>
            <p className="text-lg text-slate-300 mb-10 font-medium max-w-2xl relative z-10">
              Take the first step towards a successful career. Join Knowledge Hub and gain the skills the industry demands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button 
                onClick={handleOpenEnquiry}
                size="lg"
                className="h-14 rounded-full bg-blue-500 hover:bg-blue-600 px-8 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                Enroll Now
              </Button>
              <Button 
                onClick={() => window.location.href = 'tel:7997908465'}
                size="lg"
                variant="outline"
                className="h-14 rounded-full border border-slate-600 bg-[#0a192f] px-8 text-sm font-extrabold text-white hover:bg-slate-800 transition-all hover:scale-105"
              >
                Book Free Demo
              </Button>
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

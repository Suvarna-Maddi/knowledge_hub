import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Trophy, Wifi, UserCheck, ArrowRight, MessageCircle } from "lucide-react";
import { InteractiveHero } from "./InteractiveHero";
import { EnquiryModal } from "../services/EnquiryModal";
import { CourseEnrollmentModal } from "./CourseEnrollmentModal";

import { coursesData, CATEGORIES, type Course } from "@/data/courses";

export function CoursesPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  // Category Enrollment Modal State
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState<Course | null>(null);

  const handleEnrollClick = (course: Course) => {
    setSelectedEnrollCourse(course);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-0 pb-12 font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 flex justify-center">
        {/* Abstract Blobs */}
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-400/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-sky-300/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDBNMCAyMGg0MEMyMCAwdjQwTTAgMzBoNDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent,white)] opacity-100"></div>
      </div>
      
      {/* Interactive Hero */}
      <InteractiveHero />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 relative z-10 space-y-20" id="course-list">
        
        {CATEGORIES.map(category => {
          const categoryCourses = coursesData.filter(c => c.category === category);
          if (categoryCourses.length === 0) return null;

          return (
            <div key={category} className="space-y-8">
              {/* Enhanced Category Header */}
              <div className="flex items-center gap-6 my-12">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent flex-1"></div>
                
                <div className="px-10 py-4 rounded-3xl border border-white shadow-[0_10px_30px_rgba(37,99,235,0.1)] flex items-center gap-4 bg-white/80 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] hover:-translate-y-1 group">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 transition-colors group-hover:bg-cyan-500"></span>
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-800 uppercase tracking-widest">
                    {category}
                  </h2>
                </div>
                
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent flex-1"></div>
              </div>

              {/* 3D Claymorphic Course Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {categoryCourses.map((course) => {
                  return (
                    <Link
                      key={course.id}
                      to="/course/$courseId"
                      params={{ courseId: course.id }}
                      className="block group"
                    >
                      {/* Unique Premium Course Card */}
                      <div className="relative group p-[1.5px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                        {/* Animated Border Glow (Visible on Hover) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-300 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                        
                        {/* Inner Card Content */}
                        <div className="relative flex-1 h-full bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col border border-white/50 m-[1px]">
                          
                          {/* Ambient Corner Glow */}
                          <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-60 group-hover:bg-blue-200 transition-colors duration-500"></div>
                          
                          <div className="relative z-10 flex-1 flex flex-col">
                            {/* Header: Logo & Badges */}
                            <div className="flex justify-between items-start mb-6">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-2.5 shadow-inner border border-slate-200/60 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 bg-white">
                                <img src={course.logoUrl} alt={course.title} className="w-full h-full object-contain drop-shadow-sm" />
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 text-[10px] font-black uppercase tracking-wider border border-slate-200 group-hover:border-blue-200 transition-colors">
                                  {course.duration}
                                </span>
                                <span className={`w-2 h-2 rounded-full ${course.dotColor} shadow-sm animate-pulse`} />
                              </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-slate-900 font-extrabold text-lg tracking-tight mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                              {course.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium mb-6 flex-1">
                              {course.description}
                            </p>
                          </div>

                          {/* Footer: Interactive Action Button */}
                          <div className="relative z-10 mt-auto pt-2">
                            <div className="flex items-center justify-between w-full p-1.5 rounded-[1.25rem] bg-slate-50 border border-slate-100 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-cyan-50 group-hover:border-blue-100 transition-all duration-300">
                              <span className="pl-3 text-xs font-extrabold text-slate-500 group-hover:text-blue-700 uppercase tracking-wide">
                                Explore Syllabus
                              </span>
                              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white text-slate-400 group-hover:shadow-md transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <EnquiryModal 
        service={null}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <CourseEnrollmentModal 
        course={selectedEnrollCourse}
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />

    </div>
  );
}

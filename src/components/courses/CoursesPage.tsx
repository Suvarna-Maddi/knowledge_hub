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
                      {/* Course Grid Item (Clay Tile) */}
                      <div 
                        className={`clay-card p-6 border border-white/90 flex flex-col justify-between cursor-pointer transition-all duration-300 h-full hover:-translate-y-2`}
                      >
                        <div>
                          {/* Top Row: Logo in Clay Badge + Duration */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-white p-2.5 shadow-md flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                              <img src={course.logoUrl} alt={course.title} className="w-full h-full object-contain" />
                            </div>
                            <span className="clay-pill px-3 py-1 text-xs font-extrabold text-slate-700 border border-white">
                              {course.duration}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-slate-900 font-black text-base tracking-tight uppercase mb-2 flex items-center justify-between gap-2 group-hover:text-blue-700 transition-colors">
                            <span className="truncate">{course.title}</span>
                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${course.dotColor} shadow-xs`} />
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-medium mb-4">
                            {course.description}
                          </p>
                        </div>

                        {/* Card Footer */}
                        <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold mt-4">
                          <span className="text-blue-600 group-hover:underline flex items-center gap-1">
                            View Syllabus & Enroll
                          </span>
                          <ArrowRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
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

import { createFileRoute, notFound } from "@tanstack/react-router";
import { Wifi, Trophy, UserCheck, MessageCircle } from "lucide-react";
import { coursesData, type Course } from "@/data/courses";
import { CourseEnrollmentModal } from "@/components/courses/CourseEnrollmentModal";
import { useState } from "react";

export const Route = createFileRoute("/course/$courseId")({
  component: CourseDetailsPage,
});

function CourseDetailsPage() {
  const { courseId } = Route.useParams();
  const course = coursesData.find((c) => c.id === courseId);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedEnrollCourse, setSelectedEnrollCourse] = useState<Course | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-4">
        <div className="text-center clay-card p-12 max-w-lg w-full bg-white shadow-xl rounded-3xl border border-slate-100">
          <h2 className="text-2xl font-black text-slate-800 mb-4 uppercase">Course Not Found</h2>
          <p className="text-slate-600 mb-8 font-medium">The course you are looking for doesn't exist or has been removed.</p>
          <a href="/courses" className="clay-pill px-8 py-3 bg-blue-600 text-white font-extrabold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all">
            Back to Courses
          </a>
        </div>
      </div>
    );
  }

  const handleEnrollClick = (course: Course) => {
    setSelectedEnrollCourse(course);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-500/30 relative overflow-hidden pt-24 pb-12">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 flex justify-center">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-400/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative z-10 animate-in slide-in-from-bottom-8 fade-in duration-700">
        
        {/* Main Details Card */}
        <div className="clay-card-blue p-6 md:p-12 border border-white relative overflow-hidden shadow-2xl rounded-[2.5rem]">
          
          {/* Details Header Bar */}
          <div className="flex items-center justify-between pb-8 border-b border-blue-200/80 mb-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white p-3 sm:p-4 shadow-sm flex items-center justify-center">
                <img src={course.logoUrl} alt={course.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-sm font-black uppercase text-blue-700 tracking-wider mb-1 block">Course Syllabus</span>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">{course.title}</h1>
              </div>
            </div>
          </div>

          {/* Course Overview & Big CTA */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 p-8 rounded-3xl bg-white/90 border border-white shadow-md">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="clay-pill px-4 py-1.5 text-sm font-extrabold text-blue-700 border border-white bg-blue-50/50">
                  Duration: {course.duration}
                </span>
                <span className="clay-pill px-4 py-1.5 text-sm font-extrabold text-cyan-700 border border-white bg-cyan-50/50">
                  Category: {course.category}
                </span>
                <span className="clay-pill px-4 py-1.5 text-sm font-extrabold text-emerald-700 border border-white bg-emerald-50/50 flex items-center gap-2">
                  <Wifi className="w-4 h-4" /> Online / Offline
                </span>
              </div>
              <p className="text-slate-700 text-base font-medium leading-relaxed max-w-3xl">
                {course.overview}
              </p>
            </div>

            <button
              onClick={() => handleEnrollClick(course)}
              className="rounded-full px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0"
            >
              <UserCheck className="w-5 h-5" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Syllabus Grid & Learnings */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Left Side: Learnings & Tags */}
            <div className="space-y-8">
              <div className="bg-white/90 p-8 rounded-3xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm font-black uppercase tracking-wider text-blue-800 mb-6 flex items-center gap-2">
                  <span className="opacity-70">&gt;</span> WHAT YOU WILL LEARN
                </h4>
                <ul className="grid sm:grid-cols-1 gap-4">
                  {course.learnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/60 transition-colors hover:border-blue-300">
                      <span className={`w-2.5 h-2.5 mt-1.5 rounded-full shrink-0 ${course.dotColor}`} />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/90 p-8 rounded-3xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm font-black uppercase tracking-wider text-blue-800 mb-6">
                  TOOLS & TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {course.tags.map(tag => (
                    <span key={tag} className="clay-pill px-4 py-2 text-sm font-extrabold text-slate-800 border border-white bg-slate-100/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Modules & Certificate */}
            <div className="space-y-8">
              <div className="bg-white/90 p-8 rounded-3xl border border-white shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-sm font-black uppercase tracking-wider text-blue-800 mb-6">
                  CURRICULUM MODULES
                </h4>
                <div className="space-y-4">
                  {course.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 transition-colors hover:border-blue-300">
                      <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-sm font-black">
                        {idx + 1}
                      </div>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/90 p-6 rounded-3xl border border-white shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                  <Trophy className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h5 className="text-base font-extrabold text-slate-900 mb-1">Industry-Recognized Certification</h5>
                  <p className="text-sm text-slate-600 font-medium">Verified course completion certificate provided upon graduating.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="p-8 rounded-3xl bg-white border border-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-2">Have questions about {course.title}?</h4>
              <p className="text-sm font-medium text-slate-500">Reach out to our counselors for syllabus details, batch timings, or fee structure.</p>
            </div>
            <button
              onClick={() => {
                window.location.href = 'tel:7997908465';
              }}
              className="rounded-full px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 font-extrabold text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-105 transition-all shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      
      <CourseEnrollmentModal 
        course={selectedEnrollCourse}
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </div>
  );
}

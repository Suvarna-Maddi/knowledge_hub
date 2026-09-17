import { Course } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { X, Clock, Briefcase, CheckCircle2, Layers, PlaySquare } from "lucide-react";

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (course: Course) => void;
}

export function CourseModal({ course, isOpen, onClose, onEnquire }: CourseModalProps) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-900 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="pr-10">
            <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100/50 px-2.5 py-1 rounded-md mb-3">
              {course.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-2">
              {course.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Duration</p>
                <p className="text-sm font-semibold text-slate-900">{course.duration}</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Briefcase className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Placement Support</p>
                <p className="text-sm font-semibold text-slate-900">
                  {course.placementSupport ? "100% Assistance" : "Not Included"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Skills Covered */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-500" />
                Skills Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <span key={tag} className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Curriculum/Modules */}
            {course.modules && course.modules.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <PlaySquare className="w-5 h-5 text-cyan-500" />
                  Key Modules
                </h3>
                <ul className="grid gap-2">
                  {course.modules.map((mod, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {course.projects && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Projects Included</h3>
                <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {course.projects}
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-white mt-auto">
          <Button 
            className="w-full bg-slate-900 hover:bg-blue-600 text-white py-6 text-base font-semibold transition-colors shadow-md hover:shadow-lg rounded-xl"
            onClick={() => onEnquire(course)}
          >
            Enquire About This Course
          </Button>
        </div>
        
      </div>
    </div>
  );
}

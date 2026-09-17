import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";

export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  duration: string;
  popular?: boolean;
  modules?: string[];
  projects?: string;
  placementSupport?: boolean;
  logoUrl?: string; // New field for real logo
};

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  onEnquire: (course: Course) => void;
}

export function CourseCard({ course, onViewDetails, onEnquire }: CourseCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200 flex flex-col h-full overflow-hidden">
      
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header with Logo and Category */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            {course.category}
          </span>
          {course.logoUrl && (
            <div className="w-10 h-10 bg-slate-50 rounded-lg p-2 border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
              <img src={course.logoUrl} alt={`${course.title} logo`} className="w-full h-full object-contain" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors font-display tracking-tight leading-snug">
          {course.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">
          {course.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium mb-5">
          <Clock className="w-4 h-4 text-slate-400" />
          {course.duration}
        </div>

        {/* Tags / Skills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="text-[11px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded-md border border-slate-200">
              +{course.tags.length - 3} more
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="outline" 
            className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all font-semibold"
            onClick={() => onViewDetails(course)}
          >
            Details
          </Button>
          <Button 
            variant="default" 
            className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-semibold transition-colors shadow-sm"
            onClick={() => onEnquire(course)}
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
}

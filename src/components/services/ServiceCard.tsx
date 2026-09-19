import { Service } from "../../types/service";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  service: Service;
  onOpenEnquiry: (service: Service) => void;
};

export function ServiceCard({ service, onOpenEnquiry }: ServiceCardProps) {
  // @ts-ignore - dynamic icon
  const Icon = Icons[service.icon] || Icons.BookOpen;

  return (
    <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col h-full overflow-hidden z-10">
      
      {/* Dynamic Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 group-hover:w-full transition-all duration-700 ease-out" />

      <div className="relative z-20 flex-1 flex flex-col">
        {/* Floating 3D Icon Pill */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(59,130,246,0.15)] border border-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 group-hover:shadow-[0_12px_25px_rgba(6,182,212,0.3)]">
          <Icon className="w-8 h-8 group-hover:text-cyan-500 transition-colors duration-300" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 font-display tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
          {service.description}
        </p>

        {/* Tags with subtle glass look */}
        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map(tag => (
            <span key={tag} className="text-[10px] font-extrabold tracking-wider uppercase bg-slate-100/80 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200/50 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200/50 transition-all duration-300 shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Full-width Gradient Enquire Button */}
        <Button 
          onClick={() => onOpenEnquiry(service)}
          className="w-full relative overflow-hidden bg-slate-900 text-white rounded-xl h-14 font-extrabold tracking-wide uppercase text-sm shadow-md transition-all duration-300 border-0 group-hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Button Background Gradient that slides in on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            Enquire Now
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
}

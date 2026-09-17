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
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 flex flex-col h-full overflow-hidden">
      
      {/* Soft gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-500/25">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors font-display tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map(tag => (
            <span key={tag} className="text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors border border-transparent group-hover:border-blue-100">
              {tag}
            </span>
          ))}
        </div>

        <Button 
          variant="default" 
          className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white rounded-xl h-12 font-semibold shadow-md transition-all duration-300 border-0 group-hover:shadow-[0_8px_20px_oklch(0.5_0.2_250/0.4)]"
          onClick={() => onOpenEnquiry(service)}
        >
          Enquire
        </Button>
      </div>
    </div>
  );
}

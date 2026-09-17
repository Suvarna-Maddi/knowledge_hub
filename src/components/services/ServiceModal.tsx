import { Service } from "../../types/service";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceModalProps = {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (service: Service) => void;
};

export function ServiceModal({ service, isOpen, onClose, onOpenEnquiry }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  // @ts-ignore
  const Icon = Icons[service.icon] || Icons.BookOpen;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors z-10"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                {service.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-slate-600 text-base leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Icons.Clock className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">Duration</span>
              </div>
              <p className="text-slate-900 font-bold">{service.duration || "Self-paced"}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Icons.Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">Placement</span>
              </div>
              <p className="text-slate-900 font-bold">{service.placementSupport ? "100% Support" : "Certificate Only"}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                onClose();
                onOpenEnquiry(service);
              }}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

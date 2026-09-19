import { Service } from "../../types/service";
import * as Icons from "lucide-react";
import { Link } from "@tanstack/react-router";

type ServiceCardProps = {
  service: Service;
  index: number;
};

// Define specific colors for each card index based on the design
const getCardStyles = (index: number) => {
  const styles = [
    { bg: "bg-blue-100", text: "text-blue-600" }, // Career Guidance
    { bg: "bg-purple-100", text: "text-purple-600" }, // Job Placement
    { bg: "bg-green-100", text: "text-green-600" }, // Practical Project
    { bg: "bg-orange-100", text: "text-orange-600" }, // Certification
    { bg: "bg-pink-100", text: "text-pink-600" }, // Internship
    { bg: "bg-yellow-100", text: "text-yellow-600" }, // Academic Coaching
    { bg: "bg-purple-100", text: "text-purple-600" }, // Spoken English
    { bg: "bg-cyan-100", text: "text-cyan-600" }, // Cloud & IT
  ];
  return styles[index % styles.length];
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  // @ts-ignore - dynamic icon
  const Icon = Icons[service.icon] || Icons.BookOpen;
  const style = getCardStyles(index);

  return (
    <div className="flex flex-col h-full group p-6 rounded-2xl bg-blue-500/10 backdrop-blur-md border border-blue-400/30 shadow-[0_4px_16px_rgba(37,99,235,0.05)] transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)] hover:-translate-y-1 overflow-hidden relative">
      
      {/* Subtle glass reflection effect */}
      <div className="absolute top-0 left-0 w-[150%] h-[100px] bg-white/30 -rotate-45 -translate-x-full -translate-y-[150px] transition-transform duration-700 group-hover:translate-x-full group-hover:translate-y-full blur-md" />

      {/* Colored Icon Container */}
      <div className={`w-12 h-12 rounded-xl bg-blue-500/20 text-blue-700 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-sm relative z-10`}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-[18px] font-bold text-blue-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors relative z-10">
        {service.title}
      </h3>
      
      <p className="text-slate-700 text-[14px] leading-relaxed mb-6 flex-grow relative z-10">
        {service.description}
      </p>


    </div>
  );
}

import { useState } from "react";
import { Service } from "../../types/service";
import { ServiceCard } from "./ServiceCard";
import { EnquiryModal } from "./EnquiryModal";
import { ServicesHero } from "./ServicesHero";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle } from "lucide-react";

// Static data for the 5 main categories
const serviceCategories: Service[] = [
  {
    id: "it-software",
    title: "IT & Software",
    category: "IT & Software",
    description: "Build a strong foundation in programming and software development.",
    tags: ["C", "C++", "Java", "Python Full Stack", "Data Structures", "SQL"],
    icon: "Code2",
    fullDetails: "",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    category: "Cloud & DevOps",
    description: "Master modern cloud infrastructure and deployment pipelines.",
    tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    icon: "Cloud",
    fullDetails: "",
  },
  {
    id: "office-tools",
    title: "Office Tools",
    category: "Office Tools",
    description: "Enhance productivity with essential business and analytics tools.",
    tags: ["MS Office", "Excel", "Power BI", "Tally"],
    icon: "BriefcaseBusiness",
    fullDetails: "",
  },
  {
    id: "non-it",
    title: "Non-IT Skills",
    category: "Non-IT Skills",
    description: "Improve communication and prepare for global standardized tests.",
    tags: ["Spoken English", "IELTS", "TOEFL", "GRE", "PTE"],
    icon: "HeartHandshake",
    fullDetails: "",
  },
  {
    id: "academic",
    title: "Academic Courses",
    category: "Academic Courses",
    description: "Comprehensive tutoring for school and college curricula.",
    tags: ["SSC", "CBSE", "Intermediate", "Engineering Subjects"],
    icon: "GraduationCap",
    fullDetails: "",
  }
];

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = (service?: Service) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsEnquiryOpen(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in joining Knowledge Hub. Could you share more details about your training programs?");
    window.open(`https://wa.me/917997908465?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* Hero Section */}
      <ServicesHero onEnquire={() => handleOpenEnquiry()} />

      {/* Main Services Content */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight mb-4">
              Our Services
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">
              Select a category to view the relevant skills and courses we offer.
            </p>
          </div>

          {/* Services Grid - Stacked on Mobile, Grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div 
                key={service.id} 
                className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard 
                  service={service} 
                  onOpenEnquiry={handleOpenEnquiry} 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Strong Closing CTA Section */}
      <section className="bg-white py-20 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6 text-blue-600">
            <ArrowUpRight className="size-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Don't wait to upgrade your skills. Join hundreds of successful students who have transformed their careers with Knowledge Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleOpenEnquiry()}
              size="lg"
              className="group h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25 border-0"
            >
              Enquire Now
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="group h-14 rounded-full border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-green-600 hover:border-green-200 transition-all shadow-sm"
            >
              <MessageCircle className="mr-2 size-5 text-green-500 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
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

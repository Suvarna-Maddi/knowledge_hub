import { Service } from "../../types/service";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  qualification: z.string().min(2, "Please enter your highest qualification"),
  service: z.string()
});

type EnquiryForm = z.infer<typeof enquirySchema>;

type EnquiryModalProps = {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
};

export function EnquiryModal({ service, isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      service: service?.title || ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (service) {
      reset({ service: service.title });
    } else {
      reset({ service: "" });
    }
  }, [service, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: EnquiryForm) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const { submitCandidateDetails } = await import("@/lib/submitLead");
      const dbResult = await submitCandidateDetails({
        name: data.name,
        email: data.email,
        mobile_number: data.phone,
        qualification: data.qualification + ` (Enquiry: ${data.service})`
      });
      
      if (!dbResult.success) {
        throw new Error(dbResult.error);
      }
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        reset();
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi, I am interested in the ${service?.title} course.`);
    window.open(`https://wa.me/917997908465?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors z-10"
        >
          <Icons.X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h3>
              <p className="text-slate-600">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-1">
                Enquire Now
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill the form below to get more details about <span className="font-semibold text-slate-700">{service?.title}</span>.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service</label>
                  <input 
                    {...register("service")}
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm font-normal text-slate-500 cursor-not-allowed outline-none shadow-sm"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    {...register("name")}
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    {...register("email")}
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Highest Qualification</label>
                  <input 
                    {...register("qualification")}
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                    placeholder="B.Tech, B.Sc, Intermediate..."
                  />
                  {errors.qualification && <p className="text-red-500 text-xs mt-1 font-medium">{errors.qualification.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    {...register("phone")}
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                    placeholder="7997908465"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_25px_-8px_rgba(79,70,229,0.7)] active:translate-y-0 active:shadow-md border-0 disabled:opacity-70 disabled:hover:translate-y-0">
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </div>
              </form>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Or</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <Button 
                type="button"
                variant="outline"
                className="w-full mt-6 border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 py-6"
                onClick={handleWhatsApp}
              >
                <Icons.MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

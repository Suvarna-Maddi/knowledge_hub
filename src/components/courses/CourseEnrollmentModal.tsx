import { useState, useEffect } from "react";
import { X, Check, MessageCircle, Send, BookOpen, User, Mail, Phone, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { type Course } from "@/data/courses";

type CourseEnrollmentModalProps = {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
};

export function CourseEnrollmentModal({ course, isOpen, onClose }: CourseEnrollmentModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Base Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
  });

  useEffect(() => {
    if (course) {
      setIsSubmitted(false);
    }
  }, [course]);

  if (!isOpen || !course) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Enrollment for Course:", course.title, formData);
    
    try {
      await fetch("https://formsubmit.co/ajax/knowledgehub.suncity@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Enrollment for ${course.title}`,
          ...formData,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Knowledge Hub, I want to enroll in the ${course.title} (${course.category}) course.`);
    window.open(`https://wa.me/917997908465?text=${text}`, "_blank");
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-in slide-in-from-bottom-6 duration-300 border border-slate-100 max-h-[92vh] flex flex-col z-10">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/80 hover:bg-white/20 hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{course.category}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
            Enroll in {course.title}
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">
            Duration: <span className="font-bold">{course.duration}</span> • Fill the enrollment details to secure your seat.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <Check className="w-9 h-9 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Enrollment Application Submitted!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-800">{formData.fullName || "Student"}</span>. Our academic counselor for <span className="font-bold text-blue-600">{course.title}</span> will contact you shortly with fee structure and course details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" /> Full Name *
                </label>
                <input 
                  type="text"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" /> Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" /> Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                  />
                </div>
              </div>

              {/* Educational Qualification */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" /> Educational Qualification
                </label>
                <input 
                  type="text"
                  required
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech, Degree, Class 10..."
                  className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-normal text-slate-700 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-blue-300 shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_25px_-8px_rgba(79,70,229,0.7)] active:translate-y-0 active:shadow-md border-0 group uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span>Confirm Course Enrollment</span>
              </button>

              {/* Instant WhatsApp Option */}
              <div className="pt-2 text-center">
                <div className="flex items-center gap-3 my-2">
                  <div className="flex-1 h-px bg-slate-200"></div>
                  <span className="text-[11px] text-slate-400 font-bold uppercase">Or Instant Inquiry</span>
                  <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                <button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat Directly on WhatsApp for Seat Booking</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

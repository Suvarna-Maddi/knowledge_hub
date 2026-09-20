import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, ContactDetails } from "@/components/site/shared";
import { submitCandidateDetails } from "@/lib/submitLead";

const schema=z.object({
  name:z.string().trim().min(2,"Please enter your name").max(80),
  email:z.string().trim().email("Enter a valid email").max(120),
  phone:z.string().trim().regex(/^[0-9+ ()-]{7,18}$/,"Enter a valid phone number"),
  qualification:z.string().min(2,"Please enter your qualification").max(120)
});
type Errors=Partial<Record<"name"|"email"|"phone"|"qualification",string>>;

export const Route=createFileRoute("/contact")({head:()=>({meta:[{title:"Contact Knowledge Hub | Suncity Hyderabad"},{name:"description",content:"Contact Knowledge Hub at Suncity Main Road for computer course guidance, batch timings, and admissions."},{property:"og:title",content:"Contact Knowledge Hub"},{property:"og:description",content:"Speak with our team about computer courses and admissions in Suncity."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:ContactPage});

function ContactPage(){
  const [errors,setErrors]=useState<Errors>({});
  const [sent,setSent]=useState(false);
  const [isSubmitting, setIsSubmitting]=useState(false);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(isSubmitting) return;
    
    const fd=new FormData(e.currentTarget);
    const result=schema.safeParse(Object.fromEntries(fd));
    
    if(!result.success){
      const next:Errors={};
      result.error.issues.forEach(issue=>{
        const key=issue.path[0] as keyof Errors;
        if(!next[key])next[key]=issue.message
      });
      setErrors(next);
      return
    }
    setErrors({});
    setIsSubmitting(true);
    
    try{
      const dbResult = await submitCandidateDetails({
        name: result.data.name,
        email: result.data.email,
        mobile_number: result.data.phone,
        qualification: result.data.qualification
      });
      
      if (!dbResult.success) {
        throw new Error(dbResult.error);
      }
      
      setSent(true);
      e.currentTarget.reset();
    }catch(err){
      console.error(err);
      alert("Failed to send enquiry. Please try again or contact us directly.");
    }finally{
      setIsSubmitting(false);
    }
  }

  return <><PageHero eyebrow="Contact us" title="Let’s build your future together." copy="Tell us about yourself. Our team can help with course selection, batch timings, and enrolment."/><section className="px-5 py-20 lg:px-8 relative overflow-hidden"><div className="absolute -top-[10rem] -right-[10rem] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -z-10"/><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="font-display text-2xl font-bold">Reach Knowledge Hub</h2><p className="mt-3 mb-7 leading-7 text-muted-foreground">Visit our Suncity centre or contact us directly. We’ll be happy to guide you.</p><ContactDetails/></div><div className="card p-8 md:p-10 relative overflow-hidden border-blue-100 shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)]"><div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-[40px] pointer-events-none -z-10" /><h2 className="font-display text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Course Enquiry</h2>{sent?<div className="mt-8 rounded-2xl bg-green-50/80 p-8 text-center border border-green-200/50"><CheckCircle2 className="mx-auto size-12 text-green-500 animate-in zoom-in duration-500"/><h3 className="mt-4 font-display text-xl font-bold text-slate-900">Request Received Successfully!</h3><p className="mt-2 text-sm text-slate-600">Our advisor will contact you soon.</p><Button className="mt-6 rounded-full" variant="outline" onClick={()=>setSent(false)}>Send another enquiry</Button></div>:<form className="mt-8 grid gap-6 relative z-10" onSubmit={submit} noValidate><div className="grid gap-6 sm:grid-cols-2"><Field label="Full Name" name="name" error={errors.name} placeholder="John Doe" /><Field label="Email Address" name="email" type="email" error={errors.email} placeholder="john@example.com" /></div><div className="grid gap-6 sm:grid-cols-2"><Field label="Phone Number" name="phone" type="tel" error={errors.phone} placeholder="7997908465" /><Field label="Highest Qualification" name="qualification" error={errors.qualification} placeholder="B.Tech, B.Sc, Intermediate..." /></div><Button type="submit" size="xl" disabled={isSubmitting} className="mt-2 w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_25px_-8px_rgba(79,70,229,0.7)] active:translate-y-0 active:shadow-md border-0 group disabled:opacity-70 disabled:hover:translate-y-0">{isSubmitting ? "Sending..." : <>Send Details <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>}</Button></form>}</div></div></section></>}
function Field({label,name,type="text",error,placeholder}:{label:string;name:string;type?:string;error?:string | undefined;placeholder?:string}){return <label className="grid gap-2 text-sm font-semibold text-slate-700">{label}<input name={name} type={type} maxLength={120} placeholder={placeholder} className={`h-14 rounded-xl border bg-slate-50/50 px-4 font-normal text-slate-700 outline-none transition-all focus:bg-white focus:ring-4 hover:border-blue-300 shadow-sm ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10'}`} aria-invalid={Boolean(error)} />{error&&<span className="text-xs text-red-500 font-medium">{error}</span>}</label>}

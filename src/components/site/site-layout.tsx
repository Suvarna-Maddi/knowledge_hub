import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X, Lightbulb, Phone, Mail, MapPin, ArrowUpRight, Search, Facebook, Instagram, MessageCircle, Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "./chatbot";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Courses", "/courses"],
  ["Testimonials", "/testimonials"],
] as const;

export function Brand({ inverse = false, inNav = false }: { inverse?: boolean; inNav?: boolean }) {
  return <Link to="/" className="flex min-w-0 items-center gap-3 group" aria-label="Knowledge Hub home">
    <div className="bg-white/95 p-1.5 rounded-xl shadow-sm ring-1 ring-white/20 transition-transform group-hover:scale-105">
      <img src="/knhub.png" alt="Knowledge Hub Logo" className="h-9 w-auto object-contain" />
    </div>
  </Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none flex justify-center">
    {/* Subtle blurred background element for depth */}
    <div className="absolute top-0 right-[15%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />
    
    <div className="pointer-events-auto relative w-full max-w-6xl">
      {/* Left Swoop Wing */}
      <div className="absolute top-0 -left-[50vw] w-[50vw] h-10 pointer-events-none hidden sm:block">
        <div className="absolute top-0 right-0 w-10 h-10 bg-transparent rounded-tr-[1.5rem] shadow-[20px_-20px_0_20px_#071531]" />
        <div className="absolute top-0 right-10 left-0 h-1 bg-[#071531]" />
      </div>

      {/* Right Swoop Wing */}
      <div className="absolute top-0 -right-[50vw] w-[50vw] h-10 pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-0 w-10 h-10 bg-transparent rounded-tl-[1.5rem] shadow-[-20px_-20px_0_20px_#071531]" />
        <div className="absolute top-0 left-10 right-0 h-1 bg-[#071531]" />
      </div>

      <nav aria-label="Main navigation" className="relative flex h-[4.5rem] items-center justify-between rounded-b-[2.25rem] bg-gradient-to-r from-[#0A1128] via-[#1E3A8A] to-[#0A1128] px-4 sm:px-6 lg:px-8 shadow-[0_20px_40px_-10px_rgba(30,58,138,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10 border-t-0">
        
        <Brand inNav />

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1.5 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {nav.map(([label, to]) => (
            <Link 
              key={to} 
              to={to} 
              activeOptions={{ exact: to === "/" }} 
              className="relative px-4 py-2 text-[13px] font-medium text-blue-100/70 transition-all hover:text-white rounded-full hover:bg-white/5"
              activeProps={{ className: "text-white bg-white/10 shadow-sm" }}
            >
              {label}
              <span className="nav-active-dot absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 opacity-0 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Button asChild className="group h-[2.35rem] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 pl-5 pr-4 text-[13px] font-semibold text-white shadow-[0_4px_14px_oklch(0.5_0.2_250/0.4)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_oklch(0.5_0.2_250/0.6)] border-0">
            <a href="tel:7997908465">Join Now <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button variant="navGhost" size="icon" className="lg:hidden text-white hover:bg-white/10 rounded-full" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <nav aria-label="Mobile navigation" className="absolute top-full left-0 right-0 mt-4 rounded-[2rem] bg-[#071531]/95 p-5 backdrop-blur-xl border border-white/10 shadow-2xl lg:hidden ring-1 ring-white/5">
          <div className="grid gap-2">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-2xl px-5 py-3.5 text-sm font-medium text-blue-100/70 hover:bg-white/5 hover:text-white transition-colors" activeProps={{ className: "bg-white/10 text-white" }}>
                {label}
              </Link>
            ))}
            <div className="my-3 h-px bg-white/10" />
            <Button asChild className="h-12 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 border-0">
              <a href="tel:7997908465" onClick={() => setOpen(false)}>Join Now <ArrowUpRight className="size-4" /></a>
            </Button>
          </div>
        </nav>
      )}
    </div>
  </header>;
}

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#03102c] via-[#103482] to-[#03102c] bg-[length:400%_400%] animate-gradient text-gray-300 relative overflow-hidden">
      
      {/* Optional faint background texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        
        {/* 1. BRAND INFO */}
        <div className="space-y-6">
          <Brand inverse />
          <p className="text-sm leading-relaxed text-gray-300/80 max-w-xs">
            Empowering students with practical skills and career-focused learning.
          </p>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h2 className="font-display text-base font-bold text-blue-100 tracking-wide mb-6">Quick Links</h2>
          <ul className="space-y-4 text-sm text-gray-300/80">
            {nav.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="group relative w-fit inline-flex hover:text-white transition-colors">
                  <span>{label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#22d3ee]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. COURSES */}
        <div>
          <h2 className="font-display text-base font-bold text-blue-100 tracking-wide mb-6">Courses</h2>
          <ul className="space-y-4 text-sm text-gray-300/80">
            {["Software & Programming", "Cloud & DevOps", "Data Analytics", "Spoken English", "Academic Coaching"].map(course => (
              <li key={course}>
                <Link to="/courses" className="group relative w-fit inline-flex hover:text-white transition-colors">
                  <span>{course}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#22d3ee]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. CONTACT DETAILS */}
        <div>
          <h2 className="font-display text-base font-bold text-blue-100 tracking-wide mb-6">Contact</h2>
          <ul className="space-y-5 text-sm text-gray-300/80">
            <li>
              <a href="tel:+917997908465" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Phone className="mt-0.5 size-4 shrink-0 text-cyan-400 group-hover:drop-shadow-[0_0_5px_#22d3ee]" />
                <span className="leading-tight">7997908465, 8790116519</span>
              </a>
            </li>
            <li>
              <a href="mailto:knowledgehub.suncity@gmail.com" className="flex items-start gap-3 hover:text-white transition-colors group break-all">
                <Mail className="mt-0.5 size-4 shrink-0 text-cyan-400 group-hover:drop-shadow-[0_0_5px_#22d3ee]" />
                <span>knowledgehub.suncity@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400" />
              <span className="leading-relaxed">Suncity, Hyderabad</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a href="https://wa.me/917997908465?text=Hello%20Knowledge%20Hub!%20I%20would%20like%20to%20get%20in%20touch%20with%20your%20team." target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
              <MessageCircle className="size-4" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
              <Instagram className="size-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
              <Facebook className="size-4" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="relative z-10 border-t border-white/10 px-5 py-6 text-center text-sm text-gray-400">
        © 2026 Knowledge Hub | Designed for Future Skills
      </div>
    </footer>
  );
}

export function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-5">
      
      {/* AI Chatbot Component */}
      <Chatbot />

      {/* Custom WhatsApp Button */}
      <a 
        href="https://wa.me/917997908465?text=Hello%20Knowledge%20Hub!%20I%20would%20like%20to%20get%20in%20touch%20with%20your%20team." 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-16 w-16 rounded-[2rem] bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-500 ease-out border border-white/20"
        aria-label="Contact on WhatsApp"
      >

        {/* Official-looking WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        
        {/* Premium Tooltip */}
        <span className="absolute right-full mr-4 whitespace-nowrap rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 text-sm font-bold text-white shadow-2xl opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none translate-x-3 group-hover:translate-x-0 flex items-center gap-2">
          Chat on WhatsApp
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-slate-900/90"></div>
        </span>
      </a>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) { 
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className={isHome ? "pt-10 sm:pt-12" : "pt-20 sm:pt-24"}>{children}</main>
      <SiteFooter />
      <FloatingWidgets />
    </div>
  ); 
}

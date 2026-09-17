import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X, Lightbulb, Phone, Mail, MapPin, ArrowUpRight, Search, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Courses", "/courses"],
  ["Testimonials", "/testimonials"],
] as const;

export function Brand({ inverse = false, inNav = false }: { inverse?: boolean; inNav?: boolean }) {
  return <Link to="/" className="flex min-w-0 items-center gap-3 group" aria-label="Knowledge Hub home">
    <img src="/knhub.png" alt="Knowledge Hub Logo" className="h-12 w-auto object-contain" />
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
          <button className="grid size-[2.15rem] place-items-center rounded-full bg-white/5 text-blue-100/70 transition-all hover:bg-white/10 hover:text-white" aria-label="Search">
            <Search className="size-4" />
          </button>
          <div className="h-5 w-px bg-white/10" />
          <Button asChild className="group h-[2.35rem] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 pl-5 pr-4 text-[13px] font-semibold text-white shadow-[0_4px_14px_oklch(0.5_0.2_250/0.4)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_oklch(0.5_0.2_250/0.6)] border-0">
            <Link to="/contact">Join Now <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
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
              <Link to="/contact" onClick={() => setOpen(false)}>Join Now <ArrowUpRight className="size-4" /></Link>
            </Button>
          </div>
        </nav>
      )}
    </div>
  </header>;
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1F4D] text-gray-300 relative overflow-hidden">
      
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
            <a href="https://wa.me/917997908465" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
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

export function SiteLayout({ children }: { children: React.ReactNode }) { 
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  return <div className="min-h-screen bg-background"><SiteHeader /><main className={isHome ? "pt-10 sm:pt-12" : "pt-20 sm:pt-24"}>{children}</main><SiteFooter /></div>; 
}

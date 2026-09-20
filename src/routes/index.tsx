import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  Cloud,
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MonitorCog,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/shared";
import { CourseCard } from "@/components/site/course-card";
import { courseCategories } from "@/components/site/course-data";
import { LearningPath } from "@/components/site/learning-path";
import { OurCourses } from "@/components/site/our-courses";
import { Testimonials } from "@/components/site/testimonials";
import { FinalCta } from "@/components/site/final-cta";
import classroomImage from "@/assets/classroom-training.jpg.asset.json";
import cloudLabImage from "@/assets/cloud-lab.jpg.asset.json";
import studentImage from "@/assets/knowledge-hub-student.jpg.asset.json";
import programmingImage from "@/assets/programming-session.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub | Computer Training in Suncity" },
      {
        name: "description",
        content:
          "Learn programming, cloud, DevOps, Excel, Tally and more through practical computer training in Suncity, Hyderabad.",
      },
      { property: "og:title", content: "Knowledge Hub – Computer Training Institute" },
      {
        property: "og:description",
        content: "Practical, industry-focused computer training in Suncity, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
const trust = [
  "Expert Trainers",
  "Practical Learning",
  "Certification Support",
  "Placement Assistance",
];
const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    copy: "Train under experienced mentors who simplify complex topics, guide you step-by-step, and help you build skills that are ready for real-world challenges.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Learning",
    copy: "Go beyond theory with hands-on practice, real-time projects, and problem-solving sessions that prepare you for real industry challenges.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Batches",
    copy: "Choose timings that fit your schedule — whether you're a student or working professional, our flexible batches make learning easy and convenient.",
  },
  {
    icon: HeartHandshake,
    title: "Placement Support",
    copy: "Get complete career guidance including resume building, mock interviews, communication training, and job assistance to help you confidently step into the industry.",
  },
  {
    icon: CalendarClock,
    title: "Weekly Mock Tests",
    copy: "Assess your progress and build confidence.",
  },
  {
    icon: Code2,
    title: "Multi-Skill Training",
    copy: "Master multiple in-demand skills including Programming, Cloud Computing, Data Analysis, Networking, and Spoken English — all under one roof.",
  },
];
const knowledgeRingText = "Knowledge Ignition • Powering Your Next Chapter • ";
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    const element = elementRef.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [className]);
  return (
    <div ref={elementRef} className={`${className} reveal ${visible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
}

function HomePage() {
  const [activeCategory, setActiveCategory] = useState(courseCategories[0]!.title);
  const [activeLogo, setActiveLogo] = useState<string | null>(null);
  const [heroPointer, setHeroPointer] = useState({ x: 50, y: 50 });
  const activeCourses =
    courseCategories.find((category) => category.title === activeCategory) ?? courseCategories[0]!;
  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pt-8 pb-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pt-12 lg:pb-28">
          <div className="animate-rise">
            <div className="eyebrow-chip hero-enter hero-enter-one">
              <Lightbulb className="size-4 animate-bulb" /> Computer Training Institute – Suncity
            </div>
            <h1 className="hero-enter hero-enter-two mt-7 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight drop-shadow-sm md:text-7xl">
              Build your <span className="text-gradient inline-block drop-shadow-md">future</span> with Knowledge Hub
            </h1>
            <p className="hero-enter hero-enter-three mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Practical, industry-focused training in IT, academics, and professional skills for
              students and job seekers.
            </p>
            <div className="hero-enter hero-enter-four mt-10 flex flex-wrap gap-4">
              <Button asChild variant="accent" size="xl" className="group relative overflow-hidden shadow-[0_4px_25px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_35px_-5px_rgba(59,130,246,0.65)] hover:scale-[1.02] transition-all duration-300">
                <Link to="/courses">
                  <span className="relative z-10 flex items-center gap-2">Explore Courses <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </Link>
              </Button>
            </div>
            <div className="hero-enter hero-enter-five mt-12 flex flex-wrap gap-3 max-w-xl">
              {trust.map((x) => (
                <span
                  key={x}
                  className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-700 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm hover:scale-105 hover:bg-white/80 transition-all duration-300 cursor-default"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-premium hero-stage-enter relative flex justify-center lg:justify-start lg:translate-x-[50px] w-full">
            <div className="relative w-full max-w-[14rem] sm:max-w-[20rem] lg:max-w-[26rem] flex items-center justify-center mt-12 lg:mt-8 mx-auto">
              {/* Central decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10" />
              
              {/* The Hero Image */}
              <img 
                src="/hero.png" 
                alt="Knowledge Hub Training" 
                className="relative z-10 object-contain w-full h-auto drop-shadow-2xl"
              />

              {/* Orbiting Course Logos */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] scale-[0.55] sm:scale-75 md:scale-100 z-20 pointer-events-none animate-[spin_40s_linear_infinite]">
                {([
                  { name: "Programming", img: "/pythonlogo.png", color: "text-blue-400" },
                  { name: "Data & AI", img: "https://cdn.simpleicons.org/tensorflow/FF6F00", color: "text-orange-400" },
                  { name: "Java", img: "/java.png", color: "text-red-500" },
                  { name: "Spoken English", img: "/spokenenglish.png", color: "text-indigo-400" },
                  { name: "Networking", img: "https://cdn.simpleicons.org/cisco/049FD9", color: "text-sky-500" },
                  { name: "Office Tools", img: "/microsoftofc.png", color: "text-orange-600" },
                  { name: "Cloud", img: "/cloud.png", color: "text-gray-800 dark:text-gray-200" },
                ] as Array<{ name: string; img: string; color: string; icon?: any }>).map((item, index, arr) => {
                  const angle = (360 / arr.length) * index;
                  const isActive = activeLogo === item.name;
                  return (
                    <div 
                      key={item.name}
                      className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 pointer-events-auto cursor-pointer"
                      style={{ transform: `rotate(${angle}deg) translateY(-17rem) rotate(-${angle}deg)` }}
                      onClick={() => setActiveLogo(isActive ? null : item.name)}
                    >
                      <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center justify-center gap-3 transition-transform duration-300">
                        <div className={`transition-all duration-300 ${isActive ? 'scale-125 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]' : 'hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}>
                          {item.img ? (
                            <img src={item.img} alt={item.name} className="size-20 object-contain" />
                          ) : (
                            item.icon && <item.icon className={`size-20 ${item.color}`} />
                          )}
                        </div>
                        <span className={`text-sm font-bold text-center leading-tight drop-shadow-lg tracking-wide whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-blue-400 scale-110' : 'text-gray-800 dark:text-white'}`}>
                          {item.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <Reveal className="mx-auto max-w-6xl px-5 lg:px-8 relative z-10 reveal-stagger">
          <div className="text-center relative z-20 mb-16">
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl drop-shadow-sm">
              Why Choose Knowledge Hub
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
              Discover a learning experience designed to build real skills, boost confidence, and prepare you for career success. At Knowledge Hub, we combine expert guidance, practical training, and affordable programs to help you achieve your goals faster.
            </p>
          </div>

          {/* Background Blurred Blobs */}
          <div className="absolute top-[20%] left-[10%] h-96 w-96 rounded-full bg-blue-300/15 blur-3xl pointer-events-none"></div>
          <div className="absolute top-[60%] right-[10%] h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl pointer-events-none"></div>

          <div className="relative mx-auto mt-10">
            <LearningPath />
          </div>
        </Reveal>
      </section>

      <OurCourses />
      
      <Testimonials />

      <section className="environment-section">
        <Reveal className="mx-auto max-w-5xl px-5 py-20 text-center reveal-stagger lg:px-8">
          <SectionHeading
            eyebrow="Real Learning Environment"
            title="A place where practice becomes progress"
            center
          />
          <div className="environment-stage mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[220px] p-2">
              {/* Main large image */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group">
                <img
                  src="/class.png"
                  alt="Classroom training session"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              
              {/* Top right image */}
              <div className="md:col-span-2 relative overflow-hidden rounded-2xl group">
                <img
                  src="/programm.png"
                  alt="Programming session"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              
              {/* Bottom left small image */}
              <div className="md:col-span-1 relative overflow-hidden rounded-2xl group">
                <img
                  src="/student%20learning.png"
                  alt="Student learning"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              
              {/* Bottom right small image */}
              <div className="md:col-span-1 relative overflow-hidden rounded-2xl group">
                <img
                  src="/why-learn-with-us.jpg"
                  alt="Why learn with us"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-7 mb-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Learn alongside focused peers, with instructors who keep the room practical, welcoming,
            and connected to the real world.
          </p>
        </Reveal>
      </section>
      <FinalCta />
    </>
  );
}

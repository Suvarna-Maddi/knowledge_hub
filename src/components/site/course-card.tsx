import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { CourseCategory } from "./course-data";
export function CourseCard({ category }: { category: CourseCategory }) { 
  const Icon=category.icon; 
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 p-[2px] h-full group hover:shadow-xl transition-shadow shadow-blue-500/10">
      <article className="bg-[#e8f4ff] rounded-[14px] h-full p-6 flex flex-col">
        <div className="flex items-start justify-between">
          <span className="grid size-12 place-items-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-105">
            <Icon className="size-6" />
          </span>
          <ArrowUpRight className="size-5 text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-[#0A1A3A]">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 flex-grow">{category.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {category.courses.map(course => <span key={course} className="inline-flex items-center rounded-full bg-white border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 shadow-sm">{course}</span>)}
        </div>
        <a href="tel:7997908465" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
          Enquire now <ArrowUpRight className="size-4" />
        </a>
      </article>
    </div>
  ); 
}

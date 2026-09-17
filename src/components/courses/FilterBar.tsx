import { Search } from "lucide-react";

export const categories = [
  "All",
  "IT & Software",
  "Cloud & DevOps",
  "Office Tools",
  "Non-IT Skills",
  "Academic"
];

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function FilterBar({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }: FilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-2 w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide snap-x">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 snap-center ${
              activeCategory === cat 
                ? "bg-slate-900 text-white shadow-md" 
                : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full lg:w-72 shrink-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search courses (e.g. Python, AWS)..."
          className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
        />
      </div>

    </div>
  );
}

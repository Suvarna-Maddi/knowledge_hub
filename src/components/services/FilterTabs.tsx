import { categories } from "../../data/services";

type FilterTabsProps = {
  activeFilter: string;
  setFilter: (category: string) => void;
};

export function FilterTabs({ activeFilter, setFilter }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeFilter === cat
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

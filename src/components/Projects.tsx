import { useState } from "react";
import { projects, type Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const CATEGORIES = ["All", "AI / ML", "Game", "Mobile", "Web"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-[#183447]">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="font-display text-3xl font-semibold text-[#F5F9FC]">Selected projects</h2>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
                filter === c
                  ? "bg-[#00C8FF] text-[#020B14] border-[#00C8FF]"
                  : "text-[#A8B8C5] border-[#183447] hover:border-[#00C8FF] hover:text-[#00C8FF]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={setActive} />
        ))}
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}

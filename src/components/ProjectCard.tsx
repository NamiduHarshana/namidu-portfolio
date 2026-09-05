import type { Project } from "../data/projects";
import { Play, Gamepad2, Smartphone, Globe, Brain } from "lucide-react";

const CATEGORY_ICON: Record<Project["category"], typeof Gamepad2> = {
  Game: Gamepad2,
  Mobile: Smartphone,
  Web: Globe,
  "AI / ML": Brain,
};

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const Icon = CATEGORY_ICON[project.category];

  return (
    <button
      onClick={() => onOpen(project)}
      className="text-left glass-panel rounded-xl overflow-hidden hover:border-[#00C8FF] transition-colors group flex flex-col"
    >
      <div
        className="relative aspect-video flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent}22, #061522 70%)`,
        }}
      >
        {project.poster ? (
          <img
            src={project.poster}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Icon
            size={40}
            className="opacity-25 group-hover:opacity-35 transition-opacity"
            style={{ color: project.accent }}
          />
        )}

        <span
          className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border bg-[#020B14]/70"
          style={{ color: project.accent, borderColor: project.accent + "55" }}
        >
          {project.category}
        </span>

        {project.demoVideo && (
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#020B14]/20">
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: project.accent }}
            >
              <Play size={16} className="text-[#020B14] ml-0.5" fill="currentColor" />
            </span>
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold text-[#F5F9FC] mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-[#A8B8C5] leading-relaxed mb-3 flex-1">{project.tagline}</p>

        {project.highlight && (
          <p className="text-sm font-medium mb-3" style={{ color: project.accent }}>
            {project.highlight}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] text-[#A8B8C5] border border-[#183447] rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

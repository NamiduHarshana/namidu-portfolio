import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Play, Check, Gamepad2, Smartphone, Globe, Brain } from "lucide-react";
import type { Project } from "../data/projects";
import { useEffect } from "react";

const CATEGORY_ICON: Record<Project["category"], typeof Gamepad2> = {
  Game: Gamepad2,
  Mobile: Smartphone,
  Web: Globe,
  "AI / ML": Brain,
};

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const Icon = project ? CATEGORY_ICON[project.category] : Gamepad2;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#020B14]/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto glass-panel sm:rounded-xl rounded-t-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-[#F5F9FC] hover:text-[#00C8FF] transition-colors bg-[#020B14]/60 rounded-full p-1.5"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div
              className="relative aspect-video flex items-center justify-center bg-black"
              style={project.demoVideo ? {} : { background: `linear-gradient(135deg, ${project.accent}22, #061522 75%)` }}
            >
              {project.demoVideo ? (
                <video
                  key={project.slug}
                  src={project.demoVideo}
                  poster={project.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <>
                  <Icon size={56} className="opacity-20" style={{ color: project.accent }} />
                  <span
                    className="absolute w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: project.accent }}
                  >
                    <Play size={20} className="text-[#020B14] ml-0.5" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-3 left-4 text-xs text-[#A8B8C5]">
                    Demo preview — real screenshots coming soon
                  </span>
                </>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full border inline-block mb-4"
                style={{ color: project.accent, borderColor: project.accent + "55" }}
              >
                {project.category}
              </span>

              <h3 id="project-title" className="font-display text-2xl font-semibold text-[#F5F9FC] mb-1">
                {project.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: project.accent }}>
                {project.tagline}
              </p>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm rounded-md bg-[#00C8FF] text-[#020B14] font-medium px-4 py-2.5 hover:bg-[#29D9FF] transition-colors"
                    >
                      {l.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#A8B8C5] border border-[#183447] rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm text-[#F5F9FC] font-medium mb-2.5">Overview</h4>
                  <p className="text-[#A8B8C5] text-sm leading-relaxed">{project.description}</p>
                  {project.highlight && (
                    <p className="text-sm font-medium mt-3" style={{ color: project.accent }}>
                      {project.highlight}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-sm text-[#F5F9FC] font-medium mb-2.5">Key features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#A8B8C5]">
                        <Check size={15} className="mt-0.5 shrink-0 text-[#22C55E]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

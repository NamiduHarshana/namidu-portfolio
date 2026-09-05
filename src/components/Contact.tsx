import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-[#183447]">
      <div className="glass-panel rounded-2xl p-8 md:p-14 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#F5F9FC] mb-4 text-balance">
          Have a role or a project in mind?
        </h2>
        <p className="text-[#A8B8C5] max-w-md mx-auto mb-8">
          Open to full-stack, mobile, and AI engineering roles — and always happy to talk
          through an idea.
        </p>

        <a
          href="mailto:namiduharshana02@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-[#00C8FF] text-[#020B14] font-medium px-6 py-3 text-sm hover:bg-[#29D9FF] transition-colors mb-8"
        >
          <Mail size={16} /> namiduharshana02@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 text-[#A8B8C5]">
          <span className="opacity-60" aria-label="GitHub">
            <GithubIcon size={20} />
          </span>
          <a href="https://www.linkedin.com/in/namidu-harshana-6188072b6/" target="_blank" rel="noreferrer" className="hover:text-[#00C8FF] transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

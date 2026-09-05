import { MapPin, Mail, Rocket, Users, Layers } from "lucide-react";
import { skills } from "../data/skills";

const highlights = [
  {
    icon: Layers,
    value: "1 Year 8 Months",
    label: "Industry Experience",
    detail: "Shipping production code across Web, Mobile (Android/iOS), and Applied AI/Computer Vision systems.",
  },
  {
    icon: Rocket,
    value: "Founder & Developer",
    label: "NHTechnoGEN",
    detail: "Leading NHTechnoGEN with 10k+ total product downloads.",
  },
  {
    icon: Users,
    value: "11k+",
    label: "Tech Network",
    detail: "Sharing software engineering insights and connecting with a growing LinkedIn community.",
  },
  {
    icon: Layers,
    value: "Full-Stack",
    label: "Mindset",
    detail: "Connecting deep backend architecture directly with smooth end-user UX.",
  },
];

const techStack = Array.from(new Set(skills.flatMap((s) => s.items))).slice(0, 12);

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl mb-14">
        <h2 className="font-display text-3xl font-semibold text-[#F5F9FC] mb-5">About Me</h2>
        <p className="font-display text-xl text-[#F5F9FC] leading-snug mb-6 text-balance">
          Software Engineer with hands-on experience bridging core technology with
          end-to-end product delivery.
        </p>
        <p className="text-[#A8B8C5] leading-relaxed mb-4">
          I am a Full Stack &amp; AI Engineer with 1 year 8 months of professional industry
          experience building enterprise-grade web architectures, cross-platform mobile
          apps (Android &amp; iOS), and production AI/ML models. I thrive on projects that
          require both a working machine learning model and a polished, intuitive
          interface around it.
        </p>
        <p className="text-[#A8B8C5] leading-relaxed mb-6">
          Alongside my industry work, I am the Founder of NHTechnoGEN, an indie studio
          where I design and publish scalable products — including mobile games reaching
          10,000+ downloads.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#A8B8C5]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-[#00C8FF]" /> Based in Sri Lanka
          </span>
          <a href="mailto:namiduharshana02@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[#00C8FF] transition-colors">
            <Mail size={15} className="text-[#00C8FF]" /> namiduharshana02@gmail.com
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {highlights.map((h) => (
          <div key={h.label} className="glass-panel rounded-xl p-5">
            <h.icon size={18} className="text-[#00C8FF] mb-3" />
            <div className="font-display text-lg font-semibold text-[#F5F9FC] mb-1 leading-snug">
              {h.value}
            </div>
            <div className="text-xs text-[#00C8FF] font-medium mb-2">{h.label}</div>
            <p className="text-sm text-[#A8B8C5] leading-relaxed">{h.detail}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm text-[#F5F9FC] font-medium mb-3">Tech stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="text-xs text-[#A8B8C5] border border-[#183447] rounded-full px-3 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

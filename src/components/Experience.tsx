import { experience } from "../data/experience";
import { education } from "../data/education";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-[#183447]">
      <h2 className="font-display text-3xl font-semibold text-[#F5F9FC] mb-10">Experience</h2>

      <div className="space-y-10 mb-16">
        {experience.map((e) => (
          <div key={e.role + e.period} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
            <div className="text-sm text-[#A8B8C5]">
              <div>{e.period}</div>
              <div className="text-[#5E7285]">{e.type}</div>
            </div>
            <div className="border-l border-[#183447] pl-6 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00C8FF]" />
              <h3 className="font-display text-lg text-[#F5F9FC] font-medium">{e.role}</h3>
              <p className="text-[#00C8FF] text-sm mb-3">{e.company}</p>
              <ul className="space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="text-[#A8B8C5] text-sm leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl font-semibold text-[#F5F9FC] mb-10">Education</h2>
      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.institution} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
            <div className="text-sm text-[#A8B8C5]">{e.period}</div>
            <div className="border-l border-[#183447] pl-6 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00C8FF]" />
              <h3 className="font-display text-lg text-[#F5F9FC] font-medium">{e.institution}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
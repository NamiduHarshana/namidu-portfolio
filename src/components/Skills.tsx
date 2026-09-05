import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-[#183447]">
      <h2 className="font-display text-3xl font-semibold text-[#F5F9FC] mb-10">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="text-[#00C8FF] text-sm font-medium mb-3">{group.group}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-[#A8B8C5] text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

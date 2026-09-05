import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#020B14]/85 backdrop-blur-md border-b border-[#183447]" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-[#F5F9FC]">
          Namidu Harshana
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[#A8B8C5]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#00C8FF] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md border border-[#183447] px-4 py-2 text-sm text-[#F5F9FC] hover:border-[#00C8FF] hover:text-[#00C8FF] transition-colors"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-[#F5F9FC]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#020B14] border-b border-[#183447] px-6 py-4">
          <ul className="flex flex-col gap-4 text-[#A8B8C5]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

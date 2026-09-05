export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#5E7285]">
      <p>© {new Date().getFullYear()} Namidu Harshana</p>
      <p>Built with React, Tailwind CSS & Framer Motion</p>
    </footer>
  );
}

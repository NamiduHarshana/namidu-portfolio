import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useEffect, useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero-bg.mp4"
          poster="/images/hero-bg.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(2,11,20,0.55) 10%, rgba(2,11,20,0.9) 65%, #020B14 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 grain-noise" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-14 md:pt-28 md:pb-20 w-full grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center"
      >
        <motion.div variants={item} className="flex md:block justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-1 ring-[#183447] shadow-[0_0_60px_-10px_rgba(0,200,255,0.35)]">
            <img
              src="/images/profile.png"
              alt="Namidu Harshana"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.p variants={item} className="text-[#00C8FF] font-medium text-sm mb-3">
            Full Stack • Android & iOS • Web • AI
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F9FC] text-balance leading-[1.05] mb-5"
          >
            Building complete products across Web, Mobile, and Applied AI.
          </motion.h1>

          <motion.p variants={item} className="text-[#A8B8C5] max-w-xl leading-relaxed mb-8">
            Software Engineer bridging the gap between intelligent AI models and
            high-performance Web, Android, and iOS applications. Engineering full-stack
            solutions and sharing insights with an 11k+ network on LinkedIn.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[#00C8FF] text-[#020B14] font-medium px-5 py-3 text-sm hover:bg-[#29D9FF] transition-colors"
            >
              View Selected Projects <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5 text-[#A8B8C5] mb-8">
            <span className="opacity-60" aria-label="GitHub">
              <GithubIcon size={20} />
            </span>
            <a href="https://www.linkedin.com/in/namidu-harshana-6188072b6/" target="_blank" rel="noreferrer" className="hover:text-[#00C8FF] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:namiduharshana02@gmail.com" className="hover:text-[#00C8FF] transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-[#183447]"
          >
            <div>
              <span className="font-display text-lg font-semibold text-[#F5F9FC]">11k+</span>
              <span className="text-sm text-[#A8B8C5] ml-2">LinkedIn Community</span>
            </div>
            <div className="w-px h-4 bg-[#183447] hidden sm:block" />
            <div>
              <span className="font-display text-lg font-semibold text-[#F5F9FC]">10k+</span>
              <span className="text-sm text-[#A8B8C5] ml-2">Game Downloads</span>
            </div>
            <div className="w-px h-4 bg-[#183447] hidden sm:block" />
            <div>
              <span className="text-sm text-[#A8B8C5]">Full Stack &amp; AI End-to-End Delivery</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

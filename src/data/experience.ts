export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "LONGWApps (Pvt) Ltd",
    role: "Associate Software Engineer",
    period: "Aug 2025 – Sep 2026",
    type: "Full-time",
    points: [
      "Developed and maintained the GALUMA client project — web platform, backend APIs, and Android/iOS mobile apps",
      "Contributed to the Uniwor mobile application and its custom UI components for Android and iOS",
      "Analyzed requirements and implemented solutions following coding and software development best practices",
      "Tested, debugged, and maintained applications for reliability, performance, and quality",
      "Contributed to system design, technical planning, project estimation, deployment, and post-release maintenance",
      "Contributed to AI/Computer Vision work: automated manufacturing defect detection and a camera-based tyre wear analysis app using OpenCV",
      "Researched and applied new approaches across Web, Full-Stack, Mobile (Android/iOS), AI/ML, and Computer Vision",
      "Collaborated with engineers, QA, project managers, and clients to deliver requirements",
    ],
  },
  {
    company: "LONGWApps (Pvt) Ltd",
    role: "Full Stack Engineer",
    period: "Feb 2025 – Aug 2025",
    type: "Internship · Remote",
    points: [
      "Built and maintained web/mobile apps, with a primary focus on Android APKs",
      "Implemented AI-based tyre tread depth analysis models to extend app functionality",
      "Worked on data flow between AI models, backend services, and mobile interfaces",
      "Contributed to the GALUMA Mobile App — UX and performance improvements",
      "Researched AI algorithms, mobile app frameworks, and performance optimizations",
    ],
  },
  {
    company: "NHTechnoGEN",
    role: "Founder & Developer",
    period: "Jan 2024 – Present",
    type: "Self-employed · Remote",
    points: [
      "Founded an independent mobile game development studio",
      "Designed, developed, and published Bomb Bird: Arcade Blast — 10,000+ downloads on Google Play",
      "Owns end-to-end game development: mechanics, UI/UX, monetization, and publishing",
      "Building additional titles in Unity to expand the NHTechnoGEN portfolio",
    ],
  },
];

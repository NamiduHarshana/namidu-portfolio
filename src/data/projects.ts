export type Project = {
  slug: string;
  title: string;
  category: "Game" | "Mobile" | "Web" | "AI / ML";
  tagline: string;
  description: string;
  highlight?: string;
  features: string[];
  technologies: string[];
  links: { label: string; url: string }[];
  demoVideo?: string;
  poster?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "sitesafe-ai",
    title: "SiteSafe AI",
    category: "AI / ML",
    tagline: "Real-time construction site PPE compliance monitoring",
    description:
      "An AI-powered safety monitoring system that analyzes construction site video/CCTV feeds in real time and flags workers not wearing required PPE (hardhats, safety vests). Uses a dual YOLOv8 model pipeline merged per frame, a custom multi-object tracker for stable worker IDs, and hysteresis-based voting to eliminate frame-to-frame false positives.",
    features: [
      "Dual YOLOv8 models — each specialized for the PPE type it detects most accurately, merged per frame",
      "Custom tracker: IoU matching + color-histogram re-identification for stable worker IDs across occlusion",
      "Hysteresis-based violation voting — rolling-window logic eliminates flicker and false alarms",
      "Dual input source — recorded video or a live RTSP IP camera, switchable at runtime",
    ],
    technologies: ["Python", "FastAPI", "OpenCV", "YOLOv8"],
    links: [],
    demoVideo: "/videos/sitesafe-ai.mp4",
    poster: "/images/posters/sitesafe-ai.jpg",
    accent: "#29D9FF",
  },
  {
    slug: "f1-tyre-predictor",
    title: "F1 Tyre Degradation Predictor",
    category: "AI / ML",
    tagline: "Random Forest model, R² 0.978 on real F1 telemetry",
    description:
      "An end-to-end machine learning project, from raw data collection to a working web app, predicting Formula 1 lap times based on tyre wear, tyre compound, and track conditions. Telemetry was pulled with the FastF1 API across 8 races of the 2024 season (8,553 raw laps, cleaned down to 7,409 by filtering safety-car laps, handling missing values, and detecting pit-stop outliers per driver and stint. Along the way I caught and fixed a data-leakage bug: sector times were originally included as features, but since lap time is just the sum of the three sectors, the model was learning addition instead of tyre degradation — removing those features gave a far more realistic model.",
    highlight: "R² 0.978 · RMSE 1.19s",
    features: [
      "Real telemetry via the FastF1 API, 8 races, 2024 season",
      "Compared Linear Regression vs Random Forest — Random Forest won",
      "Caught and fixed a data-leakage bug (sector times summing to lap time)",
      "Flask web app: pick track, compound, and tyre age, get a predicted lap time",
    ],
    technologies: ["Python", "pandas", "scikit-learn", "Flask", "FastF1"],
    links: [{ label: "Live Demo", url: "https://f1tyredegradationpredictor.pythonanywhere.com" }],
    demoVideo: "/videos/f1-tyre-predictor.mp4",
    poster: "/images/posters/f1-tyre-predictor.jpg",
    accent: "#29D9FF",
  },
  {
    slug: "car-racing-2030",
    title: "Car Racing 2030",
    category: "Game",
    tagline: "PC racing game built in Unity3D and C#",
    description:
      "A PC racing game built in Unity3D and C#, with AI-powered opponent cars, hand-designed terrains, and a full race-day loop: car selection, countdown start, checkpoints and lap counting, a mini-map for navigation, and a reset feature for seamless recovery mid-race.",
    features: [
      "AI-powered opponent cars for challenging races",
      "Checkpoints, lap counting, and a navigation mini-map",
      "Car selection menu and countdown-timer race starts",
      "Reset-car recovery, clean menu system, and full audio design",
    ],
    technologies: ["Unity3D", "C#"],
    links: [],
    demoVideo: "/videos/car-racing-2030.mp4",
    poster: "/images/posters/car-racing-2030.jpg",
    accent: "#00C8FF",
  },
  {
    slug: "bomb-bird",
    title: "Bomb Bird: Arcade Blast",
    category: "Game",
    tagline: "Arcade game published solo, 10,000+ downloads",
    description:
      "Built from the ground up under NHTechnoGEN, the indie studio I founded — designing the mechanics, building the gameplay, and publishing it independently on Google Play. It's crossed 10,000+ downloads, with more games already in the works.",
    highlight: "10,000+ downloads",
    features: [
      "Original arcade mechanics designed from scratch",
      "Power-ups and progressively harder levels",
      "Published and maintained solo on Google Play",
      "Crossed 10,000+ downloads through organic reach",
    ],
    technologies: ["Java", "Android SDK", "Firebase", "Google Play Console"],
    links: [{ label: "Google Play", url: "https://lnkd.in/gDUAybMU" }],
    demoVideo: "/videos/bomb-bird.mp4",
    poster: "/images/posters/bomb-bird.jpg",
    accent: "#00C8FF",
  },
  {
    slug: "document-qa",
    title: "Document Q&A Assistant",
    category: "AI / ML",
    tagline: "RAG app answering questions from your own PDFs",
    description:
      "A full-stack retrieval-augmented generation app — upload a PDF or DOCX and ask questions grounded in its content, with session-based isolation (no login required) and containerized deployment. File uploads are validated by content — not just filename — with magic-byte sniffing, an extension allowlist, and size limits.",
    features: [
      "Upload a PDF or DOCX and ask questions",
      "Answers grounded in the document, with sources",
      "Session-isolated by design — no login, no shared data between users",
      "Content-validated uploads (magic-byte sniffing, not just file extension)",
    ],
    technologies: ["Django", "Next.js", "Gemini API", "Docker", "PythonAnywhere"],
    links: [{ label: "Live Demo", url: "https://document-qa-assistant.netlify.app" }],
    demoVideo: "/videos/document-qa.mp4",
    poster: "/images/posters/document-qa.jpg",
    accent: "#00C8FF",
  },
  {
    slug: "galuma",
    title: "GALUMA",
    category: "Mobile",
    tagline: "Client project at LONGWApps — Android",
    description:
      "A client project built at LONGWApps covering the GALUMA mobile app end to end, including computer-vision-based detection, barcode scanning and generation, cloud image storage, and a relational database backend.",
    features: [
      "Computer-vision-based detection workflow",
      "Barcode scanning and generation",
      "Cloud-based image storage",
      "Relational database backend",
    ],
    technologies: ["Java", "OpenCV", "AWS S3", "MySQL"],
    links: [],
    demoVideo: "/videos/galuma.mp4",
    poster: "/images/posters/galuma.jpg",
    accent: "#29D9FF",
  },
  {
    slug: "strideiq",
    title: "StrideIQ",
    category: "Mobile",
    tagline: "GPS run tracker published on Google Play",
    description:
      "A running tracker with a live map, route recording, step counting, and local run history — built in Flutter and shipped to Google Play as a portfolio-grade full-stack mobile app.",
    features: [
      "Live GPS map with route recording",
      "Step counting and pace tracking",
      "Local run history and progress trends",
      "Shipped end-to-end on Google Play",
    ],
    technologies: ["Flutter", "Dart", "Google Maps API", "SQLite"],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.namidu.strideiq" }],
    demoVideo: "/videos/strideiq.mp4",
    poster: "/images/posters/strideiq.jpg",
    accent: "#00C8FF",
  },
  {
    slug: "imagify",
    title: "Imagify",
    category: "Web",
    tagline: "Full-stack AI SaaS — turn text into images",
    description:
      "A text-to-image generator built on the MERN stack, turning ideas into visuals through an AI image API. Includes full user authentication, and a credit system with an integrated payment gateway so users can purchase more generations.",
    features: [
      "Secure account creation and login (MongoDB-backed)",
      "AI-powered text-to-image generation",
      "Built-in credit system for generations",
      "Integrated online payment gateway to buy credits",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    links: [],
    demoVideo: "/videos/imagify.mp4",
    poster: "/images/posters/imagify.jpg",
    accent: "#29D9FF",
  },
  {
    slug: "employee-task-management",
    title: "Employee Task Management System",
    category: "Web",
    tagline: "Admin dashboard built in Laravel to test full-stack chops",
    description:
      "A test project built to demonstrate logical/mathematical thinking, backend expertise, and frontend proficiency. Admins create, assign, and manage tasks; employees view and update their own task status; a dashboard surfaces task metrics, a status-distribution chart, and a leaderboard of top-performing employees.",
    features: [
      "Admin CRUD for employees and tasks, with secure seeded login",
      "Dashboard: total/pending/completed tasks + status bar chart",
      "Top-5 employees table by completed tasks",
      "AJAX-powered APIs for real-time updates, auth via Laravel Sanctum",
    ],
    technologies: ["Laravel", "Bootstrap", "jQuery", "AJAX", "Laravel Sanctum"],
    links: [],
    demoVideo: "/videos/etms.mp4",
    poster: "/images/posters/employee-task-management.jpg",
    accent: "#00C8FF",
  },
  {
    slug: "donut-crush",
    title: "Donut Crush",
    category: "Game",
    tagline: "Match-3 puzzle game, early Java/Android project",
    description:
      "An early match-3 puzzle game built in Java for Android — a practice project from earlier in my mobile development journey, not published.",
    features: [
      "Classic match-3 swap-and-clear mechanics",
      "Custom game board and sprite rendering",
      "Built as an early Android/Java practice project",
    ],
    technologies: ["Java", "Android SDK"],
    links: [],
    demoVideo: "/videos/donut-crush.mp4",
    poster: "/images/posters/donut-crush.jpg",
    accent: "#29D9FF",
  },
];
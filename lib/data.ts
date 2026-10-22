const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const site = {
  name: "Maimuna Rahman Mysha",
  role: "Full Stack Developer",
  email: "maimunarahman30@gmail.com",
  phone: "+8801726784905",
  phoneLabel: "+880 1726-784905",
  github: "https://github.com/maimunarahma",
  linkedin: "https://www.linkedin.com/in/maimunamysha21",
  resume: "/Maimuna-Rahman-Mysha-Resume.pdf",
  // Add the RAAICON certificate URL here when available
  raaiconCert: "",
  location: "Jashore, Bangladesh",
  openToWork: true,
};

export const certHref = site.raaiconCert || "#recognition";

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "moments", label: "Moments" },
  { id: "recognition", label: "Recognition" },
  { id: "education", label: "Education" },
] as const;

export const socials = [
  { label: "github", name: "GitHub", href: site.github },
  { label: "linkedin", name: "LinkedIn", href: site.linkedin },
  { label: "email", name: "Email", href: `mailto:${site.email}` },
];

export const typedRoles = [
  "Full Stack Developer.",
  "React · Node.js · MongoDB.",
  "Final-year engineer at JUST.",
  "I build practical software.",
];

export type Skill = { name: string; icon?: string; invert?: boolean; mono?: string };
export type SkillGroup = { name: string; description: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    description: "Core languages for applications and problem solving.",
    items: [
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "C", icon: devicon("c") },
      { name: "C++", icon: devicon("cplusplus") },
    ],
  },
  {
    name: "Frontend",
    description: "Fast, responsive and accessible interfaces.",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs"), invert: true },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
    ],
  },
  {
    name: "Backend",
    description: "APIs, authentication and server-side logic.",
    items: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Express.js", icon: devicon("express"), invert: true },
      { name: "REST APIs", mono: "{ }" },
      { name: "JWT Auth", mono: "JWT" },
    ],
  },
  {
    name: "Database",
    description: "Modelling and querying application data.",
    items: [
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "Mongoose", icon: devicon("mongoose") },
      { name: "MySQL", icon: devicon("mysql") },
    ],
  },
  {
    name: "Tools",
    description: "Everyday workflow and collaboration.",
    items: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github"), invert: true },
      { name: "Postman", icon: devicon("postman") },
      { name: "VS Code", icon: devicon("vscode") },
    ],
  },
  {
    name: "Deployment",
    description: "Shipping projects to the web.",
    items: [
      { name: "Vercel", icon: devicon("vercel"), invert: true },
      { name: "Netlify", icon: devicon("netlify") },
      { name: "Render", mono: "R" },
    ],
  },
];

export const allSkills = skillGroups.flatMap((g) => g.items);

export const profileRows = [
  { k: "Location", v: site.location },
  { k: "University", v: "JUST · CSE" },
  { k: "Graduating", v: "2027" },
  { k: "Current role", v: "Contractual Developer" },
];

export const pillars = [
  { glyph: "</>", title: "Frontend", desc: "Responsive, accessible interfaces in React and Next.js, styled with Tailwind CSS." },
  { glyph: "{ }", title: "Backend & APIs", desc: "REST APIs with Node.js and Express, auth, and data modelling in MongoDB and MySQL." },
  { glyph: "↗", title: "Ship & share", desc: "Deploying to the web, and building digital presence for IEEE CS JUST SB." },
];

export type Experience = {
  role: string;
  org: string;
  short: string;
  date: string;
  tag: string;
  color: string;
  status?: string;
  points: string[];
  action?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    role: "Contractual Developer",
    org: "Contract role",
    short: "Contract",
    date: "Present",
    tag: "WORK",
    color: "#3ddc97",
    status: "CURRENT",
    points: [
      "Building and shipping web features end to end on a contract basis.",
      "Working across frontend and backend to deliver client requirements.",
    ],
  },
  {
    role: "Webmaster",
    org: "IEEE Computer Society JUST Student Branch · Founding Committee",
    short: "IEEE CS JUST SB",
    date: "Present",
    tag: "LEADERSHIP",
    color: "#3ddc97",
    status: "CURRENT",
    points: [
      "Build and maintain the student branch website.",
      "Keep events, announcements and member information up to date.",
      "Shape the branch’s digital presence alongside the founding committee.",
    ],
  },
  {
    role: "Technical Committee Volunteer & Assistant Session Moderator",
    org: "IEEE 5th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON 2026)",
    short: "IEEE RAAICON 2026 · JUST",
    date: "18–19 Sep 2026",
    tag: "CONFERENCE",
    color: "#6ea8fe",
    points: [
      "Supported the technical committee throughout the two-day conference.",
      "Served as assistant session moderator — supporting presenters, timekeeping and Q&A.",
    ],
    action: { label: "View certificate", href: certHref },
  },
  {
    role: "Team Member — Flame in Freefall",
    org: "NASA Space Apps Challenge 2026",
    short: "NASA Space Apps",
    date: "2026",
    tag: "HACKATHON",
    color: "#ff9a5c",
    status: "ROUND 2",
    points: [
      "Built an interactive web experience on how flames behave in microgravity.",
      "Team advanced to Round 2 — among 600 teams selected from 1,100+.",
    ],
    action: { label: "Visit project", href: "https://flame-in-freefall.vercel.app" },
  },
];

export type Project = {
  title: string;
  category: string;
  badges: string[];
  description: string;
  stack: string[];
  accent: string;
  url?: string;
  live?: string;
  source?: string;
  draft?: boolean;
};

export const projects: Project[] = [
  {
    title: "Flame in Freefall",
    category: "NASA Space Apps 2026",
    badges: ["FEATURED", "NASA SPACE APPS · ROUND 2"],
    description:
      "An interactive web experience created for the NASA Space Apps Challenge, exploring how fire behaves when gravity is taken away. The team is currently in Round 2 — one of 600 teams from 1,100+.",
    stack: ["NASA Space Apps", "Web Experience", "Vercel"],
    accent: "#ff9a5c",
    url: "https://flame-in-freefall.vercel.app",
    live: "https://flame-in-freefall.vercel.app",
    source: site.github,
  },
  // {
  //   title: "[ADD] Full stack project",
  //   category: "Full Stack",
  //   badges: ["FULL STACK"],
  //   description: "[ADD] One or two lines on the problem it solves, your role, and the key features.",
  //   stack: ["React", "Node.js", "Express", "MongoDB"],
  //   accent: "#3ddc97",
  //   source: site.github,
  //   draft: true,
  // },
  // {
  //   title: "[ADD] Frontend project",
  //   category: "Frontend",
  //   badges: ["FRONTEND"],
  //   description: "[ADD] Short description of a UI-focused project and what makes it interesting.",
  //   stack: ["Next.js", "Tailwind CSS"],
  //   accent: "#6ea8fe",
  //   source: site.github,
  //   draft: true,
  // },
  // {
  //   title: "[ADD] Thesis / academic project",
  //   category: "Academic",
  //   badges: ["ACADEMIC"],
  //   description: "[ADD] Final-year project or thesis — topic, approach and outcome.",
  //   stack: ["Research", "CSE"],
  //   accent: "#b48cff",
  //   source: site.github,
  //   draft: true,
  // },
];

export const nasa = {
  stats: [
    { v: "1,100+", k: "teams competing" },
    { v: "600", k: "teams advanced" },
    { v: "R2", k: "current stage", highlight: true },
  ],
  stages: [
    { label: "Round 1", state: "CLEARED ✓", tone: "done" },
    { label: "Round 2", state: "IN PROGRESS", tone: "active" },
    { label: "Next stages", state: "UPCOMING", tone: "pending" },
  ] as const,
};

export const milestones = [
  {
    type: "IEEE RAAICON 2026",
    title: "Assistant Session Moderator & Technical Volunteer",
    desc: "Assisted in moderating a technical session and supported the committee at an international IEEE conference.",
    mark: "IE",
    cert: certHref,
  },
];

export const certificates = [
  {
    title: "IEEE RAAICON 2026 — Volunteer Certificate",
    issuer: "IEEE Bangladesh Section · JUST",
    year: "2026",
    href: certHref,
  },
];

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  school: "Jashore University of Science and Technology",
  location: "Jashore, Bangladesh",
  start: "2021",
  end: "2027",
  rows: [
    { k: "DEPARTMENT", v: "Computer Science & Engineering" },
    { k: "SESSION", v: "2021–22" },
    { k: "GRADUATION", v: "2027 (expected)" },
    { k: "COURSEWORK", v: "Data Structures, Algorithms, DBMS, Software Engineering" },
  ],
};

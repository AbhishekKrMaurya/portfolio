import { Project, Experience, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Abhishek Kumar Maurya",
  preferredName: "Abhishek Maurya",
  title: "Software Developer & MCA Candidate",
  tagline: "Building reliable web applications, responsive user interfaces, and efficient backend systems.",
  bio: "Motivated Master of Computer Applications (MCA) graduate from University of Lucknow with practical experience in full-stack web development and software engineering through internships at Samsung Innovation Campus and Coding Blocks. Proficient in Java, C/C++, JavaScript, React, and modern web tooling. Eager to contribute to innovative engineering teams and deliver impactful digital solutions.",
  email: "abhishekmaurya4844@gmail.com",
  phone: "+91 7007636769",
  location: "Jankipuram, Lucknow, India",
  hometown: "Varanasi, India",
  github: "https://github.com/AbhishekKrMaurya",
  linkedin: "https://linkedin.com/in/abhishek-maurya-25254b227",
  status: "Open to Internships & Software Engineering Roles",
  availableFor: ["Full-time SDE Roles", "Frontend Developer", "Full-Stack Developer", "Software Engineering Internships"],
  dob: "01/09/2003",
  nationality: "Indian"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "crime-reporting-portal",
    title: "Crime Reporting & Case Tracking Portal",
    category: "Full-Stack",
    duration: "08/2024 – 09/2024",
    associatedWith: "Samsung Innovation Campus",
    description: "A centralized web platform for citizens to lodge incidents online and track real-time case status with an intuitive administrative investigation dashboard.",
    longDescription: "Developed during the Samsung Innovation Campus internship, this solution replaces cumbersome paperwork by enabling citizens to securely submit complaints online, receive tracking IDs, and monitor investigation progress. Built an administrative workflow dashboard that empowers authorities to assign officers, update case milestones, verify evidence, and enhance departmental transparency.",
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "Tailwind CSS", "Data Security", "State Management"],
    keyFeatures: [
      "Online citizen portal for rapid first-information incident reporting with category tags",
      "Real-time case status tracking with secure identifier queries",
      "Administrative dashboard for law enforcement to manage, assign, and update investigation records",
      "Optimized data retrieval pipeline improving response handling time and data integrity",
      "Responsive, accessible UI designed for high-stress citizen reporting on mobile and desktop"
    ],
    githubUrl: "https://github.com/AbhishekKrMaurya",
    accentColor: "indigo",
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Deployment", value: "Full-Stack Prototype" },
      { label: "Security", value: "Role Protected" }
    ]
  },
  {
    id: "canteen-management-system",
    title: "Canteen Snacks Booking & Availability System",
    category: "Systems",
    duration: "02/2023 – 08/2024",
    associatedWith: "Coding Blocks / SMS Varanasi",
    description: "An automated canteen management platform featuring real-time inventory tracking, pre-ordering snacks, and automated staff sales dashboard.",
    longDescription: "Engineered to eliminate long queues and reduce food spoilage in institutional canteens. Students and staff can browse live snack menus with real-time stock counters, book orders in advance, and receive instant confirmation slips. Provided canteen managers with a comprehensive sales, inventory, and demand analytics dashboard with complete CRUD operational integrity.",
    technologies: ["Java", "JavaScript", "HTML5/CSS3", "Database / MySQL", "CRUD Architecture", "Inventory Logic"],
    keyFeatures: [
      "Real-time stock availability tracking with automated inventory threshold updates",
      "Express digital snack booking system reducing peak rush wait times",
      "Staff inventory dashboard for restocking, price modifications, and daily billing logs",
      "CRUD operations engine with transactional safety to prevent duplicate or conflicting orders",
      "Instant order receipt generation and pickup token tracking system"
    ],
    githubUrl: "https://github.com/AbhishekKrMaurya",
    accentColor: "emerald",
    stats: [
      { label: "Operations", value: "Full CRUD" },
      { label: "Order Pipeline", value: "Real-time" },
      { label: "Efficiency", value: "Zero Queue" }
    ]
  },
  {
    id: "developer-portfolio-showcase",
    title: "Modern Developer Portfolio & Resume Engine",
    category: "Frontend",
    duration: "Current",
    associatedWith: "Personal Project",
    description: "An interactive, ultra-fast developer showcase built with React 19, Tailwind CSS, and Motion animations with integrated resume preview and contact tools.",
    longDescription: "A portfolio landing website engineered with modern web standards, featuring responsive layout hierarchies, deep dark-mode aesthetics, interactive project inspection modals, real-time contact dispatches, and a digital resume explorer.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Motion", "Lucide Icons", "Vite"],
    keyFeatures: [
      "Fluid responsive layout with accessible color contrasts and typographic rhythm",
      "Interactive project deep-dives with architecture inspection and feature breakdowns",
      "Live printable resume modal synced with real academic and internship credentials",
      "One-click contact actions including direct email composer and quick copying",
      "Ultra-low latency client-side execution optimized for modern web browsers"
    ],
    githubUrl: "https://github.com/AbhishekKrMaurya",
    accentColor: "cyan",
    stats: [
      { label: "Performance", value: "100/100" },
      { label: "Architecture", value: "Modular React" },
      { label: "Theme", value: "Slate Dark" }
    ]
  },
  {
    id: "dsa-java-suite",
    title: "Data Structures & Algorithms Repository",
    category: "Java & DSA",
    duration: "07/2024 – Present",
    associatedWith: "Coding Blocks & Self-Study",
    description: "A comprehensive repository of algorithmic problem solutions in Java & C++ covering Trees, Graphs, Dynamic Programming, and Sorting.",
    longDescription: "Structured problem-solving repository developed during intensive DSA training at Coding Blocks. Implements clean, documented implementations for fundamental computer science algorithms, recursion, search mechanisms, hash tables, and competitive programming problems.",
    technologies: ["Java", "C++", "DSA", "Algorithms", "Time Complexity Optimization", "Object-Oriented Design"],
    keyFeatures: [
      "Optimized solutions for Linear & Non-linear Data Structures (Arrays, Linked Lists, Trees, Graphs)",
      "Dynamic Programming, Greedy Strategies, and Divide & Conquer implementations",
      "Strict adherence to OOP principles and memory/time complexity benchmarks",
      "Modular unit-tested methods with algorithmic complexity annotations"
    ],
    githubUrl: "https://github.com/AbhishekKrMaurya",
    accentColor: "amber",
    stats: [
      { label: "Core Lang", value: "Java / C++" },
      { label: "Focus", value: "Algorithms & DS" },
      { label: "Practiced", value: "100+ Problems" }
    ]
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "samsung-innovation-campus",
    role: "Software & Web Development Intern",
    company: "Samsung Innovation Campus",
    location: "Lucknow, INDIA",
    period: "08/2024 – 09/2024",
    type: "Internship",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    highlights: [
      "Led the end-to-end development of a full-scale Crime Reporting System, focusing on building an accessible, responsive user interface and clean back-end logic.",
      "Designed and implemented real-time crime reporting, ticket generation, and incident tracking features.",
      "Engineered secure data retrieval queries and optimized system performance, security, and departmental data integrity.",
      "Collaborated on admin dashboard workflows enabling police officers to update case statuses and coordinate investigation response times."
    ],
    skillsGained: ["React", "JavaScript", "System Architecture", "Security & Data Integrity", "Agile Collaboration", "Backend Logic"]
  },
  {
    id: "coding-blocks",
    role: "Summer Intern (DSA & Web Development)",
    company: "Coding Blocks",
    location: "Lucknow, INDIA",
    period: "07/2024 – 08/2024",
    type: "Summer Internship",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    highlights: [
      "Gained rigorous hands-on experience in Data Structures and Algorithms (DSA) using Java, mastering problem-solving patterns and time-complexity optimization.",
      "Developed a functional portfolio website and built a full Canteen Management System implementing complete CRUD operations.",
      "Enhanced database management skills, designing relational schemas for order handling, user authentications, and stock counters.",
      "Participated in live coding reviews, algorithmic debugging sessions, and full-stack integration workflows."
    ],
    skillsGained: ["Java", "Data Structures & Algorithms", "CRUD Operations", "Database Management", "HTML5 / CSS3", "JavaScript"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Lucknow",
    location: "Lucknow, INDIA",
    period: "2023 – Present",
    scoreOrStatus: "Pursuing",
    details: "Advanced coursework in Software Engineering, Advanced Database Management Systems (DBMS), Web Technologies, Computer Networks, and Object-Oriented Software Design."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "School of Management Sciences",
    location: "Varanasi, INDIA",
    period: "2020 – 2023",
    scoreOrStatus: "Graduated (2023)",
    details: "Core foundation in C/C++, Java, Web Development (HTML/CSS/JS), Operating Systems, Software Testing, and Database Management."
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "St. John's Hindi School",
    location: "Varanasi, INDIA",
    period: "2020",
    scoreOrStatus: "Completed",
    details: "Science & Mathematics stream with focus on foundational computing and analytical logic."
  },
  {
    degree: "High School (Class X)",
    institution: "St. John's Hindi School",
    location: "Varanasi, INDIA",
    period: "2018",
    scoreOrStatus: "Completed",
    details: "Foundational academic curriculum in Science, Mathematics, and Languages."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: "Proficient", description: "DSA, OOP, Core Java, Backend Logic" },
      { name: "C / C++", level: "Proficient", description: "Memory Management, Algorithms, Low-Level Fundamentals" },
      { name: "JavaScript (ES6+)", level: "Proficient", description: "Async/Await, DOM, Modern Web APIs, Event-Driven" },
      { name: "TypeScript", level: "Intermediate", description: "Type Safety, Interfaces, Robust Frontend Architecture" },
      { name: "SQL", level: "Intermediate", description: "Relational Queries, CRUD Operations, Database Schema" }
    ]
  },
  {
    title: "Web Development & Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", level: "Proficient", description: "Hooks, Component Architecture, State Management" },
      { name: "HTML5 & CSS3", level: "Advanced", description: "Semantic Markup, Flexbox, Grid, Modern Web Standards" },
      { name: "Tailwind CSS", level: "Proficient", description: "Utility-First Styling, Responsive Breakpoints, Custom UI" },
      { name: "Node.js & Express", level: "Intermediate", description: "RESTful APIs, Middleware, Server Routing" },
      { name: "Responsive Design", level: "Advanced", description: "Mobile-First UX, Cross-Device Compatibility" }
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "Binary",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", description: "Trees, Graphs, DP, Sorting, Optimization" },
      { name: "Database Management (DBMS)", level: "Proficient", description: "Schema Design, Normalization, CRUD Operations" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", description: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "Software Engineering", level: "Proficient", description: "SDLC, System Requirements, Modular Code Design" }
    ]
  },
  {
    title: "Tools & Environments",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient", description: "Version Control, Branching, Pull Requests, Repository Hosting" },
      { name: "VS Code", level: "Advanced", description: "Extensions, Debugging, Terminal Workflows" },
      { name: "MS Office Suite", level: "Proficient", description: "Word, Excel (Data Analysis), PowerPoint (Presentations)" },
      { name: "Vite & Modern Tooling", level: "Proficient", description: "Fast Bundling, TypeScript Config, Modern Build Pipelines" }
    ]
  }
];

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",
  author: {
    name: { ko: "송지현", en: "Jihyun Song" },
    title: "Security Researcher & Developer" ,
    email: "jihyun1710@gmail.com",
  },
  social: {
    github: "https://github.com/thdwlgus",
    linkedin: "https://linkedin.com/in/jihyun-song",
    blog: "https://thdwlgus.tistory.com",
  },
  nav: [
    "about",
    "experience",
    "career-highlights",
    "speaking",
    "certified",
    "projects",
    "contact",
  ] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: true,
    certified: true,
    projects: true,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | Jihyun Song",
    defaultTitle: "Jihyun Song | Security Researcher & Developer",
    description:
      "Personal portfolio showcasing my professional experience, projects, and achievements.",
    keywords: ["portfolio", "software engineer", "developer"],
  },
  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];

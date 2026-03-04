export interface Certification {
  name: string;
  nameEn: string;
  date: string;
  issuer: string;
  issuerEn: string;
  url?: string;
  highlight?: boolean;
  category: "security" | "kubernetes" | "general";
}

export interface Award {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  date: string;
  highlight?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "네트워크관리사 2급",
    nameEn: "Network Administrator Level 2",
    date: "2025.12.09.",
    issuer: "한국정보통신자격협회",
    issuerEn: "Korea Information & Communication Qualifications Association (ICQA)",
    url: "https://drive.google.com/file/d/11S4xuA0o6BQ-EnyJlmdjyBQ4wm-82tel/view?usp=sharing",
    category: "general",
  },
  {
    name: "정보처리기사 필기 합격",
    nameEn: "Engineer Information Processing",
    date: "2025.03.12.",
    issuer: "한국산업인력공단",
    issuerEn: "Human Resources Development Service of Korea",
    category: "general",
  },

];

export const awards: Award[] = [
  {
    title: "2025 비마 학습동아리 우수상",
    titleEn: "2025 BIMA Learning Club Excellence Award",
    issuer: "중부대학교",
    issuerEn: "Joongbu University",
    date: "2025.12.",
  },
  {
    title: "2024 한국융합보안학회 추계학술대회 우수논문상",
    titleEn: "2024 KCSA Fall Conference Best Paper Award",
    issuer: "한국융합보안학회",
    issuerEn: "Korea Convergence Security Association (KCSA)",
    date: "2024.12.",
  },
  {
    title: "2024 한국융합보안학회 하계학술대회 장려상",
    titleEn: "2024 KCSA Summer Conference Encouragement Award",
    issuer: "한국융합보안학회",
    issuerEn: "Korea Convergence Security Association (KCSA)",
    date: "2024.12.",
  },
  {
    title: "2023년도 조선 해운 빅데이터 아이디어 공모 경진대회 대상",
    titleEn: "2023 Chosun Maritime & Shipping Big Data Idea Competition Grand Prize",
    issuer: "국립한국해양대학교",
    issuerEn: "National Korea Maritime & Ocean University",
    date: "2023.12.",
  },
  {
    title: "2023년도 조선 해운 빅데이터 아이디어 공모 경진대회 최우수상",
    titleEn: "2023 Chosun Maritime & Shipping Big Data Idea Competition Excellence Award",
    issuer: "국립한국해양대학교",
    issuerEn: "National Korea Maritime & Ocean University",
    date: "2023.12.",
  },
  {
    title: "2023 비마 학습동아리 우수상",
    titleEn: "2023 BIMA Learning Club Excellence Award",
    issuer: "중부대학교",
    issuerEn: "Joongbu University",
    date: "2023.07.",
  },
];

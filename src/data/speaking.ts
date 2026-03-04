export interface Talk {
  title: string;
  titleEn: string;
  date: string;
  venue: string;
  venueEn: string;
  slidesUrl?: string;
  videoUrl?: string;
  highlight?: boolean;
}

export interface Community {
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  period: string;
  periodEn: string;
  active: boolean;
}

export const talks: Talk[] = [
  {
    title: "OCSF 기반 보안 로그 통합 분석 연구",
    titleEn: "From Monolith to Microservices: Real-World Migration Strategies",
    date: "2025.09.",
    venue: "FEConf 2025",
    venueEn: "FEConf 2025",
    slidesUrl: "https://example.com/slides/microservices-migration",
    videoUrl: "https://example.com/videos/microservices-migration",
    highlight: true,
  },
  {
    title: "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 연구",
    titleEn: "A Study on the Malicious Mail Detection Model Using Cuckoo Sandbox",
    date: "2025.06.",
    venue: "한국융합보안학회 하계학술대회",
    venueEn: "KCSA Summer Conference",
    slidesUrl: "file:///C:/Users/JINI/Desktop/%EC%A4%91%EB%B6%80%EB%8C%80%ED%95%99%EA%B5%90/CCIT/1%ED%95%99%EA%B8%B0/%ED%95%98%EA%B3%84%ED%95%99%EC%88%A0%EB%8C%80%ED%9A%8C/%ED%95%98%EA%B3%84%ED%95%99%EC%88%A0%EB%8C%80%ED%9A%8C(%EC%A4%91%EB%B6%80%EB%8C%80%ED%95%99%EA%B5%90_GOAT%ED%8C%80_Cuckoo%20Sandbox%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%9C%20%EC%95%85%EC%84%B1%20%EB%A9%94%EC%9D%BC%20%ED%83%90%EC%A7%80%20%EB%AA%A8%EB%8D%B8%20%EC%97%B0%EA%B5%AC).pdf",
    highlight: true,
  },
  {
    title: "Cuckoo Sandboxo를 이용한 악성 메일 탐지 모델 연구",
    titleEn: "From Startup to Scale: An Architecture Evolution Story",
    date: "2024.11.",
    venue: "개발자 컨퍼런스 코리아",
    venueEn: "Developer Conference Korea",
    slidesUrl: "https://example.com/slides/architecture-evolution",
  },
  {
    title: "효과적인 코드 리뷰 문화 만들기",
    titleEn: "Building an Effective Code Review Culture",
    date: "2024.06.",
    venue: "사내 기술 세미나",
    venueEn: "Internal Tech Seminar",
  },
  {
    title: "오픈소스 CLI 도구 개발기",
    titleEn: "Building an Open Source CLI Tool: Lessons Learned",
    date: "2023.12.",
    venue: "오픈소스 컨트리뷰톤",
    venueEn: "Open Source Contributhon",
    slidesUrl: "https://example.com/slides/cli-tool-development",
  },
];

export const communities: Community[] = [
  {
    role: "운영진",
    roleEn: "Organizer",
    organization: "Seoul JS Meetup",
    organizationEn: "Seoul JS Meetup",
    period: "2024.01. ~ 현재",
    periodEn: "Jan 2024 — Present",
    active: true,
  },
  {
    role: "멘토",
    roleEn: "Mentor",
    organization: "오픈소스 컨트리뷰톤",
    organizationEn: "Open Source Contributhon",
    period: "2022.06. ~ 현재",
    periodEn: "Jun 2022 — Present",
    active: true,
  },
];

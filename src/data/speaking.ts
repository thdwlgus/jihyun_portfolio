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
    titleEn: "A Study on OCSF-based Integrated Analysis of Security Logs",
    date: "2025.11.",
    venue: "한국정보보호학회",
    venueEn: "KIICS",
    slidesUrl: "https://drive.google.com/file/d/15XclT1wqjHejhOUkNqukxBxRBTj5rhKv/view?usp=drive_link",
    highlight: true,
  },
  {
    title: "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 연구",
    titleEn: "A Study on Analysis and Anomaly Detection of Google Workspace Based on User Behavior",
    date: "2025.12.",
    venue: "한국융합보안학회 추계학술대회",
    venueEn: "KCSA Fall Conference",
    slidesUrl: "https://drive.google.com/file/d/1YU9SNTeG4WyNqy6TaDSmHVWdhxqyOAqk/view?usp=drive_link",
    highlight: true,
  },
  {
    title: "Cuckoo Sandboxo를 이용한 악성 메일 탐지 모델 연구",
    titleEn: "A Study on the Malicious Mail Detection Model Using Cuckoo Sandbox",
    date: "2025.06.",
    venue: "한국융합보안학회 하계학술대회",
    venueEn: "KCSA Summer Conference",
    slidesUrl: "https://drive.google.com/file/d/1OfybJoTgEwLogo9_4zcRnb1IkRW4q42i/view?usp=drive_link",
    highlight: true,
  },
];

export const communities: Community[] = [
  {
    role: "아기사자",
    roleEn: "Member",
    organization: "멋쟁이사자처럼 14기",
    organizationEn: "LikeLion 14th",
    period: "2026.01. ~ Present",
    periodEn: "Jan 2025 — Present",
    active: true,
  },
  {
    role: "운영진",
    roleEn: "Organizer",
    organization: "멋쟁이사자처럼 13기",
    organizationEn: "LikeLion 13th",
    period: "2025.01. ~ 2025.12",
    periodEn: "Jan 2025 — Dec 2025",
    active: false,
  },
  {
    role: "회장",
    roleEn: "President",
    organization: "멋쟁이사자처럼 12기",
    organizationEn: "LikeLion 12th",
    period: "2024.01. ~ 2024.12.",
    periodEn: "Jan 2024 — Dec 2024",
    active: false,
  },
  {
    role: "임원",
    roleEn: "Executive",
    organization: "학과 학생회",
    organizationEn: "Department Student Council",
    period: "2024.01. ~ 2024.12",
    periodEn: "Jan 2024 — Dec 2024",
    active: false,
  },
  {
    role: "부원",
    roleEn: "Member",
    organization: "학과 학생회",
    organizationEn: "Department Student Council",
    period: "2023.01. ~ 2023.12.",
    periodEn: "Jan 2023 — Dec 2023",
    active: false,
  },
  {
    role: "팀장",
    roleEn: "PM",
    organization: "웹 개발 스터디",
    organizationEn: "Web Development Study Group",
    period: "2023.09. ~ 2023.12.",
    periodEn: "Sep 2023 — Dec 2023",
    active: false,
  },
  {
    role: "부원",
    roleEn: "Member",
    organization: "Team S.C.P",
    organizationEn: "Team S.C.P",
    period: "2022.09. ~ 2023.09.",
    periodEn: "Sep 2022 — Sep 2023",
    active: false,
  },
  {
    role: "팀장",
    roleEn: "PM",
    organization: "C언어 스터디",
    organizationEn: "C Programming Study Group",
    period: "2022.07. ~ 2022.09.",
    periodEn: "Jul 2022 — Sep 2022",
    active: false,
  },
];

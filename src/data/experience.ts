export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  team: string;
  teamEn: string;
  period: string;
  periodEn: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  descriptionEn: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "CCIT 정보보안 SW융합전공",
    companyEn: "Cultural Contents & Information Technology",
    role: "학생",
    roleEn: "Student",
    team: "중부대학교",
    teamEn: "Joongbu University",
    period: "2025.03. ~ 2025.12",
    periodEn: "Mar 2025 — Dec 2025",
    startDate: "2025-03",
    endDate: "2025-12",
    description: [
      "오픈소스 이메일 보안 솔루션 (PM)",
      "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 솔루션 개발",
      "한국융합보안학회 하계, 추계 학술대회 논문 투고"
    ],
    descriptionEn: [
      "Open-source Email Security Solution (PM)",
      "Developed Google Workspace Anomaly Detection Solution based on User Behavior Analysis",
      "Submitted paper to Korea Convergence Security Association (KCSA) Summer & Fall Conference"
    ],
    tags: ["ML", "AI", "Email Security", "Google Workspace", "Log Analysis"],
  },
  {
    company: "화이트햇 스쿨 3기",
    companyEn: "Whitehat School 3rd Cohort",
    role: "교육생",
    roleEn: "Trainee",
    team: "보안 교육 프로그램",
    teamEn: "Security Training Program",
    period: "2025.03. ~ 2025.09",
    periodEn: "Mar 2025 — Sep 2025",
    startDate: "2025-03",
    endDate: "2025-09",
    description: [
      "Top20 우수 수료",
      "전체 과제 100% 완료",
      "OCSF 기반 보안 로그 통합 및 분석 프로젝트 (PM)",
    ],
    descriptionEn: [
      "Top20 Outstanding Graduate",
      "Completed all assignments (100% completion rate)",
      "OCSF-based Security Log Integration & Analysis Project (PM)",
    ],
    tags: ["OCSF", "Log Analysis", "Threat Detection", "CVE Analysis", "PoC"],
  },

 
];

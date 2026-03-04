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
  {
    company: "스타트업AI",
    companyEn: "StartupAI",
    role: "풀스택 개발자",
    roleEn: "Full Stack Developer",
    team: "프로덕트팀",
    teamEn: "Product Team",
    period: "2020.01. ~ 2022.02.",
    periodEn: "Jan 2020 — Feb 2022",
    startDate: "2020-01",
    endDate: "2022-02",
    description: [
      "AI 기반 추천 시스템의 프론트엔드 및 백엔드 개발",
      "GraphQL API 설계 및 React 기반 대시보드 구축",
      "사용자 행동 분석 파이프라인 구축으로 전환율 25% 향상",
    ],
    descriptionEn: [
      "Developed frontend and backend for AI-powered recommendation system",
      "Designed GraphQL APIs and built React-based analytics dashboard",
      "Improved conversion rate by 25% through user behavior analysis pipeline",
    ],
    tags: ["React", "GraphQL", "Python", "Docker", "Redis"],
  },
 
];

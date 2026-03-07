export interface CareerHighlight {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const careerOverview = {
  ko: "정보보호학전공 학부생으로 로그 분석·위협 탐지·보안 자동화 분야에서 경험을 쌓아왔습니다. CCIT 정보보안 SW융합전공, Whitehat School 3기 활동을 통해 공격과 방어 양면의 보안 역량을 키웠으며, 학술 논문 게재 및 다수의 프로젝트 리드 경험을 보유하고 있습니다.",
  en: "As an Information Security undergraduate, I have built experience in log analysis, threat detection, and security automation. Through the CCIT information Security & SW Covergency program and Whitehat School 3rd cohort, I have developed both offensive and defensive security capabilities, with experience in academic paper publication and leading multiple projects.",
};

export const careerHighlights: CareerHighlight[] = [
  {
    title: "로그 분석 & 위협 탐지",
    titleEn: "Microservices Architecture Migration",
    items: [
      "OCSF 기반 보안 로그 통합 및 분석 프로젝트 (PM)",
      "Sigma Rule 활용 위협 탐지 자동화 파이프라인 구축",
      "한국정보보호학회(KIISC) 논문 게재",
    ],
    itemsEn: [
      "OCSF-based Security Log Integration & Analysis Project (PM)",
      "Built automated threat detection pipeline using Sigma Rules",
      "Published paper in Korea Institute of Information Security & Cryptology (KIISC)",
    ],
  },
  {
    title: "오픈소스 이메일 보안 솔루션",
    titleEn: "Large-Scale Traffic Performance Optimization",
    items: [
      "머신러닝(앙상블, 나이브베이즈, 랜덤포레스트, 로지스틱 회귀 등) 기반 스팸·악성 메일 탐지 모델 구축",
      "Spam Assassin·ClamAV·Cuckoo Sandbox 연동 통합 보안 파이프라인 구현",
      "한국융합보안학회(KCSA) 하계 학술대회 논문 장려상 수상",
    ],
    itemsEn: [
      "Built spam & malicious email detection model using ML algorithms (Ensemble, Naive Bayes, Random Forest, Logistic Regression)",
      "Implemented integrated security pipeline with SpamAssassin, ClamAV, and Cuckoo Sandbox",
      "Ecouragement Award at Korea Convergency Security Association (KCSA) Summer Conference",
    ],
  },
  {
    title: "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 솔루션",
    titleEn: "Engineering Culture & Team Leadership",
    items: [
      "사용자 행위 분석 기반 이상 징후 탐지 솔루션 구축",
      "구글 워크스페이스 로그 수집 및 행위 패턴 분석 파이프라인 구축",
      "한국융합보안학회(KCSA) 추계 학술대회 우수 논문상 수상",
    ],
    itemsEn: [
      "Developed anomaly detection solution based on user behavior analysis",
      "Built Google Workspace log collection and behavior pattern analysis pipeline",
      "Best Paper Award at Korea Convergence SEcurity Association (KCSA) Fall Conference",
    ],
  },
  {
    title: "커뮤니티 리더십",
    titleEn: "CI/CD & Infrastructure Automation",
    items: [
      "멋쟁이사자처럼 12기 회장 역임 - 기수 운영 및 프로젝트 총괄",
      "멋쟁이사자처럼 13기 운영진 - 교육 설계 및 멘토링",
      "학과 학생회 임원으로 학생 대표 활동",
      "웹 개발·C언어 스터디 등 팀장으로 팀 학습 주도",
    ],
    itemsEn: [
      "Served as President of LikeLion 12th cohort - led operations and project management",
      "Served as Organizer of LikeLion 13th cohort - designed curriculum and mentored members",
      "Served as Executive of Department Student Council as student representative",
      "Led team learning as Team Lead of Web Development & C Programming study groups",
    ],
  },
];

export const coreCompetencies = [
  {
    ko: "보안 로그 분석 & 위협 탐지",
    en: "Security Log Analysis & Threat Detection",
  },
  {
    ko: "AI/ML 기반 보안 연구",
    en: "AI/ML-based Security Research",
  },
  {
    ko: "오픈소스 보안 도구 활용",
    en: "Open-source Security Tool Integration",
  },
  {
    ko: "보안 프로젝트 리더십",
    en: "Security Project Leadership",
  },
];

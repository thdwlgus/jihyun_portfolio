export interface Project {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  goals: string[];
  goalsEn: string[];
  contents: string[];
  contentsEn: string[];
  results: string[];
  resultsEn: string[];
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "악성문서 중심의 이메일 보안 솔루션",
    titleEn: "Open Source CLI Tool Development",
    period: "2025.03. ~ 2025.12.",
    periodEn: "Mar 2025 — Dec 2025",
    goals: [
      "악성 문서(HWP/HWPX) 및 첨부파일 중심의 이메일 위협 탐지 솔루션 개발",
      "SPF/DKIM/DMARC 헤더 검증부터 동적 파일 분석까지 다층적 이메일 보안 파이프라인 구축",
    ],
    goalsEn: [
      "Develop an email threat detection solution focused on malicious documents (HWP/HWPX) and attachments",
      "Build a multi-layered email security pipeline covering SPF/DKIM/DMARC header validation through dynamic file analysis",
    ],
    contents: [
      "CentOS7 기반 Postfix/Dovecot SMTP 서버 구축 및 MX 레코드 수정을 통한 검증 메일 서버 연동",
      "SpamAssassin을 활용한 rule 기반 스팸 필터링 및 EML 파싱·첨부파일 자동 추출 구현",
      "Cuckoo Sandbox에 Volatility·Suricata·Yara Rule을 통합하여 첨부파일 동적 분석 환경 구성",
      "Rest API를 통해 Cuckoo Sandbox와 검증 서버를 연결, 악성 점수(Score) 기반 분류 파이프라인 완성",
      "Flask + MySQL 기반 웹 대시보드 구축 및 Clean 메일만 최종 수신자에게 전달하는 흐름 구현",
    ],
    contentsEn: [
      "Built a CentOS7-based Postfix/Dovecot SMTP server and integrated a validation mail server via MX record modification",
      "Implemented rule-based spam filtering using SpamAssassin and automated EML parsing and attachment extraction",
      "Configured a dynamic attachment analysis environment by integrating Volatility, Suricata, and Yara Rules into Cuckoo Sandbox",
      "Connected Cuckoo Sandbox and the validation server via REST API, completing a malicious score-based classification pipeline",
      "Built a Flask + MySQL web dashboard and implemented a flow that delivers only clean emails to final recipients",
    ],
    results: [
      "Volatility·Suricata·Yara Rule 모듈 추가 후 Cuckoo 탐지 스코어 초기 대비 유의미하게 상승",
      "HWP(OLE 바이너리)·HWPX(OOXML/ZIP) 두 포맷에 대한 파일 구조 분석 및 검사 로직 설계 완료",
      "검증 서버 → 분석 파이프라인 → 수신자 전달까지 전 과정을 자동화한 이메일 보안 솔루션 프로토타입 구현",
    ],
    resultsEn: [
      "Detection score improved significantly after adding Volatility, Suricata, and Yara Rule modules to Cuckoo",
      "Completed file structure analysis and inspection logic design for both HWP (OLE binary) and HWPX (OOXML/ZIP) formats",
      "Implemented a full end-to-end email security solution prototype automating the entire flow from validation server → analysis pipeline → recipient delivery",
    ],
    tags: ["Python", "Cuckoo Sandbox", "SpamAssassin", "ClamAV", "Flask", "MySQL", "Postfix", "CentOS7", "Yara", "Suricata"],
  },
  {
    title: "OCSF 기반 보안 로그 통합 및 분석",
    titleEn: "OCSF-Based Security Log Integration and Analysis",
    period: "2025.05. ~ 2025.09.",
    periodEn: "May 2025 — Sep 2021",
    goals: [
      "이기종 환경(Nginx, BIND9, AWS CloudTrail 등)에서 발생하는 보안 로그를 OCSF 공통 포맷으로 정규화하여 통합 분석 환경 구축",
      "Sigma Rules 기반 공격 탐지 및 실시간 알림 파이프라인 구현으로 보안 관제 자동화 달성",
    ],
    goalsEn: [
      "Normalize security logs from heterogeneous environments (Nginx, BIND9, AWS CloudTrail, etc.) into a common OCSF format to build a unified analysis environment",
      "Achieve security monitoring automation through Sigma Rules-based attack detection and a real-time alert pipeline",
    ],
    contents: [
      "Filebeat·Logstash를 활용한 로그 수집 파이프라인 구성 및 OCSF 스키마 기반 필드 정규화 구현",
      "외부망·AWS·내부망을 아우르는 공격 시나리오 직접 설계 및 CVE PoC(CVE-2016-6662, CVE-2021-3156, CVE-2022-0847) 활용 공격 행위 재현",
      "Kafka 클러스터 기반 원본 로그 보존 및 Python Normalizer로 OCSF 포맷 변환, Elasticsearch 적재",
      "Sigma Rules → ElastAlert 변환 파이프라인 구성 및 단일 로그 탐지 불가 공격에 대한 패턴 기반 상관 분석 탐지 구현",
      "Slack API 연동을 통한 실시간 공격 알림 전송 및 GuardDuty 로그 상관분석으로 자격증명 탈취 탐지 고도화",
    ],
    contentsEn: [
      "Configured a log collection pipeline using Filebeat and Logstash, and implemented field normalization based on the OCSF schema",
      "Designed attack scenarios spanning external network, AWS, and internal network, and reproduced attack behaviors using CVE PoCs (CVE-2016-6662, CVE-2021-3156, CVE-2022-0847)",
      "Preserved raw logs via Kafka cluster, converted to OCSF format using a Python Normalizer, and loaded into Elasticsearch",
      "Configured a Sigma Rules → ElastAlert conversion pipeline and implemented pattern-based correlation analysis detection for attacks undetectable from a single log",
      "Sent real-time attack alerts via Slack API integration and enhanced credential theft detection through GuardDuty log correlation analysis",
    ],
    results: [
      "외부망·AWS·내부망 3개 도메인에 걸친 이기종 로그를 단일 OCSF 파이프라인으로 통합, 확장 가능한 보안 관제 프레임워크 구현",
      "단일 로그로 탐지 불가능한 공격(Web Shell + CURL, GuardDuty + StartSession 등)을 패턴 기반 상관 분석으로 탐지 성공",
      "한국정보보호학회(KIISC) 논문 게재",
    ],
    resultsEn: [
      "Integrated heterogeneous logs across three domains (external network, AWS, internal network) into a single OCSF pipeline, building an extensible security monitoring framework",
      "Successfully detected attacks undetectable from a single log (Web Shell + CURL, GuardDuty + StartSession, etc.) via pattern-based correlation analysis",
      "Published in KIISC (Korea Institute of Information Security and Cryptology)",
    ],
    tags: ["OCSF", "ELK Stack", "Elasticsearch", "Logstash", "Kibana", "Kafka", "Filebeat", "Sigma Rules", "ElastAlert", "Python", "AWS CloudTrail", "AWS GuardDuty", "Slack API", "CVE Analysis"],
    url: "https://github.com/OCSF-Logrrr",
  },
  {
    title: "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 솔루션 개발",
    titleEn: "User Behavior-Based Google Workspace Analysis and Anomaly Detection Solution",
    period: "2024.08. ~ 2024.12.",
    periodEn: "Aug 2024 — Dec 2024",
    goals: [
      "SaaS 환경에서의 효율적인 이상 탐지 및 보안 운영 체계 구축",
      "Google Workspace Audit 로그 기반 사용자 행위 분석 및 정책 설계",
    ],
    goalsEn: [
      "Build an efficient anomaly detection and security operations framework for SaaS environments",
      "Analyze user behavior and design detection policies based on Google Workspace audit logs",
    ],
    contents: [
      "Google Workspace(Gmail, Drive, Chat) Audit 로그 수집 자동화 (Daemon 구현)",
      "ELK 스택(Logstash → Elasticsearch → Kibana) 기반 로그 파이프라인 구축",
      "ES|QL 기반 파일 이상·외부 통신·접근 시간 위반 등 카테고리별 탐지 정책 16개 설계",
      "Kibana Rules 및 Dashboard를 통한 정책 위반 로그 실시간 시각화",
      "Slack API + Slack Bolt를 활용한 실시간 보안 Alert 시스템 구현",
    ],
    contentsEn: [
      "Automated Google Workspace (Gmail, Drive, Chat) audit log collection via daemon implementation",
      "Built a log pipeline based on ELK stack (Logstash → Elasticsearch → Kibana)",
      "Designed 16 category-based detection policies using ES|QL covering file anomalies, external communication, and access time violations",
      "Real-time visualization of policy violation logs via Kibana Rules and Dashboard",
      "Implemented a real-time security alert system using Slack API + Slack Bolt",
    ],
    results: [
      "한국융합보안학회 2024 추계학술대회 우수논문상 수상",
      "Google Workspace 환경 특화 보안 모니터링 인프라 독자 구축",
    ],
    resultsEn: [
      "Won Best Paper Award at the 2024 Fall Conference of the Korea Convergence Security Association (KCSA)",
      "Independently built a Google Workspace-specific security monitoring infrastructure",
    ],
    tags: ["ELK Stack", "Elasticsearch", "Google Workspace", "Python", "Slack API"],
  },
  {
    title: "오픈소스 이메일 보안 솔루션",
    titleEn: "Open-Source Email Security Solution",
    period: "2024.03. ~ 2024.07.",
    periodEn: "Mar 2024 — Jul 2024",
    goals: [
      "악성 메일 위협에 대응하는 오픈소스 기반 이메일 보안 솔루션 개발",
      "스팸·악성코드·피싱 탐지 기능을 머신러닝으로 자동화하여 사용자 보안 취약성 해소",
    ],
    goalsEn: [
      "Develop an open-source email security solution to counter malicious email threats",
      "Automate spam, malware, and phishing detection with machine learning to address user security vulnerabilities",
    ],
    contents: [
      "MX 레코드 수정을 통한 검증 메일 서버 구축 및 SPF/DKIM/DMARC 초기 보안 설정",
      "SpamAssassin·ClamAV·OLE 객체 추출·파일 Hex Signature 검증을 결합한 다중 첨부파일 분석 파이프라인 구현",
      "Cuckoo Sandbox에 Volatility·Suricata·Yara Rule 모듈을 추가하여 동적 악성파일 분석 환경 구축 (VM 5대 운영)",
      "Naive Bayes·Random Forest·Logistic Regression·Ensemble 4개 모델 및 SMOTE 기반 앙상블 피싱 URL 탐지 모델 개발 (42개 피처)",
      "Flask + MySQL 기반 웹 리포트 시스템 구축 및 검증 결과 JSON 보고서 연동",
    ],
    contentsEn: [
      "Built a validation mail server via MX record modification and configured initial SPF/DKIM/DMARC security settings",
      "Implemented a multi-layered attachment analysis pipeline combining SpamAssassin, ClamAV, OLE object extraction, and file hex signature verification",
      "Built a dynamic malware analysis environment by adding Volatility, Suricata, and Yara Rule modules to Cuckoo Sandbox (operating 5 VMs)",
      "Developed 4 models (Naive Bayes, Random Forest, Logistic Regression, Ensemble) and a SMOTE-based ensemble phishing URL detection model using 42 features",
      "Built a Flask + MySQL web report system integrated with JSON-format validation result reports",
    ],
    results: [
      "한국융합보안학회 2024 하계학술대회 장려상 수상",
      "Random Forest 모델 기준 정확도 약 90%, SMOTE 적용 후 Phishing 재현율 대폭 개선",
      "SpamAssassin 실환경 테스트에서 스팸 차단율 90% 이상 달성",
      "영세 사업자 대상 오픈소스 ETP 솔루션으로 확장 가능한 end-to-end 이메일 보안 인프라 독자 구현",
    ],
    resultsEn: [
      "Honorable Mention Award at the 2024 Summer Conference of the Korea Convergence Security Association (KCSA)",
      "Achieved approximately 90% accuracy with the Random Forest model; phishing recall improved significantly after applying SMOTE",
      "Achieved 90%+ spam blocking rate in real-world SpamAssassin testing",
      "Independently implemented an end-to-end email security infrastructure extensible as an open-source ETP solution for small businesses",
    ],
    tags: ["SpamAssassin", "ClamAV", "Cuckoo Sandbox", "Machine Learning", "Flask"],
  },
];

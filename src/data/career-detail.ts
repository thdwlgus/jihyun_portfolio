export interface SubSection {
  title: string;
  titleEn: string;
  items: CareerDetailItem[];
}

export interface CareerDetailItem {
  text: string;
  textEn: string;
  subItems?: { text: string; textEn: string }[];
}

export interface CareerDetailSection {
  id: string;
  title: string;
  titleEn: string;
  background: CareerDetailItem[];
  role: SubSection[];
  results: CareerDetailItem[];
  lessons: CareerDetailItem[];
}

export const careerDetailSections: CareerDetailSection[] = [
  {
    id: "OCSF",
    title: "OCSF 기반 보안 로그 통합 및 분석 프로젝트",
    titleEn: "OCSF-Based Security Log Integration and Analysis",
    background: [
      {
        text: "Nginx, BIND9, AWS CloudTrail 등 환경마다 포맷이 상이한 로그들은 각각의 구조를 개별적으로 파악해야 했고, 이는 분석 효율을 크게 저하시켰습니다.",
        textEn:
          "Logs from environments like Nginx, BIND9, and AWS CloudTrail each had different formats, requiring individual parsing - signigicantly reducing analysis efficiency.",
      },
      {
        text: "다양한 소스의 로그를 통합 분석하려면 공통된 데이터 모델이 필요했으나, 기존 환경에는 이를 지원하는 표준화 체계가 부재했습니다.",
        textEn:
          "Integrating logs from multiple sources required a common data model, but the existing environment lacked any standardization framework to support this.",
      },
      {
        text: "로그 분석 자동화 및 실시간 위협 탐지를 위해 공통 포맷 기반의 통합 파이프라인 구축이 필요하다고 판단했습니다.",
        textEn:
          "It was determined that building an integrated pipeline based on a common format was necessary for log analysis automation and real-time threat detection.",
      },
    ],
    role: [
      {
        title: "팀장 및 공격 시나리오 설계",
        titleEn: "Team Lead & Attack Scenario Design",
        items: [
          {
            text: "프로젝트 전반을 리드하며 팀원 역할 분담, 일정 관리, 기술 방향 결정을 담당했습니다.",
            textEn:
              "Led the overall project, handling role assignment, schedule management, and technical direction.",
            subItems: [
              {
                text: "리눅스 환경 기반의 공격 시나리오를 직접 설계하고, 각  시리오별 실행 흐름과 예상 로그 패턴을 정의했습니다.",
                textEn:
                  "Personally designed attack scenarios for Linux environments and defined the execution flow and expected log patterns for each scenario.",
              },
              {
                text: "CVE 취약점을 시나리오에 맞게 선정하고, PoC를 활용해 실제 공격 행위를 재현하여 탐지 가능 로그를 생성했습니다.",
                textEn:
                  "Selected CVE vulnerabilities suited to each scenario and reproduced actual attack behaviors using PoCs to generate detectable logs.",
              },
            ],
          },
        ],
      },
      {
        title: "로그 수집 및 정제",
        titleEn: "Log Collection & Scenario Design",
        items: [
          {
            text: "공격 시나리오 실행 후 발생하는 로그를 수집하고, 분석에 적합한 형태로 정규화하는 작업을 수행했습니다.",
            textEn:
              "Collected logs generated after running attack scenarios and performed normalization into a format suitable for analysis.",
            subItems: [
              {
                text: "Filebeat 및 Logstash를 활용해 다양한 소스의 로그를 파이프라인으로 수집했습니다.",
                textEn:
                  "Used Filebeat and Logstash to collect logs from various sources via pipeline.",
              },
              {
                text: "불필요한 필드 제거, 필드명 표준화, OCSF 포맷 매핑을 통해 ELK에서 일관된 분석이 가능하도록 정제했습니다.",
                textEn:
                  "Normalized data through unnecessary field removal, field name standardization, and OCSF format mapping to enable consistent analysis in ELK.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "이기종 로그 소스를 단일 OCSF 포맷으로 정규화하여 분석 시간을 단축하고, 공통 쿼리로 다양한 환경의 위협을 탐지할 수 있는 구조를 확립했습니다.",
        textEn:
          "Normalized heterogeneous log sources into a single OCSF format, reducing analysis time and establishing a structure capable of detecting threats across various environments using common queirs.",
      },
      {
        text: "Sigma Rules 기반 탐지 룰을 ElastAlert와 연동해 실시간 알림 파이프라인을 구현했으며, 탐지 결과를 Slack으로 즉시 전달하는 자동화 흐름을 완성했습니다.",
        textEn:
          "Implemented a real-time alert pipeline by integrating Sigma Rules-based detection rules with ElastAlert, completing an automated flow that instantly delivers detection results to Slack.",
      },
      {
        text: "표준화된 로그 포맷 도입으로 신규 로그 소스 추가 시 확장성이 확보되어, 향후 보안 관제 자동화의 기반이 될 가능성이 있는 프레임워크를 구축했습니다.",
        textEn:
          "By adopting a standardized log format, extensiblility was secured when adding new log sources - building a framework with potential to serve as the foundation for future security monitoring automation.",
      },
    ],
    lessons: [
      {
        text: "로그 정규화는 단순 포맷 변환이 아닌 데이터 의미론적 일관성을 유지하는 설계 문제임을 체감했으며, 필드 매핑 오류 하나가 탐지 룰 전체에 영향을 미칠 수 있다는 점을 배웠습니다.",
        textEn:
          "Experienced firsthand that log normalization is a design problem of maintaining semantic consistency in data, not just format conversion - and learned that a single field mapping error can affect an entire detection ruleset.",
      },
      {
        text: "Sigma Rules는 플랫폼 독립적인 탐지 언어로서 강력하지만, ElastAlert 변환 과정에서 필드명 불일치 문제가 빈번하게 발생해 파이프라인 검증의 중요성을 깨달았습니다.",
        textEn:
          "Sigma Rules is powerful as a platform-independent detection language, but frequent field name mismatches during ElastAlert conversion highlighted the importance of thorough pipeline validation.",
      },
      {
        text: "보안 자동화는 개별 툴의 이해보다 툴 간 데이터 흐름 설계가 핵심임을 이 프로젝트를 통해 실감했습니다.",
        textEn:
          "Through this project, realized that security automation hinges on designing the data flow between tools, more than understanding each tool individually.",
      },
    ],
  },
  {
    id: "google",
    title: "사용자 행위 기반 구글 워크스페이스 분석 및 이상 탐지 솔루션 개발",
    titleEn: "User Behavior-Based Google Workspace Analysis and Anomaly Detection Solution",
    background: [
      {
        text: "코로나19 이후 재택근무가 급증하면서 Google Workspace(Gmail, Drive, Meet 등) 같은 클라우드 협업 툴 사용이 폭발적으로 늘어났습니다.",
        textEn:
          "Remote work surged after COVID-19, leading to explosive growth in the use of cloud collaboration tools like Google Workspace (Gmail, Drive, Meet, etc.).",
      },
      {
        text: "SaaS 환경은 로그량이 방대하고 접근 주체가 분산되어 있어, 내부자 위협이나 계정 탈취 같은 이상 행위를 기존 방식으로 탐지하기 어려웠습니다.",
        textEn:
          "In SaaS environments, log volumes ar massive and access is distributed across many users, making it difficult to detect anomalous behaviors like insider threats or account takeovers using conventional methods.",
      },
      {
        text: "Audit 로그 기반의 행위 분석과 정책 수립을 통해 사용자 이상 행위를 탐지하는 보안 인프라 구축이 필요하다고 판단했습니다.",
        textEn:
          "It was Determined that building a security infrastructure capable of detecting user anomalies through audit lo-based behavioral analysis and policy definition was necessary.",
      },
    ],
        role: [
      {
        title: "로그 수집 및 분류",
        titleEn: "Log Collection & Classification",
        items: [
          {
            text: "Google Workspace Admin SDK를 활용해 Gmail, Drive, Meet, Admin 등 서비스별 Audit 로그를 수집했습니다.",
            textEn:
              "Collected audit logs per service (Gmail, Drive, Meet, Admin, etc.) using the Google Workspace Admin SDK.",
            subItems: [
              {
                text: "수집된 록를 행위 유형별로 분류하고, 분석에 필요한 이벤트를 필터링하여 정제했습니다.",
                textEn:
                  "Classified collected logs by behavior type, filtered relevant events, and normalized the data.",
              },
              {
                text: "로그 간 차이점을 비교 분석하여 정상 행위 패턴과 이상 행위 패턴을 구분할 수 있는 기준을 도출했습니다.",
                textEn:
                  "Compared and analyzed differences across logs to derive criteria for distinguishing normal behavior patterns from anomalous ones.",
              },
            ],
          },
        ],
      },
      {
        title: "탐지 정책 설계",
        titleEn: "Detection Policy Design",
        items: [
          {
            text: "분류된 로그를 바탕으로 ES|QL 기반 탐지 쿼리를 작성하고, 이상 행위 탐지 정책을 수립했습니다.",
            textEn:
              "Wrote ES|QL-based detection queries based on classified logs and established anomaly detection policies.",
            subItems: [
              {
                text: "탐지된 이상 행위는 Slack API / Stack Bolt를 통해 실시간 알림으로 전달되는 파이프라인을 구성했습니다.",
                textEn:
                  "Configured a pipeline to deliver detected anomalies as real-time alerts via Slack API / Slack Bolt.",
              }
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "Google Workspace의 다양한 서비스 로고를 단일 ELK 파이프라인으로 통합 수집하고, Kibana에서 시각화하는 환경을 구성했습니다.",
        textEn:
          "Integrated logs from various Google Workspace services into a single ELK pipeline and set up a visualization environment in Kibana.",
      },
      {
        text: "ES|QL 기반 정책을 통해 비정상 로그인, 대용량 파일 공유 등의 이상행위를 탐지하고 Slack으로 즉시 알림을 전달하는 자동화 흐름을 완성했습니다.",
        textEn:
          "Completed an automated flow that detects anomalies such as abnormal logins and large-scale file sharing via ES|QL-based policies, with immediate Slack alert delivery.",
      },
      {
        text: "단순 로그 수집을 넘어 행위 기반 정책 탐지 체계를 구현함으로써, SaaS 환경에서도 실효성 있는 보안 관제가 가능함을 확인했습니다.",
        textEn:
          "By implementing a behavior-based policy detection system beyond simple log collection, confirmed that effective security monitoring is achievable even in SaaS environments.",
      },
    ],
    lessons: [
      {
        text: "SaaS 로그는 온프레미스 환경과 달리 이벤트 종류가 매우 다양하고 구조가 서비스마다 달라, 수집 전 로그 스키마를 충분히 파악하는 것이 선행되어야 한다는 점을 배웠습니다.",
        textEn:
          "Learned that SaaS logs have far more diverse event types and varying structures per service compared to on-premises environments - making it essential to thoroughly understand the log schema befor beginning collection.",
      },
      {
        text: "탐지 정책은 단순히 규칙을 만드는 것이 아니라, 정상 행위의 기준을 먼저 정의해야 이상 행위를 구분할 수 있다는 것을 체감했습니다.",
        textEn:
          "Experienced firsthand that detection policies are not just about writing rules - you must first define what constitutes normal behavior before you can identify anomalies.",
      },
      {
        text: "탐지 결과를 Slack 알림으로 연동하면서, 보안 자동화의 핵심은 탐지 정확도뿐만 아니라 알림의 실효성과 피로도 관리임을 깨달았습니다.",
        textEn:
          "Through integrating detection results with Slack alerts, realized that the core of security automation is not only detection accuracy, but also the practical effectiveness of alerts and managing alert fatigue.",
      },
    ],
  },
  {
    id: "email",
    title: "오픈소스 이메일 보안 솔루션",
    titleEn: "Open-Source Email Security Solution",
    background: [
      {
        text: "KISA 사칭 피싱 메일, 금융기관 위장 악성코드 유포 등 이메일을 통한 사이버 공격이 꾸준히 증가하고 있으며, 공격 수법도 BEC, 생성 AI 활용 등으로 점점 고도화되고 있습니다.",
        textEn:
          "Cyber attacks via email - such as phishing impersonating KISA and malware distribution disguised as financial institutions - continue to rise, with attack methods growing increasingly sophisticated through BEC, generative AI exploitation, and more.",
      },
      {
        text: "이메일은 여전히 공격자에게 가성비 높은 최고의 공격 수단으로, 사용자의 보안 취약성을 해결하기 위한 자동화된 탐지 체계가 필요했습니다.",
        textEn:
          "Email remains the most cost-effective attack vector for threat actors, and an automated detection system was needed to address users' security vulnerabilities.",
      },
      {
        text: "헤더 위변조, 악성 첨부파일, 피싱 링크 등 다양한 공격 벡터를 통합적으로 탐지하는 머신러닝 기반 이메일 보안 솔루션 개발을 목표로 설정했습니다.",
        textEn:
          "The goal was set to develop an ML-based email security solution capable of comprehensively detecting various attack vectors including header forgery, malicious attachments, and phishing links.",
      },
    ],
    role: [
      {
        title: "팀장 및 링크 탐지 모델 개발",
        titleEn: "Team Lead & Link Detection Model Development",
        items: [
          {
            text: "프로젝트 전반을 리드하며 팀원 역할 분담, 기술 스택 선정, 개발 일정을 관리했습니다.",
            textEn:
              "Led the overall project, managing role assignment, tech stack selection, and development schedule.",
            subItems: [
              {
                text: "이메일 본문 내 링크를 추출하고, Naive Bayes·Random Forest·Logistic Regression·Ensemble 모델을 직접 구현하여 피싱 URL 탐지 성능을 비교·검증했습니다.",
                textEn:
                  "Extracted links from email bodies and implemented Naive Bayes, Random Forest, Logistic Regression, and Ensemble models from scratch to compare and validate phishing URL detection performance.",
              },
              {
                text: "앙상블 기법을 적용해 단일 모델 대비 탐지 정확도를 향상시켰습니다.",
                textEn:
                  "Applied ensemble techniques to improve detection accuracy over individual models.",
              },
            ],
          },
        ],
      },
      {
        title: "Cuckoo Sandbox 구축",
        titleEn: "Cuckoo Sandbox Setup",
        items: [
          {
            text: "첨부파일 동적 분석 환경으로 Cuckoo Sandbox를 직접 구축하고, 악성 파일 실행 시 행위 기반 탐지가 가능하도록 파이프라인에 연동했습니다.",
            textEn:
              "Independently built Cuckoo Sandbox as a dynamic analysis environment for attachments and integrated it into the pipeline to enable behavior-based detection when malicious files are executed.",
            subItems: [
              {
                text: "ClamAV를 통한 압축 파일 및 OLE 객체 추출과 연계하여 다층적 첨부파일 분석 체계를 완성했습니다.",
                textEn:
                  "Combined with ClamAV for compressed file and OLE object extraction to complete a multi-layered attachment analysis framework.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "SPF/DKIM/DMARC 헤더 검증, 첨부파일 동적 분석, 링크 머신러닝 탐지를 하나의 파이프라인으로 통합한 이메일 보안 시스템을 완성했습니다.",
        textEn:
          "Completed an email security system integrating SPF/DKIM/DMARC header validation, dynamic attachment analysis, and ML-based link detection into a single pipeline.",
      },
      {
        text: "앙상블 모델 적용을 통해 피싱 링크 탐지 정확도를 단일 모델 대비 향상시켰으며, Clean/Problem 이진 분류 기반으로 수신자에게 안전한 메일만 전달하는 흐름을 구현했습니다.",
        textEn:
          "Improved phishing link detection accuracy over single models through ensemble methods, and implemented a flow that delivers only safe emails to recipients based on Clean/Problem binary classification.",
      },
      {
        text: "Flask + MySQL 기반 웹 대시보드를 통해 분석 결과를 시각화하고, 검증 메일 서버와 MX 레코드 수정을 연동하는 실환경 수준의 구성을 완성했습니다.",
        textEn:
          "Visualized analysis results via a Flask + MySQL web dashboard, completing a production-level setup integrated with a validation mail server and MX record modification.",
      },
    ],
    lessons: [
      {
        text: "링크 탐지는 단일 모델보다 앙상블이 유의미하게 성능이 높았고, 모델 선택보다 피처 설계와 데이터 전처리가 성능에 더 큰 영향을 미친다는 것을 배웠습니다.",
        textEn:
          "Learned that ensembles significantly outperform single models for link detection, and that feature engineering and data preprocessing have a greater impact on performance than model selection itself.",
      },
      {
        text: "Cuckoo Sandbox 구축 과정에서 환경 의존성과 버전 충돌 문제를 반복적으로 겪으며, 동적 분석 환경은 설계 단계에서 OS·네트워크 격리 구성을 철저히 고려해야 함을 깨달았습니다.",
        textEn:
          "Through repeatedly encountering environment dependency and version conflict issues while building Cuckoo Sandbox, realized that OS and network isolation must be thoroughly considered at the design stage for dynamic analysis environments.",
      },
      {
        text: "이메일 보안은 단일 탐지 기법만으로는 충분하지 않으며, 헤더·본문·첨부파일·링크를 아우르는 다층 방어 전략이 실질적인 탐지율 향상에 핵심임을 체감했습니다.",
        textEn:
          "Experienced firsthand that email security cannot rely on a single detection technique - a multi-layered defense strategy covering headers, body content, attachments, and links is essential to meaningfully improving detection rates.",
      },
    ],
  },
];

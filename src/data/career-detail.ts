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
    titleEn: "OCSF-Based SEcurity Log Integration and Analysis",
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
        text: "로그 분석 자동화 및 실시간 위협 탐지를 위해 공통 포맷 기반의 통합 파이프랑니 구축이 필요하다고 판단했습니다.",
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
        text: "이기종 로그 소스를 단일 OCSF 포맷으로 정규화하여 분석 시간을 단춝하고, 공통 쿼리로 다양한 환경의 위협을 탐지할 수 있는 구조를 확립했습니다.",
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
    id: "performance",
    title: "대규모 트래픽 성능 최적화",
    titleEn: "Large-Scale Traffic Performance Optimization",
    background: [
      {
        text: "서비스 사용자가 월 100만 명을 넘어서면서 피크 시간대 응답 지연과 간헐적 서비스 장애가 발생하기 시작했습니다.",
        textEn:
          "As monthly users exceeded 1 million, response delays during peak hours and intermittent service outages began occurring.",
      },
      {
        text: "데이터베이스 쿼리 지연, 비효율적인 캐싱, 정적 자산 최적화 부족 등 여러 병목 지점이 복합적으로 작용하고 있었습니다.",
        textEn:
          "Multiple bottlenecks including database query delays, inefficient caching, and lack of static asset optimization were compounding.",
      },
    ],
    role: [
      {
        title: "병목 분석 및 최적화",
        titleEn: "Bottleneck Analysis & Optimization",
        items: [
          {
            text: "APM 도구를 도입하여 전체 요청 경로의 성능을 가시화하고 병목 지점을 정밀 분석했습니다.",
            textEn:
              "Introduced APM tools to visualize performance across the entire request path and precisely analyze bottlenecks.",
            subItems: [
              {
                text: "Datadog APM을 도입해 서비스별 레이턴시, 에러율, 처리량을 실시간으로 모니터링하는 대시보드를 구축했습니다.",
                textEn:
                  "Deployed Datadog APM and built dashboards for real-time monitoring of per-service latency, error rates, and throughput.",
              },
              {
                text: "슬로우 쿼리 분석을 통해 상위 10개 쿼리를 최적화하여 평균 응답 시간을 40% 단축했습니다.",
                textEn:
                  "Optimized the top 10 slow queries through analysis, reducing average response time by 40%.",
              },
            ],
          },
          {
            text: "다층 캐싱 전략을 설계하고 구현하여 데이터베이스 부하를 크게 줄였습니다.",
            textEn:
              "Designed and implemented a multi-layer caching strategy, significantly reducing database load.",
            subItems: [
              {
                text: "Redis를 활용한 애플리케이션 레벨 캐싱과 CDN을 활용한 엣지 캐싱을 조합하여 초당 10,000 요청을 안정적으로 처리할 수 있는 환경을 구축했습니다.",
                textEn:
                  "Combined Redis application-level caching with CDN edge caching to reliably handle 10,000 requests per second.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "평균 API 응답 시간을 800ms에서 200ms로 75% 개선하고, P99 레이턴시를 3초에서 800ms로 단축했습니다.",
        textEn:
          "Improved average API response time by 75% from 800ms to 200ms, and reduced P99 latency from 3s to 800ms.",
      },
      {
        text: "데이터베이스 부하를 60% 감소시키고, 월간 인프라 비용을 30% 절감하는 성과를 달성했습니다.",
        textEn:
          "Achieved 60% reduction in database load and 30% reduction in monthly infrastructure costs.",
      },
    ],
    lessons: [
      {
        text: "성능 최적화는 측정 없이는 불가능하다는 것을 깊이 체감했습니다. 직감이 아닌 데이터에 기반한 의사결정이 효과적인 최적화의 핵심이며, APM 도구의 도입이 조직 전체의 성능 인식을 변화시키는 계기가 되었습니다.",
        textEn:
          "Deeply experienced that performance optimization is impossible without measurement. Data-driven rather than intuition-based decisions are key to effective optimization, and APM tool adoption transformed the entire organization's performance awareness.",
      },
      {
        text: "캐싱은 만능이 아니며, 캐시 무효화 전략이 캐싱 자체보다 더 중요하다는 것을 배웠습니다. 데이터 일관성과 성능 사이의 트레이드오프를 비즈니스 요구사항에 맞게 설계하는 능력을 키울 수 있었습니다.",
        textEn:
          "Learned that caching is not a silver bullet and that cache invalidation strategy is more important than caching itself. Developed the ability to design tradeoffs between data consistency and performance according to business requirements.",
      },
    ],
  },
  {
    id: "leadership",
    title: "개발 문화 및 팀 리더십",
    titleEn: "Engineering Culture & Team Leadership",
    background: [
      {
        text: "팀 규모가 5명에서 15명으로 성장하면서 코드 품질 유지, 지식 공유, 온보딩 효율성에 대한 체계적인 접근이 필요해졌습니다.",
        textEn:
          "As the team grew from 5 to 15 members, a systematic approach to maintaining code quality, knowledge sharing, and onboarding efficiency became necessary.",
      },
      {
        text: "기존에는 비공식적인 소통에 의존하던 개발 프로세스를 팀 규모에 맞게 체계화하고 확장 가능한 구조로 전환하는 것이 필요했습니다.",
        textEn:
          "The development process, previously relying on informal communication, needed to be systematized and transformed into a scalable structure appropriate for the team size.",
      },
    ],
    role: [
      {
        title: "코드 리뷰 및 품질 관리",
        titleEn: "Code Review & Quality Management",
        items: [
          {
            text: "체계적인 코드 리뷰 프로세스를 도입하고 팀 내 품질 문화를 정착시켰습니다.",
            textEn:
              "Introduced a systematic code review process and established a quality culture within the team.",
            subItems: [
              {
                text: "리뷰 가이드라인과 체크리스트를 작성하여 일관된 코드 리뷰 기준을 마련하고, PR 템플릿을 표준화했습니다.",
                textEn:
                  "Created review guidelines and checklists for consistent code review standards, and standardized PR templates.",
              },
              {
                text: "자동화된 린팅, 테스트, 보안 스캔을 CI 파이프라인에 통합하여 리뷰어의 부담을 줄이고 리뷰 품질을 높였습니다.",
                textEn:
                  "Integrated automated linting, testing, and security scans into the CI pipeline, reducing reviewer burden and improving review quality.",
              },
            ],
          },
        ],
      },
      {
        title: "멘토링 및 온보딩",
        titleEn: "Mentoring & Onboarding",
        items: [
          {
            text: "주니어 개발자 온보딩 프로그램을 설계하고 1:1 멘토링 체계를 구축했습니다.",
            textEn:
              "Designed a junior developer onboarding program and built a 1:1 mentoring system.",
            subItems: [
              {
                text: "4주간의 구조화된 온보딩 커리큘럼을 설계하여 신규 입사자의 첫 PR 기간을 평균 3주에서 1주로 단축했습니다.",
                textEn:
                  "Designed a structured 4-week onboarding curriculum, reducing new hire's first PR time from an average of 3 weeks to 1 week.",
              },
              {
                text: "주간 1:1 미팅과 분기별 성장 목표 설정을 통해 팀원의 기술적 성장을 지원하고 경력 개발을 도왔습니다.",
                textEn:
                  "Supported team members' technical growth and career development through weekly 1:1 meetings and quarterly growth goal setting.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "코드 리뷰 프로세스 도입 후 프로덕션 버그 발생률이 45% 감소하고, 팀 내 지식 공유가 활성화되었습니다.",
        textEn:
          "After introducing the code review process, production bug rate decreased by 45% and knowledge sharing within the team was activated.",
      },
      {
        text: "온보딩 프로그램을 통해 신규 입사자의 적응 기간을 크게 단축하고, 팀 만족도 조사에서 멘토링 프로그램이 가장 높은 평가를 받았습니다.",
        textEn:
          "Significantly shortened new hire adaptation period through the onboarding program, with the mentoring program receiving the highest ratings in team satisfaction surveys.",
      },
    ],
    lessons: [
      {
        text: "개발 문화는 규칙이 아닌 공감을 통해 정착된다는 것을 배웠습니다. 코드 리뷰를 '검사'가 아닌 '학습의 기회'로 프레이밍하자 팀원들이 자발적으로 참여하기 시작했고, 이것이 지속 가능한 문화의 핵심이라는 것을 깨달았습니다.",
        textEn:
          "Learned that engineering culture is established through empathy, not rules. When code review was framed as a 'learning opportunity' rather than an 'inspection', team members began participating voluntarily — and I realized this is the key to sustainable culture.",
      },
      {
        text: "리더십은 기술적 역량만으로는 충분하지 않으며, 팀원 개개인의 성장에 대한 진정한 관심과 지원이 팀 전체의 성과를 이끄는 가장 강력한 동력이라는 것을 경험했습니다.",
        textEn:
          "Experienced that leadership is not sufficient with technical skills alone — genuine interest in and support for each team member's growth is the most powerful driver of overall team performance.",
      },
    ],
  },
];

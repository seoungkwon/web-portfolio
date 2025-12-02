// src/App.js
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/** CRA 표준: gh-pages 배포용 BASE 경로 */
const BASE = process.env.PUBLIC_URL || "";
const asset = (p) => `${BASE}${p}`;

/** 연락처/링크 */
const CONTACT = {
  email: "s2ngkwon2@naver.com",
  githubUser: "seoungkwon",
  pagesUrl: "https://seoungkwon.github.io/web-portfolio/",
};

/** Full-Stack / AI 공통 컴포넌트들 */

function Chips({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="chips">
      {items.map((t, i) => (
        <span className="chip" key={`${t}-${i}`}>
          {t}
        </span>
      ))}
    </div>
  );
}

function VideoBox({ src, poster }) {
  const posterUrl = poster ? asset(poster) : undefined;

  if (!src) {
    return (
      <div className="video-box">
        {posterUrl && (
          <img
            src={posterUrl}
            alt="project thumbnail"
            className="video-thumb"
            style={{
              width: "100%",
              borderRadius: "12px",
              display: "block",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="video-box">
      <video
        controls
        playsInline
        preload="metadata"
        poster={posterUrl}
        onError={(e) => {
          const p = document.createElement("p");
          p.className = "warn";
          p.textContent =
            "⚠️ 영상 로딩 실패: public/videos 경로나 파일명을 다시 확인해주세요.";
          e.currentTarget.replaceWith(p);
        }}
      >
        {src && <source src={asset(src)} type="video/mp4" />}
        브라우저가 HTML5 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
}

function ProjectCard({
  category,
  title,
  period,
  teamType,
  role,
  stack,
  summary,
  bullets,
  videoSrc,
  videoPoster,
  links,
}) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <div className="project-header-left">
          <span className="project-badge">{category}</span>
          <h3 className="project-title">{title}</h3>
        </div>
        <div className="project-header-right">
          <div className="project-meta-top">
            <span>{period}</span>
            <span>· {teamType}</span>
          </div>
          <div className="project-meta-role">포지션: {role}</div>
        </div>
      </div>

      <div className="project-card-body">
        <VideoBox src={videoSrc} poster={videoPoster} />
        <div className="project-info">
          {summary && <p className="project-summary">{summary}</p>}

          {bullets && bullets.length > 0 && (
            <div className="project-section">
              <h4>Key Highlights</h4>
              <ul>
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {stack && stack.length > 0 && (
            <div className="project-section">
              <h4>Tech Stack</h4>
              <Chips items={stack} />
            </div>
          )}

          {links && (links.repo || links.live) && (
            <div className="project-links">
              {links.live && (
                <a
                  href={links.live}
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {links.repo && (
                <a
                  href={links.repo}
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* -------------------- 페이지: Home -------------------- */

function HomePage() {
  const nav = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="dot" /> Available for new opportunities
      </div>

      <h1 className="hero-title">
        Result-Driven
        <br />
        <span className="hero-gradient">Full-Stack &amp; AI Developer</span>
      </h1>

      <p className="hero-subtitle">
        Java/Spring 기반의 견고한 백엔드와 AI·LLM 기술을 자연스럽게 결합한 서비스를 만듭니다.
        <br />
        확장성과 안정성을 갖춘 웹 플랫폼과 지능형 솔루션 구축에 집중하고 있습니다.
      </p>

      <div className="hero-actions">
        <button
          className="btn-primary hero-btn"
          onClick={() => nav("/fullstack")}
        >
          Full-Stack Projects →
        </button>
        <button className="btn-secondary hero-btn" onClick={() => nav("/ai")}>
          AI Projects →
        </button>
      </div>
    </section>
  );
}

/* -------------------- 페이지: Full-Stack Projects -------------------- */

function FullStackPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h2>Full-Stack Projects</h2>
        <p>
          <b>Java, Spring, Oracle, React</b> 기반으로 구축한 웹 서비스 프로젝트 모음입니다. 
          확장성 있는 백엔드와 깔끔한 API 설계, 직관적인 사용자 경험을 목표로 개발했습니다.
        </p>
      </header>

      <div className="page-body">
        <ProjectCard
          category="BACKEND · FRONTEND"
          title="MyPlate – 혼밥/복지카드 이용자를 위한 맛집 추천 플랫폼"
          period="2025.08 – 2025.09"
          teamType="팀 프로젝트"
          role="인증·마이페이지 · 소셜 로그인 담당"
          videoSrc="/videos/myplate_demo.mp4"
          videoPoster="/images/myplate_poster.jpg"
          summary="복지카드와 혼밥에 특화된 가맹점 정보를 검색하고, 리뷰·즐겨찾기·마이페이지로 관리하는 맛집 추천 서비스입니다."
          bullets={[
            "Spring Security + JWT + Refresh Token 구조 설계, Axios 인터셉터로 자동 재발급 플로우 구현",
            "Google · Kakao · Naver OAuth2 로그인 연동 후 백엔드에서 JWT 발급 → React로 Redirect 구조 설계",
            "/api/me/stats 통합 API와 MyBatis 집계 쿼리로 마이페이지 초기 로딩 속도 개선",
            "팀원 별 다른 개발 환경(CORS, proxy) 문제를 공통 설정/가이드 문서화로 정리",
          ]}
          stack={[
            "Java",
            "Spring MVC/Security",
            "JWT",
            "OAuth2",
            "MyBatis",
            "Oracle",
            "React",
            "Axios",
            "GitHub Pages",
          ]}
          links={{
            live: "https://seoungkwon.github.io/web-portfolio/",
            repo: "https://github.com/seoungkwon/web-portfolio",
          }}
        />

        <ProjectCard
          category="BACKEND LEAD"
          title="Trace – 제주 여행/축제 정보 포털"
          period="2025.07 – 2025.08"
          teamType="팀 프로젝트"
          role="여행/축제 게시판 백엔드 설계 및 구현"
          videoSrc="/videos/scout_demo.mp4" 
          videoPoster="/images/scout_poster.jpg"
          summary="제주도의 명소·맛집·축제 정보를 한 번에 검색하고, 기간/지역/테마로 필터링할 수 있는 여행/축제 포털입니다."
          bullets={[
            "Oracle 기반 travel/festival 테이블 설계, Mapper XML · DAO · Service · Controller 전체 레이어 직접 구현",
            "카드형 목록 + 상세보기 + 정렬/검색 기능으로 여행지/축제 탐색 UX 개선",
            "조회수 증가, 이미지 관리, DTO–DAO–Service 흐름을 표준 패턴으로 정리해 재사용성 확보",
          ]}
          stack={[
            "Java",
            "Spring MVC",
            "MyBatis",
            "Oracle",
            "JSP",
            "Bootstrap",
          ]}
          links={{}}
        />

        <ProjectCard
          category="FRONTEND IMPLEMENTATION"
          title="Fitshare – 운동 백과 & 커뮤니티"
          period="2025.05 – 2025.06"
          teamType="팀 프로젝트"
          role="React 기반 UI 개발"
          videoSrc="/videos/fitshare_demo.mp4"
          videoPoster="/images/fitshare_poster.jpg"
          summary="신체 부위별 운동 방법과 올바른 자세를 제공하고, 사용자들이 팁/후기를 공유할 수 있는 운동 커뮤니티입니다."
          bullets={[
            "부위/난이도/목적(근비대·체지방감소) 필터를 지원하는 운동 백과 화면 구현",
            "운동 상세 페이지에 준비자세 → 동작 순서 → 호흡 → 흔한 오류까지 단계별 안내 구성",
            "공지/자유/팁 카테고리, 모달 상세, 페이지네이션으로 커뮤니티 UX 최적화",
          ]}
          stack={["React", "React Router", "CSS", "Pagination", "Modal UI"]}
          links={{}}
        />
      </div>
    </section>
  );
}

/* -------------------- 페이지: AI Projects -------------------- */

function AIProjectsPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h2>AI Projects (ML · DL · LLM)</h2>
        <p>
          머신러닝부터 딥러닝, LLM 코칭 시스템까지{" "}
          <b>데이터 전처리 · 모델 설계 · LLM 연동</b> 전 과정을 직접 구현한 AI 프로젝트 모음입니다.
        </p>
      </header>

      <div className="page-body">
        {/* 1) StressCare – 제일 위로 올림 */}
        <ProjectCard
          category="ML · DL · LLM PIPELINE"
          title="StressCare AI – 스트레스 분석·코칭 시스템"
          period="2025.09 – 2025.11"
          teamType="팀 프로젝트"
          role="ML/DL/LLM 통합 파이프라인 설계 · FastAPI 연동"
          videoSrc="/videos/stresscare_demo.mp4"
          videoPoster="/images/stresscare_poster.jpg"
          summary="ML(스트레스 지수 예측), DL(음성 감정 분석), LLM(코칭/상담)을 하나의 파이프라인으로 통합한 스트레스 분석·코칭 서비스입니다."
          bullets={[
            "RandomForest 기반 스트레스 예측 모델과 CNN+BiLSTM 음성 감정 모델을 FastAPI로 통합",
            "LangChain 기반 LLM 코칭 모듈 개발, 한국어 전용 프롬프트 · 위기 감지 로직 설계",
            "LangGraph 상태 머신 구조로 ML/DL 결과, 사용자 답변, 위기 단어 감지를 결합한 진단 에이전트 구현",
            "Spring Boot 백엔드와 FastAPI(LLM 서버) · React 프론트를 연동하며 CORS, 응답 포맷, 멀티파트 업로드 이슈 해결",
          ]}
          stack={[
            "Python",
            "FastAPI",
            "TensorFlow",
            "RandomForest",
            "CNN+BiLSTM",
            "LangChain",
            "LangGraph",
            "Groq / OpenAI Compatible LLM",
            "Spring Boot",
            "React",
          ]}
          links={{}}
        />

        {/* 2) 출산율 예측 */}
        <ProjectCard
          category="MACHINE LEARNING"
          title="출산율 예측 ML 모델"
          period="2025.02 – 2025.03"
          teamType="개인 프로젝트"
          role="데이터 전처리 · 피처 엔지니어링 · 모델링"
          videoSrc={null}
          videoPoster="/images/fertility_poster.jpg"
          summary="전국 시·도별 출산율, 혼인, 고령화, 인구 데이터를 활용해 출산율을 예측하는 회귀 모델을 개발했습니다."
          bullets={[
            "CSV 수치형 값의 문자열 문제, 연도 추출, Region 카테고리 컬럼을 해결하는 전처리 파이프라인 직접 설계",
            "결측치 처리, 정규화, One-Hot Encoding 등으로 안정적인 학습 데이터셋 구성",
            "Linear → Polynomial → RandomForest → XGBoost로 모델을 확장하며 MAE·RMSE·R²로 성능 비교",
            "Feature Importance 분석을 통해 출산율에 영향을 주는 핵심 요인(혼인율, 고령화, 인구 구조 등) 도출",
          ]}
          stack={["Python", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib"]}
          links={{}}
        />

        {/* 3) 축구 경기 승무패 예측 */}
        <ProjectCard
          category="DEEP LEARNING · LLM"
          title="축구 경기 승·무·패 예측 LSTM + LLM 해설"
          period="2025.03 – 2025.04"
          teamType="개인 프로젝트"
          role="모델 구조 설계 · LLM 프롬프트 엔지니어링"
          videoSrc={null}
          videoPoster="/images/football_poster.jpg"
          summary="최근 경기 기록 시퀀스를 기반으로 승·무·패를 예측하고, LLM이 예측 근거를 한국어로 해설해주는 프로젝트입니다."
          bullets={[
            "최근 N경기(TimeSteps=12)를 홈·원정·diff 3채널 시퀀스로 구성해 불규칙한 경기 수/날짜 간격 문제 해결",
            "diff_seq, rolling mean, log 변환 등 Feature Engineering과 class weight 조정으로 무승부 클래스 성능 개선",
            "LSTM 출력 + 최근 폼 지표를 LLM에 전달하고, '핵심 근거 3~5개 + 요약 1줄' 포맷으로 한국어 해설 생성",
            "Streamlit UI에서 예측 확률 + 혼합형 그래프 + LLM 해설을 한 화면에서 제공",
          ]}
          stack={[
            "Python",
            "TensorFlow/Keras",
            "LSTM",
            "Streamlit",
            "OpenAI Compatible LLM",
          ]}
          links={{}}
        />
      </div>
    </section>
  );
}

/* -------------------- Contact + Layout -------------------- */

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="card contact-card">
        <p>
          이메일:{" "}
          <a href={`mailto:${CONTACT.email}`} className="link">
            {CONTACT.email}
          </a>{" "}
          · GitHub:{" "}
          <a
            href={`https://github.com/${CONTACT.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {CONTACT.githubUser}
          </a>
        </p>
        <p>
          Pages:{" "}
          <a
            href={CONTACT.pagesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {CONTACT.pagesUrl}
          </a>
        </p>
      </div>
    </section>
  );
}

function Layout({ children }) {
  return (
    <div className="App">
      <header className="site-header">
        <nav className="nav">
          <Link to="/" className="brand">
            SEUNGKWON · FULL-STACK & AI
          </Link>
          <div className="nav-spacer" />
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/fullstack" className="nav-link">
            Full-Stack
          </Link>
          <Link to="/ai" className="nav-link">
            AI
          </Link>
        </nav>
      </header>

      <main className="main-container">
        {children}
        <ContactSection />
        <footer className="footer">
          © 2025 SeungKwon Lee. 결과로 신뢰를 쌓는 Full-Stack &amp; AI Developer.
        </footer>
      </main>
    </div>
  );
}

/* -------------------- App 루트 -------------------- */

export default function App() {
  return (
    <Router basename={BASE}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/fullstack"
          element={
            <Layout>
              <FullStackPage />
            </Layout>
          }
        />
        <Route
          path="/ai"
          element={
            <Layout>
              <AIProjectsPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

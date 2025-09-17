// src/App.js
import "./App.css";

/** CRA 표준: PUBLIC_URL (dev: "", prod: "/web-portfolio") */
const BASE = process.env.PUBLIC_URL || "";
const asset = (p) => `${BASE}${p}`;

/** 프로젝트별 사용 기술 */
const STACK = {
  myplate: [ "React", "React Router", "Axios", "CSS", "REST API", "JWT", "GitHub Pages" ],
  scout: [ "React", "Axios", "CSS", "REST API", "Open API" ],
  fitshare: [ "React", "CSS", "REST API", "Pagination", "Modal" ],
};

/** 전역 스킬(요약) */
const SKILLS = {
  Backend: [ "REST API", "JWT", "DB 설계(ERD)" ],
  Frontend: [ "React", "React Router", "Axios", "CSS" ],
  Infra: [ "Git / GitHub", "GitHub Pages" ],
  Collaboration: [ "요구사항 정리", "WBS", "테스트 시나리오", "데일리 보고" ],
};

/** 연락처/링크 */
const CONTACT = {
  email: "s2ngkwon2@naver.com",
  githubUser: "seoungkwon",
  pagesUrl: "https://seoungkwon.github.io/web-portfolio/",
};

/** 프로젝트별 링크 (있는 것만 채우면 버튼 노출) */
const LINKS = {
  myplate: {
    repo: "https://github.com/seoungkwon/web-portfolio",
    live: "https://seoungkwon.github.io/web-portfolio/",
  },
  scout: {
    // repo: "https://github.com/seoungkwon/scout",
    // live: "https://seoungkwon.github.io/scout",
  },
  fitshare: {
    // repo: "https://github.com/seoungkwon/fitshare",
    // live: "https://seoungkwon.github.io/fitshare",
  },
};

/* -------------------- UI 컴포넌트 -------------------- */

function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((t, i) => (
        <span className="chip" key={`${t}-${i}`}>{t}</span>
      ))}
    </div>
  );
}

function LinkButtons({ repo, live, extra }) {


}

function VideoBox({ src, poster, className }) {
  return (
    <div className={className || ""}>
      <video
        controls
        playsInline
        muted
        preload="metadata"
        style={{ width: "100%", borderRadius: 12 }}
        poster={poster ? asset(poster) : undefined}
        onError={(e) => {
          const p = document.createElement("p");
          p.className = "warn";
          p.textContent = "⚠️ 영상 로딩 실패: 경로/용량/네트워크를 확인해주세요.";
          e.currentTarget.after(p);
        }}
      >
        <source src={asset(src)} type="video/mp4" />
        브라우저가 HTML5 영상 태그를 지원하지 않습니다.
      </video>
    </div>
  );
}

/* -------------------- 페이지 -------------------- */

export default function App() {
  return (
    <div className="App">
      {/* ===== Header ===== */}
      <header className="site-header">
        <nav className="nav">
          <div className="brand">이승권 · Portfolio</div>
          <div className="sp" />
          <a href="#skills" className="btn">Skills</a>
          <a href="#projects" className="btn">Projects</a>
          {/* Docs 버튼 제거 */}
          <a href="#contact" className="btn">Contact</a>
        </nav>
      </header>

      <main className="container">
        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="card index-card">
    <h2>프로젝트 인덱스</h2>
    <ul className="index">
      <li><a href="#p1">[1] MyPlate – 혼밥, 복지카드 이용자들을 위한 맛집 추천 사이트</a></li>
      <li><a href="#p2">[2] Scout – 제주 여행정보 포털</a></li>
      <li><a href="#p3">[3] Fitshare – 운동 백과 + 커뮤니티</a></li>
    </ul>
  </div>
        </section>

        {/* ===== Global Skills ===== */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="grid">
            <div className="card">
              <h4>Backend</h4>
              <Chips items={SKILLS.Backend} />
            </div>
            <div className="card">
              <h4>Frontend</h4>
              <Chips items={SKILLS.Frontend} />
            </div>
          </div>
          <div className="grid">
            <div className="card">
              <h4>Infra / DevOps</h4>
              <Chips items={SKILLS.Infra} />
            </div>
            <div className="card">
              <h4>Collaboration</h4>
              <Chips items={SKILLS.Collaboration} />
            </div>
          </div>
        </section>

        {/* ===== Projects ===== */}
        <section id="projects">
          <h2>Projects</h2>

          {/* Project 1 */}
          <article id="p1" className="project">
            <h3>MyPlate · 혼밥, 복지카드 이용자들을 위한 맛집 추천 사이트</h3>
            <p className="meta">기간: 2025.08 – 2025.09 · 팀 | 포지션: 백엔드, 프론트</p>

            {/* 1) 시연 영상 : 전체 폭 */}
            <div className="card">
              <h4>시연 영상</h4>
              <VideoBox
                src="/videos/myplate_demo.mp4"
                poster="/images/myplate_poster.jpg"
              />
              <LinkButtons repo={LINKS.myplate.repo} live={LINKS.myplate.live} />
            </div>

            {/* 2) 개요 : 한 칸(전체 폭) */}
            <div className="card">

              <h4>사용 기술</h4>
              <Chips items={STACK.myplate} />

              <h4>개요</h4>
              <p>
                복지카드 및 혼밥 가능한 가맹점 정보를 쉽고 빠르게 찾고, 맛집을 <b>리뷰/즐겨찾기</b>로 관리하는 서비스입니다.
                복잡한 절차 없이 <b>검색 → 상세 → 리뷰/즐겨찾기 → 마이페이지</b> 흐름으로 설계했습니다.
              </p>
              <ul>
                <li><b>홈/검색</b> : 키워드 검색, 카테고리/지역 등 기본 필터, 결과 카드형 목록</li>
                <li><b>가맹점 상세</b> : 기본 정보(주소·영업시간·연락처)와 리뷰 요약, 지도 버튼</li>
                <li><b>리뷰</b> : 작성/수정/삭제, 최신/추천 기준 정렬(간단 캐시로 체감 속도 최적화)</li>
                <li><b>즐겨찾기</b> : 하트 토글로 저장, 마이페이지에서 한 번에 관리</li>
                <li><b>마이페이지</b> : 내 정보 확인/비밀번호 변경, 나의 리뷰·즐겨찾기 모아보기</li>
                <li><b>인증</b> : JWT 기반 로그인 유지로 새로고침에도 세션 안정</li>
                <li><b>혼밥 지수</b> : 혼밥 지수를 각 가맹점마다 다르게 하여 혼밥을 보다 편하게 할 수 있는 가맹점 정보 제공</li>
              </ul>


            </div>

            {/* 3) 문서 : 한 칸(전체 폭) */}
            <div className="card">
              <h4>문서</h4>
              <ul>
                <li>
                  <a href={asset("/docs/myplate_wbs.png")} target="_blank" rel="noopener noreferrer">WBS</a> ·{" "}
                  <a href={asset("/docs/myplate_menutree.png")} target="_blank" rel="noopener noreferrer">메뉴트리</a> ·{" "}
                  <a href={asset("/docs/myplate_erd.png")} target="_blank" rel="noopener noreferrer">ERD</a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1VPlGoKLxZYM0Cwoii1xiYl7Mo-YMaF749nUDKAe7OAo/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    테스트 시나리오 (Google Sheets)
                  </a>
                </li>
              </ul>


            </div>
          </article>

          {/* Project 2 */}
          <article id="p2" className="project">
            <h3>Scout · 제주 여행/축제 포털</h3>
            <p className="meta">기간: 2025.07 – 2025.08 · 팀 | 포지션: 백엔드(주), 프론트(보조)</p>

            {/* 1) 시연 영상 : 전체 폭 */}
            <div className="card">
              <h4>시연 영상</h4>
              <VideoBox src="/videos/scout_demo.mp4?v=2" poster="/images/scout_poster.jpg" />
              <LinkButtons repo={LINKS.scout.repo} live={LINKS.scout.live} />
            </div>

            {/* 2) 사용 기술 + 개요 : 한 칸(전체 폭) */}
            <div className="card">
              <h4>사용 기술</h4>
              <Chips items={STACK.scout} />

              <h4>개요</h4>
              <p>
                <b>제주 여행정보 포털</b>입니다. 제주도의 명소·맛집·축제 정보를 한곳에서 검색·비교하고
                <b>기간/지역/테마</b>로 빠르게 탐색할 수 있게 설계했습니다.
              </p>
              <ul>
                <li><b>검색/탐색</b> : 키워드 + 지역(제주시/서귀포시/읍·면) + 테마(자연, 바다, 맛집, 축제)</li>
                <li><b>목록</b> : 카드형 요약(평점/태그/간단설명)과 정렬(인기/최신/거리)</li>
                <li><b>상세</b> : 핵심정보(주소·영업/행사시간·문의), 지도/길찾기 버튼, 관련 링크</li>
                <li><b>축제 캘린더</b> : 기간 필터로 진행중/예정 축제만 모아보기</li>
                <li><b>즐겨찾기</b> : 관심 스팟 저장, 마이페이지에서 한 번에 관리</li>
              </ul>
            </div>

            {/* 3) 문서 : 한 칸(전체 폭) */}
            <div className="card">
              <h4>문서</h4>
              <ul>
                <li>
                  <a href={asset("/docs/scout_wbs.png")} target="_blank" rel="noopener noreferrer">WBS</a> ·{" "}
                  <a href={asset("/docs/scout_menutree.png")} target="_blank" rel="noopener noreferrer">메뉴트리</a> ·{" "}
                  <a href={asset("/docs/scout_erd.png")} target="_blank" rel="noopener noreferrer">ERD</a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1n3lyYkEvFaY0VBBvxxtvXJB2N4h_7Ar3hv5yEHbIomY/edit?tab=t.0#heading=h.xbyylq4cang8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    테스트 시나리오 (문서)
                  </a>
                </li>
              </ul>
            </div>
          </article>

          {/* Project 3 */}
          <article id="p3" className="project">
            <h3>Fitshare · 운동 커뮤니티</h3>
            <p className="meta">기간: 2025.05 – 2025.06 · 팀 | 포지션: 프론트(주), 백엔드(보조)</p>

            {/* 1) 시연 영상 : 전체 폭 */}
            <div className="card">
              <h4>시연 영상</h4>
              <VideoBox src="/videos/fitshare_demo.mp4?v=2" poster="/images/fitshare_poster.jpg" />
              <LinkButtons repo={LINKS.fitshare.repo} live={LINKS.fitshare.live} />
            </div>

            {/* 2) 사용 기술 + 개요 : 한 칸(전체 폭) */}
            <div className="card">
              <h4>개요</h4>
              <p>
                <b>운동 백과 + 커뮤니티</b>입니다. 신체 부위별 운동 방법과 올바른 자세를 제공하고,
                사용자들이 팁/후기를 공유할 수 있습니다.
              </p>
              <ul>
                <li><b>운동 백과</b> : 부위별(가슴·등·어깨·하체·팔·복근) 목록, 난이도/목적(근비대·체지방감소) 필터</li>
                <li><b>운동 상세</b> : 준비자세 → 동작 순서 → 호흡 → 흔한 오류/주의점, GIF/영상 지원</li>
                <li><b>루틴/북마크</b> : 자주 하는 운동 저장, 나만의 루틴 구성</li>
                <li><b>커뮤니티</b> : 공지/자유/팁 카테고리, 모달 상세로 빠른 열람, 페이지네이션</li>
                <li><b>사용성</b> : 배지/정렬 규칙 통일로 가독성 향상, 목록 스캔 속도 최적화</li>
              </ul>
            </div>

            {/* 3) 문서 : 한 칸(전체 폭) */}
            <div className="card">
              <h4>문서</h4>
              <ul>
                <li>
                  <a href={asset("/docs/fitshare_wbs.png")} target="_blank" rel="noopener noreferrer">WBS</a> ·{" "}
                  <a href={asset("/docs/fitshare_menutree.png")} target="_blank" rel="noopener noreferrer">메뉴트리</a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1VPlGoKLxZYM0Cwoii1xiYl7Mo-YMaF749nUDKAe7OAo/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    테스트 시나리오 (Google Sheets)
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>

        {/* ===== Docs 섹션 전체 삭제됨 ===== */}

        {/* ===== Contact ===== */}
        <section id="contact">
          <h2>Contact</h2>
          <div className="card">
            <p>
              이메일: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · GitHub:{" "}
              <a href={`https://github.com/${CONTACT.githubUser}`} target="_blank" rel="noopener noreferrer">
                {CONTACT.githubUser}
              </a>
            </p>
            <p>
              Pages:{" "}
              <a href={CONTACT.pagesUrl} target="_blank" rel="noopener noreferrer">
                {CONTACT.pagesUrl}
              </a>
            </p>
          </div>
        </section>

        <div className="foot">© 2025 SeungKwon Lee. 결과로 신뢰를 쌓는 백엔드 중심 신입.</div>
      </main>
    </div>
  );
}

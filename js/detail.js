/* 상세 페이지(project.html) 렌더링
   - URL의 ?id=<slug> 를 읽어 projects.js의 PROJECTS에서 해당 프로젝트를 찾음
   - 제목/태그/GitHub·데모 버튼을 채우고,
     details/<slug>.js 본문을 불러와 표시
   (fetch가 아닌 <script> 로딩 방식 — file:// 로 직접 열어도 작동) */

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  demo:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>',
};

function getProject() {
  const id = new URLSearchParams(location.search).get("id");
  const all = (typeof PROJECTS !== "undefined" ? PROJECTS : []).concat(
    typeof MINI_PROJECTS !== "undefined" ? MINI_PROJECTS : []
  );
  return all.find((p) => p.slug === id);
}

/* details/<slug>.js 를 <script>로 로드 — 성공 시 window.DETAILS[slug]에 본문이 들어감 */
function loadDetailScript(slug) {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = `details/${slug}.js?v=2`;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

async function renderDetail() {
  const p = getProject();
  const titleEl = document.getElementById("detail-title");
  const tagsEl = document.getElementById("detail-tags");
  const actionsEl = document.getElementById("detail-actions");
  const bodyEl = document.getElementById("detail-body");

  if (!p) {
    titleEl.textContent = "Project not found";
    bodyEl.innerHTML =
      '<p class="detail-lead">This project doesn’t exist yet. <a href="index.html#projects">Back to projects</a>.</p>';
    return;
  }

  document.title = p.title + " — Young";
  titleEl.textContent = p.title;

  tagsEl.innerHTML = (p.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  actionsEl.innerHTML = [
    p.github
      ? `<a class="detail-btn" href="${p.github}" target="_blank" rel="noopener">${ICONS.github}<span>View on GitHub</span></a>`
      : "",
    p.demo
      ? `<a class="detail-btn" href="${p.demo}" target="_blank" rel="noopener">${ICONS.demo}<span>Live demo</span></a>`
      : "",
  ].join("");

  // 상세 본문 불러오기 (details/<slug>.js)
  await loadDetailScript(p.slug);
  const html = window.DETAILS && window.DETAILS[p.slug];
  bodyEl.innerHTML =
    html || '<p class="detail-lead">Detailed write-up coming soon.</p>';
}

/* 다크모드 — index와 동일 규칙 */
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderDetail();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

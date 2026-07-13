/* 프로젝트 렌더링 + 다크모드 토글 + 스크롤 등장 애니메이션 */

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  demo:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>',
};

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;

  list.innerHTML = PROJECTS.map((p, i) => {
    const isVideo = /\.(mp4|webm)$/i.test(p.image);
    const media = p.image
      ? isVideo
        ? `<video src="${p.image}" autoplay loop muted playsinline></video>`
        : `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
      : `<div class="thumb-placeholder">coming soon</div>`;

    const tags = (p.tags || [])
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const links = [
      p.github
        ? `<a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>`
        : "",
      p.demo
        ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo">${ICONS.demo}</a>`
        : "",
    ].join("");

    const href = `project.html?id=${p.slug}`;

    return `
      <article class="project-row ${i % 2 ? "flip" : ""}">
        <a class="project-media" href="${href}" aria-label="${p.title} — view details">${media}</a>
        <div class="project-card">
          <a class="project-title-link" href="${href}">
            <h3 class="project-title">${p.title}</h3>
          </a>
          <div class="project-tags">${tags}</div>
          <p class="project-desc">${p.desc || ""}</p>
          <div class="project-footer">
            <a class="project-more" href="${href}">view details &rarr;</a>
            ${links ? `<div class="project-links">${links}</div>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* "…and more" 미니 프로젝트 그리드 */
function renderMinis() {
  const grid = document.getElementById("mini-grid");
  if (!grid || typeof MINI_PROJECTS === "undefined") return;

  grid.innerHTML = MINI_PROJECTS.map((p) => {
    const isVideo = /\.(mp4|webm)$/i.test(p.image);
    const media = p.image
      ? isVideo
        ? `<video src="${p.image}" autoplay loop muted playsinline></video>`
        : `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
      : `<div class="thumb-placeholder">soon</div>`;

    const href = p.slug
      ? `project.html?id=${p.slug}`
      : p.github || "";
    const external = !p.slug && p.github;

    const inner = `
      <div class="mini-media">${media}</div>
      <div class="mini-info">
        <span class="mini-title">${p.title}</span>
        <span class="mini-tags">${(p.tags || []).slice(0, 2).join(" · ")}</span>
      </div>
    `;

    return href
      ? `<a class="mini-card" href="${href}" ${external ? 'target="_blank" rel="noopener"' : ""}>${inner}</a>`
      : `<div class="mini-card">${inner}</div>`;
  }).join("");
}

/* 다크모드 — 시스템 설정을 기본값으로, 선택은 localStorage에 저장 */
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
  renderProjects();
  renderMinis();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

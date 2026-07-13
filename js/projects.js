/* ==========================================================
   프로젝트 데이터
   - PROJECTS: 메인에 크게 표시되는 대표 프로젝트 (3개 권장)
   - MINI_PROJECTS: 그 아래 "…and more" 그리드에 작게 표시
   - slug: 상세페이지 주소에 쓰이는 이름 (project.html?id=<slug>)
     이 slug와 같은 이름으로 details/<slug>.js 파일을 만들면 상세 내용이 표시됩니다.
   - image: assets/projects/ 안의 gif/webp/png 또는 mp4/webm 경로
     (mp4/webm이면 자동재생 무음 루프 비디오로 표시 — gif보다 용량 작아서 추천)
   - image를 비워두면("") 플레이스홀더가 표시됩니다.
   - github / demo 는 비워두면 아이콘이 표시되지 않습니다.
   ========================================================== */

const PROJECTS = [
  {
    slug: "biome-generator",
    title: "Biome Generator",
    tags: ["Maya", "Python", "MEL"],
    desc: "A Maya automation tool that instantly generates varied background environments — pick the terrain, trees, rocks, and season, then hit Generate.",
    image: "assets/projects/biome-generator.png",
    github: "https://github.com/2JooYoung/Biome-Generator",
    demo: "",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tags: ["Unreal Engine", "C++"],
    desc: "Short one-line summary goes here — what the project is and what problem it solves.",
    image: "assets/projects/project-one.png",
    github: "",
    demo: "",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tags: ["Unity", "C#"],
    desc: "Short one-line summary goes here — what the project is and what problem it solves.",
    image: "",
    github: "",
    demo: "",
  },
];

/* "…and more" 미니 프로젝트 — 작은 그리드 카드
   slug가 있으면 상세페이지로, 없고 github만 있으면 GitHub로 연결됩니다. */
const MINI_PROJECTS = [
  {
    slug: "",
    title: "Merry Voice Adventurer",
    tags: ["p5.js", "JavaScript"],
    image: "assets/projects/merry-voice-adventure.png",
    github: "https://github.com/2JooYoung/Merry-Voice-Adventure",
  },
  {
    slug: "",
    title: "Ramen Shop",
    tags: ["HTML/CSS", "JavaScript"],
    image: "assets/projects/ramenshop.png",
    github: "https://github.com/2JooYoung/RamenShop",
  },
];

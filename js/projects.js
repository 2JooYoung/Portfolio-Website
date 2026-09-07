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
    slug: "lost-something",
    title: "Lost Something",
    tags: ["Unreal Engine 5", "C++", "Co-op Multiplayer"],
    desc: "A 2-player online co-op action-puzzle adventure — two characters with complementary abilities solve combat and puzzles together over listen-server multiplayer.",
    image: "assets/projects/lost-something.png",
    github: "https://github.com/JustGoing0821/LostSomething",
    demo: "https://www.youtube.com/watch?v=6tfoBQDwdoU",
  },
  {
    slug: "smart-warehouse",
    title: "Smart Warehouse",
    tags: ["Unreal Engine 5", "ASP.NET Core", "C#"],
    desc: "A digital-twin warehouse automation simulation — Unreal Engine talks to a web server over HTTP, and AMR robots carry out the server's decisions on the floor.",
    image: "assets/projects/smart-warehouse.png",
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

# Young — Portfolio

깔끔한 배경 + 큰 타이포 + 프로젝트 그리드로 구성된 정적 포트폴리오 사이트.
빌드 과정 없이 GitHub Pages에 바로 배포할 수 있습니다.

## 구조

```
├── index.html          # 메인 페이지 (히어로 / 프로젝트 / 어바웃 / 푸터)
├── css/style.css       # 전체 스타일 (색상은 :root 변수에서 변경)
├── js/projects.js      # 프로젝트 데이터 — 여기만 수정하면 그리드에 반영
├── js/main.js          # 프로젝트 카드 렌더링
├── assets/projects/    # 프로젝트 썸네일 (gif / webp / mp4)
└── .nojekyll           # GitHub Pages에서 Jekyll 처리 건너뛰기
```

## 프로젝트 추가하는 법

`js/projects.js`의 `PROJECTS` 배열에 항목을 추가:

```js
{
  title: "프로젝트 이름",
  tags: ["TypeScript", "React"],             // 기술 스택 칩
  desc: "한두 문장 설명",
  image: "assets/projects/my-project.gif",   // gif/webp 또는 mp4/webm
  github: "https://github.com/...",          // 비우면 아이콘 숨김
  demo: "https://...",                       // 라이브 데모, 비우면 숨김
},
```

- `image`가 `.mp4`/`.webm`이면 자동 재생 비디오로, 그 외엔 이미지(gif)로 표시됩니다.
- 움직이는 썸네일은 **gif보다 mp4/webm이 용량이 훨씬 작아서** 로딩이 빠릅니다. (gif로 만들어뒀다면 [ezgif.com](https://ezgif.com/gif-to-mp4) 등으로 변환 가능)
- `image: ""` 로 두면 "coming soon" 플레이스홀더가 표시됩니다.

## GitHub Pages 배포

1. GitHub에 새 저장소 생성 (예: `portfolio`)
   - 저장소 이름을 `<유저네임>.github.io`로 만들면 `https://<유저네임>.github.io/`가 주소가 됩니다.
2. 이 폴더에서:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<유저네임>/<저장소이름>.git
   git push -u origin main
   ```
3. 저장소 → **Settings → Pages** → Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 설정
4. 1–2분 후 `https://<유저네임>.github.io/<저장소이름>/` 에서 확인

## 커스터마이징

- **색상/포인트 컬러**: `css/style.css` 맨 위 `:root` 변수 (라이트), `html.dark` (다크모드)
- **폰트**: `index.html`의 Google Fonts 링크 (현재 Poppins + Quicksand)
- **이메일/링크**: `index.html`의 Contact, Footer 부분
- **다크모드**: 우측 상단 토글 — 시스템 설정을 기본값으로 따르고 선택은 저장됩니다

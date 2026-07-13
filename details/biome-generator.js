/* Biome Generator — 상세 페이지 본문 (GitHub README의 영어 번역)
   프로젝트를 추가할 땐 details/<slug>.js 로 같은 형식의 파일을 만드세요.
   (fetch 대신 스크립트 로딩 방식이라 file:// 로 열어도 작동합니다) */

window.DETAILS = window.DETAILS || {};
window.DETAILS["biome-generator"] = `
<p class="detail-lead">
  A Maya script tool that quickly auto-generates diverse background
  environments (biomes).
</p>

<h2>Overview</h2>
<p>
  Biome Generator is an automation tool built to cut down the time spent
  repeatedly creating backgrounds for games and animation. You pick the
  terrain, trees, rocks, and season/weather, and it instantly generates a
  varied environment in your Maya scene.
</p>

<h2>Features</h2>

<h3>Terrain</h3>
<ul>
  <li><strong>Flat</strong> — level ground</li>
  <li><strong>Mountain</strong> — rugged, mountainous terrain</li>
  <li>Generated instantly when you click <strong>Generate</strong></li>
  <li>Automatic season-based coloring
    <ul>
      <li>Spring — light green</li>
      <li>Summer — deep green</li>
      <li>Autumn — brown</li>
      <li>Winter — white</li>
    </ul>
  </li>
</ul>

<h3>Trees</h3>
<p>Different tree shapes are generated depending on the selected season.</p>
<ul>
  <li>Spring / Summer → lush, leafy trees</li>
  <li>Autumn → a mix of two tree types</li>
  <li>Winter → bare trees with the leaves fallen</li>
</ul>

<h3>Rocks</h3>
<ul>
  <li>A slider controls how many rocks are generated</li>
  <li>Placed naturally, with varied sizes and positions</li>
</ul>

<h3>Season &amp; Weather</h3>
<ul>
  <li>Choose among Spring / Summer / Autumn / Winter</li>
  <li>Terrain and object tones change automatically to match the season</li>
</ul>

<h2>How It Works</h2>

<h3>1. Launch the UI</h3>
<p>Running the script opens the Biome Generator window.</p>
<figure>
  <img src="assets/projects/biome-ui.png" alt="Biome Generator UI window in Maya" loading="lazy" />
  <figcaption>The Biome Generator interface — Terrain, Trees, Rocks, and Season/Weather controls.</figcaption>
</figure>

<h3>2. Select options</h3>
<ul>
  <li>Choose a season</li>
  <li>Choose a terrain type</li>
  <li>Adjust the tree / rock counts</li>
</ul>

<h3>3. Click Generate</h3>
<p>
  The terrain and objects are auto-generated based on your settings — ready to
  render or edit directly in the Maya scene.
</p>

<h2>Examples</h2>

<figure>
  <img src="assets/projects/biome-winter.png" alt="Winter, flat terrain with 17 trees" loading="lazy" />
  <figcaption>Winter · Flat · 17 Trees</figcaption>
</figure>

<figure>
  <img src="assets/projects/biome-generator.png" alt="Summer, mountain terrain with 2 trees" loading="lazy" />
  <figcaption>Summer · Mountain · 2 Trees</figcaption>
</figure>

<figure>
  <img src="assets/projects/biome-autumn.png" alt="Autumn, flat terrain with 29 trees" loading="lazy" />
  <figcaption>Autumn · Flat · 29 Trees</figcaption>
</figure>

<h2>Use Cases</h2>
<ul>
  <li>Auto-generating game backgrounds</li>
  <li>Speeding up background construction for animation</li>
  <li>Producing background images for rendering</li>
  <li>Setting up prototype environments</li>
</ul>
`;

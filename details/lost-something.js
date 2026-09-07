/* Lost Something — 상세 페이지 본문 (노션 포트폴리오 문서의 영어 요약) */

window.DETAILS = window.DETAILS || {};
window.DETAILS["lost-something"] = `
<p class="detail-lead">
  A 2-player online co-op action&ndash;puzzle adventure where two characters
  with complementary abilities solve combat and puzzles together.
</p>

<figure>
  <img src="assets/projects/lost-something.png" alt="Lost Something — CCTV-style scene of the two playable characters on a subway platform" loading="lazy" />
  <figcaption>The two playable characters, seen through the game&rsquo;s CCTV-style lens.</figcaption>
</figure>

<h2>Project Info</h2>
<ul>
  <li><strong>Genre</strong> — 2-player co-op action&ndash;puzzle adventure</li>
  <li><strong>Period</strong> — Mar 2025 &ndash; Sep 2025</li>
  <li><strong>Team</strong> — 4 people · <strong>My role</strong> — player systems &amp; gameplay programming</li>
  <li><strong>Stack</strong> — Unreal Engine 5.4, C++, Blueprint, listen-server multiplayer</li>
</ul>

<h2>Overview</h2>
<p>
  Two players with different bodies and abilities must cooperate to fight and
  solve puzzles. On top of a shared Player base class, each character&rsquo;s
  movement, combat, and interaction are specialized — and items, combat,
  death/revival, and a character-merge mechanic all work identically in online
  multiplayer.
</p>

<h2>Two Complementary Characters</h2>
<ul>
  <li><strong>SiJae</strong> — walks and jumps, fights with melee weapons, can&rsquo;t throw items</li>
  <li><strong>IJae</strong> — moves by wheelchair, can&rsquo;t jump or melee, aims and throws items</li>
</ul>
<p>
  Both inherit from a common <strong>ALSPlayer</strong> class that owns shared
  systems (input, camera, interaction, inventory, HP/death/revival, merge),
  while each subclass overrides movement and combat — shared logic stays in
  one place, and character-specific behavior extends independently.
</p>

<h2>What I Built</h2>

<h3>Player systems</h3>
<ul>
  <li>Movement, jumping, and context-sensitive interaction</li>
  <li>Combat — attacking, hit reactions, HP</li>
  <li>5-slot inventory with pickup, drop, and throwing</li>
  <li>HUD and gameplay UI</li>
</ul>

<h3>Multiplayer networking</h3>
<ul>
  <li>Listen-server client&ndash;server architecture</li>
  <li>Server-authoritative combat, item spawning, and HP — clients only request</li>
  <li>Animation and object-lifecycle synchronization via multicast</li>
  <li>Per-player UI (inventory, death screen) handled on the owning client only</li>
</ul>

<h3>Feature highlights</h3>
<ul>
  <li><strong>Interaction</strong> — one line-trace per frame, dispatched by interface casting:
      new interactable objects need zero changes to player code</li>
  <li><strong>Item throwing</strong> — real-time predicted trajectory that shares the exact
      velocity function with the actual launch, so the preview never lies</li>
  <li><strong>Distance-based vision</strong> — SiJae&rsquo;s screen darkens as the two players
      separate (up to 97% at 15m), turning &ldquo;stay together&rdquo; into a rule the UI enforces</li>
  <li><strong>Death &amp; revival</strong> — server-owned 5-second respawn timers; death effects
      play for everyone, the death UI only for the player who died</li>
  <li><strong>Team-kill prevention</strong> — friendly hits filtered out at the damage check</li>
</ul>

<h2>Troubleshooting &amp; Collaboration</h2>
<ul>
  <li>Debugged duplicate item replication caused by client-side spawning — learned
      server authority and network ownership hands-on</li>
  <li>Untangled a UI widget that had grown to own HP state and game logic — felt the
      value of separation of concerns and modularity</li>
  <li>Recovered manual Git conflicts from simultaneous edits, then moved the team to
      a branch &amp; pull-request workflow</li>
  <li>Solved animation retargeting issues across the two characters</li>
</ul>
`;

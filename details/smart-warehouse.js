/* Smart Warehouse — 상세 페이지 본문 (노션 포트폴리오 문서의 영어 요약) */

window.DETAILS = window.DETAILS || {};
window.DETAILS["smart-warehouse"] = `
<p class="detail-lead">
  A digital-twin warehouse automation simulation — Unreal Engine 5.7 talks to
  an ASP.NET Core web server over HTTP, and AMR robots carry out the
  server&rsquo;s decisions on the floor.
</p>

<figure>
  <img src="assets/projects/smart-warehouse.png" alt="Smart Warehouse — AMR robot and pallet racks inside the simulated warehouse" loading="lazy" />
  <figcaption>An AMR and pallet racks inside the simulated GTP warehouse.</figcaption>
</figure>

<h2>Overview</h2>
<p>
  A GTP (Goods-to-Person) logistics warehouse simulation. Every logistics
  event — from product registration to shipping — is reported to the web
  server over HTTP, and the server&rsquo;s decisions come back in the response
  to drive what happens in the scene.
</p>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Client</strong> — Unreal Engine 5.7 (C++ &amp; Blueprint)</li>
  <li><strong>Communication</strong> — HTTP, JSON, Unreal HTTP Module</li>
  <li><strong>Server</strong> — ASP.NET Core 8 Web API, C#</li>
  <li><strong>Data</strong> — Entity Framework Core Code-First, SQL Server LocalDB</li>
  <li><strong>Verification</strong> — Postman, SQL logs, Unreal Output Log</li>
</ul>

<h2>Architecture</h2>
<p>
  <strong>The server owns product state.</strong> Each REST endpoint advances a
  product through its lifecycle — registered &rarr; inbound &rarr; stored &rarr;
  purchased &rarr; shipped — and rejects requests that don&rsquo;t match the
  current state.
</p>
<ul>
  <li><code>POST /api/goods</code> — register a product (server issues Id &amp; timestamp)</li>
  <li><code>POST /api/goods/{id}/inbound</code> — inbound report; server finds an empty rack</li>
  <li><code>POST /api/goods/{id}/store</code> — AMR reports storage complete</li>
  <li><code>POST /api/goods/{id}/purchase</code> — validates state, returns the rack location</li>
  <li><code>POST /api/goods/{id}/ship</code> — shipping complete; rack auto-returned</li>
</ul>

<h2>Unreal ↔ Server Communication</h2>
<p>
  A <strong>GoodsSubsystem</strong> (GameInstanceSubsystem) wraps all HTTP:
  Blueprint calls a function &rarr; HTTP request fires &rarr; the JSON response
  is parsed &rarr; a delegate broadcasts the result &rarr; stations, AMRs, and
  UI react. Blueprints stay fully event-driven.
</p>

<h2>AMR State Machine</h2>
<p>
  Robots run a task state machine — fetch an empty rack, carry it to the
  picking station, return the loaded rack home; for shipping, the same cycle
  in reverse. Movement uses frame-rate-independent interpolation with
  distance-threshold arrival checks; racks and goods are attached/detached to
  the robot as it loads and unloads.
</p>

<h2>Inbound Pipeline</h2>
<ul>
  <li>Register a product in the UI &rarr; server assigns Id and state</li>
  <li>Picking station spawns the product actor and reports inbound</li>
  <li>Server picks an empty rack and responds with its Id</li>
  <li>The nearest idle AMR is assigned: fetch rack &rarr; load product &rarr; return rack</li>
  <li>Storage completion is reported back and the server updates state</li>
</ul>

<h2>Troubleshooting</h2>
<ul>
  <li><strong>&ldquo;Server assigned a rack, client can&rsquo;t find it&rdquo;</strong> — traced the
      server side through SQL logs to rule it out; the bug was a mis-wired
      Blueprint pin (product Id connected instead of rack Id)</li>
  <li><strong>Racks slowly running out during repeated tests</strong> — interrupted products
      stayed in the inbound state and kept their racks; designed rack
      auto-return on completion and documented a test-data reset procedure</li>
  <li><strong>DB schema mismatch when moving PCs</strong> — migration history didn&rsquo;t match
      actual tables; resolved by resetting and regenerating the database</li>
</ul>
`;

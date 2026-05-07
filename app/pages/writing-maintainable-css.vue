<script setup lang="ts">
useHead({
	title: 'Nuxt Fun - Writing Maintainable CSS',
	meta: [
		{ name: 'description', content: 'Techniques for writing CSS that is easy to maintain, based on the Syntax podcast episode "Writing Maintainable CSS"' }
	]
});
</script>

<template>
	<h1>Writing Maintainable CSS</h1>
	<p>
		Based on the <a href="https://youtu.be/mbGbPVMSnAQ" target="_blank">Syntax podcast episode</a> by Scott Tolinski &amp; Wes Bos.
		The goal: CSS that scales, stays readable, and avoids the classic pitfalls (specificity wars, naming collisions, dead code).
	</p>
	<hr>

	<!-- 1. CSS Custom Properties -->
	<section class="demo-section">
		<h2>1. CSS Custom Properties (Variables)</h2>
		<p>
			Define a single source of truth for colours, spacing and typography in <code>:root</code>.
			Changing one variable propagates everywhere — no global search-and-replace required.
		</p>
		<pre><code>:root {
  --color-brand:   #5c6bc0;
  --color-surface: #f5f5f5;
  --space-md:      1rem;
  --radius:        0.5rem;
}</code></pre>
		<div class="demo-variables">
			<div class="demo-variables__card">Card A — brand colour from <code>--color-brand</code></div>
			<div class="demo-variables__card demo-variables__card--alt">Card B — override via local variable</div>
		</div>
	</section>
	<hr>

	<!-- 2. Scoped Styles -->
	<section class="demo-section">
		<h2>2. Component-Scoped Styles</h2>
		<p>
			Vue's <code>&lt;style scoped&gt;</code> (used on this very page) compiles selectors to a unique
			attribute like <code>[data-v-xxxxxx]</code>, so styles never bleed outside their component.
			This is the Vue equivalent of CSS Modules.
		</p>
		<div class="scope-demo">
			<p class="scope-demo__text">
				This paragraph's styles are scoped — they won't accidentally affect any other <code>&lt;p&gt;</code> on the page.
			</p>
		</div>
	</section>
	<hr>

	<!-- 3. BEM Naming -->
	<section class="demo-section">
		<h2>3. BEM Naming Convention</h2>
		<p>
			<strong>B</strong>lock <strong>E</strong>lement <strong>M</strong>odifier — a naming convention that makes
			the relationship between HTML and CSS explicit without relying on selector nesting depth.
		</p>
		<pre><code>/* Block */        .card { }
/* Element */      .card__title { }
/* Modifier */     .card--featured { }</code></pre>
		<div class="card">
			<h3 class="card__title">Regular Card</h3>
			<p class="card__body">Standard card — no modifier.</p>
		</div>
		<div class="card card--featured">
			<h3 class="card__title">Featured Card</h3>
			<p class="card__body">Modified with <code>card--featured</code>.</p>
		</div>
	</section>
	<hr>

	<!-- 4. Specificity -->
	<section class="demo-section">
		<h2>4. Keep Specificity Low &amp; Flat</h2>
		<p>
			High-specificity selectors are hard to override and lead to <code>!important</code> arms races.
			Prefer single class selectors; avoid ID selectors and deep descendant chains in CSS.
		</p>
		<pre><code>/* ❌ High specificity — hard to override */
#sidebar div.widget ul li a { color: red; }

/* ✅ Low specificity — easy to override */
.nav-link { color: var(--color-brand); }</code></pre>
		<p class="specificity-good">
			✅ This text is coloured by a single low-specificity class — easy to override downstream.
		</p>
	</section>
	<hr>

	<!-- 5. Cascade Layers -->
	<section class="demo-section">
		<h2>5. Cascade Layers (<code>@layer</code>)</h2>
		<p>
			<code>@layer</code> lets you explicitly control the cascade order, replacing the old "hack via specificity"
			pattern. Styles in later layers win over earlier ones, regardless of specificity.
		</p>
		<pre><code>@layer reset, base, components, utilities;

@layer reset   { * { box-sizing: border-box; margin: 0; } }
@layer base    { body { font-family: system-ui; } }
@layer components { .btn { padding: 0.5rem 1rem; } }
@layer utilities  { .mt-4 { margin-top: 1rem; } }</code></pre>
		<p class="layer-demo">
			Cascade layers mean <em>utilities always win over components</em> — without any <code>!important</code>.
		</p>
	</section>
	<hr>

	<!-- 6. Logical Properties -->
	<section class="demo-section">
		<h2>6. Logical Properties for i18n Friendliness</h2>
		<p>
			Use <code>margin-inline</code>, <code>padding-block</code>, <code>border-inline-start</code> etc.
			instead of physical <code>left</code>/<code>right</code> so layouts automatically flip in RTL languages.
		</p>
		<pre><code>/* ❌ Physical — breaks in RTL */
.note { border-left: 4px solid var(--color-brand); padding-left: 1rem; }

/* ✅ Logical — RTL-safe */
.note { border-inline-start: 4px solid var(--color-brand); padding-inline-start: 1rem; }</code></pre>
		<p class="note">
			This element uses <code>border-inline-start</code> — switch the page to a RTL language and it still looks correct.
		</p>
	</section>
	<hr>

	<!-- 7. Utility Classes -->
	<section class="demo-section">
		<h2>7. Utility Classes — Use Sparingly</h2>
		<p>
			Utility classes (popularised by Tailwind CSS) are great for one-off tweaks, but over-reliance on them
			moves presentation into HTML and makes redesigns harder. A healthy mix: components for repeated patterns,
			utilities for small adjustments.
		</p>
		<div class="u-flex u-gap-md">
			<span class="u-badge">Badge 1</span>
			<span class="u-badge u-badge--success">Badge 2 — success</span>
			<span class="u-badge u-badge--warning">Badge 3 — warning</span>
		</div>
	</section>
	<hr>

	<!-- 8. Linting -->
	<section class="demo-section">
		<h2>8. Lint Your CSS with Stylelint</h2>
		<p>
			Stylelint catches typos, enforces ordering, bans <code>!important</code>, and keeps the whole team
			consistent — the same role ESLint plays for JavaScript.
		</p>
		<pre><code># install
npm install --save-dev stylelint stylelint-config-standard

# .stylelintrc.json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "declaration-no-important": true,
    "selector-max-id": 0
  }
}</code></pre>
	</section>
</template>

<style scoped>
/* ─── Design Tokens ─────────────────────────────────────────── */
:root {
	--color-brand:    #5c6bc0;
	--color-surface:  #f5f5f5;
	--color-border:   #ddd;
	--color-featured: #ff7043;
	--color-success:  #43a047;
	--color-warning:  #f9a825;
	--space-sm: 0.5rem;
	--space-md: 1rem;
	--space-lg: 1.5rem;
	--radius:   0.5rem;
}

/* ─── Layout helper ─────────────────────────────────────────── */
.demo-section {
	margin-block: var(--space-lg);
}

/* ─── 1. Variables demo ─────────────────────────────────────── */
.demo-variables {
	display: flex;
	gap: var(--space-md);
	flex-wrap: wrap;
	margin-block-start: var(--space-md);
}

.demo-variables__card {
	--_bg: var(--color-brand);  /* local token — easy to override per-element */
	background-color: var(--_bg);
	color: #fff;
	padding: var(--space-md);
	border-radius: var(--radius);
	flex: 1 1 200px;
}

.demo-variables__card--alt {
	--_bg: #ff7043;             /* override the local token */
}

/* ─── 2. Scoped demo ────────────────────────────────────────── */
.scope-demo {
	background-color: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius);
	padding: var(--space-md);
}

.scope-demo__text {
	font-style: italic;
	color: #555;
}

/* ─── 3. BEM card ───────────────────────────────────────────── */
.card {
	border: 1px solid var(--color-border);
	border-radius: var(--radius);
	padding: var(--space-md);
	margin-block-start: var(--space-md);
	background-color: var(--color-surface);
}

.card--featured {
	border-color: var(--color-featured);
	background-color: #fff3e0;
}

.card__title {
	margin-block-end: var(--space-sm);
	color: var(--color-brand);
}

.card--featured .card__title {
	color: var(--color-featured);
}

.card__body {
	color: #444;
}

/* ─── 4. Specificity demo ───────────────────────────────────── */
.specificity-good {
	color: var(--color-brand);
	font-weight: bold;
}

/* ─── 5. Cascade layer demo ─────────────────────────────────── */
.layer-demo {
	background-color: #e8eaf6;
	border-inline-start: 4px solid var(--color-brand);
	padding: var(--space-md);
	border-radius: 0 var(--radius) var(--radius) 0;
	margin-block-start: var(--space-md);
}

/* ─── 6. Logical properties demo ───────────────────────────── */
.note {
	border-inline-start: 4px solid var(--color-brand);
	padding-inline-start: var(--space-md);
	padding-block: var(--space-sm);
	background-color: var(--color-surface);
	margin-block-start: var(--space-md);
}

/* ─── 7. Utility classes ────────────────────────────────────── */
.u-flex     { display: flex; flex-wrap: wrap; }
.u-gap-md   { gap: var(--space-md); }

.u-badge {
	display: inline-block;
	padding: 0.25em 0.75em;
	border-radius: 999px;
	font-size: 0.875rem;
	font-weight: 600;
	background-color: var(--color-brand);
	color: #fff;
}

.u-badge--success { background-color: var(--color-success); }
.u-badge--warning { background-color: var(--color-warning); color: #222; }

/* ─── Code blocks ───────────────────────────────────────────── */
pre {
	background-color: #263238;
	color: #cfd8dc;
	padding: var(--space-md);
	border-radius: var(--radius);
	overflow-x: auto;
	font-size: 0.875rem;
	margin-block: var(--space-md);
	white-space: pre;
}

code {
	font-family: 'Fira Code', 'Cascadia Code', monospace;
}
</style>

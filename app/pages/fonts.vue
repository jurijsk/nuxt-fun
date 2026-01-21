<script setup lang="ts">
import '~/assets/css/fonts-page.css';
useHead({
	title: 'Nuxt Fun - Fonts',
	meta: [
		{ name: 'description', content: 'Nuxt Fun project is hoe I learn about Nuxt' }]
});
</script>
<template>
	<h1>Working with fonts in nuxt</h1>
	<p>Checking how to work with `nuxt/fonts`</p>
	<p> if `npx nuxt module add fonts` is installed, then using as easy as just setting <code>font-family: FantName;</code> in the CSS class. But it should work with CSS files. </p>
	<p class="font1"> For this paragraph <code>font-family</code> is set to <code>Inter</code> which is one of the fonts provided by Google Fonts. This adds a bunch of <code>@font-face</code>
		derectives for in Inter ind falback; </p>
	<p class="font2"> For this paragraph the font family is <a href="https://fonts.google.com/specimen/Rakkas">Rakkas</a>
	</p>
	<p style="font-family: Ovo;">
		<b>This does not work for inline styles. Only CSS classes are processes.</b> For this paragraph the fornt family is set via <code>style</code> attribute to <a
			href="https://fonts.google.com/specimen/Ovo">Ovo</a> but it does not works.
	</p>
	<p style="font-family: Rakkas;">That said, <code>style</code> works here, because Rakkas was mentioned in one of the css clases and no works. But do not rely on this behaviour. And do not use
		inline stlyes in general.</p>
	<p class="css-file-font-class"> CSS files are also proceed as the styles defined at the level of the page/component. </p>
	<p class="main-css-font">For <code>font-family</code> for this paragraph is defined as <code>:root</code> css variable <code>--main-font-family</code> but this does not work</p>
	<p class="whole-earth">This font is defined as `Whole Earth` in <code>nuxt.config.json</code> and its a font stored in /public/fonts/Shift-Bold.otf</p>
	<p class="font_prefixed_variable_class"><b>Update </b> This paragraph uses Clash Display font that is defined with 'font-prefixed' variable</p>
	<h2>I18n</h2>
	<p>إليك قول مأثور باللغة العربية set in default font</p>
	<p class="font3">إليك قول مأثور باللغة العربية set in <a>Almendra</a>, but almeda does not support Arabic script, so it felt back to Segoe UI on Windows</p>
	<p class="font4">هذا الخط الغريب هو جمهورية This funky font is Jomhuria and it supports Arabic script.</p>
	<h2>Also</h2>
	<p>If Nuxt's <code>devtools</code> are enabled in <code>./nuxt.config.json</code>, you can review all loaded fonts in Fonts tab.</p>
</template>
<style scoped>
.font1 {
	font-family: Inter;
}

.font2 {
	font-family: Rakkas;
}

.font3 {
	font-family: Almendra;
	font-size: 1.2rem;
}

.font4 {
	font-family: Jomhuria;
	font-size: 2rem;
}

.whole-earth {
	font-family: 'Whole Earth';
}

.font_prefixed_variable_class {
	color: blue;
	font-family: var(--font-main);
}
</style>
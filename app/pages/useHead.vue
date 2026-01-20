<script setup lang="ts">

const title = ref({ name: 'Nuxt Fun - useHead' });
const author = ref('Jurijs');

useHead({
	title: computed(() => title.value.name),
	titleTemplate: '%s - templated',
	meta: [
		{ name: 'description', content: 'This page tests various useHead things' },
		{ name: 'keywords', content: 'nuxt, useHead' },
		{ name: 'author', content: `The author is ${author.value}` }
	],
	bodyAttrs: {
		class: 'use-head',
		//you can not set random properties, only ones on hte list
	},
	script: [{ innerHTML: 'console.log(\'you can even insert scripts using useHead\')' }],

});
</script>
<template>
	<p>Open the console and look at the <code>head</code> element</p>
	<p>Read <a href="https://nuxt.com/docs/4.x/api/composables/use-head">the docs here</a></p>
	<p>It uses <a href="https://unhead.unjs.io/">Unhead</a> under the hood</p>
</template>
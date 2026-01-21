<script setup lang="ts">

const title = ref({ name: 'Nuxt Fun - Index' });
//one way to load the data from based on locale and using enterely by the means of @nuxt/i18n
//its wicked. use only to deal with small stuff [2]
const experinces = computed(() => $tm('experince') as Experience[]);
useHead({
	title: computed(() => title.value.name)
});
</script>
<template> this is index.vue
	<hr />
	<h1>{{ $t('welcome') }}</h1>
	<hr /> the content below rendered using <code>@nuxt/i18n</code> means. <template v-for="experince in experinces">
		<h2>{{ $rt(experince.title) }}</h2>
		<p>{{ $rt(experince.description) }}</p>
		<span v-for="skill in experince.keySkills">{{ $rt(skill) }} |</span>
		<p>{{ $rt(experince.dates) }}</p>
	</template>
	<hr />
</template>

<!--
[1]
https://router.vuejs.org/guide/essentials/active-links#:~:text=to%20active%20links%2C-,router%2Dlink%2Dactive,-and%20router%2Dlink
https://stackoverflow.com/a/46085519/4416181

[2]
https://stackoverflow.com/questions/78841290/iteration-v-for-over-arrays-defined-on-i18nv9-with-vue3
-->
<script setup lang="ts">
//import type { Experience } from '#shared/types/experience'; //Experience shouldve be autoimported, but you might have to run nuxt dev

const { locales, setLocale, locale } = useI18n();
useHead({
	title: 'Nuxt Fun'
});

//one way to load the data from based on locale and using enterely by the means of @nuxt/i18n
//its wicked. use only to deal with small stuff [2]
const experinces = computed(() => $tm('experince') as Experience[]);

</script>
<template>
	<NuxtPage />
	<hr />
	<p>This comes from <code>./app/app.view</code>. Is this also how you link site-wide resources such as CSS?</p>
	<hr />
	<button v-for="locale in locales" @click="setLocale(locale.code)"> {{ locale.name }} </button>
	<hr /> {{ locale }}
	<hr />
	<NuxtLink :to="$switchLocalePath('de')">Deusch</NuxtLink>
	<NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
	<NuxtLink :to="$switchLocalePath('da')">Dansk</NuxtLink>
	<h1>{{ $t('welcome') }}</h1>
	<hr /> the content below rendered using <code>@nuxt/i18n</code> means. <template v-for="experince in experinces">
		<h2>{{ $rt(experince.title) }}</h2>
		<p>{{ $rt(experince.description) }}</p>
		<span v-for="skill in experince.keySkills">{{ $rt(skill) }} |</span>
		<p>{{ $rt(experince.dates) }}</p>
	</template>
	<hr />
</template>
<style lang="css" scoped>
/*vue-css-class [1] */
.router-link-active {
	color: grey;
}
</style>
<!--
[1]
https://router.vuejs.org/guide/essentials/active-links#:~:text=to%20active%20links%2C-,router%2Dlink%2Dactive,-and%20router%2Dlink
https://stackoverflow.com/a/46085519/4416181

[2]

-->
<script setup lang="ts">
//import type { Experience } from '#shared/types/experience'; //Experience shouldve be autoimported, but you might have to run nuxt dev

const { locales, setLocale, locale } = useI18n();
useHead({
	title: 'Nuxt Fun'
});



</script>
<template>
	<NuxtPage />
	<p>This comes from <code>./app/app.view</code>. Is this also how you link site-wide resources such as CSS?</p>
	<hr />
	<button v-for="locale in locales" @click="setLocale(locale.code)"> {{ locale.name }} </button>
	<hr /> {{ locale }}
	<hr />
	<NuxtLink :to="$switchLocalePath('de')">Deusch</NuxtLink>
	<NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
	<NuxtLink :to="$switchLocalePath('da')">Dansk</NuxtLink>
</template>
<style lang="css">
/*vue-css-class [1] */
.router-link-active {
	color: rgb(228, 123, 37);
}
</style>
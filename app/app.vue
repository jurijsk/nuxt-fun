<script setup lang="ts">
// import type { Experience } from '#shared/types/experience'; //Experience shouldve be autoimported, but you might have to run nuxt dev
import { computed } from 'vue';

useHead({
    title: 'Nuxt Fun'
});
const router = useRouter();

const allRoutes = computed(() => {
    const routes = router.getRoutes();
    return routes
        .filter(r => r.path && typeof r.path === 'string')
        .filter(r => !r.path.includes('(') && !r.path.includes(':') && !r.path.startsWith('/_'))
        .filter(r => !r.path.startsWith('/da') && !r.path.startsWith('/de'))
        .map(r => ({ name: r.name as string | undefined, path: r.path }));
});
</script>

<template>
	<!-- put markup shared across all pages, ex: NavBar -->
	<!-- alternatively remove this file altogether -->
	<NuxtPage />
	<p>This comes from <code>./app/app.view</code>. Is this also how you link site-wide resources such as CSS?</p>
	<hr>
	<NuxtLink :to="$switchLocalePath('de')">Deusch</NuxtLink>
	<NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
	<NuxtLink :to="$switchLocalePath('da')">Dansk</NuxtLink>
	<hr>
	<section>
		<h2>Site Routes</h2>
		<ul>
			<li
				v-for="r in allRoutes"
				:key="r.path"
			>
				<NuxtLink :to="r.path">{{ r.path }}</NuxtLink>
			</li>
		</ul>
	</section>
</template>

<style lang="css">
/*vue-css-class [1] */
	.router-link-active {
		color: rgb(228, 123, 37);
	}
</style>

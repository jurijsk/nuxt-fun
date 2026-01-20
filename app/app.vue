<template>
	<NuxtPage />
	<hr />
	<p>This comes from <code>./app/app.view</code>. Is this also how you link site-wide resources such as CSS?</p>
</template>
<script setup lang="ts">
useHead({
	title: 'Nuxt Fun'
});
</script>
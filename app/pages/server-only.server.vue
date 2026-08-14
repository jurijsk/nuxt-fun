//The counter below will not work since the pate is marked `.server.` suffix. Read https://nuxt.com/docs/4.x/directory-structure/app/pages#server-only-pages more here

<script setup lang="ts">
const count = ref(0);
</script>

<template>
	<main>
		<h1>Server only page that will not hydrate</h1>
		<p>The counter below will not work since the page is marked with <code>.server.</code> suffix. Read <a href="https://nuxt.com/docs/4.x/directory-structure/app/pages#server-only-pages">more here</a></p>
		<p>{{ count }}</p>
		<button @click="count++">
			Increase count. Count is {{ count }}
		</button>
	</main>
</template>

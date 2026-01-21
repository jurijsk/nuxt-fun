//The couner below will not work since the is marked `.server.` sufix. Read https://nuxt.com/docs/4.x/directory-structure/app/pages#server-only-pages more here

<script setup lang="ts">

const count = ref(0);

</script>
<template>
	<main>
		<h1>Server only page that will not hydrate</h1>
		<p>The couner below will not work since the is marked <code>.server.</code> sufix. Read <a href="https://nuxt.com/docs/4.x/directory-structure/app/pages#server-only-pages">more here</a></p>
		<p>{{ count }}</p>
		<button @click="count++">Increase count. Count is {{ count }}</button>
	</main>
</template>
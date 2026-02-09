<script setup lang="ts">
const url = useRequestURL();
console.log(url);

const response = await $fetch(url.origin + '/fonts/Shift-Bold.oft');
debugger;
console.log(response);

// const { data: fontBuffer, status, error } = await useFetch(url.origin + '/fonts/Shift-Bold.oft', {
//	key: 'font-shift-bold',
//	transform: (response: ArrayBuffer) =>  new Uint8Array(response),
// });

// const fontLoaded = computed(() => fontBuffer.value ? "loaded:" + fontBuffer.value.length : "not loaded")

debugger;
</script>

<template>
	<p>URL is: {{ url }}</p>
	<p>Path is: {{ url.pathname }}</p>
	<p>origin is: {{ url.origin }}</p>
	<hr>
	<!-- <p>font is {{ status }}</p> -->
</template>

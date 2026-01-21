<script setup lang="ts">

const title = ref({ name: 'Nuxt Fun - Index' });

useHead({
	title: computed(() => title.value.name)
});
</script>
<template> this is index.vue </template>
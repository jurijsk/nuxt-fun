<script lang="ts" setup>

const { locale } = useI18n();

const { data: services } = await useAsyncData('services', () => {
	return queryCollection('services').all();
});

const localServices = computed(() => services.value?.map((services) => services[locale.value]));
</script>
<template>
	<template v-if="localServices">
		<ul>
			<li v-for="service in localServices"> {{ service.title }} <p>{{ service.category }}</p>
			</li>
		</ul>
	</template>
	<template v-else>
		<div class="empty-page">
			<h1>No services found</h1>
		</div>
	</template>
</template>
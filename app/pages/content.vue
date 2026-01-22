<script lang="ts" setup>
import type { Collections, ExperiencesEnCollectionItem } from '@nuxt/content';


const { locale, defaultLocale } = useI18n();


const { data } = await useAsyncData('experiences-' + locale.value, async () => {
	// Build collection name based on current locale
	const collection = ('experiences_' + locale.value) as keyof Collections;
	const experiences = await queryCollection(collection).all();

	// Optional: fallback to default locale if content is missing
	if(!experiences && locale.value !== defaultLocale) {
		const dedaultCollection = 'experiences_' + defaultLocale as keyof Collections;
		return await queryCollection(dedaultCollection).all();
	}

	return experiences;
}, {
	watch: [locale], // Refetch when locale changes
});

const experiences = <Ref<ExperiencesEnCollectionItem[]>> data;



//const route = useRoute();
//const { data: experiences } = await useAsyncData('experiences', () => {
//	return queryCollection('experiences').all();
//});
</script>
<template>
	<template v-if="experiences">
		<ul>
			<li v-for="experience in experiences"> {{ experience.title }} | <span v-for="skill in experience.skills">{{ skill }}</span>
			</li>
		</ul>
	</template>
	<template v-else>
		<div class="empty-page">
			<h1>No expericences found</h1>
		</div>
	</template>
</template>
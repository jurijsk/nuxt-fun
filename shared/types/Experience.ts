//exports from /shared/types/* (and from /shared/utils/*) will be autoimported by Nuxt to app and server apps, but for it to work and not throw errors in vs code, you have to run dev server
//read more https://nuxt.com/docs/4.x/directory-structure/shared

export interface Experience {
	title: string;
	description: string;
	keySkills: string[];
	dates: string;
}

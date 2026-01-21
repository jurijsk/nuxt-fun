//exports from /shared/utils/* (and from /shared/types/*) will be autoimported by Nuxt to app and server apps, but for it to work and not throw errors in vs code, you have to run dev server
//read more https://nuxt.com/docs/4.x/directory-structure/shared

export const capitalize = (input: string) => {
  return input[0] ? input[0].toUpperCase() + input.slice(1) : ''
}
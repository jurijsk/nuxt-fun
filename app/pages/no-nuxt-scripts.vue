<script setup lang="ts">
defineRouteRules({
	noScripts: true
});
</script>

<template>
  <h1>No Nuxt scripts page</h1>

  <p>
	This page incudes `noScripts: true` routeRule, that turn off rendering of Nuxt scripts and JavaScript resource hints.  
  </p>


  <p>
	This means that hydration will not happed for this page, you will get what was rendered on the server side and that is it. No hot reload. Useful for pages without vuejs driven user interactions</p>
</template>
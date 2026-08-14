<script setup lang="ts">

function getRnd() {
	return Math.round(Math.random() * 1000 + 1);
}

const num = useState<number>('random', () => getRnd());

const refreshNum = () => {
	num.value = getRnd();
};
</script>

<template>
  <div>
	<h1><code>@nuxt/test-utils/e2e</code> demonstration</h1>
	<p>This demonstrates how end-to-end testing can be done using <code>vitest</code> test runner playwright controlling the browser</p>
	<p>Config for this can be found in `vitest.cinfig.ts` under <code>test.projects[test.name == 'e2e']</code></p>
    <p>Number: <span>{{ num }}</span></p>
    <button @click="refreshNum">Refresh</button>
  </div>
</template>
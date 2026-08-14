import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e';
import { describe, test, expect } from 'vitest';

const path = '/test-utils/e2e';

describe('e2e testing', async () => {
	//https://nuxt.com/docs/4.x/getting-started/testing#nuxt-config
	await setup({
		//if host is set, test runner will not ensure if its is running or not
		//https://nuxt.com/docs/4.x/getting-started/testing#target-host-end-to-end-example
		host: 'http://localhost:3000',
		// Under the hood, Nuxt test utils uses playwright to carry out browser testing. 
		// If this option is set, a browser will be launched and can be controlled in the subsequent test suite.
		browser: true //i do not see any difference how it tests 
	});

	test('e2e: contains number as string', async () => {
		const html = await $fetch(path);
		expect(html).toContain('Number:');
	});

	test('e2e: with playwright', async () => {
		const page = await createPage(); //this is what make it test in the browser https://nuxt.com/docs/4.x/getting-started/testing#testing-in-a-browser
		await page.goto(url(path), { waitUntil: 'hydration' });
		const text = await page.textContent('span');
		const number = Number(text);
		expect(number).toBeGreaterThan(0);
		await page.click('button');
		const newText = await page.textContent('span');
		const newNumber = Number(newText);
		expect(number).toBeGreaterThan(0);
		expect(number).not.toBe(newNumber);
	});
});
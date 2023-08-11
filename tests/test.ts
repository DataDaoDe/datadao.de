import { expect, test } from '@playwright/test';

test('index page has sketch image and quote', async ({ page }) => {
	await page.goto('/');
	const mainImg = await page.getByTestId("mainImage")
	await expect(mainImg).toHaveAttribute("alt", "Start sketching")
	const quote = await page.locator('.Quote')
	await expect(quote).toContainText("The only true wisdom is knowing you know nothing")
});

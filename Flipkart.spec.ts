import { test, expect } from '@playwright/test';
import { afterEach } from 'node:test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await test.slow();
});

test('Search for a specific product and verify the results',async({page})=>{
    await page.waitForTimeout(5000);
    await page.getByTitle('Search for products, brands and more').nth(1).click();
    await page.getByTitle('Search for products, brands and more').nth(1).fill("New Apple mobiles");
    await page.waitForTimeout(5000);
    await page.locator('._2iLD__').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('.BUOuZu')).toHaveText('Showing 1 – 24 of 579 results for "New Apple mobiles" ');
    await page.waitForTimeout(5000);
});
test('Handeling Muktiple windows   ',async({page})=>{
    await page.waitForTimeout(5000);
    await page.getByTitle('Search for products, brands and more').nth(1).click();
    await page.getByTitle('Search for products, brands and more').nth(1).fill("New Apple mobiles");
    await page.waitForTimeout(5000);
    await page.locator('._2iLD__').click();
    await page.waitForTimeout(5000);
    //New window handles
      const productLocator = page.locator(`text="Apple iPhone 13 (Starlight, 128 GB)"`);
      await productLocator.waitFor({ state: 'visible' });
      await page.waitForTimeout(5000);
       const [newPage] = await Promise.all([
          page.waitForEvent('popup'), // Wait for the new tab
          productLocator.click() // Click the product after it's visible
      ]);
      await page.waitForTimeout(5000);
      await expect(page.locator('.VU-ZEz')).toHaveText("Apple iPhone 13 (Starlight, 128 GB)");
      await page.waitForTimeout(5000);
});
test('Hendle multiple checkbox ',async({page})=>{
    await page.waitForTimeout(5000);
    await page.getByTitle('Search for products, brands and more').nth(1).click();
    await page.getByTitle('Search for products, brands and more').nth(1).fill("New Apple mobiles");
    await page.waitForTimeout(5000);
    await page.locator('._2iLD__').click();
    await page.waitForTimeout(5000);
    await page.locator('.XqNaEv').nth(0).click();
    await page.waitForTimeout(3000);
    await page.locator('.XqNaEv').nth(1).click();
    await page.waitForTimeout(3000);
    await page.locator('.XqNaEv').nth(2).click();
    await page.waitForTimeout(3000);
    await page.locator('.XqNaEv').nth(11).click();
    await page.waitForTimeout(3000);
    let dynamicText="Clear all"
    await page.locator(`//*[contains(text(),'Clear all')]`).nth(0).click();
    await page.waitForTimeout(3000);
});




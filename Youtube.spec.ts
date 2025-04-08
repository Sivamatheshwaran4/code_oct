import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page .goto("https://www.youtube.com/");
    await test.slow();
});


test("perform the search functionality",async({page})=>{
    await page.waitForTimeout(4000);
    await page.locator('.ytSearchboxComponentSearchForm').click();
    await page.waitForTimeout(4000);
   await page.locator('input[type="text"]').fill("Playwright multiple drop down handle");
    await page.waitForTimeout(4000);
    await page.locator('.ytSearchboxComponentSearchButton').click();
    await page.waitForTimeout(4000);
    let dynamicText="Handle Dropdown In Playwright And Verify Dropdown Values";
    await page.locator(`//*[contains(text(),'Handle Dropdown In Playwright And Verify Dropdown Values')]`).click();
    await page.waitForTimeout(5000);
    });
    

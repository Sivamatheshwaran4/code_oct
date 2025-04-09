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
    




////Demoqa testing code 



import { test, expect } from '@playwright/test';
import { afterEach } from 'node:test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await test.slow();
});
test('Check the dashboard ',async({page})=>{
    await page.waitForTimeout(3000);
    await expect(page.locator('xpath=/html/body/div[2]/div/div/div[2]/div/div[1]/div/div[3]/h5')).toHaveText("Elements");
    await page.waitForTimeout(3000);
    await expect(page.locator('xpath=/html/body/div[2]/div/div/div[2]/div/div[2]/div/div[3]/h5')).toHaveText("Forms");
    await page.waitForTimeout(3000);
    await expect(page.locator('xpath=/html/body/div[2]/div/div/div[2]/div/div[3]/div/div[3]/h5')).toHaveText("Alerts, Frame & Windows"); 
    await page.waitForTimeout(3000);
    await expect(page.locator('xpath=/html/body/div[2]/div/div/div[2]/div/div[4]/div/div[3]/h5')).toHaveText("Widgets");
    await page.waitForTimeout(3000);
    await expect(page.locator('xpath=/html/body/div[2]/div/div/div[2]/div/div[5]/div/div[3]/h5')).toHaveText("Interactions");
    await page.waitForTimeout(6000);
});
test("Perform the add function on the textbox ",async({page})=>{
    await page.waitForTimeout(3000);
    await page.getByText('Elements').click();
    await page.waitForTimeout(3000);
    await page.getByText('Text Box').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('.text-center')).toHaveText("Text Box");
    await page.waitForTimeout(3000);
    const firstTextbox=await page.locator('input[type="text"]');
    await firstTextbox.click();
    await page.waitForTimeout(3000);
    await page.locator('#userName').fill("New Name added");
    await page.waitForTimeout(3000);
await page.locator('input[type="email"]').click();
await page.locator('input[type="email"]').fill("Sivamatesh@gmail.com");
await page.waitForTimeout(3000);
await page.locator('#currentAddress').click();
await page.locator('#currentAddress').fill("!234streeen,india ");
await page.waitForTimeout(3000);
if( await page.locator('#submit').isEnabled()){
    await page.locator('#submit').click();
}
await page.waitForTimeout(4000);
});
test('Handle multiple check boxs',async({page})=>{
    let dynamictext="Elements";
    await page.locator(`//*[contains(text(),'Elements')]`).nth(1).click();
    await page.waitForTimeout(4000);
    await page.getByText('Check Box').click();
    await page.waitForTimeout(4000);
    await page.locator('button[type="button"]').click()


});



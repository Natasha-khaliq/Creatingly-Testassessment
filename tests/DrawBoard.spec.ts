
import { test, expect, type Page } from '@playwright/test';
test('Draw ArtBoard using drag and drop functionality', async ({ page }) => {  
    test.setTimeout(120000);
    await page.goto("https://dev.platform.creatingly.com/webstudio",{waitUntil: "domcontentloaded"}); // Set timeout to 60 seconds  { timeout: 10000 }
    await page.locator('app-helper span').first().click();
    await expect(page.getByLabel('Draw artboards to create new')).toBeVisible();
    await page.getByLabel('Draw artboards to create new').click();
    await expect(page.locator('#modeName3')).toContainText('Artboard');  
    await page.getByLabel('One wide section artboard').click();
    await page.locator('div').filter({ hasText: /^Container$/ }).click();
    await expect(page.locator('#flavour-scroll')).toContainText('Container');
    await page.locator('#flavour-scroll div').filter({ hasText: 'ActionableAction Sheet' }).locator('#flavourimage').click();
    await expect(page.getByText('Stack Grid')).toBeVisible();
    await page.getByRole('button', { name: 'Stack' }).click();
    await expect(page.locator('app-layout-setting')).toContainText('Stack Grid');
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.getByRole('button', { name: 'center' }).nth(1).click();
    await page.locator('.ng-star-inserted > div > .spk-color').first().fill('35');
    await page.locator('app-value-unit:nth-child(8) > div > .spk-color').fill('350');
    await page.getByRole('button', { name: 'C | C' }).click();
   // await page.getByRole('button', { name: ' Stretch vertically' }).click();
    //await page.getByRole('button', { name: ' Stretch horizontally' }).click();
    await page.locator('div').filter({ hasText: /^Chart$/ }).click()
    await page.locator('#flavour-scroll div').filter({ hasText: 'ActionableAction Sheet' }).locator('#flavourimage').first().click();
    await page.locator('.ng-star-inserted > div > .spk-color').first().fill('35');
   await page.locator('app-value-unit:nth-child(8) > div > .spk-color').fill('350');
   await page.getByRole('button', { name: 'C | C' }).click();
  // await page.getByRole('button', { name: ' Stretch vertically' }).click();
    //await page.getByRole('button', { name: ' Stretch horizontally' }).click();
    
  });

 
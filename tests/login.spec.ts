import { test, expect } from '@playwright/test';

test('Login ', async ({ page }) => { 
  test.slow();   
  await page.goto('https://dev-login.platform.creatingly.com/login'); 
  await page.getByPlaceholder('Type your Email').fill('natashakhaliq4750@gmail.com');
  await page.getByPlaceholder('Type your password').fill('AllahBless@890');
  await page.frameLocator('iframe[name="a-c7ck7x5pzfv8"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Login' }).click();

});
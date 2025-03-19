import {test, expect} from '@playwright/test';

test('login-webdriver.test', async ({page}) => {
    const logOutButtonLocator = page.locator('.btn-outline-danger')
    const signUpToolbarButtonLocator = page.locator('.btn-primary')
    const signUpButtonLocator = page.locator('//*[contains(@class, \'btn btn-lg btn-primary pull-xs-right\')]')

    await page.goto('https://demo.learnwebdriverio.com/');
    await page.context().clearCookies();
    await page.locator('//a[@href=\'/register\']').click();
    await page.locator('//input[contains(@placeholder, \'Username\')]').fill(`asdf`);
    await page.locator('//input[contains(@placeholder, \'Email\')]').fill('asdf@go.co');
    await page.locator('//input[contains(@placeholder, \'Password\')]').fill('12345');
    await signUpToolbarButtonLocator.click(); //button
    await page.locator(`//a[contains(@href, 'settings')]`).click()
    await expect(page.locator(`//*[@class='btn btn-outline-danger']`)).toBeVisible()
})

test(`checkErrors`, async ({page}) => {
    const signUpToolbarButtonLocator = page.locator('//a[@href=\'/register\']')
    await page.goto('https://demo.learnwebdriverio.com/');
    const signUpButtonLocator = page.locator('//*[contains(@class, \'btn btn-lg btn-primary pull-xs-right\')]')

    //blank fields block
    await signUpToolbarButtonLocator.click()
    await signUpButtonLocator.click()
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(),"username")]`)).toContainText("username can't be blank")
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "email")]`)).toBeVisible()

    //exist block
    await page.locator('//input[contains(@placeholder, \'Username\')]').fill(`asdf`);
    await page.locator('//input[contains(@placeholder, \'Email\')]').fill('asdf@go.co');
    await signUpButtonLocator.click()
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "username is already taken")]`)).toBeVisible()
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "email is already taken")]`)).toBeVisible()
})
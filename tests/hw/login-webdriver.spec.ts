import {test, expect, Page} from '@playwright/test';

const username = "pok"
const userEmail = `asd@dfs.co`
const userPassword = `s213fas`
const baseUrl = `https://demo.learnwebdriverio.com/`
// const logOutButtonLocator = page.locator('.btn-outline-danger')
// const signUpToolbarButtonLocator = page.locator(`//*[contains(@class, 'btn')]`)
//const signUpButtonLocator = page.locator('//*[contains(@class, \'btn btn-lg btn-primary pull-xs-right\')]')

async function goToBaseUrlAndClearCookies(page) {
    await page.goto(baseUrl,
        {
            timeout: 60_000,
        }
    )
    await page.context().clearCookies();
}

async function registerNewUser(
    page: Page
) {
    await page.locator(`//*[@href='/register']`).click()
    await page.locator(`//*[contains(@placeholder, 'sername')]`).fill(`${username}`)
    await page.locator(`//*[contains(@placeholder, 'mail')]`).fill(`${userEmail}`)
    await page.locator(`//*[contains(@placeholder, 'assword')]`).fill(`${userPassword}`)
    await page.locator(`//*[contains(@class, 'btn')]`).click()
}

test('successful user registration ', async ({page}) => {
    await goToBaseUrlAndClearCookies(page)
    await registerNewUser(page)

    await expect(page.locator(`//*[@class and contains(text(),'Home')]`)).toBeVisible()
})

test(`check errors during registration`, async ({page}) => {
    const signUpToolbarButtonLocator = page.locator('//a[@href=\'/register\']')
    const signUpButtonLocator = page.locator('//*[contains(@class, \'btn btn-lg btn-primary pull-xs-right\')]')

    await goToBaseUrlAndClearCookies(page)

    //blank fields errors
    await signUpToolbarButtonLocator.click()
    await signUpButtonLocator.click()

    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(),"username")]`)).toContainText("username can't be blank")
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "email")]`)).toBeVisible()

    //username and email already taken errors
    await page.locator('//input[contains(@placeholder, \'Username\')]').fill(`asdf`);
    await page.locator('//input[contains(@placeholder, \'Email\')]').fill('asdf@go.co');
    await signUpButtonLocator.click()

    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "username is already taken")]`)).toBeVisible()
    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "email is already taken")]`)).toBeVisible()

    //invalid email format error
    await page.locator('//input[contains(@placeholder, \'Email\')]').fill('21421');
    await signUpButtonLocator.click()

    await expect(page.locator(`//*[contains(@class, 'error-messages')]//*[contains(text(), "email is invalid")]`)).toBeVisible()
})
import {test, expect} from '@playwright/test';

test('order all exist coffees', async ({page}) => {
    await page.goto('https://coffee-cart.app/')
    const count = await page.locator(`//*[@data-cy and @class="cup-body"]`).count()

    for (let i = 0; i < count; i++) {
        await page.locator(`//*[@data-cy and @class="cup-body"]`).nth(i).click()
    }
    await expect(page.locator(`//*[@data-test='checkout']`)).toContainText(`Total: $119.00`)
});
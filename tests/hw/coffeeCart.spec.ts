import {test, expect} from '@playwright/test';

test.describe('test', async () => {

    test('happyPath.test',  //просте замовленя кількох напоїв
        async ({page}) => {
            //  await goToBaseUrl
            //#region
            const goToBaseUrl = page.goto('https://coffee-cart.app/');
            const userNameLocator = page.locator('#name')
            const userName = `asdDas`
            const emailFieldLocator = page.locator("#email")
            const userEmail = `pokop@sad.com`
            const espressoLocator = page.locator(`[data-test="Espresso"]`)
            const espressoMacchiatoLocator = page.locator('[data-test="Espresso_Macchiato"]')
            const cappucinoLocator = page.locator('[data-test="Cappucino"]')
            const checkoutLocator = page.locator(`[data-test="checkout"]`)
            const submitPaymentLocator = page.locator(`#submit-payment`)
            const cartPageLocator = page.locator(`//a[@href='/cart']`)
            const yesDiscountButton = page.locator(`.yes`)
            //#endregion

            await goToBaseUrl
            await espressoLocator.click();
            await espressoMacchiatoLocator.click();
            await checkoutLocator.click();
            await userNameLocator.fill(`${userName}`);
            await emailFieldLocator.fill(`${userEmail}`);
            await submitPaymentLocator.click();
            await expect(cartPageLocator).toContainText('cart (0)');
        });

    test('addAndCancelCart.test',
        async ({page}) => {
            //#region
            const goToBaseUrl = page.goto('https://coffee-cart.app/');
            const userNameLocator = page.locator('#name')
            const userName = `asdDas`
            const emailFieldLocator = page.locator("#email")
            const userEmail = `pokop@sad.com`
            const espressoLocator = page.locator(`[data-test="Espresso"]`)
            const espressoMacchiatoLocator = page.locator('[data-test="Espresso_Macchiato"]')
            const cappucinoLocator = page.locator('[data-test="Cappucino"]')
            const checkoutLocator = page.locator(`[data-test="checkout"]`)
            const submitPaymentLocator = page.locator(`#submit-payment`)
            const cartPageLocator = page.locator(`//a[@href='/cart']`)
            const yesDiscountButton = page.locator(`.yes`)
            //#endregion
            await goToBaseUrl
            await espressoLocator.click();
            await espressoMacchiatoLocator.click();
            await cappucinoLocator.click();
            await yesDiscountButton.click();
            await expect(page.locator('//*[contains(text(), "Discounted")]')).toContainText('(Discounted) Mocha'); // перевірити що напій додасться в карт
            await cartPageLocator.click();
            await expect(checkoutLocator).toContainText('Total: $45.00');
            await page.getByRole('button', {name: 'Remove one Espresso', exact: true}).click();
            await page.getByRole('button', {name: 'Remove one Cappuccino'}).click();
            await expect(checkoutLocator).toContainText('Total: $16.00');
        });


});

function (value){
        if (value >= 0 && value <= 100 && !isNaN(value)) {
                if (value < 50) {
                        return false
                } else if (value >= 50 && value <= 100) {
                        return true
                }
        } else {
                return(console.log("enter valid mark"))
        }}

test("passed", async() =>{
        const result = markCheck(50)
        expect(result).toBeTruthy()
})
test("unpassed", async() =>{
        const result = markCheck(0)
        expect(result).toBeFalsy()
})
test(`unvalid`, async() =>{
        const result = markCheck(`dsf`)
        expect(console.log("enter valid mark"))
})


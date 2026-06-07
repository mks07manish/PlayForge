const { test, expect } = require('../../fixtures/pageFixture.js');
const config = require('../../utils/ConfigReader.js');
const logger = require('../../utils/Logger.js');
const users = require('../../testdata/userData.json');


test('@regression Verify Add To Cart', async ({ inventoryPage, cartPage}) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    const product = await cartPage.getCartItem();
    expect(product).toContain('Sauce Labs Backpack');
}); 

test('@regression Cancel order from payment screen', async ({inventoryPage, cartPage, checkoutPage }) => {
    logger.info("Select Any Product");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    const product = await cartPage.getCartItem();
    expect(product).toContain('Sauce Labs Backpack');

    logger.info("Click On Check Out Button");
    await checkoutPage.clickCheckout();
    logger.info("Enter Customer Detail")
    await checkoutPage.enterCheckoutInformation(
        users.validCustomer.firstname,
        users.validCustomer.lastname,
        users.validCustomer.zipcode
    );
    const checkOutTitle = await checkoutPage.verifyCheckoutOverviewPage();
    logger.info(checkOutTitle);
    expect(checkOutTitle).toContain('Checkout: Overview');
    logger.info("Click on cancel button");
    await checkoutPage.cancelOrder();
    const inventoryPageMsg = await checkoutPage.verifyInventoryPageLoaded();
    expect(inventoryPageMsg).toContain('Products');
    logger.info("Order Cancel Succeesfully !!");
});
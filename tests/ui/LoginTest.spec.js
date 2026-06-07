const { test, expect } = require('../../fixtures/pageFixture.js');
const logger = require('../../utils/Logger');
const users = require('../../testdata/userData.json');

test('@smoke Verify user can login successfully', async ({ inventoryPage }) => {
    const title = await inventoryPage.getPageTitle();
    expect(title).toContain('Products');
});

test('@smoke Complete purchase flow', async ({inventoryPage,cartPage,checkoutPage}) => {
    logger.info("Select Any Produc");
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
    expect(checkOutTitle).toContain('Checkout: Overview');
    logger.info("Customer Details are correct");
    await checkoutPage.finishOrder();
    const successMsg = await checkoutPage.verifyOrderSuccess();
    expect(successMsg).toContain('Thank you for your order!');
    logger.info("Order place successfully");
});
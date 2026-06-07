const { test, expect } = require('../../fixtures/pageFixture.js');
const logger = require('../../utils/Logger.js');
const users = require('../../testdata/userData.json');

test('@UICheck FirstName Validation Checks', async ({inventoryPage,cartPage,checkoutPage}) => {
    logger.info("Select Any Produc");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    const product = await cartPage.getCartItem();
    expect(product).toContain('Sauce Labs Backpack');

    logger.info("Click On Check Out Button");
    await checkoutPage.clickCheckout();
    logger.info("Enter Customer Detail")
    await checkoutPage.enterCheckoutInformation(
        users.invalidCustomer1.firstname,
        users.invalidCustomer1.lastname,
        users.invalidCustomer1.zipcode
    );
    const errorMsg = await checkoutPage.getErrorMessage();
    expect(errorMsg).toContain('Error: First Name is required');
    logger.info("First Name Validation Check Passed !!");
});

test('@UICheck LastName Validation Checks', async ({inventoryPage,cartPage,checkoutPage}) => {
    logger.info("Select Any Produc");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    const product = await cartPage.getCartItem();
    expect(product).toContain('Sauce Labs Backpack');

    logger.info("Click On Check Out Button");
    await checkoutPage.clickCheckout();
    logger.info("Enter Customer Detail")
    await checkoutPage.enterCheckoutInformation(
        users.invalidCustomer2.firstname,
        users.invalidCustomer2.lastname,
        users.invalidCustomer2.zipcode
    );
    const errorMsg = await checkoutPage.getErrorMessage();
    expect(errorMsg).toContain('Error: Last Name is required');
    logger.info("Last Name Validation Check Passed !!");

});

test('@UICheck ZipCode Validation Checks', async ({inventoryPage,cartPage,checkoutPage}) => {
    logger.info("Select Any Produc");
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    const product = await cartPage.getCartItem();
    expect(product).toContain('Sauce Labs Backpack');

    logger.info("Click On Check Out Button");
    await checkoutPage.clickCheckout();
    logger.info("Enter Customer Detail")
    await checkoutPage.enterCheckoutInformation(
        users.invalidCustomer3.firstname,
        users.invalidCustomer3.lastname,
        users.invalidCustomer3.zipcode
    );
    const errorMsg = await checkoutPage.getErrorMessage();
    expect(errorMsg).toContain('Error: Postal Code is required');
    logger.info("Zip Code Validation Check Passed !!");
});
const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const LogoutPage = require('../pages/LogoutPage');
const CheckoutPage = require('../pages/CheckoutPage');
const config = require('../utils/ConfigReader');
const users = require('../testdata/userData.json');
const logger = require('../utils/Logger');

const test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    }
});

test.beforeEach(async ({loginPage})=>{
    logger.info("Naviagte to " + config.baseUrl);
    await loginPage.navigateToURL(config.baseUrl);
    logger.info("Navigation done successfully !!");
    logger.info("Enter User credentials");
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
    await loginPage.verifyLoginPageNavigate();
    logger.info("User Login Successfully !!");
});

test.afterEach(async ({logoutPage})=>{
    logger.info("Logout to " + config.baseUrl);
    await logoutPage.logout();
    await logoutPage.verifyLogoutPageDisplayed();
    logger.info("Logout Done Successfully !!");
});

module.exports = {
    test,
    expect: base.expect
};
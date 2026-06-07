const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const users = require('../../testdata/userData.json');
const config = require('../../utils/ConfigReader');
const logger = require('../../utils/Logger');

test.only('Verify user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    
    logger.info("Navigate to URL")
    await loginPage.navigateToURL(config.baseUrl);

    logger.info("Performing login");
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
    logger.info("Login successful");
    await expect(page).toHaveURL(/inventory/);

    const title = await inventoryPage.getPageTitle();

    expect(title).toContain('Products');
});
const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);
        this.checkoutBtn = '#checkout';
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';

        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.cancelBtn = '#cancel';

        this.completeHeader = '.complete-header';
        this.checkoutOverviewTitle = '.title';
    }

    async clickCheckout() {
        await this.click(this.checkoutBtn);
    }

    async enterCheckoutInformation(firstName, lastName, zipCode) {
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.postalCode, zipCode);
        await this.click(this.continueBtn);
    }

    async verifyCheckoutOverviewPage() {
        return await this.page.locator(this.checkoutOverviewTitle).textContent();
        // .toHaveText('Checkout: Overview');
    }

    async finishOrder() {
        await this.click(this.finishBtn);
    }

    async cancelOrder() {
        await this.click(this.cancelBtn);
    }

    async verifyOrderSuccess() {
        return await this.page.locator(this.completeHeader).textContent();
        // .toHaveText('Thank you for your order!');
    }

    async verifyInventoryPageLoaded() {
        return await this.page.locator(this.checkoutOverviewTitle).textContent();
        // .toHaveText('Products');
    }
}

module.exports = CheckoutPage;
const BasePage = require('./BasePage');

class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.title = '.title';
        this.backpack = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
    }

    async addBackpackToCart() {
        await this.click(this.backpack);
    }

    async goToCart() {
        await this.click(this.cartIcon);
    }

    async getPageTitle() {
        return await this.getText(this.title);
    }
}

module.exports = InventoryPage;
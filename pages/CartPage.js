const BasePage = require('./BasePage');

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.cartItem = '.inventory_item_name';
    }

    async getCartItem() {
        return await this.getText(this.cartItem);
    }
}

module.exports = CartPage;
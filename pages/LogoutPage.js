const BasePage = require('./BasePage')
const { expect } = require('@playwright/test');

class LogoutPage extends BasePage {
    constructor(page){
        super(page);
        this.title = page.locator('.login_logo');
        this.logoutIcon= '//*[@id="react-burger-menu-btn"]';
        this.logoutBtn = '//*[@id="logout_sidebar_link"]';   
    }

    async logout(){
        await this.click(this.logoutIcon);
        await this.click(this.logoutBtn);
    }
    async verifyLogoutPageDisplayed() {
        await expect(this.title).toHaveText('Swag Labs');
    }
} 

module.exports = LogoutPage;
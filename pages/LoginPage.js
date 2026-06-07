const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class LoginPage extends BasePage {

    constructor(page) {
        super(page)
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
    }

    async login(user, pass) {
        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginBtn);
    }
    async verifyLoginPageNavigate() {
        await expect(this.page).toHaveURL(/inventory/);
    }

}

module.exports = LoginPage;
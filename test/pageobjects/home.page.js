const { $ } = require('@wdio/globals');
const Page = require('./page');

class HomePage extends Page {
  get btnLogin() {
    return $('button[type="onPress"]');
  }

  async clickLogin() {
    await this.btnLogin.click();
  }
  open() {
    return super.open('/(login)');
  }
}

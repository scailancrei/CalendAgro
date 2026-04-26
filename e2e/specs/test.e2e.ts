const { expect, $ } = require('@wdio/globals');
const LoginPage = require('../../test/pageobjects/login.page');

describe('Dirigirse a la Login Page', () => {
  it('debe mostrar el botón de Iniciar Sesión y clickar en él, mostrar el botón volver a home', async () => {
    const btnSesion = await $('android=new UiSelector().text("INICIAR SESIÓN")');
    await expect(btnSesion).toBeDisplayed();
    await btnSesion.click();

    await expect(LoginPage.btnBack).toBeDisplayed();
  });
});

exports.config = {
  runner: 'local',
  port: 4723,

  specs: ['./e2e/specs/**/*.ts'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'R5CRB0XGBDF',
      'appium:platformVersion': '15',
      'appium:appPackage': 'com.calendagro.app',
      'appium:appActivity': 'com.calendagro.app.MainActivity',
      'appium:automationName': 'UiAutomator2',
      'appium:noReset': true,
    },
  ],

  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

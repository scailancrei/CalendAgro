exports.config = {
  runner: 'local',
  port: 4723,

  specs: ['./e2e/specs/**/*.ts'],
  exclude: [],

  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '14',
      'appium:appPackage': 'com.calendagro.app',
      'appium:appActivity': 'com.calendagro.app.MainActivity',
      'appium:automationName': 'UiAutomator2',
      'appium:noReset': true,
      'appium:app':
        'C:\\Users\\juana\\Desktop\\react19\\CalendAgro\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk',
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

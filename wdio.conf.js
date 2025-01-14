exports.config = {
    // runner: 'local',
    // port: 4723,

    user: 'oauth-jprkleinkauf3-b364c',
    key: '868b4d25-0259-4ce3-9207-ffc0388b53c3',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
    //     {
    //     platformName: 'Android',
    //     'appium:deviceName': 'ebac',
    //     'appium:platformVersion': '9.0',
    //     'appium:automationName': 'UiAutomator2',
    //     'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //     'appium:appWaitActivity': '.MainActivity',
    //     'appium:disableIdLocatorAutocompletion': true
    // }

        {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', 
        'appium:deviceName': 'Samsung.*',
        'appium:platformVersion': '10',
        'appium:automationName': 'UiAutomator2',
        'appim:disableIdLocatorAutocompletion': true,
        'sauce:options': {
           build: 'appium-build-tarefa-modulo17',
           name: 'tarefa módulo 17',
           deviceOrientation: 'PORTRAIT',
           appiumVersion: '2.0.0',
         },
       }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
}

'use strict';

/**
 * @ngdoc overview
 * @name aiselApp
 * @description
 *
 * E2E User test
 */

describe("E2E: Auth module tests", function () {
    console.log('Test loaded: Auth');
    var ptor = protractor.getInstance();

    it('Sign in route is working and log-in with username and password', function () {
        browser.driver.manage().deleteAllCookies();
        browser.get('http://admin.aisel.dev/en/user/login/');
        var el = element(by.css('.page-header'));

        expect((el).isDisplayed()).toBeTruthy();
    });

    it('Log-in with wrong username and password', function () {
        browser.get('http://admin.aisel.dev/en/user/login/');
        element(by.model('username')).sendKeys('wrong-backenduser');
        element(by.model('password')).sendKeys('backenduser');
        element(by.id('login-button')).click().then(function () {
            ptor.getCurrentUrl().then(function (url) {

                expect(url).toBe('http://admin.aisel.dev/en/user/login/');
            });
        });
    });

    it('Log-in with correct username and password', function () {
        browser.get('http://admin.aisel.dev/en/user/login/');
        element(by.model('username')).sendKeys('backenduser');
        element(by.model('password')).sendKeys('backenduser');
        element(by.id('login-button')).click().then(function () {
            ptor.getCurrentUrl().then(function (url) {

                expect(url).toBe('http://admin.aisel.dev/en/');
            });
        });
    });
});
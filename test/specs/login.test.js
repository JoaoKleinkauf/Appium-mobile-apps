import {expect, driver} from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {

    it('should create a new user', async () => {
        await homePage.openMenu('profile')
        await homePage.openForm('Sign up')
        await loginPage.login('João', 'Pedro', '11976413698', 'test@test.com.br', '123456', '123456')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('João Pedro')).isDisplayed()).toBeTruthy
    })
})
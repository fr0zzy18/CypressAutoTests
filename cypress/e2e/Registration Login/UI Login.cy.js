/// <reference types="cypress" />
import user from '../../fixtures/user.json'
const { homePage } = require("../../pages/homePage")
const { loginPage } = require("../../pages/loginPage")

describe('Login / Logout / invalid scenarious / delete account', () => {
    beforeEach(() => {
        homePage.visit()
        homePage.openLoginPage()
    })
    it('Login and Logout', () => {
        loginPage.login(user.email, user.password)
        loginPage.submitLogin()
        homePage.verifyUser(user.login)
        homePage.logOut()
    })
    it('Login and delete account', () => {
        loginPage.login(user.email, user.password)
        loginPage.submitLogin()
        homePage.verifyUser(user.login)
        homePage.deleteAccount()
    })
    it('Login with invalid email', () => {
        loginPage.login('invalid@email.com', user.password)
        loginPage.submitLogin()
        loginPage.verifyLoginError()
    })
})
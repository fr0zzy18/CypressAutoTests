/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import { homePage } from "../../pages/homePage"
import { loginPage } from "../../pages/loginPage"
import { signupPage } from '../../pages/signupPage'

describe('Registration', () => {
    beforeEach(() => {
        homePage.visit()
    })

    it('Registration account', () => {
        homePage.openLoginPage()
        loginPage.signup(user.login, user.email)
        loginPage.submitSignup()
        signupPage.verifyPrefilled(user.login, user.email)
        signupPage.fillPersonalInfo(user.password, '31', 'August', '1990')
        signupPage.fillAddressInfo(user)
        signupPage.submitForm()
    })

    it('Register account using already registrated email', () => {
        homePage.openLoginPage()
        loginPage.signup(user.login, user.email)
        loginPage.submitSignup()
        loginPage.verifySignupError()
    })

}) 
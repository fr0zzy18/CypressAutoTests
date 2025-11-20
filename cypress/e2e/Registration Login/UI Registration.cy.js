/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import { homePage } from "../../pages/homePage"
import { loginPage } from "../../pages/loginPage"
import { signupPage } from '../../pages/signupPage'

describe('Registration', () => {
    beforeEach(() => {
        homePage.visit()
        homePage.openLoginPage()
    })

    it('Registration and delete account', () => {        
        loginPage.signup(user.login, user.email)
        loginPage.submitSignup()
        signupPage.verifyPrefilled(user.login, user.email)
        signupPage.fillPersonalInfo(user.password, user.DayofBirth, user.MonthofBirth, user.YearofBirth)
        signupPage.fillAddressInfo(user)
        signupPage.submitForm()
        homePage.deleteAccount()
    })

    it('Registion account using already registrated email', () => {
        loginPage.signup(user.login, user.email)
        loginPage.submitSignup()
        loginPage.verifySignupError()
    })

}) 
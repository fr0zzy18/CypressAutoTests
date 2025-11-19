/// <reference types="cypress" />

import user from '../../fixtures/user.json'
import { cartPage } from "../../pages/cartPage"
import { homePage } from "../../pages/homePage"
import { loginPage } from "../../pages/loginPage"
import { productsPage } from "../../pages/productsPage"
import { signupPage } from '../../pages/signupPage'

describe('Placing order', () => {
    beforeEach(() => {
            homePage.visit()
})
    it('Register while Checkout', () => {
        productsPage.addToCartMultiple()
        cartPage.visit()
        cartPage.checkoutAndLogin()
        loginPage.signup(user.login, user.email)
        loginPage.submitSignup()
        signupPage.verifyPrefilled(user.login, user.email)
        signupPage.fillPersonalInfo(user.password, user.DayofBirth, user.MonthofBirth, user.YearofBirth)
        signupPage.fillAddressInfo(user)
        signupPage.submitForm()
        homePage.verifyUser(user.login)
        cartPage.visit()
        cartPage.checkout()        
    })
})
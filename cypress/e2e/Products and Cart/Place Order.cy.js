/// <reference types="cypress" />
import testData from '../../fixtures/testData.json'
import user from '../../fixtures/testUser.json'
import card from '../../fixtures/cardData.json'
import { cartPage } from "../../pages/cartPage"
import { checkoutPage } from '../../pages/checkoutPage'
import { homePage } from "../../pages/homePage"
import { loginPage } from "../../pages/loginPage"
import { paymentPage } from '../../pages/paymentPage'
import { productsPage } from "../../pages/productsPage"

describe('Placing order', () => {
    beforeEach(() => {
            homePage.visit()
})
    it('Login while Checkout', () => {
        productsPage.addToCartMultiple()
        cartPage.visit()
        cartPage.checkoutAndLogin()
        loginPage.login(user.email, user.password)
        loginPage.submitLogin()
        homePage.verifyUser(user.login)
        cartPage.visit()
        cartPage.checkout()
        checkoutPage.placeOrder(testData.oredDescr) 
        paymentPage.confirmOrder(card.cardName, card.cardNumber, card.CVC, card.Expiration, card.Year)     
    })
})
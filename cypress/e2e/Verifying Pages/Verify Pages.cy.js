/// <reference types="cypress" />

import user from '../../fixtures/user.json'
import { cartPage } from '../../pages/cartPage'
import { homePage } from "../../pages/homePage"
import { productsPage } from "../../pages/productsPage"
import { testCasesPage } from "../../pages/testCasesPagr"

describe('Pages', () => {
    beforeEach(() => {
        homePage.visit()
    })
    it('Verify Test Case Page', () => {
        testCasesPage.visit()
    })
    it('Verify All Products and product detail page', () => {
        productsPage.visit()
        productsPage.verifyProductsList()
        productsPage.viewProduct()
        productsPage.verifyProductDetails()
    })
    it('Verify Subscription in home page', () => {
        homePage.verifySubscribtion(user.email)
    })
    it('Verify Subscription in Cart page', () => {
        cartPage.visit()
        cartPage.verifySubscribtion(user.email)
    })
})
/// <reference types="cypress" />

import { cartPage } from "../../pages/cartPage"
import { homePage } from "../../pages/homePage"
import { productsPage } from "../../pages/productsPage"

describe('Add product in cart', () => {
     beforeEach(() => {
        homePage.visit()
    })
    it('Add product button', () => {
        productsPage.visit()
        productsPage.addToCartMultiple()
        cartPage.visit()
        cartPage.pricesAndQuantity()
    })

    it('Add product details', () => {
        homePage.verifyProductsList()
        homePage.viewProduct()
        productsPage.verifyProductDetails()
        productsPage.changeProductQuantity(3)
        productsPage.addToCart()
        cartPage.pricesAndQuantity()
    })
})
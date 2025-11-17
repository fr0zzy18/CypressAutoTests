/// <reference types="cypress" />

import { homePage } from "../../pages/homePage"
import { productsPage } from "../../pages/productsPage"

describe('Add product in cart', () => {
    it('Add product', () => {
        homePage.visit()
        productsPage.visit()
        productsPage.addToCart()
    })
})
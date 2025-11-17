/// <reference types="cypress" />

import testData from '../../fixtures/testData.json'
import { homePage } from '../../pages/homePage'
import { productsPage } from '../../pages/productsPage'
describe('Search Product', () => {
    it('Searching', () => {
        homePage.visit()
        productsPage.visit()
        productsPage.verifyProductSearch(testData.productQuery)
    })
})
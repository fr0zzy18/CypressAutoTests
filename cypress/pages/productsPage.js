class ProductsPage {
    visit(){
        cy.contains('Products').click()
        cy.contains('All Products').should('be.visible')
    }
    verifyProductsList(){
        cy.get('.features_items').should('be.visible')
    }
    viewProduct(){
        cy.get('.nav-pills').eq(1).click()
    }
    verifyProductDetails(){
        cy.get('.product-information').should('be.visible')
    }
    verifyProductSearch(query){
        cy.get('input[placeholder="Search Product"]').type(query)
        cy.get('#submit_search').click()
        cy.get('.productinfo').should('have.length.greaterThan', 0)
       /*  cy.get('.productinfo').each((item) => {
            cy.wrap(item).find('p').invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include(query.toLowerCase())
            })
        }) */
    }
    addToCart(){
        cy.get('a[data-product-id="1"]').first().click()
        cy.contains('Continue Shopping').click()
        cy.get('a[data-product-id="2"]').first().click()
        cy.contains('View Cart').click()

    }
    continueShopping(){
        cy.contains('Continue Shopping').click()
    }
}

export const productsPage = new ProductsPage()
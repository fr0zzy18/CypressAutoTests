class CartPage {
    visit(){
        cy.contains('Cart').click()
    }
        verifySubscribtion(email){
        cy.get('input[placeholder="Your email address"]').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }
}

export const cartPage = new CartPage()
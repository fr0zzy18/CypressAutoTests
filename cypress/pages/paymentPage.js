class PaymentPage{
    confirmOrder(cardName, cardNumber, CVC, Expiration, Year){
        cy.get('input[name="name_on_card"]').type(cardName)
        cy.get('input[name="card_number"]').type(cardNumber)
        cy.get('input[name="cvc"]').type(CVC)
        cy.get('input[name="expiry_month"]').type(Expiration)
        cy.get('input[name="expiry_year"]').type(Year)
        cy.get('[data-qa="pay-button"]').click()
        cy.contains('Order Placed').should('be.visible')
    }

}

export const paymentPage = new PaymentPage()
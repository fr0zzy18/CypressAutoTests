class CheckoutPage{
    placeOrder(orderDesc){
        cy.get('textarea.form-control').type(orderDesc)
        cy.get('a.check_out').click()
    }
}

export const checkoutPage = new CheckoutPage()
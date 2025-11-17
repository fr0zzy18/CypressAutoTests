class HomePage {
    visit() {
        cy.visit('/')
        cy.contains('Features Items').should('be.visible')
    }

    openLoginPage() {
        cy.contains('Signup / Login').click()
    }
    verifyUser(login) {
        cy.contains(`Logged in as ${login}`)
    }
    logOut(){
        cy.contains('Logout').click()
        cy.contains('Signup / Login').should('be.visible')
    }
    deleteAccount(){
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    }
    verifySubscribtion(email){
        cy.get('input[placeholder="Your email address"]').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }
}

export const homePage = new HomePage()
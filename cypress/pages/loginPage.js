class LoginPage {
    signup(login, email) {
        cy.get('[data-qa="signup-name"]').type(login)
        cy.get('[data-qa="signup-email"]').type(email)
    }
    submitSignup() {
        cy.get('[data-qa="signup-button"]').click()
    }
    login(email, password) {
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
    }
    submitSignup() {
        cy.get('[data-qa="signup-button"]').click()
    }
    submitLogin() {
        cy.get('[data-qa="login-button"]').click()
    }
    verifyLoginError() {
        cy.contains('Your email or password is incorrect!').should('be.visible')
    }
    verifySignupError() {
        cy.contains('Email Address already exist!').should('be.visible')
    }
}

export const loginPage = new LoginPage()
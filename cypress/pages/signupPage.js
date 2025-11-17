class SignupPage {
    verifyPrefilled(login, email) {
        cy.get('[data-qa="name"]').should('have.value', login);
        cy.get('[data-qa="email"]').should('have.value', email);
    }
    fillPersonalInfo(password, day, month, year) {
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="days"]').select(day);
        cy.get('#months').select(month);
        cy.get('[data-qa="years"]').select(year);
        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }
    fillAddressInfo(user) {
        cy.get('[data-qa="first_name"]').type(user.firstName);
        cy.get('[data-qa="last_name"]').type(user.lastName);
        cy.get('[data-qa="company"]').type(user.company);
        cy.get('[data-qa="address"]').type(user.address1);
        cy.get('[data-qa="address2"]').type(user.address2);
        cy.get('[data-qa="country"]').select(user.country);
        cy.get('[data-qa="state"]').type(user.state);
        cy.get('[data-qa="city"]').type(user.city);
        cy.get('[data-qa="zipcode"]').type(user.zip);
        cy.get('[data-qa="mobile_number"]').type(user.phone);
    }
    submitForm() {
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    }
}

export const signupPage = new SignupPage()
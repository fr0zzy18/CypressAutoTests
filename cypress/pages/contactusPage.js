class ContactUsPage {
    visit() {
        cy.contains('Contact us').click()
        cy.contains('Get In Touch').should('be.visible')
    }
    fillForm(login, email, subject, lorem, file){
        cy.get('[data-qa="name"]').type(login)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type(subject)
        cy.get('[data-qa="message"]').type(lorem)
        cy.get('[name="upload_file"]').selectFile(file)
    }
    submitForm(){
        cy.get('[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.get('#form-section').find('.btn.btn-success').click()
        cy.contains('Features Items').should('be.visible')
    }
}

export const contactUsPage = new ContactUsPage()
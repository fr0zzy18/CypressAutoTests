/// <reference types="cypress" />

describe('Contact us form', ()=>{
    const userlogin = 'cypresstestlogin'
    const loremipsum = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const email = 'cypresstestemail@mailbox.ua'
    const subject = 'Tester'
    it('Contact us', ()=>{
         cy.visit('/')
         cy.contains('Features Items').should('be.visible')
         cy.contains('Contact us').click()
         cy.contains('Get In Touch').should('be.visible')
         cy.get('[data-qa="name"]').type(userlogin)
         cy.get('[data-qa="email"]').type(email)
         cy.get('[data-qa="subject"]').type(subject)
         cy.get('[data-qa="message"]').type(loremipsum)
         cy.get('[name="upload_file"]').selectFile('cypress/fixtures/testpicture.png')
         cy.get('[data-qa="submit-button"]').click()
         cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
         cy.get('#form-section').find('.btn.btn-success').click()
         cy.contains('Features Items').should('be.visible')
    })
})
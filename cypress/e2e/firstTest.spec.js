/// <reference types="cypress" />

describe('First test suite', ()=> {
    it('firts test', ()=>{
        cy.visit('/')
        cy.contains('Signup / Login').click()
        cy.get('[data-qa="signup-name"]')
    })
})
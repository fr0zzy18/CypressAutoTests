/// <reference types="cypress" />
import user from '../../fixtures/user.json'
import testData from '../../fixtures/testData.json'

const { contactUsPage } = require("../../pages/contactusPage")
const { homePage } = require("../../pages/homePage")

describe('Contact us form', ()=>{

    it('Contact us', ()=>{
        homePage.visit()
        contactUsPage.visit()
        contactUsPage.fillForm(user.login, user.email, testData.Subject, testData.lorem, 'cypress/fixtures/testpicture.png')
        contactUsPage.submitForm()
    })
})
class TestCasesPage {
    visit(){
        cy.contains('Test Cases').click()
        cy.contains('Below is the list of test Cases for you to practice the Automation').should('be.visible')
    }
}

export const testCasesPage = new TestCasesPage()
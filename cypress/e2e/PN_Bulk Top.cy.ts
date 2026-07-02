it.only('Bulk Top', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
        )
        it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

    it.only('Customers Screen')
    cy.get('#customersMenuItem').click()

    it.only('Bulk Upload')
    cy.get('#customerActionDropdown').click()
    cy.get('#btnBulkTopUps').click()
    cy.get('.upload-content > .btn').click()
    cy.get('.btn')
    cy.get('.modal-footer > div > .btn-primary').click()

})
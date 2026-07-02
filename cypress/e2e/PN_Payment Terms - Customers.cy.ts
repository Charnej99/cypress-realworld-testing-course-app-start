it.only('Payment Terms - Customers', function(){

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

    it.only('Add Customer Screen')
    cy.get('#customerActionDropdown').click()
    cy.get('#btnAddCustomer').click()

    it.only('Payment Terms')
    cy.get(':nth-child(19) > .dropdown > .btn > .filter-option > .filter-option-inner').click()



})

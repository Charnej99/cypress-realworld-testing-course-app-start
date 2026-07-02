    it.only('Logistics Feature', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

    it.only('Logistics Feature')
        cy.get('#logisticsMenuItem').click()

    it.only('Driver Management')
        cy.get('#driverManagementMenuItem').click()
        cy.wait(500)

    it.only('Filter Form')
    cy.get('.input-group > .form-control').type('Nkosinati')
    cy.get(':nth-child(2) > .btn').click()

    it.only('Add Driver Feature')
    cy.get('#btnLogisticsDriverAddDriver').click()
    cy.get('#firstNameInput').type('Dylan')
    cy.get('#lastNameInput').type('Jakes')
    cy.get('#employeeNumberInput').type('Test123456')
    cy.get('#phoneNumberInput').type('0789878765')
    cy.get('.btn-success')

    


})
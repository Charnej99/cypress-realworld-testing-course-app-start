    it.only('Pricing Feature', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
        )
        it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

    it.only('Pricing Feature Screen')
        cy.get('#pricingMenuItem').click()

        it.only('Delivery Pricing')
        cy.wait(500)
        cy.get('#deliveryPricingMenuItem').click()

        it.only('Delivery Pricing Product Base Price Screen')
        cy.wait(500)
        cy.get('#deliveryPricingProductBasePriceMenuItem').click()
        cy.get('.input-group > .form-control').type('DIESEL 0.005% SULPHAR')
        cy.get('.btn')
       
        cy.get('.filter-option').click()
        cy.get('.bs-searchbox > .form-control').type('17C').click()
        cy.get('li.active > .dropdown-item').click()
        cy.get('.mt-3 > :nth-child(2) > .btn').click()
        
        it.only('Actions Table - Edit')
        cy.get('#actionDropdownDataTable').click()
        cy.get('#dropdownMen1')
        cy.get('#actionDropdownDataTableMenu > :nth-child(1) > .dropdown-item').click()
     

        cy.get('#effectiveDateSelect').click()
       
       }) 

       
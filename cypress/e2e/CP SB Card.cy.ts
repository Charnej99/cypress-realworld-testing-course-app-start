it.only('SB Card Login OTP', function(){

    cy.visit('https://devsbcardscustomerportal-hkerdudfc9dafbgz.westeurope-01.azurewebsites.net/Account/Login')

    it.only('allows users to enter email')
        cy.get('#username').type("charnej@zonketech.co.za")
        cy.get('.btn').click()
        cy.wait(1500)

    it.only('allows users to enter otp')
        cy.get('.mb-3').click()
        cy.get('#username').type('6532147745').click()
        cy.get('.btn').click()
    
    it.only('allows users to edit profile')
    cy.get('.mb-5 > .btn').click()

    it.only('allows users to edit bio')
    cy.get('#bioInput').click().type('Test 123 Test 123').click()
    cy.get('.mb-5 > .btn').click()

    it.only('Allows users to add contact information')
    cy.get('.btn.mt-4').click()

    
   
    
    
})



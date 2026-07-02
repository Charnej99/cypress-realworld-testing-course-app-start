it.only('SB Card Login', function(){

    cy.visit('https://devsbcardsadminportal-e4fpcpd8ccajf8hy.westeurope-01.azurewebsites.net/Account/Login?ReturnUrl=%2FPortal%2FHome%2F#/')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("")
        it.only('allows users to login')
        cy.get('.btn').click()
      cy.wait(1500)
        
    it.only('allows users to enter the OTP')
    // Enter OTP for SB Card Management Admin Portal
            cy.get('#username').type('6532147745').click()
            cy.get('.btn').click()
    
    it.only('Allows users to click on Actions')
    cy.get(':nth-child(1) > :nth-child(6) > #actionDropdownDataTable > #dropdownMen1').click()
    cy.get('#btnViewProfileCustomer_0').click()


})




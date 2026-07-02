it.only('SB Card Login OTP', function(){

    cy.visit('https://devsbcardsadminportal-e4fpcpd8ccajf8hy.westeurope-01.azurewebsites.net/Account/Login?ReturnUrl=%2FPortal%2FHome%2F#/')

        it.only('allows users to enter OTP')
        cy.get('#username').type('119869')
        cy.get('.btn').click()
        

})
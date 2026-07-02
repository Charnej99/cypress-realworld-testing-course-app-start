it.only('Payment Terms - Accounts', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
        )
        it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()
})
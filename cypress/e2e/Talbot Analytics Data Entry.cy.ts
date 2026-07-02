it.only('Talbot Analytics Data Entry', function(){

    cy.visit('https://talbotanalytics.com/Account/Login')

it.only('Allows user to log in')
cy.get('#username').type('Test.User')

it.only('Allows user to enter the password')
cy.get('#password').type('System.Test@101')

it.only('Allows users to click on Login')
cy.get('.btn').click()

it.only('Allows users to click on a feature in the navigation box')
cy.get('#side-menu > :nth-child(2) > :nth-child(1)').click()
cy.wait(500)
cy.get('.mm-active > .nav-second-level > :nth-child(1) > :nth-child(1) > .menu-arrow').click()
cy.wait(1500)
cy.get('.mm-active > .nav-third-level > :nth-child(3) > a').click()


})

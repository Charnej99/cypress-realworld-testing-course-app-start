it.only('Product Management Screen', function(){

    cy.visit('https://ztpos-cfcxdea4hsb0gdbj.westeurope-01.azurewebsites.net/#')

it.only('Allows users to navigate to the Product Management screen')
cy.get('[href="ProductsManagement"]').click()

it.only('Allows users to Add Product')
cy.get('.w-100 > .btn').click()
cy.wait(1000)

it.only('Allows users to add the product name')
cy.get('#productNameInput').type('CypressTest')
cy.wait(1000)

it.only('Allows users to add rhe descirption of the product added')
cy.get('#descriptionTextArea').type('First Cypress Test')
cy.wait(1500)

it.only('Allows users to add the barcode of the product added')
cy.get('#barcodeInput').click().type('1234567')

it.only('Allows users to add the amount of Stock on hand')
cy.get('#stockOnHandInput').click().type('20')

it.only('Allows users to add the cost price for product')
cy.get('#costPriceInput').click().type('R20')

it.only('Allows users to add the selling price')
cy.get('#sellingPriceInput').click().type('R27,50')

it.only('Allows users to select the Vat Included Switch')
cy.get('#vatIncludedSwitch').click()

})
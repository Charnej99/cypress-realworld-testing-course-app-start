it.only('Orders Feature', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

it.only('Orders Delivery Feature')
cy.get('#ordersMenuItem').click()
cy.get('#orderDeliveryMenuItem').click()
cy.get('[data-v-ec55f38e=""][data-v-4d76affe=""] > .mb-4 > .p-3 > .pb-4 > .form-control').click().type('ZonkeTech Test')
cy.get('[data-v-ec55f38e=""][data-v-4d76affe=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click()

})
it.only('Delivery Feature Screen', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

it.only('Test Orders Delivery Feature')
cy.get('#ordersMenuItem').click()
cy.get('#orderDeliveryMenuItem').click()

it.only('Allows users to search for name of delivery order of choice')
cy.get(':nth-child(1) > .dropdown > .btn > .filter-option').click()
cy.get(':nth-child(1) > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
cy.get(':nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('ZonkeTech')
cy.get(':nth-child(1) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item').click()
cy.get('[data-v-ec55f38e=""][data-v-4d76affe=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click()
cy.wait(500)

it.only('Allows users to search for order status of their choice ')
cy.get(':nth-child(2) > :nth-child(2) > .dropdown > .btn > .filter-option').click()
cy.get(':nth-child(2) > :nth-child(2) > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
cy.get(':nth-child(2) > :nth-child(2) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('Accepted')
cy.get('#orderStatusFilterSelect')
cy.get(':nth-child(2) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item').click()
cy.get('[data-v-ec55f38e=""][data-v-4d76affe=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click()
cy.wait(500)

it.only('Select Date Filter')
cy.get('#customerDateFilter1').click()

it.only('Allows user to click on Actions for selected search')
cy.get(':nth-child(1) > :nth-child(14) > #actionDropdownDataTable > #dropdownMen1').click()

it.only('View Order Action')
cy.get('#btnOrdersViewOrder_0').click()
cy.get('#dropdownMen1').click()

it.only('View Order Screen Tracking History Action')
cy.get('#btnViewOrderViewTrackingHistory').click()
cy.get('#trackingHistoryModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

it.only('Download Action View Order Screen')
cy.get('#dropdownMen1').click()
cy.get('#btnViewOrderDownload').click()

it.only('Cancel Action View Order Screen ')
cy.get('#dropdownMen1').click()
cy.get('#btnViewOrderCancel').click()
cy.get('#cancelOrderModal > .modal-dialog > .modal-content > .modal-footer > .btn-outline-danger').click()


})
it.only('Collection Feature Screen', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

it.only('Test Collection Order Feature')
cy.get('#ordersMenuItem').click()
cy.get('#ordersCollectionMenuItem').click()

it.only(' Allows Users to search for collection order using Filter By')
cy.get('[data-v-ec55f38e=""][data-v-6aace852=""] > .mb-4 > .p-3 > .pb-4 > .form-control').type('ZonkeTech Pty Ltd')
cy.get('[data-v-ec55f38e=""][data-v-6aace852=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click()

it.only(' Allows users to search by order status')
cy.get('[data-v-ec55f38e=""][data-v-6aace852=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click
cy.get('.row > :nth-child(2) > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
cy.get('.row > :nth-child(2) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('Ready For Collection')
cy.get('#orderStatusFilterSelect')
cy.get(':nth-child(2) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item > .text').click()
cy.get('[data-v-ec55f38e=""][data-v-6aace852=""] > .mb-4 > .mt-3 > :nth-child(2) > .btn').click()

it.only('Collection Orders Actions')
cy.get('#actionDropdownDataTable').click()
cy.get('#btnOrdersViewOrder_0').click()

})

it.only('Ex Tank Feature Screen', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login')
    
     
    it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

        it.only('Test Ex Tank Order Feature')
        cy.get('#ordersMenuItem').click()
        cy.get('#ordersExTankMenuItem').click()
        cy.get('[data-v-ec55f38e=""][data-v-2d2dfbb8=""] > .mb-4 > .p-3 > .pb-4 > .form-control').type('Ubunutu')
        cy.get('.btn')

        it.only('Ex Tank Screen Actions Add Order')
        cy.get('.w-100 > .dropdown > #dropdownMen1').click()
        cy.get('#btnOrdersAddOrder').click()
        cy.get('[data-v-ec55f38e=""][data-v-774fa433=""] > .mb-4 > .p-3 > .input-group > .form-control').type('ZonkeTech Test')
        cy.get('[data-v-ec55f38e=""][data-v-774fa433=""] > .mb-4 > .row > :nth-child(2) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        
        cy.get('#createOrderForExTankModal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(2) > .form-control').type('TestCyp')
        cy.get('#expectedDateOfDeliverySelect').click()
        cy.get('[data-date="1743724800000"]').click()
      
        
        cy.get(':nth-child(4) > .dropdown > .btn > .filter-option').click()
        cy.get(':nth-child(4) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('Terminal 4 (1A)')
        cy.get(':nth-child(4) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item').click()
        cy.get(':nth-child(4) > :nth-child(6) > input').click().type('90')
        cy.get(':nth-child(6) > .form-control').click().type('Vuyo')
        cy.get(':nth-child(7) > .form-control').click().type('Opel')
        cy.get(':nth-child(8) > .form-control').click().type('NP200')
        cy.get(':nth-child(9) > .form-control').click().type('CYP34566')
        cy.get('#createOrderForExTankModal > .modal-dialog > .modal-content > .modal-footer > .btn-success').click()
        cy.get('#createOrderForExTankModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
})
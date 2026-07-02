/// <reference types= "cypress" />
it.only('valid email login test', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
        )
it.only('allows users to enter email')
cy.get('#username').type("demo@demo.co.za")

it.only('allows users to enter password')
cy.get('#password').type("Test123@")

it.only('allows users to login')
cy.get('.btn').click()

    })

it.only('invalid email login test', function(){

        cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
            )
    it.only("does NOT allow an invalid email address", () => {})
    cy.get('#username').type("demo")
    cy.get('#password').type("Test123@")
    cy.get('.btn').click()
    cy.get(".alert-danger").should("exist")

    })

it.only('Admin Portal Features', function(){

    cy.visit('https://cheuf32sxx.us-east-1.awsapprunner.com/Account/Login'
        )
        it.only('allows users to enter email')
        cy.get('#username').type("demo@demo.co.za")
        
        it.only('allows users to enter password')
        cy.get('#password').type("Test123@")
        
        it.only('allows users to login')
        cy.get('.btn').click()

        // it.only('Dasboard Screen')
        // cy.get('.mm-active > a > span').click()

        // it.only('Customers Screen')
        // cy.get('#side-menu > :nth-child(3) > a').click()

        // it.only('Orders')
        // cy.get('#ordersMenuItem').click()

        // it.only('Delivery Orders Screen')
        // cy.get('.router-link-active').click()
        // cy.get(':nth-child(4) > .nav-second-level > :nth-child(1) > a').click()
    
        // it.only('Collection Order Screen')
        // cy.get('.router-link-active').click()
        // cy.get(':nth-child(4) > .nav-second-level > :nth-child(2) > a').click()

        // it.only('Ex Tank Order Screen')
        // cy.get('.router-link-active').click()
        // cy.get(':nth-child(4) > .nav-second-level > :nth-child(3) > a').click()

        // it.only('Product Feature')
        // cy.get('#side-menu > :nth-child(5) > a > span').click()

        it.only('Pricing Feature Screen')
        cy.wait(5000)
        cy.get('#pricingMenuItem').click()

        it.only('Delivery Pricing Screen')
        cy.wait(500)
        cy.get('#deliveryPricingMenuItem').click()

        // it.only('Delivery Pricing Product Base Price Screen')
        // cy.get('.router-link-active').click()
        // cy.get('#deliveryPricingProductBasePriceMenuItem')

        // it.only('Delivery Pricing Customer Grrop Pricing for Zone Screen')
        // cy.get('.router-link-active').click()
        // cy.get('#deliveryPricingCustomerGroupPricingForZoneMenuItem')

        // it.only('Collection Pricing')
        // cy.get('#collectionPricingMenuItem')

        // it.only('Collection Depot Pump Pricing')
        // cy.get('#depotPricingManagementMenuItem')

        // it.only('Collection Discount Group')
        // cy.get('#customerDiscountGroupsMenuItem')

        // it.only('Collection Depot Special Pricing')
        // cy.get('#customerDepotDiscountGroupsMenuItem')

        // it.only('Depot Management')
        // cy.get('#depotManagementMenuItem > span')

        // it.only('User Management')
        // cy.get('#userManagementMenuItem').click()

        // it.only('OTA Module Screen')
        // cy.get('#otaMenuItem')

        // it.only('Fuel Dispensement Capture Screen')
        // cy.get('#fuelDispensementCaptureMenuItem')

        // it.only('Logistics Screen')
        // cy.get('#logisticsMenuItem')

        // it.only('Drivers Management Screen')
        // cy.get('#driverManagementMenuItem')

        // it.only('Vehicle Management Screen')
        // cy.get('#vehicleManagementMenuItem')

        // it.only('System Screen')
        // cy.get('#systemMenuItem').click()

        // it.only('Reason for Delivery Failure Management Screen')
        // cy.get('#reasonsForDeliveryFailureManagementMenuItem')

        // it.only('Shipping Areas Management Screen')
        // cy.get('#areasManagementMenuItem')

        // it.only('Shipping Zones Management Screen')
        // cy.get('#zonesManagementMenuItem')

        // it.only('Shipping Zones Management Screen')
        // cy.get('#zonesManagementMenuItem')

        // it.only('Collection Orders Validation Configurations ')
        // cy.get('#collectionOrdersValidationConfigurationsMenuItem')

               
    })

  
const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const TGDynamicTable = require("../../pages/TGDynamicTablePage");

const tgDynamicTable = new TGDynamicTable()


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})


Then(/^the user should see the "([^"]*)" heading$/, (text) => {
	tgDynamicTable.getInventoryHeading().should('have.text', text).and('be.visible')
})


Then(/^the user should see the table with the headers below$/, (dataTable) => {
	
    const header = dataTable.rawTable.flat()

    tgDynamicTable.getTableHeaders().each(($el, index) => {
        cy.wrap($el).should('have.text', header[index])
    })
})


Then(/^the user should see the table with the rows below$/, (dataTable) => {
	
    const tableRow = dataTable.rawTable.flat()

    tgDynamicTable.getTableRows().find('> td').each(($el, index) => {
        cy.wrap($el).should('have.text', tableRow[index])
    })
})


Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	tgDynamicTable.getButton(button).should('be.enabled')
})


Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	tgDynamicTable.getTotalAmount().should('have.text', total)
    .and('be.visible')
})


When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	tgDynamicTable.clickButton(button)
})


Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {
	tgDynamicTable.getModalTitle().should('have.text', heading)
    .and('be.visible')
})


Then(/^the user should see the "([^"]*)" label$/, (label) => {
	tgDynamicTable.getModalLabels().each(($el, index) => {
        cy.wrap($el).should('be.visible')
    })
})


Then(/^the user should see the "([^"]*)" input box is enabled$/, (input) => {
	tgDynamicTable.getModalInputs().each(($el) => {
        cy.wrap($el).should('be.enabled')
    })
})


Then(/^the user should not see the "([^"]*)" modal$/, (modal) => {
	tgDynamicTable.getModal().should('not.exist')
})


Then(/^the user enters the quantity as "([^"]*)"$/, (input) => {
	tgDynamicTable.getModalInputs().parent()
    .find('#quantity')
    .type(input)
})


Then(/^the user enters the product as "([^"]*)"$/, (input) => {
	tgDynamicTable.getModalInputs().parent()
    .find('#product')
    .type(input)
})


Then(/^the user enters the price as "([^"]*)"$/, (input) => {
    tgDynamicTable.getModalInputs().parent()
    .find('#price')
    .type(input)
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	
    const tableRow = dataTable.rawTable.flat()

    tgDynamicTable.getLastRow().find('> td').each(($el, index) => {
        cy.wrap($el).should('have.text', tableRow[index])
    })

});












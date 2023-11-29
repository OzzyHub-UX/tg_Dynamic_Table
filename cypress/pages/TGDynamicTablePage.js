class TGDynamicTable {

    getInventoryHeading(){
        return cy.get('.mb-2 > h1')
    }

    getTableHeaders(){
        return cy.get('#product_table th')
    }

    getTableRows(){
        return cy.get('#product_table tbody tr')
    }

    getAddProductBtn(){
        return cy.get('#add_product_btn')
    }

    getTotalAmount(){
        return cy.get('#total_amount')
    }

    clickAddButton(){
        return this.getAddProductBtn().click()
    }

    getModal(){
        return cy.get('.modal-card')
    }

    getModalTitle(){
        return cy.get('#modal_title')
    }

    getModalXButton(){
        return cy.get('.delete')
    }

    clickXButton(){
        return this.getModalXButton().click()
    }

    getModalLabels(){
        return cy.get('#name_form label')
    }

    getModalInputs(){
        return cy.get('#name_form input')
    }

    getModalSubmitButton(){
        return cy.get('#submit')
    }

    clickModalSumbitBtn(){
        return this.getModalSubmitButton().click()
    }

    clickButton(button){
        switch (button) {
            case 'ADD PRODUCT':
                return this.clickAddButton()
            case 'SUBMIT':
                return this.clickModalSumbitBtn()
            case 'X':
                return this.clickXButton()
            default:
                throw new Error(button + ' not found')
        }
    }

    getButton(button){
        switch (button) {
            case 'ADD PRODUCT':
                return this.getAddProductBtn()
            case 'SUBMIT':
                return this.getModalSubmitButton()
            case 'X':
                return this.getModalXButton()
            default:
                throw new Error(button + ' not found')
        }
    }

    getLastRow(){
        return cy.get('#product_table tbody tr:nth-child(4) ')
    }

}

module.exports = TGDynamicTable
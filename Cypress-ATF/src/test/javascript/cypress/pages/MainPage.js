/// <reference types="cypress" />

export class MainPage {

    // Actions

    visitPage() {
        cy.visit('/')
    }

    enterPasswordLengthValue(value) {
        this.passwordLengthField().type(value)
    }

    enterNumericDigitsValue(value) {
        this.numericDigitsField().type(value)
    }

    enterCapitalLettersValue(value) {
        this.capitalLettersField().type(value)
    }

    enterSpecialCharactersValue(value) {
        this.specialCharactersField().type(value)
    }

    clickGenerateButton() {
        this.generateButton().click()
    }

    enterPasswordOptions(options) {
        options.hashes().forEach((option) => {
            this.enterPasswordLengthValue(option.length)
            this.enterNumericDigitsValue(option.digits)
            this.enterCapitalLettersValue(option.capitals)
            this.enterSpecialCharactersValue(option.special)
        })
    }

    // Assertions

    checkTitle() {
        cy.title().should('eq', 'Password Generator')
        return this
    }

    checkPasswordGenerated() {
        this.passwordOutField().should('not.be.empty')
    }

    // Components

    passwordLengthField() {
        return cy.get('#totallength')
    }

    numericDigitsField() {
        return cy.get('#numbers')
    }

    capitalLettersField() {
        return cy.get('#caps')
    }

    specialCharactersField() {
        return cy.get('#non-an-chars')
    }

    generateButton() {
        return cy.get('#button')
    }

    showPasswordButton() {
        return cy.get('#show-password')
    }

    passwordOutField() {
        return cy.get('#out')
    }
    
}
/// <reference types="cypress" />

import 'cypress-axe'

export class MainPage {

    // Actions
    visitPage() {
        cy.visit('/')
    }

    enterPasswordLengthValue(value) {
        this.passwordLengthField().type(value).type('{enter}')
    }

    enterNumericDigitsValue(value) {
        this.numericDigitsField().type(value).type('{enter}')
    }

    enterCapitalLettersValue(value) {
        this.capitalLettersField().type(value).type('{enter}')
    }

    enterSpecialCharactersValue(value) {
        this.specialCharactersField().type(value).type('{enter}')
    }

    clickGenerateButton() {
        this.generateButton().click()
    }

    clickShowPasswordButton() {
        this.showPasswordButton().click()
    }

    enterPasswordOptions(options) {
        options.hashes().forEach((option) => {
            this.enterPasswordLengthValue(option.length)
            this.enterNumericDigitsValue(option.digits)
            this.enterCapitalLettersValue(option.capitals)
            this.enterSpecialCharactersValue(option.special)
        })
    }

    closeAlert() {
        cy.on('window:confirm', () => true)
    }

    // Assertions
    checkTitle() {
        cy.title().should('eq', 'Password Generator')
        return this
    }

    checkPasswordGenerated() {
        this.clickShowPasswordButton()
        this.passwordOutField().invoke('val').should('not.be.empty')
    }

    numbersFieldIsReset() {
        this.numericDigitsField().invoke('val').should('eq', '0')
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
        return cy.get('button#button')
    }

    showPasswordButton() {
        return cy.get('#show-password')
    }

    passwordOutField() {
        return cy.get('#out')
    }

    // Accessability
    setupAxe() {
        cy.injectAxe()
    }

    checkA11y() {
        cy.checkA11y()
    }

}
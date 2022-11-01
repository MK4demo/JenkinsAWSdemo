import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MainPage } from '../../pages/MainPage'

const mainPage = new MainPage()


Given('I navigate to the password generator page', () => {
    mainPage.visitPage()
})

Then('I should see the correct title', () => {
    mainPage.checkTitle()
})

When('I enter the following password options:', (options) => {
    mainPage.enterPasswordOptions(options)
})

And('I click the generate button', () => {
    mainPage.clickGenerateButton()
})

Then('A password is generated', () => {
    mainPage.checkPasswordGenerated()
})

When('I enter more digits than password length', () => {
    mainPage.enterPasswordLengthValue(8)
    mainPage.enterNumericDigitsValue(9)
})

And('I close the error message', () => {
    mainPage.closeAlert()
})

Then('The digits field should have 0 digits', () => {
    mainPage.numbersFieldIsReset()
})
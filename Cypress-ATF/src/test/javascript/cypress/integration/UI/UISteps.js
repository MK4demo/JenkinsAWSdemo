import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {MainPage} from '../../pages/MainPage'

const mainPage = new MainPage()


Given('I navigate to the password generator page', ()=>{
    mainPage.visitPage()
})

Then ('I should see the correct title', () => {
    mainPage.checkTitle()
})

When ('I enter the following password options:', (options) => {
    mainPage.enterPasswordOptions(options)
})

And ('I click the generate button', () => {
    mainPage.clickGenerateButton()
})

Then ('A password is generated', () => {
    mainPage.checkPasswordGenerated()
})
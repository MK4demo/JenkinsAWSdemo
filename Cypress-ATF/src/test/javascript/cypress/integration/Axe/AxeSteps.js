import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MainPage } from '../../pages/MainPage'

const mainPage = new MainPage()


Given('I am on the main page', () => {
    mainPage.visitPage()
})

Then('I should see no accessibility issues', () => {
    mainPage.setupAxe()
    mainPage.checkA11y()
})


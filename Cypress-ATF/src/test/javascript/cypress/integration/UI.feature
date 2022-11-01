@UITest @all
Feature: Password generator UI tests

    Scenario: Navigating to the password generator page
        Given I navigate to the password generator page
        Then I should see the correct title

    Scenario: Generating a weak password
        Given I navigate to the password generator page
        When I enter the following password options:
            | length | digits | capitals | special |
            | 6      | 0      | 0        | 0       |
        And I click the generate button
        Then A password is generated

    Scenario: Generating a strong password
        Given I navigate to the password generator page
        When I enter the following password options:
            | length | digits | capitals | special |
            | 16     | 4      | 4        | 4       |
        And I click the generate button
        Then A password is generated

    Scenario: Entering too many digits for length
        Given I navigate to the password generator page
        When I enter more digits than password length
        And I close the error message
        Then The digits field should have 0 digits

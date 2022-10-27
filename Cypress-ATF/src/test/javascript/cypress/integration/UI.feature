@UITest @all
Feature: Password generator UI tests

    Scenario: Navigating to the password generator page
        Given I navigate to the password generator page
        Then I should see the correct title
    # check for another elemenet here

    Scenario: Generating a strong password
        Given I navigate to the password generator page
        When I enter the following password options:
            | length | digits | capitals | special |
            | 16     | 4      | 4        | 4       |
        And I click the generate button
        # Then A password is generated
# password with 16 chars etc.


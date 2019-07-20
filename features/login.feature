Feature: Login to production
    In order to perform successful Login
    As a user
    I want to enter correct username and password

    Scenario: In order to verify login to Bankingsite on Production

        Given I go to "http://somebankingsite/banking/#/login"
        When I found the title as "Protractor practice website - Banking App"
        Then I click on CustomerLogin Button
        Then I select the value as "Gurjeet Bains" from the list
        Then I click on Login
        Then Welcome Page should show login as "Gurjeet Bains"


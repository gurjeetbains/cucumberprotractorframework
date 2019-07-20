Feature: Login to production
    In order to perform successful Login
    As a user
    I want to enter correct username and password

    Background:
        Given user navigates to facebook website
        When user validates the homepage title

    @prod
    Scenario: In order to verify login to facebook on Production

        Then user entered "username" username
        Then user entered "password" password
        Then user validates the captcha image
        |Country | Code | 
        | India  | 101  |
        | USA    | 102  |
        | UK     | 103  |
        Then user should "loginstatus" successfully logged in


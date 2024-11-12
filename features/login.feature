Feature: Login Page Test

    This test suite will consists of the test cases related to Login Page

Scenario: Check the login is working as expected with valid credentials
Given I am on the login page
When I enter username as "test7lYM@gmail.com" and password as "Test@123"
Then I should be able to see the dashboard page



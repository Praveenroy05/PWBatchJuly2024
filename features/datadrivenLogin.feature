Feature: Dat Driven Login Page Test

    This test suite will consists of the test cases related to Login Page

Scenario Outline: Check the login is working as expected with different credentials
Given I am on the login page
When I enter username as "<username>" and password as "<password>"
Then I should be able to see the dashboard page

Examples:
    | username | password | 
    | test7lYM@gmail.com | Test@123 |
    | testnHNk@gmail.com | Test@123 |



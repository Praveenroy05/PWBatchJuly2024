Feature: Dashboard page test

    This file consists of all the test cases related to dashboard page

Background: Login into the application
Given I am on the login page
When I enter username as "test7lYM@gmail.com" and password as "Test@123"
Then I should be able to see the dashboard page


Scenario: View a product details
Given I am on the dashboard page
When I click on a product "IPHONE 13 PRO"
Then I should see the "IPHONE 13 PRO" details page



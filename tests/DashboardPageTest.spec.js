const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

const data = JSON.parse(JSON.stringify(require("../utils/logindata.json")))

let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username,data.userpassword)
    
})

test("Add a product to cart",{tag : ['@smoke', '@regression']}, async ()=>{
    await dashboardPage.searchAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartConfirmation).toHaveText("Product Added To Cart")

})

test("View a product details",{tag :['@regression']}, async ()=>{
    await dashboardPage.searchAndViewProductDetails(data.productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(data.productName)

})


// BDD Cucumber framework

// Screenshot, Github, Jenkins
// Visual Testing using playwright

// npx playwright test
// npx playwright test --grep @smoke
// npx playwright test --grep @regression


//Clone the repository

// git clone https://github.com/Praveenroy05/PlaywrightAug24.git - clone the repository in local system

// git status  - This will provide all the latest changes made in the local system

// git branch - This will return us the current branch that we are on in the local system

// git checkout -b <branch name> EX: - git checkout -b "newbeanch"

// git checkout master - moving from one branch to another

// git pull - To pull all the latest code/changes from remote git to local


/**
 * 1. To check the status - git status
 * 2. To add all the changes to the local git first - git add .
 * 3. To commit all the changes  - git commit -m "added login page test script"
 * 4. To push to code to github/bitbucket - git push
 * 
 */


// BDD Cucumber framework

// Page layer - initiliase the locators and methods
// .feature file - Gherkin language

// Feature - Writing the test suite name
// Scenario - Provide the scenario name
// Given - Precondition
// When - Action
// Then - Expected result
// And - Additional precondition/Action/Validation
// Scenario Outline : Data driven testing
// Examples : Provide the data for the scenario outline
// Background : Precondition for the feature

/*
Scenario : Check the login is working as expected with valid credentials
Steps: 
Given I am on the login page
When I enter a username and password
And I click on login button
Then I have logged in successfully
And I should be on the home page

*/

// StepDefinition


// Step 1 - Install the cucumber 
// Step 2 - Page Layer (This we have already covered in POM)
// Step 3 - Feature file (.feature)
// Step 4 - Step Definition (This is where we will write the code to execute the steps)
// STep 5 - Run the test case (npx cucumber-js) npx cucmber-js filepath


//Features - features - StepDefittion
// support


// hooks - 
// Before - Before each scenario - We can lunch browser and create 
// After - After each scenario 
// BeforeAll - Before all scenarios
// AfterAll - After all scenarios
// BeforeStep - Before running each steps of all the test cases or scenarios
// AfterStep - After running each steps of all the test cases or scenarios





// Scrolling
// 1. Scroll down by pixels
// 2. Scroll up by pixels
// 3. Scroll down to the bottom of the page
// 4. Scroll up to the top of the page
// 5. Scroll down to the element

// codegen 
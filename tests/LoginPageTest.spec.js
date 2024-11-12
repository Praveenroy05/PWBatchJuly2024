const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')


const username = "test7lYM@gmail.com"
const userpassword = "Test@123"
const invalidPassword = "Test123"
const url = "https://rahulshettyacademy.com/client"

    // launch the url
    // fill the username and password 
    // click on the login button
    // validate if we are on the home page or not
let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})


test("Check login with valid credentials" , async ()=>{

    await loginPage.validLogin(username, userpassword)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    
})

test("Check login with invalid credentials" , async ()=>{
   
    await loginPage.invalidLogin(username, invalidPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
    
})
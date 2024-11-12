const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')

// JSON->json String -> JS object
const datas = JSON.parse(JSON.stringify(require("../utils/datadriven.json")))


    // launch the url
    // fill the username and password 
    // click on the login button
    // validate if we are on the home page or not
let loginPage
for(const data of datas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})


test(`Check login with valid credentials for ${data.name}` , async ()=>{

    await loginPage.validLogin(data.username, data.userpassword)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    
})

test(`Check login with invalid credentials for ${data.name}` , async ()=>{
   
    await loginPage.invalidLogin(data.username, data.invalidPassword)
    await expect(loginPage.errorMessage).toHaveText("Incorrect email or password.")
    
})
}

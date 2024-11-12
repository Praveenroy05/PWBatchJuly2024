const { Given, When, Then, setDefaultTimeout } =  require("@cucumber/cucumber")

setDefaultTimeout(60*1000)
const {expect} = require('@playwright/test')

const {LoginPage}  = require('../../pageObjects/LoginPage')

const playwright  = require('@playwright/test')

const url = "https://rahulshettyacademy.com/client"

Given('I am on the login page', async function () {
   const browser = await playwright.chromium.launch({
    headless: false,
   })
   const context = await browser.newContext()
   this.page = await context.newPage() 
   this.pageLogin = new LoginPage(this.page)
   this.pageLogin.launchURL(url)

  });


  When('I enter username as {string} and password as {string}', async function (username, password) {
    await this.pageLogin.validLogin(username, password)
  });

  Then('I should be able to see the dashboard page', async function () {
    await expect(this.pageLogin.homePageIdentifier).toBeVisible()
  });



   
const { Given, When, Then, setDefaultTimeout } =  require("@cucumber/cucumber")

setDefaultTimeout(60*1000)
const {expect} = require('@playwright/test')

const {DashboardPage}  = require('../../pageObjects/DashboardPage')


Given('I am on the dashboard page', async function () {
    this.dashboardPage = new DashboardPage(this.page)
    await expect(this.dashboardPage.products.locator("b").first()).toBeVisible()

  });

  When('I click on a product {string}', async function (productName) {
    await this.dashboardPage.searchAndViewProductDetails(productName)  });

  Then('I should see the {string} details page', async function (productName) {
    await expect(this.dashboardPage.viewPageProductName).toHaveText(productName)
    
  });
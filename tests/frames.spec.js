//import {test, expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

test("Frame handling using PW", async function add({page}){

    // frameLocator(locators) - This method is use to identify the frame element

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByRole('link', {name:'All Access plan'}).first().click()
    const textResult = await framePage.locator(".text h2").textContent()
    console.log(textResult)
    await page.waitForTimeout(5000)
    await page.getByRole('link', {name:'Home'}).click()
    await page.waitForTimeout(5000)



})

const {Before, AfterStep, Status, After} = require("@cucumber/cucumber")

const playwright = require('@playwright/test')

Before(async function(){
    const browser = await playwright.chromium.launch({
        headless: false,
    })
    const context  = await browser.newContext()
    this.page = await context.newPage()

})

AfterStep(async function({result}){
    if (result.status === Status.PASSED) {
        const screenshot = await this.page.screenshot()
        this.attach(screenshot.toString('base64'), 'base64:image/png')
        console.log("Screenshot attached")
    }
})

After(async function(){
    console.log("I a the last to run")
})

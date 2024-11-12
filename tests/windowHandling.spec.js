// We have to launch a url
// click on  the link which will open the new tab
// We have to move the focus to the new tab to do any actions on the newly tab/window
// Again if we have to do some kind of action on the orginally opened page, we have to move the focus from newly opened tab/window to orignal tab/window


// Child window automation using playwright

const {test, expect} = require('@playwright/test')

test("Child window handling", async ({browser})=>{ // browser

// browser context 
// new page    

const context = await browser.newContext()
const page = await context.newPage()

await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const page1 = context.waitForEvent('page')
await page.locator("[class*='blinking']").click() // - page
const newPage = await page1
await newPage.getByRole('heading', {name:'Documents request'}).waitFor()
const result = await newPage.getByRole('heading', {name:'Documents request'}).isVisible()
expect(result).toBeTruthy()
await page.locator("[name='username']").fill("Testing")
await page.waitForTimeout(5000)

})

test("Child window handling using Promise", async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const [newPage1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("[class*='blinking']").click()
    ])
    await newPage1.getByRole('heading', {name:'Documents request'}).waitFor()
    const result = await newPage1.getByRole('heading', {name:'Documents request'}).isVisible()
    expect(result).toBeTruthy()
    await page.locator("[name='username']").fill("Testing")
    await page.waitForTimeout(5000)
})







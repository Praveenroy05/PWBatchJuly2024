const {test, expect, request} = require('@playwright/test')

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}

const productname = "IPHONE 13 PRO"
const emailid = "test7lYM@gmail.com"
let token
// Hooks
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data:payload
    })

    const loginResponseJSON = await loginResponse.json()
   // console.log(await loginResponse.json())
    token = await loginResponseJSON.token
    console.log(token)


})



test("Place order and validate it",{tag : '@API'}, async ({page})=>{

    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    // await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    // await page.locator("#userPassword").fill("Test@123")
    // await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.getByRole('button', {name: 'Home'})).toBeVisible()
    const products = await page.locator("div.card-body")
    // allTextContents() - This is a method which is returing the text value from multiple elements.
    const productTexts = await products.locator("b").allTextContents()
    await console.log(productTexts)
    const count = await products.count()

    for(let i=0; i<count ; i++){
        // first, last, nth()
        const productText = await products.nth(i).locator("b").textContent()
        if(productText === productname){
           await products.nth(i).getByRole('button', {name:' Add To Cart'}).click()
           break
        }
    }
    await expect(page.locator("#toast-container")).toBeVisible()
    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole('button', {name:'Checkout'}).click()
    //pressSequentially() - which is use to type the character by character in the input field.

    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    const dropdownvalues = page.locator(".ta-results button")
    await dropdownvalues.first().waitFor()
    const countOfDropDownValues = await dropdownvalues.count()

    for(let i=0; i<countOfDropDownValues; i++){
        const countryText = await dropdownvalues.nth(i).textContent()
        if(countryText === " India"){
            await dropdownvalues.nth(i).click()
            break
        }
    }
    await page.getByText("Place Order ").click()
    await expect(page.locator(".hero-primary")).toHaveAttribute('class','hero-primary')
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderID) // | |
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await page.locator("tbody").waitFor()
    const rows= page.locator("tbody tr")
    const rowscount = await rows.count()
    for(let i=0; i<rowscount; i++){
        const orderIDText = await rows.nth(i).locator("th").textContent()
        if(orderID.includes(orderIDText)){
            await rows.nth(i).locator("button").first().click()
            break
        }
    }
    const orderSummaryOrderID = await page.locator("div.col-text").textContent()
    expect(orderID.includes(orderSummaryOrderID)).toBeTruthy()
})
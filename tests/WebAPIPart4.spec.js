const {test, expect, request} = require('@playwright/test')

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayLoad = {orders: [{country: "China", productOrderedId: "6581ca399fd99c85e8ee7f45"}]}

const productname = "IPHONE 13 PRO"
const emailid = "test7lYM@gmail.com"
let token
let orderID
// Hooks
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data:payload
    })

    const loginResponseJSON = await loginResponse.json()
    token = await loginResponseJSON.token
    console.log(token)

    const orderresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
        {
            data : orderPayLoad,
            headers : {
                "authorization" : token
            }
        })

        const orderresponseJson = await orderresponse.json()
        orderID = await orderresponseJson.orders[0]
        console.log(orderID)
    
})


// test 1, test2, test3

test("Place order and validate it",{tag : '@API'}, async ({page})=>{

    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")

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



// Login page
// Dashboard page
// cart page
// orders page
// order summary page


// Page object model - 

// Page layer

// Login page
// Locators and methods (validLogin() - )

// async function validLogin(){
//     userEmail.fill()
//     userPassword.fill()
// }

// Test Layer

// Test case - 
// assertion

// data - to store the data in json
// 

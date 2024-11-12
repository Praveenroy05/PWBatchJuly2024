const {test, expect} = require('@playwright/test')

test("Login into the application", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //await page.locator('id=username').fill("rahulshettyacademy")
    await page.fill('id=username',"rahulshettyacademy")
    await page.locator('//input[@name="password"]').fill("learning")
   // await page.locator("#signInBtn").click()
    await page.click("#signInBtn",{timeout:20000})
    // isVisible() - Element is visible in the page or not
    // waitFor() - which use to wait for the locator/element to appear in the page
    await page.locator('.navbar-brand').nth(1).waitFor()
    const homePage = await page.locator('.navbar-brand').nth(1).isVisible()
    expect(homePage).toBeTruthy()
    await expect(page.locator('.navbar-brand').nth(1)).toBeVisible({timeout:10000})

})






















test("Checkbox, Radio button and Drop down", async function({page}){

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator(".form-group>>[name='name']").fill("Test")
    await page.fill("[name='email']", "EMail")
    await page.fill("#exampleInputPassword1", "Password")
    // check() - which is use to check/click the checkbox or radio button
    await page.locator("#exampleCheck1").check()
    await page.locator("//label[@for='inlineRadio2']").check()
    // selectOption("Value") - which is use to select the value from the static drop down
    await page.locator("#exampleFormControlSelect1").selectOption("Male")


})

test("Drop down", async ({page})=>{
   await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/174")
   await page.locator("#Contact_CountryCode").selectOption("Brazil")
   await page.locator("#Contact_CountryCode").selectOption({value:"US"})
   await page.locator("#Contact_CountryCode").selectOption({label:"Brazil"})
   await page.locator("#Contact_CountryCode").selectOption({index:5})
})

test("Mouse opertions", async function({page}){
await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
//dblclick() - Which is use to perform double click on an element
page.on("dialog", dialog => {
    console.log(dialog.message())
    dialog.dismiss()
})
await page.locator("text=Double-Click Me To See Alert").dblclick()
await page.locator("text=right click me").click({button:"right"})
await page.waitForTimeout(3000)

// Drag and Drop
//dragTo(locator)
await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
await page.locator(".ui-draggable").dragTo(page.locator(".ui-droppable"))
await page.waitForTimeout(3000)


})

// Upload the file using playwright

test("Upload a file", async ({page})=>{

    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    // setInputFiles(Path of the file) -  This method is use to upload the file in app
    await page.locator("[name='upfile']").setInputFiles("C:\\Users\\prave\\OneDrive\\Desktop\\Docker.txt")  
    await page.locator("[value='Press']").click()
   // const result = await page.locator('text=File Upload Results').isVisible()
    // expect(result).toBeTruthy()
    await expect(page.locator('text=File Upload Results')).toHaveText("File Upload Results")

})

// mouse hover

test("Mouse hover", async function({page}){
    //hover() - Which is use to hover on an element
    await page.goto("https://www.spicejet.com/")
    await page.locator("text=Add-ons").nth(0).hover()
    await expect(page.locator("[data-testid='test-id-International Connection Baggage']")).toBeVisible()
})

test("Get By Locators and dynamic drop down", async ({page})=>{

    const productName= "Nokia Edge"
    const checkBox = page.getByLabel("I Agree to the ")
    const homePage = page.getByRole("link", { name: 'ProtoCommerce', exact: true })
    const products = page.locator(".card-body")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("learning")
    await checkBox.check()
    await expect(checkBox).toBeChecked()
    await page.getByRole("button").click()
    await expect(homePage).toBeVisible()
    await page.locator(".card-body a").first().waitFor()
    const titles = await page.locator(".card-body a").allTextContents()
    console.log(titles)
    const count = products.count()
    for(let i=0; i<count; i++){
        const title = products.nth(i).locator("a").textContent()
        if(title === productName){
            await products.nth(i).locator("button").click()
            break
    }

}
await page.waitForTimeout(5000)


})


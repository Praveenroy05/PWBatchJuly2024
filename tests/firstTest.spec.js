const {test, expect} = require('@playwright/test')

test("First Test", {tag : '@smoke'}, async function({browser}){
    // Your test code here
    // Async-await
    // Step1 - await Launch the browser  - 
    // Step2 - await Fill the username and password - 2s
    // Step3 - await Click the login button
     //await 

     // Creating an instance of a browser - It will open a broswer
     // Create a page inside the browser instance - Where we can do our actions in terms of automation
     
     const context = await browser.newContext() // fresh browser instance
     const page = await context.newPage() // This will create a fresh page inside a browser
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/") // launch the url inside the browser

    // tagname[attribute='value']

     await page.locator("input[name='username']").fill("rahulshettyacademy")
     await page.locator("input[name='password']").fill("learning")
     await page.locator("input[type='submit']").click()
//     expect(page.title()).toContain("ProtoCommerce")
     await expect(page).toHaveTitle("ProtoCommerce")



});

// page - Which is use to create browser and page automatically

test("First Test case with Page Fixture", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  //  await page.locator("div.form-group input#username").fill("rahulshettyacademy")
    await page.locator('id=username').fill("rahulshettyacademy")
    await page.locator("//input[@id='password']").fill("learning")
    await page.locator("input[type='submit']").click()
    await expect(page).toHaveTitle("ProtoCommerce")
    expect(await page.title()).toContain("ProtoCommerce")

})


// How do we write the locators in PW-JS
// cssSelector , xpath

/**  

1. If an element is having id
//#id- [#username] 
tagName#id [input#username]

2. If class as a peoperty is available
.className- [.form-control] 
 tagName.className[select.form-control]

3. By using any property of the element
[attribute='value'] - [name='username']

 OR tagName[attribute = 'value']
 input[name='username']

4. Parent- child element
tagName>>childTagName
div.form-group>>input#username

tageName childTagName
div.form-group  input#username

5. By writing the locators based on the text:

['text=value'] - ['text=Username:']


6. xpath

Syntax - //*[@attribute='value'] OR //tagname[@attribute='value']

// //input[@id='username'] OR //*[@id='username']

7. id - ['id=username']

8. If the locator is able to identify multiple element then to make it work for a single element we have 2 ways to make it

1. by using nth(index)
nth(0)
page.locator('id=username').nth(1) -- THis will identify our first matching element in the website

2. first() or last()

page.locator('id=username').first()
page.locator('id=username').last()

*/





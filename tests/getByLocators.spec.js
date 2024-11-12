// Locators in Playwright - xpath and cssSelector

/*

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/

const {test, expect} = require('@playwright/test')

test("Playwright special locators", async ({page})=>{

    const checkbox= page.getByLabel("Check me out if you Love IceCreams!")
    const student = page.getByLabel("Student")
    const successMessage = page.locator(".alert.alert-success")
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator("[name='name']").first().fill("Name")
    await page.locator("[name='name']").first().clear()
    await page.locator("[name='email']").fill("Email")
    await page.getByPlaceholder("Password").fill("password")
    await checkbox.check()
    await expect(checkbox).toBeChecked()
    await page.getByLabel("Gender").selectOption("Female")
    await student.check()
    await expect(student).toBeChecked()
    await page.getByRole("button", {name:'Submit'}).click()
    // Get the text and validate it
    // textContent() - This is a method which is use to get the text from an element
    // allTextContents() - This is a method which is use to get the text from all the matching elements
    const success = await successMessage.textContent()
    //await expect(success).toBe("Success! The Form has been submitted successfully!.")
    await expect(success).toContain("Success")
    await expect(successMessage).toContainText("The Form has been submitted successfully!.") 

})

test("Testing Child Window", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const page1 = context.waitForEvent('page')
    await page.locator(".blinkingText").first().click()
    const newPage = await page1
    await newPage.getByRole('heading', {name: 'Documents request'}).waitFor()
    const result =  await newPage.getByRole('heading', {name: 'Documents request'}).isVisible()
    expect(result).toBeTruthy()

})


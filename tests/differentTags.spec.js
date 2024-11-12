const {test, expect} = require('@playwright/test')



// only
// skip
// fail
// slow
// describe

test.skip("Skip", async ()=>{

    const array = [{name : "Test"}, {name:"Test1"}]

    for(const data of array){
        console.log(data.name)
    }
})

test("Only", async ()=>{

    const array = [{name : "Test"}, {name:"Test1"}]

    for(const data of array){
        console.log(data.name)
    }
})

test("Slow", async ({page})=>{
    test.slow();

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    await page.locator("#userPasswor").fill("Test@12")
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.getByRole('button', {name: 'Home'})).toBeVisible()
})

test.fail("Fail", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("test7lYM@gmail.com")
    await page.locator("#userPassword").fill("Test@12")
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.getByRole('button', {name: 'Home'})).toBeVisible()
})


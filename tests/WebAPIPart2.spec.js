const {test, expect} = require('@playwright/test')


test.beforeAll(async ()=>{
    await console.log("Before All")
}) // will run once before running any test cases
test.beforeEach(async () => {
    await console.log("Before Each")

}) // will run 1 time before running each test cases
test.afterEach(async () => {
    await console.log("After Each")
}) 
test.afterAll(async () => {
    await console.log("After All")

})

test("One", async ({page})=>{
    await console.log("Test 1")
})

test("Two", async ({page})=>{
    await console.log("Test 2")
})

test("Three", async ({page})=>{
    await console.log("Test 3")
})
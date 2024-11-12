const {test, expect} = require('@playwright/test')

//Screenshot

// Full Page Screenshot
test('full page screenshot', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client")
    await page.screenshot({path: 'Fullpagescreenshot.png'})

})


// Element specific screenshot

test('Partial page screenshot', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#login").screenshot({path: 'loginScreenshot.png'})

})

// Visual Testing

// Visual testing is used to compare the current state of the page with the expected state of the page
test.only('Visual testing', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client")
    expect(await page.screenshot()).toMatchSnapshot("visual.png")
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot("visual1.png")
    await page.keyboard.press('PageDown');
    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot("visual1.png")

 

})

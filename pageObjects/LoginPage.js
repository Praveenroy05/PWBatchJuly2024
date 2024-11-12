class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.username = page.getByPlaceholder("email@example.com")
        this.password = page.locator("#userPassword")
        this.loginBtn = page.getByRole('button', {name: 'Login'})
        this.homePageIdentifier = page.getByRole('button', {name: 'Home'})
        this.errorMessage = page.locator("#toast-container")
    }

    async launchURL(url)
    {
        await this.page.goto(url)
    }

    async validLogin(username, password)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
        await this.homePageIdentifier.waitFor()
    }

    async invalidLogin(username, password)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
        await this.errorMessage.waitFor()
    }

}


module.exports = {LoginPage}


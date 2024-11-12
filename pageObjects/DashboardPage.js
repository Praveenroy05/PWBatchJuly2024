class DashboardPage{

    constructor(page){
        this.page = page
        this.products = page.locator("div.card-body")
        this.addToCartConfirmation  = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div h2")
        this.continueShoppingBtn = page.locator(".continue")

    }

    async searchAndAddToCart(productname){
        const count = await this.products.count()
        for(let i=0; i<count ; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productname){
               await this.products.nth(i).getByRole('button', {name:' Add To Cart'}).click()
               break
            }
        }
        await this.addToCartConfirmation.waitFor()
    }


    async searchAndViewProductDetails(productname){
        const count = await this.products.count()
        for(let i=0; i<count ; i++){
            const productText = await this.products.nth(i).locator("b").textContent()
            if(productText === productname){
               await this.products.nth(i).getByRole('button', {name:' View'}).click()
               break
            }
        }
        await this.continueShoppingBtn.waitFor()
    }
}

module.exports = {DashboardPage}
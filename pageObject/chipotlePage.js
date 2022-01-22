const { By,until } = require("selenium-webdriver");

module.exports= class MyChipotlePage{
    driver;
    url;
    constructor(myDriver,myUrl){
        this.driver=myDriver
        this.url=myUrl
    }
    /* Selectors*/
    homepagesignInbutton=By.xpath('//img[@alt="Sign In"]')
    emailinputfield=By.xpath('//input[@aria-label="Enter email address"]')
    passwordinputfield=By.xpath('//input[@aria-label="Enter password"]')
    signIn=By.xpath('//div[@class="button sign-in-button block size-md type-primary"]')
    verifyErrorMessage=By.xpath('//div[text()="Please try again later."]')

    /* Methods*/

    async navigateToChipotleHomePage(){
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.homepagesignInbutton))
    }
    
    async clickSignInButton(){
        let signInButton= await this.driver.findElement(By.xpath('//img[@alt="Sign In"]'))
        signInButton.click()
        jest.setTimeout(9000) 
        
    }

}
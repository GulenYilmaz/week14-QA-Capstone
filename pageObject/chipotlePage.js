const { By,until } = require("selenium-webdriver");
jest.setTimeout(50000)
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
        await this. driver.manage().window().maximize()
        await this.driver.get(this.url)
        jest.setTimeout(9000)
        await this.driver.wait(until.elementLocated(this.homepagesignInbutton))
     
    }
    
    async clickSignInButton(){
        let signInButton= await this.driver.findElement(this.homepagesignInbutton)
        signInButton.click()
        await this.driver.wait(until.elementLocated(this.emailinputfield))
        jest.setTimeout(9000)
        
    }
    async clickEmailInputField(){
        let emailButton= await this.driver.findElement(this.emailinputfield)
        emailButton.click()
        await emailButton.sendKeys("userstory6chipotle@gmail.com")
        await this.driver.sleep(2000)
        
    }
    async clickPasswordInputField(){
        let passwordButton= await this.driver.findElement(this.passwordinputfield)
        passwordButton.click()
        await passwordButton.sendKeys("Userstory6*")
        await this.driver.sleep(2000)
        
    }
    async clicksingInButton(){
        let SignIn= await this.driver.findElement(this.signIn)
        SignIn.click()
        await this.driver.sleep(5000)
        
    }
    async verifyNegatifTest(){
        let verifymessage= await this.driver.findElement(this.verifyErrorMessage)
     
        let verifymessageText =await verifymessage.getText()
     

        expect(verifymessageText).toContain("Please try again later.")

        await this.driver.sleep(5000)
        
    }

}
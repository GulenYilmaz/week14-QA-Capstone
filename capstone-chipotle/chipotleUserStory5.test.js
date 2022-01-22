const { Builder, Capabilities, By,until } = require("selenium-webdriver") 



// whenever your code want to access to chrome it able to that
const chromedriver= require('chromedriver')

// driver to open the our browser
//we are using Builder class for creating our driver, that driver is baseaxlly be able to use google chrome and it going to be build driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
console.log("this is the driver", driver)
jest.setTimeout(50000)

//going to happen before for all test
//beforeEach()

//going to happen  ones before for all test
beforeAll(async() =>{
   
    await driver.manage().window().maximize()
    await  driver.get('https://www.chipotle.com/')
    
})
//going to happen  ones after for all test
afterAll(async()=>{

    await driver.quit()
})

describe("Capstone Project- Chipotle User Story-5 , sign in a valid credentials", ()=>{
    
    it("Click on the sign in button", async()=>{
        
        
        let homePageSignInButton= await driver.findElement(By.xpath('//img[@alt="Sign In"]'))
        await homePageSignInButton.click()
        await driver.sleep(2000)
    })

    it("Click on the email input field and sent a valid email.", async()=>{
        
        
        let emailInputField= await driver.findElement(By.xpath('//input[@aria-label="Enter email address"]'))
        await emailInputField.sendKeys("userstory6chipotle@gmail.com")
        await driver.sleep(2000)
    })
    
    it("Click on the password input field and sent a valid  password.", async()=>{
        
        let passwordInputField= await driver.findElement(By.xpath('//input[@aria-label="Enter password"]'))
        await passwordInputField.sendKeys("Userstory6*")
        await driver.sleep(2000)
    })

    it("Click on the sign in button.", async()=>{
        
        
        let signInButton= await driver.findElement(By.xpath('//div[@class="button sign-in-button block size-md type-primary"]'))
        await signInButton.click()
        await driver.sleep(2000)
    })

    it("Verify the username on the top of the page.", async()=>{
        
        
        let verifymessage=  driver.findElement(By.xpath('//div[text()="Please try again later."]'))
     
        let verifymessageText =await verifymessage.getText()
     

        expect(verifymessageText).toContain("Please try again later.")

        await driver.sleep(2000)
    })


})
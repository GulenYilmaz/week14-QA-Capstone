const { Builder, Capabilities, By } = require("selenium-webdriver") 



// whenever your code want to access to chrome it able to that
const chromedriver= require('chromedriver')

// driver to open the our browser
//we are using Builder class for creating our driver, that driver is baseaxlly be able to use google chrome and it going to be build driver
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
console.log("this is the driver", driver)


//going to happen before for all test
//beforeEach()

//going to happen  ones before for all test
beforeAll(async() =>{
    jest.setTimeout(5000)
    await  driver.get('https://www.chipotle.com/')
})
//going to happen  ones after for all test
afterAll(async()=>{
    jest.setTimeout(5000)
    await driver.quit()
})

describe("Capstone Project- Chipotle User Story-5 , sign in a valid credentials", ()=>{
    
    it("Click on the sign in button", async()=>{
        
        
        let homePageSignInButton= await driver.findElement(By.xpath('//h6[@aria-level="6"]'))
        await homePageSignInButton.click()
        await driver.sleep(2000)
    })

    it("Click on the email input field and sent a valid email.", async()=>{
        
        
        let emailInputField= await driver.findElement(By.xpath('//input[@aria-label="Enter email address"]'))
        await emailInputField.sendKeys("userstory7@gmail.com")
        await driver.sleep(2000)
    })
    
    it("Click on the password input field and sent a valid  password.", async()=>{
        
        let passwordInputField= await driver.findElement(By.xpath('//input[@aria-label="Enter password"]'))
        await passwordInputField.sendKeys("UserStory7*")
        await driver.sleep(2000)
    })

    it("Click on the sign in button.", async()=>{
        
        
        let signInButton= await driver.findElement(By.xpath('//div[@class="button sign-in-button block size-md type-primary"]'))
        await signInButton.click()
        await driver.sleep(2000)
    })

    it("Verify the username on the top of the page.", async()=>{
        
        
        let verifyUserName= await driver.findElement(By.xpath('//h6[@class="customer-greeting"]'))
     
        let verifyUserNameText =await verifyUserName.getText()
     

        expect(verifyUserNameText).toContain("USERSTORY7")

        await driver.sleep(2000)
    })


})
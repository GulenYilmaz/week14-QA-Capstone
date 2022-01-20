// I need to to some require stuff first
//we need selenium --> Builder and Capabilities for our driver
//                 --> By for our selectors and our automation
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
    await  driver.get('https://redoliverestaurant.com/')
})
//going to happen  ones after for all test
afterAll(async()=>{
    jest.setTimeout(5000)
    await driver.quit()
})

describe("Capstone Project- Red Olive User Story-6, select the Apptizers from the MENU section ", ()=>{
    
    it("Click on the MENU button.", async()=>{
        
        
        let bookTitleInputField= await driver.findElement(By.xpath('//*[@id="title"]'))
        await bookTitleInputField.sendKeys("The Connected Parent: Real-Life Strategies for Building Trust and Attachment ")
        await driver.sleep(2000)
    })

    it("See the dropdown MENU list", async()=>{
        
        
        let pictureURLInputField= await driver.findElement(By.xpath('//*[@id="img"]'))
        await pictureURLInputField.sendKeys("https://images-na.ssl-images-amazon.com/images/I/410sxwWFEUL._SX322_BO1,204,203,200_.jpg")
        await driver.sleep(2000)
    })
    
    it("Select the Appetizers.", async()=>{
        
        let pictureRateRadioButton= await driver.findElement(By.xpath('//*[@id="four"]'))
        await pictureRateRadioButton.click()
        await driver.sleep(2000)
    })


    it("Verify the Breakfast menu on the middle of the page.", async()=>{
        
        
        let verifyBookname= await driver.findElement(By.xpath('//*[@id="books-container"]/div[11]/p'))
     
        let verifyBookNameText =await verifyBookname.getText()
     

        expect(verifyBookNameText).toContain("The Connected Parent: Real-Life Strategies for Building Trust and Attachment")

        await driver.sleep(2000)
    })


})
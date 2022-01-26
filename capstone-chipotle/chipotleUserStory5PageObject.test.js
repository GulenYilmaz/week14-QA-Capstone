const chromedriver= require('chromedriver')
const { Builder, Capabilities, By,until } = require("selenium-webdriver") 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const CHIPOTLE=require ('../pageObject/chipotlePage')
const MyCHIPOTLEPage=new CHIPOTLE (driver,'https://www.chipotle.com/')
jest.setTimeout(9000) 

// beforeAll(async() =>{
// await MyRedOlivePage.navigateToredoliveHomePage()
// })
// afterAll(async ()=>{
// await MyRedOlivePage.driver.quit()
// })
jest.setTimeout(500000)
test("chipotle page object test", async()=>{
    
    await MyCHIPOTLEPage.navigateToChipotleHomePage()
    await MyCHIPOTLEPage.clickSignInButton()
    await MyCHIPOTLEPage.clickEmailInputField()
    await MyCHIPOTLEPage.clickPasswordInputField()
    await MyCHIPOTLEPage.clicksingInButton()
    await MyCHIPOTLEPage.verifyNegatifTest()

    await MyCHIPOTLEPage.driver.quit()
    })
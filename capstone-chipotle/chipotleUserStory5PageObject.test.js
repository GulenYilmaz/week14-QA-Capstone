const chromedriver= require('chromedriver')
const { Builder, Capabilities, By,until } = require("selenium-webdriver") 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const CHIPOTLE=require ('../pageObject/chipotlePage')
const MyCHIPOTLEPage=new CHIPOTLE (driver,'https://www.chipotle.com/')

test("chipotle page object test", async()=>{
await MyCHIPOTLEPage.navigateToChipotleHomePage()
})
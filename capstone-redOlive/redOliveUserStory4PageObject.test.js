const chromedriver= require('chromedriver')
const { Builder, Capabilities, By,until } = require("selenium-webdriver") 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const REDOLIVE=require ('../pageObject/redOlivePage')
const MyRedOlivePage=new REDOLIVE (driver,'https://redoliverestaurant.com/')



// beforeAll(async() =>{
// await MyRedOlivePage.navigateToredoliveHomePage()
// })
// afterAll(async ()=>{
// await MyRedOlivePage.driver.quit()
// })

test("redolive page object test", async()=>{
await MyRedOlivePage.navigateToredoliveHomePage()
await MyRedOlivePage.clickMenuButton()
await MyRedOlivePage.driver.quit()
})
// I need to to some require stuff first
//we need selenium --> Builder and Capabilities for our driver
//                 --> By for our selectors and our automation
const { Builder, Capabilities, By,until } = require("selenium-webdriver") 









const chromedriver= require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

console.log("this is the driver", driver)


jest.setTimeout(50000)


beforeAll(async() =>{
    await driver.manage().window().maximize()
    await  driver.get('https://redoliverestaurant.com/')
})

afterAll(async()=>{
    jest.setTimeout(5000)
    await driver.quit()
})

describe("Capstone Project- Red Olive User Story-6, select the Breakfast from the MENU section ", ()=>{
    
    it("Click on the MENU button.", async()=>{
        
        
        let MENUbutton=  driver.findElement(By.xpath('//a[@href="https://redoliverestaurant.com/breakfast-menu/"]'))
        MENUbutton.click()
        jest.setTimeout(9000) 
    })

    it("Click on the breakfast specialities button.", async()=>{
        
        
        let breakfastSpecialitiesbutton=  driver.findElement(By.xpath('//h5[@class="et_pb_toggle_title"]'))
        breakfastSpecialitiesbutton.click()
        jest.setTimeout(9000) 
    })
    
    it("Click on the Gyro Skillet button.", async()=>{
        
        
        let GyroSkilletbutton=  driver.findElement(By.xpath('//p[@class="fdm-item-title"]'))
        GyroSkilletbutton.click()
        jest.setTimeout(9000) 
    })

    it("Verify the Gyro Skillet price  on the right of the page.", async()=>{

         jest.setTimeout(9000) 
         let breakfastMenuList=  driver.findElement(By.xpath('//h1[@class="et_pb_module_header"]'))
         jest.setTimeout(9000) 
         let breakfastMenuListText = breakfastMenuList.getAttribute('class')
         jest.setTimeout(9000) 
         console.log(breakfastMenuListText)
         expect(breakfastMenuListText).toBe("et_pb_module_header")
         jest.setTimeout(9000)
    })


})
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
    
    it("Click on the Gallery button.", async()=>{
        
        
        let Gallerybutton=  driver.findElement(By.xpath('//a[text()="Gallery"]'))
        Gallerybutton.click()
        jest.setTimeout(9000) 
    })

    

    it("Verify the unch-burgers-coneys-wraps-sandwiches url.", async()=>{
        
    
    let URLgaleryList=  driver.getCurrentUrl()
    jest.setTimeout(500000)
    console.log(URLgaleryList)

    let steakSandwichImage= driver.findElement(By.xpath('//h1[@style="text-align: center;"]'))
    jest.setTimeout(500000)
    let steakSandwichImageText=steakSandwichImage.getText()
    jest.setTimeout(500000)
    expect(steakSandwichImageText).toBeTruthy();
    jest.setTimeout(9000)
    })


})
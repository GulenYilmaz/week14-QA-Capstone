const { By,until } = require("selenium-webdriver");

module.exports= class MyRedOlivePage{
    driver;
    url;
    constructor(myDriver,myUrl){
        this.driver=myDriver
        this.url=myUrl
    }
    /* Selectors*/
    menubutton=By.xpath('//a[@href="https://redoliverestaurant.com/breakfast-menu/"]')
    
    breakfastSpecialitiesButton=By.xpath('//h5[@class="et_pb_toggle_title"]')
    
    gyroskilletbutton=By.xpath('//p[@class="fdm-item-title"]')
    
    breakfastmenulist=By.xpath('//h1[@class="et_pb_module_header"]')

    /* Methods*/

    async navigateToredoliveHomePage(){
        
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.menubutton))
    }
    async clickMenuButton(){
        let MENUbutton= await this.driver.findElement(By.xpath('//a[@href="https://redoliverestaurant.com/breakfast-menu/"]'))
        MENUbutton.click()
        jest.setTimeout(9000) 
        
    }
}
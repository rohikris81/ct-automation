var data = require('../data/furnogamy.js');

describe('Verification of Landing Page - Furnogamy', ()=>{

    it('To verify page title', async ()=>{
           await browser.url('https://www.furnogamy.com/');
           await expect(browser).toHaveTitle('Furnogamy');
    });

    it('To verify logo exist on page', async ()=> {
        await browser.url('https://www.furnogamy.com/');
        await expect($('.logo')).toExist();
    });

    it('To verify navigation links', async()=>{
        await browser.url('https://www.furnogamy.com/');
        await expect($('=Gallery')).toExist();
        await expect($('=Contact Us')).toExist();
        await expect($('=About')).toExist();
    });

    it('To verify Page landing for About Navigation', async()=> {
        await browser.url('https://www.furnogamy.com/');
        await $('=About').click();
        await expect(browser).toHaveUrl('https://www.furnogamy.com/aboutus#about_us_dt71u');
       // await expect($('data.txt_abouttitle')).toBeDisplayed();
    });

    it('To verify meta elements on landing page', async()=> {
        await browser.url('https://www.furnogamy.com/');
      console.log(await $('//meta[@name="description"]').getAttribute("content"));
    });
    
});

describe('Verification of Landing Page - Furnogamy', ()=>{

    it('To verify page title', async ()=>{
           await browser.url('https://www.furnogamy.com/');
           await expect(browser).toHaveTitle('Furnogamy');
    });

    it('To verify logo exist on page', async ()=> {
        await browser.url('https://www.furnogamy.com/');
        const mylogo = $('.logo');
        await expect(mylogo).toExist();
    });

    it('To verify navigation links', async()=>{
        await browser.url('https://www.furnogamy.com/');
       // const expectedlinks = ["About","Contact Us", "Gallery"];
        await expect($('=About')).toExist();
        await expect($('=Contact Us')).toExist();
        await expect($('=Gallery')).toExist();
    });

    it('To verify Page landing for About Navigation', async()=> {
        await browser.url('https://www.furnogamy.com/');
        await $('=About').click();
        await expect(browser).toHaveUrl('https://www.furnogamy.com/aboutus#about_us_dt71u');
        await expect($('h2=About')).toBeDisplayed();
    });

    it('To verify meta elements on landing page', async()=> {
        await browser.url('https://www.furnogamy.com/');
      console.log(await $('//meta[@name="description"]').getAttribute("content"));
    });
    
});
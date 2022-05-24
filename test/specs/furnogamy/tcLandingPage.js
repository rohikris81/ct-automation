
import { myUrl, txt_title, link_gallery, link_contactUs, link_about, txt_abouttitle, url_aboutus, img_logo } from '../data/furnogamy.js';

describe('Verification of Landing Page - Furnogamy', ()=>{

    it('To verify page title', async ()=>{
           await browser.url(myUrl);
           await expect(browser).toHaveTitle(txt_title);
    });

    it('To verify logo exist on page', async ()=> {
        await browser.url(myUrl);
        await expect($(img_logo)).toExist();
    });

    it('To verify navigation links', async()=>{
        await browser.url(myUrl);
        await expect($(link_gallery)).toExist();
        await expect($(link_contactUs)).toExist();
        await expect($(link_about)).toExist();
    });

    it('To verify Page landing for About Navigation', async()=> {
        await browser.url(myUrl);
        await $(link_about).click();
        await expect(browser).toHaveUrl(url_aboutus);
        await expect($(txt_abouttitle)).toBeDisplayed();
    });

    it('To verify meta elements on landing page', async()=> {
        await browser.url(myUrl);
      console.log(await $(meta_description).getAttribute("content"));
    });
    
});
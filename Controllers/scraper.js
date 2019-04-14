async function crawl() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        //for puppeteer-heroku-buildpack
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        //for piping chromium console output to this NodeJS console
        dumpio: true,
        //for chromium GUI turning ON/Off
        headless: true,
    });

    const page = await browser.newPage();

    //extra parms ---> { waitUntil: 'networkidle2' }
    // await page.goto('https://s.click.aliexpress.com/e/WnYWgm4');

    await page.goto('https://m.aliexpress.com/item/32516620148.html');
    // document.getElementsByTagName("input").minPrice.value
    // document.getElementsByTagName("input").maxPrice.value
    // document.getElementsByClassName("detail-description")[0].innerHTML
    //ssh
    const dataPromise = await page.evaluate(() => {
        return Promise.resolve({
            // discountPrice: document.getElementById("j-sku-discount-price").innerHTML,
            // productName: document.getElementsByClassName("product-name")[0].innerHTML

            minPrice: document.getElementsByTagName("input").minPrice.value,
            maxPrice: document.getElementsByTagName("input").maxPrice.value,
            productName: document.getElementsByClassName("detail-description")[0].innerHTML,
        });
    });

    browser.close();
    return dataPromise;
}

//always use this crawl method with try catch
module.exports.crawl = crawl;
const puppeteer = require('puppeteer');
const request = require('request-promise-native');
const poll = require('promise-poller').default;

const siteDetails = {
  sitekey: '6LeoeSkTAAAAAA9rkZs5oS82l69OEYjKRZAiKdaF',
  pageurl: 'https://launches.hanon-shop.com/8725397561/checkouts/7978e70fb0926a6b5112740eb1b76122?key=7b359fe4183a781eb9f7d41f109bcc66&skip_shopify_pay=true'
}

var profile = {
    accEmail:"oscar.devos02@gmail.com",
    accPassword:"Baboon2015",
    useNewAddress:"Use a new address",
    firstName: "First Name",
    lastName:"Last Name",
    address:"123 street lane",
    //need to j1g address??
    city:"New York",
    addressLineTwo:"apartment 1",
    country:"USA",
    //need to figure out with data-code. ex:GB=UnitedKingdom
    usSize:"31379239272505",
    //need to figure out with value. ex: UK 6.5 : US 7.5 = 31379239174201
    state_province_region:"NeW York",
    zipCode: "00000",
    siteUrl:"https://launches.hanon-shop.com/collections/launch/products/nike-sb-dunk-high-premium-qs-p-rod-ct6680100"
}

var payment = {
    cardNumber:"OOOOOOOOOOOO",
    nameOnCard:"Full Name",
    exiprationDate:"MM / YY",
    ccv:"123"
};

const apiKey = ('eddb12d5ba17b42d917a5da98443651c'); //require ('');   if comming from the user data

const chromeOptions = {
  executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless:false, 
  slowMo:10,
  defaultViewport: null
};

(async function main() {
  const browser = await puppeteer.launch(chromeOptions);

  const page = await browser.newPage();

  await page.goto('https://launches.hanon-shop.com/collections/launch/products/nike-sb-dunk-high-premium-qs-p-rod-ct6680100#enterDraw');

  await page.click("#test1");

})()
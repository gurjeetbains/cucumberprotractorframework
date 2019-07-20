var {Given,When,Then,After} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var PropertiesReader = require('properties-reader');
var or = PropertiesReader('./features/properties/or.properties');

chai.use(chaiAsPromised);
var expect = chai.expect;

After(function(scenarioResult) {
    let self = this;
  
    if(scenarioResult.result.status === 'failed'){
	return browser.takeScreenshot()
	.then(function (screenshot) {
	    const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
        self.attach(decodedImage, 'image/png');
        console.log("scenarioResult  = ",scenarioResult.result.status);
    });
}
});

var base = require('../pages/BasePage.js');
Given(/^I go to "([^"]*)"$/, function (site) {

    base.go(site);
   
      
  });

When(/^I found the title as "([^"]*)"$/, function (title) {
   
    var actualTitle = base.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
});

var homePage = require('../pages/HomePage.js')
Then(/^I click on CustomerLogin Button$/, function () {
   

    homePage.goToCustomerLogin();


  });

  var customerLoginPage = require('../pages/CustomerLoginPage.js')
  Then(/^I select the value as "([^"]*)" from the list$/, function (string) {

    customerLoginPage.selectCustomer();

});


  Then(/^I click on Login$/, function () {

   
   return expect(customerLoginPage.doLogin().getCustomerText()).to.eventually.equal("Gurjeet Bains");
   
  });

  var transactionsPage = require('../pages/TransactionsPage')
  Then(/^Welcome Page should show login as "([^"]*)"$/, function (string) {
    
   return expect(transactionsPage.getCustomerText()).to.eventually.equal(string);
  });
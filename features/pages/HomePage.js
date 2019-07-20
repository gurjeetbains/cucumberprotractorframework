var PropertiesReader = require('properties-reader');
var or = PropertiesReader('./features/properties/or.properties');

module.exports = {


    elementsHomePage: {

        customerLoginButton: element(by.css(or.get('customerLoginBtn_CSS'))),
        bankManagerLoginButton: element(by.css(or.get('ankManagerLoginBtn_CSS')))

    },



    goToCustomerLogin: function() {

        var element = this.elementsHomePage;
      element.customerLoginButton.click();

    },

    goToBankManagerLogin: function() {

      
        var element = this.elementsHomePage;
      element.bankManagerLoginButton.click();

    },



};
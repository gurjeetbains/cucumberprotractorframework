var PropertiesReader = require('properties-reader');
var or = PropertiesReader('./features/properties/or.properties');

module.exports = {


    elementsCustomerLoginPage: {

        nameDropdown: element(by.model(or.get('custId_model'))).$(or.get('nameDropdown_CSS')),
        loginButton: element(by.xpath(or.get('loginBtn_xpath')))

    },



    selectCustomer: function() {

        var element = this.elementsCustomerLoginPage;
      element.nameDropdown.click();

    },

    doLogin: function() {

      
        var element = this.elementsCustomerLoginPage;
      element.loginButton.click();
      return require('./TransactionsPage.js')

    },



};
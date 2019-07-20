var PropertiesReader = require('properties-reader');
var or = PropertiesReader('./features/properties/or.properties');

module.exports = {


    elementsTransactionsPage: {

        nameHeader:element(by.binding('user')),
      

    },



    getCustomerText: function() {

        var element = this.elementsTransactionsPage;
        return element.nameHeader.getText();

    },

  



};
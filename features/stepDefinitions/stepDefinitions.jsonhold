var {Given,When,Then,Before,BeforeAll,After,AfterAll} = require('cucumber');


BeforeAll(function(){

    console.log("Inside Before All");

});

AfterAll(function(){

    console.log("Inside After All");

});

Before("@prod",function(){

    console.log("Inside Before hook");

});

After("@prod",function(){


    console.log("Inside After hook");
});


Given(/^user navigates to facebook website$/, function () {
    
    return console.log("@Given -- user navigates to facebook website");
  });

  When(/^user validates the homepage title$/, function () {
    return console.log("@When -- user validates the homepage title");
  });

  Then(/^user entered "([^"]*)" username$/, function (username) {
    return console.log("@Then -- user entered "+username+" username");
  });

  Then(/^user entered "([^"]*)" password$/, function (password) {
    return console.log("@Then -- user entered "+password+" password");
  });

  Then(/^user should "([^"]*)" successfully logged in$/, function (loginType) {
    return console.log("@Then -- user should "+loginType+" successfully logged in");
  });


  
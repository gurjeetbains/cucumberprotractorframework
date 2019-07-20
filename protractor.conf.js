var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./features/properties/prop.properties');

exports.config = {
    seleniumAddress: prop.get('seleniumAddress'),
    //directConnect: true,
    getPageTimeout: prop.get('pageTimeOut'),
    allScriptsTimeout: prop.get('scriptTimeOut'),
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities:{

      "browserName": 'chrome'
    },

    plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        reportName: 'CucumberJS Report',
        pageFooter: '<div><p>Created by Way2Automation</p></div>',
        pageTitle: 'CucumberJS with Protractor Report',
        customData:{
          title: 'Execution info',
          data:[

            {label: 'Project', value: 'CucumberJS Project'},
            {label: 'Release', value: '1.3.9'},
            {label: 'Tester', value: 'Gurjeet Bains'}

          ]


        },

        displayDuration: true
      }
  }],

    maxSessions: 2,

    specs: [prop.get('featurePath')],

    cucumberOpts: {
      // require step definitions
      tags: false,
      format:'json:.tmp/results.json',
      require: [
        prop.get('stepsPath') // accepts a glob
      ]
    }
  };
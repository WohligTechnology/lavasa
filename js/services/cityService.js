firstApp.service('cityService', function ($http, TemplateService, $state, toastr, $uibModal, NavigationService) {
  this.getCurrentCity = function (callback) {
    var returnObj = {};
    // returnObj.sublink1 = "http://testmumbaischool.sfanow.in";
    // returnObj.sublink2 = "http://testmumbaicollege.sfanow.in";
    // returnObj.sublink3 = "http://testhyderabadschool.sfanow.in";
    // returnObj.sublink4 = "http://testhyderabadcollege.sfanow.in";
    // returnObj.sublink5 = "http://testahmedabadschool.sfanow.in";
    // returnObj.sublink6 = "http://testahmedabadcollege.sfanow.in";
    // returnObj.mainLink = "test.sfanow.in";
    // returnObj.link1 = "testmumbai.sfanow.in";
    // returnObj.link2 = "testhyderabad.sfanow.in";
    // returnObj.link3 = "testahmedabad.sfanow.in";

    returnObj.year17 = '2017-18';
    returnObj.eventYear = '2018-19';
    returnObj.year15 = '2015-16';
    returnObj.year16 = '2016-17';

    returnObj.sublink1 = "https://mumbaischool.sfanow.in";
    returnObj.sublink2 = "http://mumbaicollege.sfanow.in";
    returnObj.sublink3 = "https://hyderabadschool.sfanow.in";
    returnObj.sublink4 = "http://hyderabadcollege.sfanow.in";
    returnObj.sublink5 = "http://ahmedabadschool.sfanow.in";
    returnObj.sublink6 = "http://ahmedabadcollege.sfanow.in";
    returnObj.mainLink = "sfanow.in";
    returnObj.link1 = "mumbai.sfanow.in";
    returnObj.link2 = "hyderabad.sfanow.in";
    returnObj.link3 = "ahmedabad.sfanow.in";
    if (window.location.host == 'localhost:8080') {
      returnObj.link1 = "localhost:8080";
      returnObj.mainLink = "localhost:8080";
    }
    callback(returnObj);
  };



});
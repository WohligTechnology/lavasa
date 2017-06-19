  firstApp.service('loginService', function ($http, TemplateService, $state, toastr, $uibModal, NavigationService) {
      this.loginGet = function (callback) {
          var getJ = $.jStorage.get("userDetails");
          var getData = {};
          if (getJ !== null) {
              getData.isLoggedIn = true;
              if ($.jStorage.get("userType") == "school") {
                  getData.sfaIdObj = getJ.sfaID;
                  getData.schoolName = getJ.schoolName;
              } else {
                  getData.sfaIdObj = getJ.sfaId;
                  if (getJ.atheleteSchoolName) {
                      getData.schoolName = getJ.atheleteSchoolName;
                      NavigationService.setUserSchool(getData.schoolName);
                  } else {
                      if (getJ.school) {
                          getData.schoolName = getJ.school.name;
                          NavigationService.setUserSchool(getData.schoolName);
                      }
                  }
              }
          } else {
              getData.isLoggedIn = false;
          }
          callback(getData);
      };
  });
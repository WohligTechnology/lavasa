// firstApp.controller('IndividualSelectionCtrl', function ($scope, TemplateService, errorService, $state, NavigationService, $stateParams, toastr, $timeout, loginService, selectService) {
//     $scope.template = TemplateService.changecontent("individual-selection");
//     $scope.menutitle = NavigationService.makeactive("Individual Selection");
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     $scope.selectService = selectService;
//     $.jStorage.set("sportsId", $stateParams.id);
//     $scope.selectService.sportsId = $stateParams.id;
//     $scope.ageGroup = [];
//     $scope.listOfAthelete = [];
//     $scope.selectAthlete = [];
//     $scope.maleAgeGrp = [];
//     $scope.femaleAgeGrp = [];
//     $scope.getEvents = [];
//     $scope.getAthletePerSchoolObj = {};
//     $scope.getEventObj = {};
//     $scope.getAthletePerSchoolObj.sfaid = '';
//     $scope.getAthletePerSchoolObj.page = '1';
//     $scope.getAthletePerSchoolObj.age = '';
//     $scope.getAthletePerSchoolObj.gender = '';
//     $scope.isLoading = true;
//     $scope.busy = false;

//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//     });

//     if ($.jStorage.get("schoolName") !== null) {
//         $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
//     }
//     if ($.jStorage.get("userType") === "school") {
//         $scope.getAthletePerSchoolObj.schoolToken = $.jStorage.get("userDetails").accessToken;
//     } else {
//         $scope.getAthletePerSchoolObj.athleteToken = $.jStorage.get("userDetails").accessToken;
//     }

//     if ($stateParams.id) {
//         $scope.getEventObj._id = $stateParams.id;
//         $scope.getAthletePerSchoolObj._id = $stateParams.id;
//         if ($scope.detail.userType === "athlete") {
//             $scope.getEventObj.athleteToken = $scope.detail.accessToken;
//         } else {
//             $scope.getEventObj.schoolToken = $scope.detail.accessToken;
//         }
//     }

//     NavigationService.getSportDetails({
//         '_id': $stateParams.id
//     }, function (data) {
//         console.log(data);
//         $scope.basicSportDetails = data.data;
//         $scope.selectService.sportName = data.data.sportName;
//         $scope.selectService.sportType = data.data.sportType;
//         $.jStorage.set("confirmPageKey", data.data.sportType);
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     } else if ($stateParams.id === '') {
//         $state.go('sports-selection');
//     }

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };



//     $scope.getAllAges = function () {
//         NavigationService.getEvents($scope.getEventObj, function (data) {
//             errorService.errorCode(data, function (allData) {
//                 if (!allData.message) {
//                     $scope.getEvents = allData.data;
//                     // $scope.sportTitle = allData.data.sportName;
//                     // NavigationService.setSportTitle($scope.sportTitle);
//                 } else {
//                     $scope.isDisabled = false;
//                     toastr.error(allData.message, 'Error Message');
//                 }
//             });
//         });
//     };

//     $scope.getAllAges();

//     $scope.sortGenderWise = function (gender) {
//         $scope.getEvents = [];
//         $scope.getAllAges();
//         if (gender) {
//             $scope.showAges = true;
//             $scope.getAthletePerSchoolObj.gender = gender;
//             NavigationService.setGender(gender);
//         } else {
//             $scope.showAges = false;
//         }
//     };



//     $scope.getAllAthletes = function (getAthletePerSchoolObj) {
//         if ($scope.busy) return;
//         $scope.busy = true;
//         NavigationService.getIndividualAthlete(getAthletePerSchoolObj, function (data) {
//             errorService.errorCode(data, function (allData) {
//                 if (!allData.message) {
//                     if (allData.value) {
//                         $scope.isLoading = false;
//                         if (allData.data.total >= getAthletePerSchoolObj.page) {
//                             _.each(allData.data.data, function (value) {
//                                 value.fullNameWithsfaId = value.sfaId + " - " + value.firstName + "   " + value.surname;
//                                 $scope.selectAthlete.push(value);
//                                 $scope.busy = false;
//                             });

//                             $scope.listOfAthelete = $scope.selectService.isAtheleteSelected($scope.selectAthlete);
//                         }
//                     }
//                 } else {
//                     toastr.error(allData.message, 'Error Message');
//                 }
//             });
//         });
//     };
//     // Initial  function call
//     $scope.getAllAthletes($scope.getAthletePerSchoolObj);

//     // *****search by sfaId*****
//     $scope.searchaBysfaId = function (serach) {
//         $scope.selectAthlete = [];
//         $scope.listOfAthelete = [];
//         $scope.busy = false;
//         $scope.getAthletePerSchoolObj.page = '1';
//         $scope.getAllAthletes($scope.getAthletePerSchoolObj);
//     };
//     // *****for loading more data *****

//     $scope.loadMore = function () {
//         $scope.getAthletePerSchoolObj.page++;
//         console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
//         $scope.getAllAthletes($scope.getAthletePerSchoolObj);
//     };
//     //***** for getting age group *****
//     $scope.filterAge = function (ageId) {
//         $scope.getAthletePerSchoolObj.page = 1;
//         $scope.selectAthlete = [];
//         $scope.listOfAthelete = [];
//         $scope.showAgeObj = '';
//         $scope.busy = false;
//         $scope.showAgeObj = ageId;
//         NavigationService.setAgeTitle($scope.showAgeObj);
//         $scope.getAthletePerSchoolObj.age = ageId;
//         $scope.getAllAthletes($scope.getAthletePerSchoolObj);
//         console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
//     };




// });


// //Confirm-Fencing
// firstApp.controller('ConfirmFencingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService, selectService, toastr, $stateParams, $filter) {
//     //Used to name the .html file
//     $scope.sportTab = $filter('firstcapitalize')($stateParams.name);
//     $scope.template = TemplateService.changecontent("confirmfencing");
//     $scope.menutitle = NavigationService.makeactive("Confirm" + ' ' + $scope.sportTab);
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     $scope.selectService = selectService;
//     $scope.formData = {};
//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//         $scope.formData.schoolName = $scope.detail.schoolName;
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     }
//     $scope.config = {};

//     function configureVariables() {
//         if ($scope.selectService && $scope.selectService.sportName) {
//             var st = $scope.selectService.sportName;
//             if (st == 'Fencing') {
//                 // $scope.config.weightsReq = true;
//                 $scope.config.event1Expression = "epee.data[0].sport as epee._id | formatEvent:'Epee' for epee in athelete.eventEpee | orderBy:'_id' track by epee._id";
//                 $scope.config.event2Expression = "sabre.data[0].sport as sabre._id | formatEvent:'Sabre' for sabre in athelete.eventSabre | orderBy:'_id' track by sabre._id";
//                 $scope.config.event3Expression = "foil.data[0].sport as foil._id | formatEvent:'Foil' for foil in athelete.eventFoil | orderBy:'_id' track by foil._id";

//             } else {
//                 // $scope.config.weightsReq = false;
//                 $scope.config.event1Expression = "event1 as event1._id | formatEvent:event1.eventName for event1 in athelete.allEvents";
//                 $scope.config.event2Expression = "event2 as event2._id | formatEvent:event2.eventName for event2 in athelete.optionalEvents";
//             }
//         }
//     }

//     configureVariables();

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };

//     $scope.tp = function (event) {
//         console.log(event);
//     };
// });

// //Confirm-Individual
// firstApp.controller('ConfirmIndividualCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService, selectService, toastr, $stateParams, $filter) {
//     //Used to name the .html file
//     $scope.sportTab = $filter('firstcapitalize')($stateParams.name);
//     $scope.template = TemplateService.changecontent("confirmindividual");
//     $scope.menutitle = NavigationService.makeactive("Confirm" + ' ' + $scope.sportTab);
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     $scope.selectService = selectService;
//     $scope.redirectTo = $.jStorage.get("confirmPageKey");
//     console.log($scope.selectService.team);
//     $scope.config = {
//         'weightsReq': false,
//         'varSet': false,
//         'selectAgeExpression': ''
//     };
//     if (selectService.sportName === 'Judo' || selectService.sportName === 'judo' || selectService.sportName === 'Boxing' || selectService.sportName === 'boxing' || selectService.sportName === 'Taekwondo' || selectService.sportName === 'taekwondo' || selectService.sportName === 'Sport MMA' || selectService.sportName === 'sport MMA') {
//         $scope.withWeight = true;
//     } else {
//         $scope.withWeight = false;
//     }

//     function configureVariables() {
//         if ($scope.selectService && $scope.selectService.sportName) {
//             var st = $scope.selectService.sportName;
//             if (st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
//                 $scope.config.weightsReq = true;
//                 $scope.config.ageVar = 'athelete.ageSelected';
//                 $scope.config.weightVar = 'athelete.sport';
//                 $scope.config.selectAgeExpression = "age._id for age in athelete.ageGroups | orderBy:'_id' track by age._id";
//             } else {
//                 $scope.config.weightsReq = false;
//                 $scope.config.ageVar = 'athelete.sport';
//                 $scope.config.weightVar = '';
//                 $scope.config.selectAgeExpression = "age.data[0].sport as age._id for age in athelete.ageGroups | orderBy:'_id'  track by age._id";
//             }
//         }
//     }
//     // function configureVariables() {
//     //     if ($scope.selectService && $scope.selectService.sportName) {
//     //         var st = $scope.selectService.sportName;
//     //         if (st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
//     //             $scope.config.weightsReq = true;
//     //             $scope.config.ageVar = 'athelete.ageSelected';
//     //             $scope.config.weightVar = 'athelete.sport';
//     //             $scope.config.selectAgeExpression = "age._id for age in athelete.ageGroups";
//     //         } else {
//     //             $scope.config.weightsReq = false;
//     //             $scope.config.ageVar = 'athelete.sport';
//     //             $scope.config.weightVar = '';
//     //             $scope.config.selectAgeExpression = "{'sport[0]':age.data[0].sport,'_id':age._id} as age._id for age in athelete.ageGroups";
//     //         }
//     //     }
//     // }

//     configureVariables();


//     $scope.formData = {};
//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//         $scope.formData.schoolName = $scope.detail.schoolName;
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     }

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };

//     $scope.tp = function (data) {
//         console.log(data);
//     };

//     $scope.saveIt = function (team) {
//         console.log(team);
//     };


// });

// //Confirm-karate

// firstApp.controller('ConfirmKarateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService, selectService, toastr, $stateParams, $filter) {
//     //Used to name the .html file
//     $scope.sportTab = $filter('firstcapitalize')($stateParams.name);
//     $scope.template = TemplateService.changecontent("confirmkarate");
//     $scope.menutitle = NavigationService.makeactive("Confirm" + ' ' + $scope.sportTab);
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     $scope.formData = {};
//     $scope.selectService = selectService;
//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//         $scope.formData.schoolName = $scope.detail.schoolName;
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     }

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };

// });

// //Confirm-athlete-swimming

// firstApp.controller('ConfirmAthSwmCtrl', function ($scope, TemplateService, NavigationService, loginService, $timeout, $state, selectService, toastr, $stateParams, $filter) {
//     //Used to name the .html file
//     $scope.sportTab = $filter('firstcapitalize')($stateParams.name);
//     $scope.template = TemplateService.changecontent("confirmathleteswim");
//     $scope.menutitle = NavigationService.makeactive("Confirm" + ' ' + $scope.sportTab);
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     $scope.selectService = selectService;
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     $scope.formData = {};
//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//         $scope.formData.schoolName = $scope.detail.schoolName;
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     }

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };

//     $scope.tp = function (team) {
//         console.log(team);
//     };
// });


// firstApp.controller('IndividualCongratsCtrl', function ($scope, TemplateService, toastr, NavigationService, $timeout, $state, $stateParams, loginService, errorService) {
//     $scope.template = TemplateService.changecontent("individual-congrats");
//     $scope.menutitle = NavigationService.makeactive("Individual Congrats");
//     TemplateService.header = "views/header2.html";
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     NavigationService.getDetail(function (data) {
//         errorService.errorCode(data, function (allData) {
//             console.log(allData);
//             if (!allData.message) {
//                 if (allData.value === true) {
//                     $scope.city = allData.data.city;
//                     $scope.district = allData.data.district;
//                     $scope.state = allData.data.state;
//                     $scope.year = allData.data.year;
//                     $scope.sfaCity = allData.data.sfaCity;
//                     if (allData.data.type == 'school') {
//                         $scope.isCollege = false;
//                         $scope.type = allData.data.type;
//                     } else {
//                         $scope.isCollege = true;
//                         $scope.type = allData.data.type;
//                     }
//                 }
//             } else {
//                 toastr.error(allData.message, 'Error Message');
//             }
//         });
//     });
//     // $scope.formData = {};
//     loginService.loginGet(function (data) {
//         $scope.detail = data;
//     });

//     if ($.jStorage.get("userDetails") === null) {
//         $state.go('sports-registration');
//     }

//     $scope.logoutCandidate = function () {
//         loginService.logoutCandidate(function (data) {
//             if (data.isLoggedIn === false) {
//                 toastr.success('Successfully Logged Out', 'Logout Message');
//                 $state.go('sports-registration');
//             } else {
//                 toastr.error('Something went wrong', 'Logout Message');
//             }
//         });
//     };
// });
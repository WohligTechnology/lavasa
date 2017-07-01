firstApp.controller('IndividualSelectionCtrl', function ($scope, TemplateService, errorService, $state, NavigationService, $stateParams, toastr, $timeout, loginService, selectService) {
    $scope.template = TemplateService.changecontent("individual-selection");
    $scope.menutitle = NavigationService.makeactive("Individual Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.selectService = selectService;
    $scope.selectService.sportsId = $stateParams.id;
    $scope.ageGroup = [];
    $scope.listOfAthelete = [];
    $scope.selectAthlete = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.getEvents = [];
    $scope.getAthletePerSchoolObj = {};
    $scope.getEventObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = '1';
    $scope.getAthletePerSchoolObj.age = '';
    $scope.getAthletePerSchoolObj.gender = '';
    $scope.isLoading = true;
    $scope.busy = false;

    loginService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("schoolName") !== null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }
    if ($.jStorage.get("userType") === "school") {
        $scope.getAthletePerSchoolObj.schoolToken = $.jStorage.get("userDetails").accessToken;
    } else {
        $scope.getAthletePerSchoolObj.athleteToken = $.jStorage.get("userDetails").accessToken;
    }

    if ($stateParams.id) {
        $scope.getEventObj._id = $stateParams.id;
        if ($scope.detail.userType === "athlete") {
            $scope.getEventObj.athleteToken = $scope.detail.accessToken;
        } else {
            $scope.getEventObj.schoolToken = $scope.detail.accessToken;
        }
    }

    NavigationService.getSportDetails({
        '_id': $stateParams.id
    }, function (data) {
        console.log(data);
        $scope.basicSportDetails = data.data;
        $scope.selectService.sportName = data.data.sportName;
        $scope.selectService.sportType = data.data.sportType;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    } else if ($stateParams.id === '') {
        $state.go('sports-selection');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };



    $scope.getAllAges = function () {
        NavigationService.getEvents($scope.getEventObj, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    $scope.getEvents = allData.data;
                    // $scope.sportTitle = allData.data.sportName;
                    // NavigationService.setSportTitle($scope.sportTitle);
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };

    $scope.getAllAges();

    $scope.sortGenderWise = function (gender) {
        $scope.getEvents = [];
        $scope.getAllAges();
        if (gender) {
            $scope.showAges = true;
            $scope.getAthletePerSchoolObj.gender = gender;
            NavigationService.setGender(gender);
        } else {
            $scope.showAges = false;
        }
    };



    $scope.getAllAthletes = function (getAthletePerSchoolObj) {
        if ($scope.busy) return;
        $scope.busy = true;
        NavigationService.getIndividualAthlete(getAthletePerSchoolObj, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.isLoading = false;
                        if (allData.data.total >= getAthletePerSchoolObj.page) {
                            _.each(allData.data.data, function (value) {
                                $scope.selectAthlete.push(value);
                                $scope.busy = false;
                            });

                            $scope.listOfAthelete = $scope.selectService.isAtheleteSelected($scope.selectAthlete);
                        }
                    }
                } else {
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };
    // Initial  function call
    $scope.getAllAthletes($scope.getAthletePerSchoolObj);

    // *****search by sfaId*****
    $scope.searchaBysfaId = function (serach) {
        $scope.selectAthlete = [];
        $scope.listOfAthelete = [];
        $scope.busy = false;
        $scope.getAthletePerSchoolObj.page = '1';
        $scope.getAllAthletes($scope.getAthletePerSchoolObj);
    };
    // *****for loading more data *****

    $scope.loadMore = function () {
        $scope.getAthletePerSchoolObj.page++;
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
        $scope.getAllAthletes($scope.getAthletePerSchoolObj);
    };
    //***** for getting age group *****
    $scope.filterAge = function (ageId) {
        $scope.getAthletePerSchoolObj.page = 1;
        $scope.selectAthlete = [];
        $scope.listOfAthelete = [];
        $scope.showAgeObj = '';
        $scope.busy = false;
        $scope.showAgeObj = ageId;
        NavigationService.setAgeTitle($scope.showAgeObj);
        $scope.getAthletePerSchoolObj.age = ageId;
        $scope.getAllAthletes($scope.getAthletePerSchoolObj);
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
    };




});


//Confirm-Fencing
firstApp.controller('ConfirmFencingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmfencing");
    $scope.menutitle = NavigationService.makeactive("Confirm Fencing");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    //fencing-data
    $scope.fencingtable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-12 EPEE'
        }, {
            name: 'U-14 EPEE'
        }, {
            name: 'U-17 EPEE'
        }],
        filterList2: [{
            name: 'U-12 SABER'
        }, {
            name: 'U-14 SABER'
        }, {
            name: 'U-17 SABER'
        }],
        filterList3: [{
            name: 'U-12 FOIL'
        }, {
            name: 'U-14 FOIL'
        }, {
            name: 'U-17 FOIL'
        }]
    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Female',
        filterList1: [{
            name: 'U-12 EPEE'
        }, {
            name: 'U-14 EPEE'
        }, {
            name: 'U-17 EPEE'
        }],
        filterList2: [{
            name: 'U-12 SABER'
        }, {
            name: 'U-14 SABER'
        }, {
            name: 'U-17 SABER'
        }],
        filterList3: [{
            name: 'U-12 FOIL'
        }, {
            name: 'U-14 FOIL'
        }, {
            name: 'U-17 FOIL'
        }]
    }]
    //end fencing
    //archery-data
    $scope.archeryTable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-10 Indian bow'
        }, {
            name: 'U-14 Indian bow'
        }, {
            name: 'U-17 Indian bow'
        }],
        filterList2: [{
            name: 'U-14 Recurve bow'
        }, {
            name: 'U-17 Recurve bow'
        }, {
            name: 'U-14 Compound bow'
        }, {
            name: 'U-17 Compound bow'
        }]
    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Female',
        filterList1: [{
            name: 'U-10 Indian bow'
        }, {
            name: 'U-14 Indian bow'
        }, {
            name: 'U-17 Indian bow'
        }],
        filterList2: [{
            name: 'U-14 Recurve bow'
        }, {
            name: 'U-17 Recurve bow'
        }, {
            name: 'U-14 Compound bow'
        }, {
            name: 'U-17 Compound bow'
        }]
    }];
    //end-archery



});

//Confirm-Individual
firstApp.controller('ConfirmIndividualCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService, selectService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmindividual");
    $scope.menutitle = NavigationService.makeactive("Confirm Individual");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.selectService = selectService;
    $scope.redirectTo = $.jStorage.get("confirmPageKey");
    console.log($scope.selectService.team);
    $scope.config = {
        'weightsReq': false,
        'varSet': false,
        'selectAgeExpression': ''
    };



    function configureVariables() {
        if ($scope.selectService && $scope.selectService.sportName) {
            var st = $scope.selectService.sportName;
            if (st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
                $scope.config.weightsReq = true;
                $scope.config.ageVar = 'athelete.ageSelected';
                $scope.config.weightVar = 'athelete.sport';
                $scope.config.selectAgeExpression = "age._id for age in athelete.ageGroups";
            } else {
                $scope.config.weightsReq = false;
                $scope.config.ageVar = 'athelete.sport';
                $scope.config.weightVar = '';
                $scope.config.selectAgeExpression = "age.data[0].sport as age._id for age in athelete.ageGroups";
            }
        }
    }

    configureVariables();


    $scope.formData = {};
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    $scope.tp = function (data) {
        console.log(data);
    };

    $scope.saveIt = function (team) {
        console.log(team);
    }


});

//Confirm-karate

firstApp.controller('ConfirmKarateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService, selectService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmkarate");
    $scope.menutitle = NavigationService.makeactive("Confirm Karate");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    $scope.selectService = selectService;
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

});

//confirm-relay

firstApp.controller('ConfirmRelayCtrl', function ($scope, TemplateService, NavigationService, loginService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmrelay");
    $scope.menutitle = NavigationService.makeactive("Confirm Relay");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formData = {};
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    $scope.arelayTable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: '4x50m Relay'
        }, {
            name: '4x100m Relay'
        }, {
            name: 'Medley 100m'
        }, {
            name: 'Medley 200m'
        }, {
            name: 'Medley 300m'
        }, {
            name: 'Medley 400m'
        }]
    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Female',
        filterList1: [{
            name: '4x50m Relay'
        }, {
            name: '4x100m Relay'
        }, {
            name: 'Medley 100m'
        }, {
            name: 'Medley 200m'
        }, {
            name: 'Medley 300m'
        }, {
            name: 'Medley 400m'
        }]
    }];

    $scope.srelayTable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: '4x50m Freestyle Relay'
        }, {
            name: '4x50m Medley Relay'
        }]

    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Female',
        filterList1: [{
            name: '4x50m Freestyle Relay'
        }, {
            name: '4x50m Medley Relay'
        }]

    }];


});

//Confirm-athlete-swimming

firstApp.controller('ConfirmAthSwmCtrl', function ($scope, TemplateService, NavigationService, loginService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmathleteswim");
    $scope.menutitle = NavigationService.makeactive("Confirm Athlete Swimming ");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formData = {};
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        loginService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    $scope.athswmTable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-6'
        }, {
            name: 'U-8'
        }, {
            name: 'U-10'
        }, {
            name: 'U-12'
        }, {
            name: 'U-14'
        }, {
            name: 'U-16'
        }, {
            name: 'U-18'
        }],
        filterList2: [{
            name: '50m'
        }, {
            name: 'long jump'
        }, {
            name: '100m'
        }, {
            name: '200m'
        }, {
            name: 'shot put (3 kg)'
        }, {
            name: '600m'
        }, {
            name: 'high jump'
        }, {
            name: 'shot put (4 kg)'
        }, {
            name: '100m hurdles (91.4cm)'
        }, {
            name: '1000m'
        }, {
            name: '3000m'
        }]
    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-6'
        }, {
            name: 'U-8'
        }, {
            name: 'U-10'
        }, {
            name: 'U-12'
        }, {
            name: 'U-14'
        }, {
            name: 'U-16'
        }, {
            name: 'U-18'
        }],
        filterList2: [{
            name: '50m'
        }, {
            name: 'long jump'
        }, {
            name: '100m'
        }, {
            name: '200m'
        }, {
            name: 'shot put (3 kg)'
        }, {
            name: '600m'
        }, {
            name: 'high jump'
        }, {
            name: 'shot put (4 kg)'
        }, {
            name: '100m hurdles (91.4cm)'
        }, {
            name: '1000m'
        }, {
            name: '3000m'
        }]
    }, {
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-6'
        }, {
            name: 'U-8'
        }, {
            name: 'U-10'
        }, {
            name: 'U-12'
        }, {
            name: 'U-14'
        }, {
            name: 'U-16'
        }, {
            name: 'U-18'
        }],
        filterList2: [{
            name: '50m'
        }, {
            name: 'long jump'
        }, {
            name: '100m'
        }, {
            name: '200m'
        }, {
            name: 'shot put (3 kg)'
        }, {
            name: '600m'
        }, {
            name: 'high jump'
        }, {
            name: 'shot put (4 kg)'
        }, {
            name: '100m hurdles (91.4cm)'
        }, {
            name: '1000m'
        }, {
            name: '3000m'
        }]
    }];

    $scope.swnathTable = [{
        name: '126 - Kunjal Rawal',
        gender: 'Male',
        filterList1: [{
            name: 'U-6'
        }, {
            name: 'U-8'
        }, {
            name: 'U-10'
        }, {
            name: 'U-12'
        }, {
            name: 'U-14'
        }, {
            name: 'U-16'
        }, {
            name: 'U-18'
        }],
        filterList2: [{
            name: '50m Freestyle'
        }, {
            name: '50m Backstroke'
        }, {
            name: '50m Breaststroke'
        }, {
            name: '50m Butterfly'
        }, {
            name: '100m Freestyle'
        }, {
            name: '200m Individual Medley'
        }]
    }];
});
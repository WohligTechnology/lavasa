firstApp.controller('SportsSelectionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state) {
    $scope.template = TemplateService.changecontent("sports-selection");
    $scope.menutitle = NavigationService.makeactive("Sports Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.sportsschool = true;
    $scope.sportsregistered = false;
    $scope.classactive = 'blue-active';
    $scope.classinactive = '';
    $scope.sptabchange = function (data) {
        if (data == 1) {
            $scope.sportsschool = true;
            $scope.sportsregistered = false;
        } else {
            $scope.sportsschool = false;
            $scope.sportsregistered = true;
        }
    };


    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    // ==========getAllSportsListSubCategory==============
    $scope.allSportsListSubCatArr = [];
    var tempObj = {};
    tempObj.tempArr = [];
    NavigationService.getAllSportsListSubCategory(function (data) {
        if (data.data.value) {
            $scope.allSportsListSubCat = data.data.data;
            _.each($scope.allSportsListSubCat, function (key, value) {
                console.log(key, "key",
                    value);
                tempObj.sportName = value;
                tempObj.tempArr = _.cloneDeep(key);
                $scope.allSportsListSubCatArr.push(tempObj);
                tempObj = {};
            });
        }
    });
});

firstApp.controller('SportsRulesCtrl', function ($scope, TemplateService, $state, NavigationService, toastr, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("sports-rules");
    $scope.menutitle = NavigationService.makeactive("Sports Rules And Regulations");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    if ($stateParams.id) {
        NavigationService.getSportsRules($stateParams.id, function (data) {
            if (data.data.value) {
                $scope.sportsRulesAndRegulation = data.data.data;
            } else {
                console.log("no data found");
            }

        });
    }
    $scope.goTotermsCheck = function (val, id) {
        if (val === undefined) {
            toastr.error('Please Accept Terms And Conditions');
            $scope.errorMsg = true;
        } else {
            if (val === true) {
                $state.go('school-selection', {
                    id: id
                });
            }
        }
    };


});

firstApp.controller('SchoolSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout) {
    $scope.template = TemplateService.changecontent("school-selection");
    $scope.menutitle = NavigationService.makeactive("School Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.ageGroup = [];
    $scope.selectAthlete = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.constraints = {};
    $scope.constraints._id = $stateParams.id;
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = '1';
    $scope.busy = false;
    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    } else if ($stateParams.id === '') {
        $state.go('sports-selection');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    if ($.jStorage.get("schoolName") !== null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }

    // *****FOR GETTING ATHLETES *****
    $scope.athletePerSchool = function (getAthletePerSchoolObj, search) {
        if ($scope.busy) return;
        $scope.busy = true;
        NavigationService.getAthletePerSchool(getAthletePerSchoolObj, function (data) {
            console.log(data, "data++++++++++++");
            if (data.data.value) {
                $scope.isLoading = false;
                console.log(data.data.data.length, "data.data.data.length");
                console.log("data.data.data.total ", data.data.data.total);
                console.log("$scope.getAthletePerSchoolObj.page", $scope.getAthletePerSchoolObj.page);
                if (data.data.data.total >= $scope.getAthletePerSchoolObj.page) {
                    $scope.showMsg = true;
                    $scope.isLoading = false;
                    _.each(data.data.data.data, function (value) {
                        $scope.selectAthlete.push(value);
                        $scope.busy = false;
                    });
                }
            }
        });
    };

    // *****FOR GETTING SPORT ID*****
    $scope.getSportId = function (constraints) {
        NavigationService.getOneSportForRegistration(constraints, function (data) {
            console.log(data, "data");
            if (data.data.value) {
                $scope.showMsg = true;
                $scope.selectAthlete = [];
                $scope.getAthletePerSchoolObj.sport = data.data.data.sport;
                console.log($scope.getAthletePerSchoolObj, "$scope.getAthletePerSchoolObj");
                $scope.getAthletePerSchoolObj.page = '1';
                $scope.busy = false;
                $scope.athletePerSchool($scope.getAthletePerSchoolObj);
            }
        });
    };

    //***** FOR FILTERING AGE GROUP *****
    $scope.filterAge = function (ageId) {
        $scope.isLoading = true;
        $scope.busy = false;
        $scope.constraints.age = ageId;
        $scope.getAthletePerSchoolObj.age = ageId;
        console.log($scope.constraints.age, "$scope.constraints.age");
        $scope.getSportId($scope.constraints);
    };

    // *****SEARCH BY SFAID *****
    $scope.searchaBysfaId = function (serach) {
        $scope.selectAthlete = [];
        $scope.busy = false;
        $scope.getAthletePerSchoolObj.page = '1';
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };
    // *****FOR LOADING MORE DATA *****
    $scope.loadMore = function () {
        $scope.getAthletePerSchoolObj.page++;
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };
    //    *****SORTING AGE GENDERWISE*****
    $scope.sortGenderWise = function (gender) {
        console.log("gender", gender);
        if (gender == "female") {
            $scope.showFemale = true;
            $scope.showMale = false;
            // $scope.ageGroup = [];
            // $scope.ageGroup = $scope.femaleAgeGrp;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;
        } else {
            $scope.showMale = true;
            $scope.showFemale = false;
            // console.log("im in else");
            // $scope.ageGroup = [];
            // $scope.ageGroup = $scope.maleAgeGrp;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;

        }
    };
    //  *****GETTING ALL AGE GROUP ***** 
    if ($stateParams.id) {
        NavigationService.getSports($stateParams.id, function (data) {
            $scope.getSports = data.data.data.results;
            $scope.sportTitle = data.data.data.sportName;
            $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
            $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
            $scope.sortGenderWise('male');
        });
    }
});

firstApp.controller('AthleteSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout) {
    $scope.template = TemplateService.changecontent("athlete-selection");
    $scope.menutitle = NavigationService.makeactive("Athlete Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    } else if ($stateParams.id === '') {
        $state.go('sports-selection');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };

    if ($.jStorage.get("schoolName") !== null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }

    $scope.selectAthlete = [{
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }, {
        firstName: 'Harshit',
        lastName: 'Shah',
        sfaId: '45211',
        photograph: 'img/noimage.png'

    }];
});

firstApp.controller('ConfirmTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $stateParams) {
    $scope.template = TemplateService.changecontent("confirmteam");
    $scope.menutitle = NavigationService.makeactive("Confirm Team");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };
});

firstApp.controller('SportsCongratsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    $scope.template = TemplateService.changecontent("sports-congrats");
    $scope.menutitle = NavigationService.makeactive("Sports Congrats");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    $scope.logoutCandidate = function () {
        NavigationService.logoutCandidate(function (data) {
            if (data.isLoggedIn === false) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    };
});
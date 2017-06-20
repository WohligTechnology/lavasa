firstApp.controller('SportsSelectionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, loginService) {
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


    loginService.loginGet(function (data) {
        $scope.detail = data;
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

    // ==========getAllSportsListSubCategory==============
    $scope.allSportsListSubCatArr = [];
    var tempObj = {};
    tempObj.tempArr = [];
    NavigationService.getAllSportsListSubCategory(function (data) {
        errorService.errorCode(data, function (allData) {
            if (!allData.message) {
                if (allData.value) {
                    $scope.allSportsListSubCat = allData.data;
                    _.each($scope.allSportsListSubCat, function (key, value) {
                        console.log(key, "key",
                            value);
                        tempObj.sportName = value;
                        tempObj.tempArr = _.cloneDeep(key);
                        $scope.allSportsListSubCatArr.push(tempObj);
                        tempObj = {};
                    });
                }
            } else {
                $scope.isDisabled = false;
                toastr.error(allData.message, 'Error Message');
            }
        });
    });
});

firstApp.controller('SportsRulesCtrl', function ($scope, TemplateService, $state, NavigationService, toastr, $timeout, $stateParams, errorService, loginService) {
    $scope.template = TemplateService.changecontent("sports-rules");
    $scope.menutitle = NavigationService.makeactive("Sports Rules And Regulations");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    loginService.loginGet(function (data) {
        $scope.detail = data;
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

    if ($stateParams.id) {
        NavigationService.getSportsRules($stateParams.id, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.sportsRulesAndRegulation = allData.data;
                    } else {
                        console.log("no data found");
                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    }
    $scope.goTotermsCheck = function (val, id, isTeam) {
        if (val === undefined) {
            toastr.error('Please Accept Terms And Conditions');
            $scope.errorMsg = true;
        } else {
            if (val === true) {
                if (isTeam === true) {
                    $state.go('team-selection', {
                        id: id
                    });
                } else {
                    $state.go('individual-selection', {
                        id: id
                    });
                }

            }
        }
    };


});

firstApp.controller('TeamSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout, errorService, loginService, selectService) {
    $scope.template = TemplateService.changecontent("team-selection");
    $scope.menutitle = NavigationService.makeactive("Team Selection");
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
    $scope.teamMembers = [];
    loginService.loginGet(function (data) {
        $scope.detail = data;
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

    if ($.jStorage.get("schoolName") !== null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }

    // *****FOR GETTING ATHLETES *****
    $scope.athletePerSchool = function (getAthletePerSchoolObj, search) {
        if ($scope.busy) return;
        $scope.busy = true;
        NavigationService.getAthletePerSchool(getAthletePerSchoolObj, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.isLoading = false;
                        console.log(allData.data.length, "allData.data.length");
                        console.log("allData.data.total ", allData.data.total);
                        console.log("$scope.getAthletePerSchoolObj.page", $scope.getAthletePerSchoolObj.page);
                        if (allData.data.total >= $scope.getAthletePerSchoolObj.page) {
                            $scope.showMsg = true;
                            $scope.isLoading = false;
                            _.each(allData.data.data, function (value) {
                                $scope.selectAthlete.push(value);
                                $scope.busy = false;
                            });
                        }
                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };

    // *****FOR GETTING SPORT ID*****
    $scope.getSportId = function (constraints) {
        NavigationService.getOneSportForRegistration(constraints, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.showMsg = true;
                        $scope.selectAthlete = [];
                        $scope.getAthletePerSchoolObj.sport = allData.data.sport;
                        $scope.minPlayer = allData.data.minplayer;
                        $scope.maxPlayer = allData.data.maxPlayer;

                        console.log($scope.getAthletePerSchoolObj, "$scope.getAthletePerSchoolObj");
                        $scope.getAthletePerSchoolObj.page = '1';
                        $scope.busy = false;
                        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };

    //***** FOR FILTERING AGE GROUP *****
    $scope.filterAge = function (ageId, ageName) {
        $scope.showAgeObj = '';
        $scope.isLoading = true;
        $scope.busy = false;
        $scope.constraints.age = ageId;
        $scope.showAgeObj = ageName;
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
        $scope.editTeam();
    };
    // *****FOR LOADING MORE DATA *****
    $scope.loadMore = function () {
        $scope.getAthletePerSchoolObj.page++;
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };
    //    *****SORTING AGE GENDERWISE*****
    $scope.sortGenderWise = function (gender) {
        $scope.showAgeObj = '';
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
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    $scope.getSports = allData.data.results;
                    $scope.sportTitle = allData.data.sportName;
                    $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
                    $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
                    $scope.sortGenderWise('male');
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    }


    $scope.editTeam = function () {
        selectService.editTeam($scope.selectAthlete, function (data) {
            $scope.teamMembers = data;
            // if ($scope.teamMembers.length > $scope.maxPlayer || $scope.teamMembers.length < $scope.minPlayer) {
            //     $scope.disabledNextBtn = true;
            //     toastr.error('Kindly select a minimum of' + $scope.minPlayer + ' ' + 'players and a maximum of' + ' ' + $scope.maxPlayer + ' ' + 'players', 'Error Message');
            // } else {
            //     $scope.disabledNextBtn = false;
            // }
        });
    };

    $scope.next = function () {
        selectService.next('confirmteam', $scope.teamMembers);
    };



});

firstApp.controller('IndividualSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout, loginService) {
    $scope.template = TemplateService.changecontent("individual-selection");
    $scope.menutitle = NavigationService.makeactive("Individual Selection");
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
    loginService.loginGet(function (data) {
        $scope.detail = data;
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

firstApp.controller('ConfirmTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $stateParams, loginService, selectService) {
    $scope.template = TemplateService.changecontent("confirmteam");
    $scope.menutitle = NavigationService.makeactive("Confirm Team");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.teamMembers = selectService.team;
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
});

firstApp.controller('SportsCongratsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, loginService) {
    $scope.template = TemplateService.changecontent("sports-congrats");
    $scope.menutitle = NavigationService.makeactive("Sports Congrats");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    loginService.loginGet(function (data) {
        $scope.detail = data;
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
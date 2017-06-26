firstApp.controller('SportsSelectionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, loginService, selectService) {
    $scope.template = TemplateService.changecontent("sports-selection");
    $scope.menutitle = NavigationService.makeactive("Sports Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    selectService.reset();
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
                        $scope.ruleArray = [];
                        $scope.ruleArray.push(allData.data.rules);
                        console.log('temp', $scope.ruleArray);
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
    $scope.selectService = selectService;
    $scope.selectService.sportsId = $stateParams.id;
    $scope.ageGroup = [];
    $scope.formData = {};
    $scope.selectAthlete = [];
    $scope.listOfAthelete = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.constraints = {};
    $scope.constraints._id = $stateParams.id;
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = '1';
    $scope.busy = false;
    $scope.disabledNextBtn = false;
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



    // *****for getting all athletes*****
    $scope.athletePerSchool = function (getAthletePerSchoolObj) {
        if ($scope.busy) return;
        $scope.busy = true;
        NavigationService.getAthletePerSchool(getAthletePerSchoolObj, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.isLoading = false;
                        console.log(allData.data.length, "allData.data.length");
                        console.log("allData.data.total ", allData.data.total);
                        console.log("$scope.getAthletePerSchoolObj.page", getAthletePerSchoolObj.page);
                        if (allData.data.total >= getAthletePerSchoolObj.page) {
                            $scope.showMsg = true;
                            $scope.isLoading = false;
                            _.each(allData.data.data, function (value) {
                                $scope.selectAthlete.push(value);
                                $scope.busy = false;
                            });

                            $scope.listOfAthelete = $scope.selectService.isAtheleteSelected($scope.selectAthlete);
                        }
                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };



    // *****for getting one sportId*****
    $scope.getSportId = function (constraints) {
        NavigationService.getOneSportForRegistration(constraints, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.showMsg = true;
                        $scope.selectAthlete = [];
                        $scope.listOfAthelete = [];
                        $scope.getAthletePerSchoolObj.sport = allData.data.sport;
                        NavigationService.setSportId(allData.data.sport);
                        $scope.minPlayer = allData.data.minplayer;
                        $scope.maxPlayer = allData.data.maxPlayer;

                        console.log($scope.getAthletePerSchoolObj, "$scope.getAthletePerSchoolObj");
                        $scope.getAthletePerSchoolObj.page = '1';
                        $scope.busy = false;
                        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
                    } else {
                        console.log("in else", allData);
                        $scope.isLoading = false;
                        $scope.showMsg = false;
                        if (allData.error === "Max Team Created") {
                            toastr.error("Maximum Team is Already Created", 'Error Message');
                        }

                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };

    //***** for getting age group *****
    $scope.filterAge = function (ageId, ageName) {
        $scope.showAgeObj = '';
        $scope.isLoading = true;
        $scope.busy = false;
        $scope.constraints.age = ageId;
        $scope.showAgeObj = ageName;
        NavigationService.setAgeTitle($scope.showAgeObj);
        $scope.getAthletePerSchoolObj.age = ageId;
        console.log($scope.constraints.age, "$scope.constraints.age");
        $scope.getSportId($scope.constraints);
    };

    // *****search by sfaId*****
    $scope.searchaBysfaId = function (serach) {
        $scope.selectAthlete = [];
        $scope.busy = false;
        $scope.getAthletePerSchoolObj.page = '1';
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
        // $scope.editTeam();
    };
    // *****for loading more data *****
    $scope.loadMore = function () {
        $scope.getAthletePerSchoolObj.page++;
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };
    //    *****sorting age genderwise*****
    $scope.sortGenderWise = function (gender) {
        $scope.showAgeObj = '';
        console.log("gender", gender);
        if (gender == "female") {
            $scope.showFemale = true;
            $scope.showMale = false;
            $scope.selectAthlete = [];
            $scope.listOfAthelete = [];
            // selectService.team = [];
            $scope.constraints.gender = gender;
            NavigationService.setGender($scope.constraints.gender);
            $scope.getAthletePerSchoolObj.gender = gender;
        } else {
            // selectService.team = [];
            $scope.selectAthlete = [];
            $scope.listOfAthelete = [];
            $scope.showMale = true;
            $scope.showFemale = false;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;
            NavigationService.setGender($scope.constraints.gender);

        }
    };
    //  *****getting all age group ***** 
    if ($stateParams.id) {
        NavigationService.getSports($stateParams.id, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    $scope.getSports = allData.data.results;
                    $scope.sportTitle = allData.data.sportName;
                    NavigationService.setSportTitle($scope.sportTitle);
                    $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
                    $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
                    console.log($scope.femaleAgeGrp, "$scope.femaleAgeGrp");
                    $scope.sortGenderWise('male');
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    }


    // $scope.editTeam = function () {
    //     selectService.editTeam($scope.selectAthlete, function (data) {
    //         $scope.teamMembers = data;
    //         NavigationService.setSportTeamMembers($scope.teamMembers);
    //         $scope.maxPlayer = 4;
    //         $scope.minPlayer = 2;
    //     });
    // };

    $scope.maxPlayerAllow = function () {
        $scope.maxPlayer = 3;
        $scope.minPlayer = 2;

        console.log("selectService.team", selectService.team.length);
        if (selectService.team.length >= $scope.minPlayer && selectService.team.length <= $scope.maxPlayer) {
            $scope.disabledNextBtn = true;
        } else {
            $scope.disabledNextBtn = false;
        }
        if (selectService.team.length > $scope.maxPlayer) {
            toastr.error('Kindly select a minimum of' + ' ' + ' ' + $scope.minPlayer + ' ' + 'players and a maximum of' + ' ' + $scope.maxPlayer + ' ' +
                'players');
        }

    };

    // $scope.next = function () {
    //     selectService.next('confirmteam', $scope.teamMembers);
    // };
    if ($scope.selectService && $scope.selectService.ageGroup) {
        $scope.constraints.gender = $scope.selectService.gender;
        $scope.filterAge($scope.selectService.ageGroup);
    }



});

firstApp.controller('IndividualSelectionCtrl', function ($scope, TemplateService, errorService, $state, NavigationService, $stateParams, toastr, $timeout, loginService, selectService) {
    $scope.template = TemplateService.changecontent("individual-selection");
    $scope.menutitle = NavigationService.makeactive("Individual Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.selectService = selectService;
    $scope.ageGroup = [];
    $scope.listOfAthelete = [];
    $scope.selectAthlete = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = '1';
    $scope.getAthletePerSchoolObj.age = '';
    $scope.isLoading = true;
    $scope.busy = false;
    console.log("selectService", selectService);
    if ($.jStorage.get("schoolName") !== null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }
    if ($.jStorage.get("userType") === "school") {
        $scope.getAthletePerSchoolObj.schoolToken = $.jStorage.get("userDetails").accessToken;
    } else {
        $scope.getAthletePerSchoolObj.athleteToken = $.jStorage.get("userDetails").accessToken;
    }

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
    if ($stateParams.id) {
        NavigationService.getSports($stateParams.id, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    $scope.getSports = allData.data.results;
                    $scope.sportTitle = allData.data.sportName;
                    NavigationService.setSportTitle($scope.sportTitle);
                    $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
                    $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
                    console.log($scope.maleAgeGrp, "$scope.maleAgeGrp");
                    console.log("$scope.femaleAgeGrp", $scope.femaleAgeGrp);
                    $scope.sortGenderWise('male');
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    }

    $scope.sortGenderWise = function (gender) {
        $scope.showAgeObj = '';
        console.log("gender", gender);
        if (gender == "female") {
            console.log("im im");
            $scope.showFemale = true;
            $scope.showMale = false;
            $scope.getAthletePerSchoolObj.gender = gender;
            NavigationService.setGender(gender);
        } else {
            $scope.showMale = true;
            $scope.showFemale = false;
            $scope.getAthletePerSchoolObj.gender = gender;
            NavigationService.setGender(gender);
        }
    };



    $scope.getAllAthletes = function (getAthletePerSchoolObj) {
        if ($scope.busy) return;
        $scope.busy = true;
        NavigationService.getIndividualAthlete(getAthletePerSchoolObj, function (data) {
            console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
            console.log("data", data);
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
    }

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
    $scope.filterAge = function (ageId, ageName) {
        $scope.getAthletePerSchoolObj.page = 1;
        $scope.showAgeObj = '';
        $scope.busy = false;
        $scope.showAgeObj = ageName;
        NavigationService.setAgeTitle($scope.showAgeObj);
        // $scope.getAthletePerSchoolObj.age = ageId;
        $scope.getAthletePerSchoolObj.age = ageName;
        $scope.getAllAthletes($scope.getAthletePerSchoolObj);
        console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);


    };




});

firstApp.controller('ConfirmTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $stateParams, loginService, selectService, errorService) {
    $scope.template = TemplateService.changecontent("confirmteam");
    $scope.menutitle = NavigationService.makeactive("Confirm Team");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.teamMembers = selectService.team;
    $scope.selectService = selectService;
    // NavigationService.setSportTeamMembers($scope.teamMembers);
    $scope.formData = {};
    $scope.tempStrArr = [];
    $scope.confirmTeamObject = {};
    $scope.ageTitle = $.jStorage.get("ageTitle");
    $scope.gender = $.jStorage.get("gender");
    _.each($scope.teamMembers, function (n) {
        n.isCaptain = false;
        n.isGoalKeeper = false;
        n.studentId = n._id;
    });
    $scope.sportTitle = $.jStorage.get("sportTitle");
    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }
    loginService.loginGet(function (data) {
        $scope.detail = data;
        $scope.formData.schoolName = $scope.detail.schoolName;
    });
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

    var tempStr1 = $scope.detail.schoolName.replace(/\s+/g, '');
    $scope.tempStrArr.push(tempStr1, $scope.sportTitle, $scope.ageTitle, $scope.gender);
    $scope.confirmTeamObject.name = $scope.tempStrArr.join("-");
    $scope.confirmTeamObject.sport = $.jStorage.get("sportId");
    $scope.confirmTeamObject.school = $.jStorage.get("userDetails")._id;
    if ($.jStorage.get("userType") === "school") {
        $scope.confirmTeamObject.schoolToken = $.jStorage.get("userDetails").accessToken;
    } else {
        $scope.confirmTeamObject.athleteToken = $.jStorage.get("userDetails").accessToken;
    }
    $scope.isCaptainFun = function (index) {
        _.each($scope.teamMembers, function (key) {
            key.isCaptain = false;
        });
        $scope.teamMembers[index].isCaptain = true;
        $scope.teamMembers[index].isCap = 'Capt';
    };

    $scope.isGoalKeeperFun = function (index) {
        _.each($scope.teamMembers, function (key) {
            key.isGoalKeeper = false;
        });
        $scope.teamMembers[index].isGoalKeeper = true;
    };

    $scope.finalConfirmTeam = function () {
        var isCapObj = _.find($scope.teamMembers, function (key) {
            return key.isCaptain === true;
        });
        var isGoalKeeperObj = _.find($scope.teamMembers, function (key) {
            return key.isGoalKeeper === true;
        });
        if (isCapObj === undefined || isGoalKeeperObj === undefined) {
            toastr.error("Please select Captain and GoalKeeper");
        }
        if (isCapObj !== undefined && isGoalKeeperObj !== undefined) {
            $scope.confirmTeamObject.athleteTeam = _.cloneDeep($scope.teamMembers);
            console.log($scope.confirmTeamObject, "$scope.confirmTeamObject");
            NavigationService.teamConfirm($scope.confirmTeamObject, function (data) {
                errorService.errorCode(data, function (allData) {
                    if (!allData.message) {
                        if (allData.value) {
                            toastr.success("Successfully Confirmed", 'Success Message');
                            NavigationService.setSportId(null);
                            $state.go("sports-congrats");
                        }
                    } else {
                        toastr.error(allData.message, 'Error Message');
                    }
                });
            });
        }

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

    // // $scope.formData = {};
    // loginService.loginGet(function (data) {
    //     $scope.detail = data;
    //     // $scope.formData.schoolName = $scope.detail.schoolName;
    // });

    // if ($.jStorage.get("userDetails") === null) {
    //     $state.go('sports-registration');
    // }

    // $scope.logoutCandidate = function () {
    //     loginService.logoutCandidate(function (data) {
    //         if (data.isLoggedIn === false) {
    //             toastr.success('Successfully Logged Out', 'Logout Message');
    //             $state.go('sports-registration');
    //         } else {
    //             toastr.error('Something went wrong', 'Logout Message');
    //         }
    //     });
    // };

});

//Confirm-Individual
firstApp.controller('ConfirmIndividualCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmindividual");
    $scope.menutitle = NavigationService.makeactive("Confirm Individual");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // // $scope.formData = {};
    // loginService.loginGet(function (data) {
    //     $scope.detail = data;
    //     // $scope.formData.schoolName = $scope.detail.schoolName;
    // });

    // if ($.jStorage.get("userDetails") === null) {
    //     $state.go('sports-registration');
    // }

    // $scope.logoutCandidate = function () {
    //     loginService.logoutCandidate(function (data) {
    //         if (data.isLoggedIn === false) {
    //             toastr.success('Successfully Logged Out', 'Logout Message');
    //             $state.go('sports-registration');
    //         } else {
    //             toastr.error('Something went wrong', 'Logout Message');
    //         }
    //     });
    // };

});

//Confirm-karate

firstApp.controller('ConfirmKarateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, loginService, errorService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("confirmkarate");
    $scope.menutitle = NavigationService.makeactive("Confirm Karate");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // // $scope.formData = {};
    // loginService.loginGet(function (data) {
    //     $scope.detail = data;
    //     // $scope.formData.schoolName = $scope.detail.schoolName;
    // });

    // if ($.jStorage.get("userDetails") === null) {
    //     $state.go('sports-registration');
    // }

    // $scope.logoutCandidate = function () {
    //     loginService.logoutCandidate(function (data) {
    //         if (data.isLoggedIn === false) {
    //             toastr.success('Successfully Logged Out', 'Logout Message');
    //             $state.go('sports-registration');
    //         } else {
    //             toastr.error('Something went wrong', 'Logout Message');
    //         }
    //     });
    // };

});

firstApp.controller('SportsCongratsCtrl', function ($scope, TemplateService, toastr, NavigationService, $timeout, $state, $stateParams, loginService, errorService) {
    $scope.template = TemplateService.changecontent("sports-congrats");
    $scope.menutitle = NavigationService.makeactive("Sports Congrats");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.formData = {};
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
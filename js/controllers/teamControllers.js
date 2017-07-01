firstApp.controller('TeamSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout, errorService, loginService, selectService) {
    $scope.template = TemplateService.changecontent("team-selection");
    $scope.menutitle = NavigationService.makeactive("Team Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.selectService = selectService;
    console.log("$scope.selectService", $scope.selectService);
    $scope.selectService.sportsId = $stateParams.id;
    $scope.ageGroup = [];
    $scope.formData = {};
    $scope.selectAthlete = [];
    $scope.listOfAthelete = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.teamMembers = [];
    $scope.constraints = {};
    // $scope.detail = {};
    $scope.constraints._id = $stateParams.id;
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = 1;
    $scope.busy = false;
    $scope.noAthletefound = false;
    $scope.scroll = {
        scrollBusy: false,
        stopCallingApi: false,
    };


    loginService.loginGet(function (data) {
        $scope.detail = data;
    });

    if ($scope.detail.userType === "athlete") {
        $scope.constraints.athleteToken = $scope.detail.accessToken;
        $scope.getAthletePerSchoolObj.athleteToken = $scope.detail.accessToken;
    } else {
        $scope.constraints.schoolToken = $scope.detail.accessToken;
        $scope.getAthletePerSchoolObj.schoolToken = $scope.detail.accessToken;
    }


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
                        console.log(allData.data.data, "allData.data.data");
                        if (allData.data.data === undefined) {
                            console.log("No Athletes");
                            if ($scope.selectAthlete.length === 0) {
                                $scope.noAthletefound = true;
                            } else {
                                $scope.noAthletefound = false;
                            }
                        } else {
                            $scope.noAthletefound = false;
                            console.log(allData.data.data.length, "allData.data.length");
                            console.log("total****** ", allData.data.total);
                            console.log("pageno**********", getAthletePerSchoolObj.page);
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

                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };


    // $scope.athletePerSchool = function (getAthletePerSchoolObj) {
    //     if (scroll.scrollBusy) {
    //         return;
    //     } else {
    //         if (scroll.stopCallingApi) {
    //             return;
    //         } else {
    //             scroll.scrollBusy = true;
    //             NavigationService.getAthletePerSchool(getAthletePerSchoolObj, function (data) {
    //                 errorService.errorCode(data, function (allData) {
    //                     if (!allData.message) {
    //                         if (allData.value) {
    //                             scroll.scrollBusy = false;
    //                             $scope.isLoading = false;
    //                             console.log(allData.data.data, "***********");
    //                             if (allData.data.data.length === 0) {
    //                                 scroll.stopCallingApi = true;
    //                             } else {
    //                                 if (allData.data.total >= getAthletePerSchoolObj.page) {
    //                                     $scope.showMsg = true;
    //                                     $scope.isLoading = false;
    //                                     _.each(allData.data.data, function (value) {
    //                                         $scope.selectAthlete.push(value);
    //                                         scroll.scrollBusy = false;
    //                                     });

    //                                     $scope.listOfAthelete = $scope.selectService.isAtheleteSelected($scope.selectAthlete);
    //                                 }

    //                             }

    //                         }
    //                     } else {
    //                         $scope.isDisabled = false;
    //                         toastr.error(allData.message, 'Error Message');
    //                     }
    //                 });
    //             });
    //         }
    //     }

    // };



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
                        $scope.getAthletePerSchoolObj.page = 1;
                        $scope.busy = false;
                        // $scope.scroll = {
                        //     scrollBusy: false,
                        //     stopCallingApi: false,
                        // };
                        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
                        console.log($scope.getAthletePerSchoolObj, "$scope.getAthletePerSchoolObj");
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
        // $scope.selectService.team = [];
        $scope.listOfAthelete = [];
        $scope.showAgeObj = '';
        $scope.isLoading = true;
        $scope.busy = false;
        $scope.noAthletefound = false;
        // $scope.scroll = {
        //     scrollBusy: false,
        //     stopCallingApi: false,
        // };
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
        // $scope.scroll = {
        //     scrollBusy: false,
        //     stopCallingApi: false,
        // };
        $scope.getAthletePerSchoolObj.page = 1;
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
        // $scope.editTeam();
    };
    // *****for loading more data *****
    $scope.loadMore = function () {
        ++$scope.getAthletePerSchoolObj.page;
        // console.log("$scope.getAthletePerSchoolObj", $scope.getAthletePerSchoolObj);
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
    $scope.orderedAgeArr = [];
    //  *****getting all age group ***** 
    if ($stateParams.id) {
        NavigationService.getSports($stateParams.id, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    console.log("allData", allData);
                    $scope.getSports = allData.data.results;
                    $scope.sportTitle = allData.data.sportName;
                    NavigationService.setSportTitle($scope.sportTitle);
                    $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
                    $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
                    _.each($scope.maleAgeGrp, function (key) {
                        key.orderage = parseInt(key.ageData.name.slice(2));
                    });
                    _.each($scope.femaleAgeGrp, function (key) {
                        key.orderage = parseInt(key.ageData.name.slice(2));
                    });

                    $scope.sortGenderWise($scope.selectService.gender);
                    //  $scope.sortGenderWise('male');
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
    //       });
    // };


    $scope.maxPlayerAllow = function () {
        if (selectService.team.length > $scope.maxPlayer) {
            toastr.error('Kindly select a minimum of' + ' ' + ' ' + $scope.minPlayer + ' ' + 'players and a maximum of' + ' ' + $scope.maxPlayer + ' ' +
                'players');
        }
    };
    $scope.goNext = function (confirmteam, gender, ageGroup) {
        $scope.yourPromise = NavigationService.success().then(function () {
            $scope.selectService.goNext(confirmteam, gender, ageGroup);
        });
    };
    // $scope.next = function () {
    //     selectService.next('confirmteam', $scope.teamMembers);
    // };
    if ($scope.selectService && $scope.selectService.ageGroup) {
        $scope.constraints.gender = $scope.selectService.gender;
        $scope.filterAge($scope.selectService.ageGroup);
    }



});

firstApp.controller('ConfirmTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $stateParams, loginService, selectService, $filter, errorService) {
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


    var tempStr1 = $scope.detail.schoolName;
    $scope.gender = $filter('firstcapitalize')($scope.gender);
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
    $scope.confirmTeamToGo = function (confirmTeamObject) {
        NavigationService.teamConfirm(confirmTeamObject, function (data) {
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
    };
    $scope.finalConfirmTeam = function (sportTitle) {
        $scope.yourPromise = NavigationService.success().then(function () {
            $scope.confirmTeamObject.athleteTeam = _.cloneDeep($scope.teamMembers);
            console.log($scope.confirmTeamObject, "$scope.confirmTeamObject");
            var isCapObj = _.find($scope.teamMembers, function (key) {
                return key.isCaptain === true;
            });
            var isGoalKeeperObj = _.find($scope.teamMembers, function (key) {
                return key.isGoalKeeper === true;
            });
            if (isCapObj === undefined) {
                toastr.error("Please select Captain", 'Error Message');
            } else {
                if (sportTitle === 'Handball' || sportTitle === 'handball' || sportTitle === 'Football' || sportTitle === 'football' || sportTitle === 'Hockey' || sportTitle === 'hockey' || sportTitle === 'Waterpolo' || sportTitle === 'waterpolo') {
                    if (isGoalKeeperObj === undefined) {
                        toastr.error("Please select GoalKeeper", 'Error Message');
                    } else {
                        $scope.confirmTeamObject.athleteTeam = _.cloneDeep($scope.teamMembers);
                        $scope.confirmTeamToGo($scope.confirmTeamObject);
                    }
                } else {
                    $scope.confirmTeamObject.athleteTeam = _.cloneDeep($scope.teamMembers);
                    $scope.confirmTeamToGo($scope.confirmTeamObject);
                }
            }
        });

    };




});
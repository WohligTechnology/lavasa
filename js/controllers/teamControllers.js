firstApp.controller('TeamSelectionCtrl', function ($scope, TemplateService, $state, NavigationService, $stateParams, toastr, $timeout, errorService, loginService, selectService, $rootScope) {
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
    $scope.teamMembers = [];
    $scope.constraints = {};
    $scope.constraints._id = $stateParams.id;
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = 1;
    $scope.busy = false;
    $scope.noAthletefound = false;

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
    $scope.getSportDetails = function () {
        // $scope.constraints._id = $stateParams.id;
        NavigationService.getSportDetails($scope.constraints,
            function (data) {
                console.log(data);
                $scope.basicSportDetails = data.data;
                $scope.selectService.sportName = data.data.sportName;
                $scope.selectService.sportType = data.data.sportType;
            });
    };
    $scope.getSportDetails();

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
        $scope.setDisabled = false;
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
                                    value.fullNameWithsfaId = value.sfaId + " - " + value.firstName + "   " + value.surname;
                                    $scope.selectAthlete.push(value);
                                    $scope.busy = false;
                                });
                                $scope.listOfAthelete = $scope.selectService.isAtheleteSelected($scope.selectAthlete);
                                $scope.listOfAthelete = _.uniqBy($scope.listOfAthelete, 'sfaId');
                                if ($scope.detail.userType === 'athlete') {
                                    var indexOfAthlete = _.findIndex($scope.listOfAthelete, ['sfaId', $scope.detail.sfaIdObj]);

                                    if (indexOfAthlete >= 0) {
                                        $scope.listOfAthelete[indexOfAthlete].checked = true;
                                        $scope.listOfAthelete[indexOfAthlete].setDisabled = true;
                                        if (selectService.team.length === 0) {
                                            if ($scope.listOfAthelete[indexOfAthlete].isTeamSelected === true) {
                                                toastr.error("Already registered for this sports.");
                                                $scope.setDisabled = true;
                                                $scope.busy = true;
                                            } else {
                                                $scope.setDisabled = false;
                                                selectService.pushToTeam($scope.listOfAthelete[indexOfAthlete], $scope.listOfAthelete[indexOfAthlete].checked, $scope.listOfAthelete);
                                            }
                                        }
                                    } else {
                                        // $scope.setDisabled = true;
                                        console.log("Im in else");
                                    }
                                }
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
                        $scope.getAthletePerSchoolObj.page = 1;
                        $scope.busy = false;
                        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
                    } else {
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
        $scope.listOfAthelete = [];
        $scope.isLoading = true;
        $scope.busy = false;
        $scope.noAthletefound = false;
        $scope.constraints.age = ageId;
        $scope.showAgeObj = ageName;
        NavigationService.setAgeTitle($scope.showAgeObj);
        $scope.getAthletePerSchoolObj.age = ageId;
        $scope.getSportId($scope.constraints);
    };

    // *****search by sfaId*****
    $scope.searchaBysfaId = function (serach) {
        $scope.selectAthlete = [];
        $scope.listOfAthelete = [];
        $scope.busy = false;
        $scope.getAthletePerSchoolObj.page = 1;
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };
    // *****load more data *****
    $scope.loadMore = function () {
        ++$scope.getAthletePerSchoolObj.page;
        $scope.athletePerSchool($scope.getAthletePerSchoolObj);
    };

    //    *****sorting age genderwise*****
    $scope.sortGenderWise = function (gender) {
        if (gender == 'both') {
            console.log("gender", gender);
            $scope.showFemale = false;
            $scope.showMale = false;
            $scope.showBoth = true;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;
            NavigationService.setGender($scope.constraints.gender);
        } else {
            $scope.showBoth = false;
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
        }

    };
    // function
    $scope.specifyGender = function (sportTitle) {
        if (sportTitle === 'Tennis Mixed Doubles') {
            $scope.selectService.gender = 'both';
        } else {
            if ($.jStorage.get("userDetails") !== null) {
                if ($scope.detail.userType === 'athlete') {
                    if ($.jStorage.get("userDetails").gender !== null) {
                        $scope.selectService.gender = $.jStorage.get("userDetails").gender;
                        console.log($scope.selectService.gender, "$scope.selectService.gender");
                    }
                } else {
                    $scope.selectService.gender = 'male';
                }
            }
        }
    };

    //  *****getting all age group ***** 
    $scope.sportGet = function () {
        if ($stateParams.id) {
            NavigationService.getSports($scope.constraints, function (data) {
                errorService.errorCode(data, function (allData) {
                    if (!allData.message) {
                        console.log("allData", allData);
                        if (allData.value === true) {
                            $scope.visibleDiv = true;
                            $scope.getSports = allData.data.results;
                            $scope.sportTitle = allData.data.sportName;
                            $scope.specifyGender($scope.sportTitle);
                            NavigationService.setSportTitle($scope.sportTitle);
                            $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
                            $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
                            $scope.maleAndFemale = _.cloneDeep($scope.getSports.both);
                            _.each($scope.maleAndFemale, function (key) {
                                key.orderage = parseInt(key.ageData.name.slice(2));
                            });
                            _.each($scope.maleAgeGrp, function (key) {
                                key.orderage = parseInt(key.ageData.name.slice(2));
                            });
                            _.each($scope.femaleAgeGrp, function (key) {
                                key.orderage = parseInt(key.ageData.name.slice(2));
                            });

                            $scope.sortGenderWise($scope.selectService.gender);
                            //  $scope.sortGenderWise('male');
                        } else {
                            console.log("im in false");
                            $scope.visibleDiv = false;
                            if (allData.error === "Sports Category Not Found") {
                                toastr.error('You are not Eligible for this Sport', 'Error Message');
                                $state.go('sports-selection');
                            }
                        }
                    } else {
                        $scope.isDisabled = false;
                        toastr.error(allData.message, 'Error Message');
                    }
                });
            });
        }
    };

    $scope.sportGet();

    // function
    $scope.pushToTeam = function (checked, bool, listOfAthelete) {
        if ($.jStorage.get("sportTitle") === "Tennis Mixed Doubles") {
            $scope.selectService.pushToTeam(checked, bool, listOfAthelete);
            $scope.selectService.team = _.uniqBy($scope.selectService.team, 'gender');
            if (bool) {
                var indexOfAthlete = _.findIndex($scope.selectService.team, ['sfaId', checked.sfaId]);
                if (indexOfAthlete < 0) {
                    var findIndex = _.findIndex($scope.listOfAthelete, ['sfaId', checked.sfaId]);
                    if (findIndex >= 0) {
                        $scope.listOfAthelete[findIndex].disableGender = true;
                        $scope.listOfAthelete[findIndex].checked = false;
                    } else {
                        console.log("im in false");
                    }
                } else {
                    console.log("im***********");
                }
            }

            if ($scope.selectService.team.length === 2) {
                $scope.setDisabled = true;
            } else {
                $scope.setDisabled = false;
            }
            if ($scope.selectService.team.length === 0) {
                _.each($scope.listOfAthelete, function (key) {
                    if (key.disableGender) {
                        key.disableGender = false;
                    }
                });
            }
        } else {
            $scope.selectService.pushToTeam(checked, bool, listOfAthelete);
        }

    };
    // function
    $scope.deselectCheckbx = function () {
        if ($.jStorage.get("sportTitle") === "Tennis Mixed Doubles") {
            $scope.setDisabled = false;
            console.log("immin");
            _.each($scope.listOfAthelete, function (key) {
                if (key.disableGender) {
                    key.disableGender = false;
                    key.checked = false;
                }
            });
        }
    };

    // function
    $scope.maxPlayerAllow = function (index) {
        if (selectService.team.length > $scope.maxPlayer) {
            toastr.error('Kindly select a minimum of' + ' ' + ' ' + $scope.minPlayer + ' ' + 'players and a maximum of' + ' ' + $scope.maxPlayer + ' ' +
                'players');
        }
    };


    if ($scope.selectService && $scope.selectService.ageGroup) {
        $scope.showAgeObj = $.jStorage.get("ageTitle");
        $scope.constraints.gender = $scope.selectService.gender;
        $scope.filterAge($scope.selectService.ageGroup, $scope.showAgeObj);
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
    $scope.isBoth = false;
    // $scope.isCap = false;
    // $scope.isGoal = false;
    // if ($scope.isCap === false &&
    //     $scope.isGoal === false) {
    //     $scope.isBoth = true;
    // }
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

    if ($scope.sportTitle === 'Basketball' || $scope.sportTitle === 'basketball' || $scope.sportTitle === 'Football' || $scope.sportTitle === 'football' || $scope.sportTitle === 'Handball' || $scope.sportTitle === 'handball' || $scope.sportTitle === 'Hockey' || $scope.sportTitle === 'hockey' || $scope.sportTitle === 'Kabaddi' || $scope.sportTitle === 'kabaddi' || $scope.sportTitle === 'Kho Kho' || $scope.sportTitle === 'kho kho' || $scope.sportTitle === 'Throwball' || $scope.sportTitle === 'throwball' || $scope.sportTitle === 'Volleyball' || $scope.sportTitle === 'volleyball' || $scope.sportTitle === 'Water Polo' || $scope.sportTitle === 'water polo') {
        $scope.isCap = true;
        $scope.isBoth = false;
        $scope.isGoal = false;
    }
    if ($scope.sportTitle !== 'Basketball' && $scope.sportTitle !== 'basketball' && $scope.sportTitle !== 'Football' && $scope.sportTitle !== 'football' && $scope.sportTitle !== 'Handball' && $scope.sportTitle !== 'handball' && $scope.sportTitle !== 'Hockey' && $scope.sportTitle !== 'hockey' && $scope.sportTitle !== 'Kabaddi' && $scope.sportTitle !== 'kabaddi' && $scope.sportTitle !== 'Kho Kho' && $scope.sportTitle !== 'kho kho' && $scope.sportTitle !== 'Throwball' && $scope.sportTitle !== 'throwball' && $scope.sportTitle !== 'Volleyball' && $scope.sportTitle !== 'volleyball' && $scope.sportTitle !== 'Water Polo' && $scope.sportTitle !== 'water polo') {
        console.log('enter', $scope.sportTitle);
        $scope.isBoth = true;
    }
    if ($scope.sportTitle === 'Handball' || $scope.sportTitle === 'handball' || $scope.sportTitle === 'Football' || $scope.sportTitle === 'football' || $scope.sportTitle === 'Hockey' || $scope.sportTitle === 'hockey' || $scope.sportTitle === 'Water Polo' || $scope.sportTitle === 'water polo ') {
        $scope.isGoal = true;
        $scope.isBoth = false;
    }

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
                        $state.go("team-congrats");
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

            if (sportTitle === 'Basketball' || sportTitle === 'basketball' || sportTitle === 'Football' || sportTitle === 'football' || sportTitle === 'Handball' || sportTitle === 'Hockey' || sportTitle === 'hockey' || sportTitle === 'Kabaddi' || sportTitle === 'kabaddi' || sportTitle === 'Kho Kho' || sportTitle === 'kho kho' || sportTitle === 'Throwball' || sportTitle === 'throwball' || sportTitle === 'Volleyball' || sportTitle === 'volleyball' || sportTitle === 'Water Polo' || sportTitle === 'water polo') {
                $scope.isCap = true;
                if (isCapObj === undefined) {
                    toastr.error("Please select Captain", 'Error Message');
                } else {
                    if (sportTitle === 'Handball' || sportTitle === 'handball' || sportTitle === 'Football' || sportTitle === 'football' || sportTitle === 'Hockey' || sportTitle === 'hockey' || sportTitle === 'Water Polo' || sportTitle === 'water polo ') {
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
            } else {
                if (sportTitle === 'Handball' || sportTitle === 'handball' || sportTitle === 'Football' || sportTitle === 'football' || sportTitle === 'Hockey' || sportTitle === 'hockey' || sportTitle === 'Water Polo' || sportTitle === 'water polo ') {
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

firstApp.controller('TeamCongratsCtrl', function ($scope, TemplateService, toastr, NavigationService, $timeout, $state, $stateParams, loginService, errorService) {
    $scope.template = TemplateService.changecontent("team-congrats");
    $scope.menutitle = NavigationService.makeactive("Team Congrats");
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
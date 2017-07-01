firstApp.controller('SportsSelectionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, loginService, selectService, $uibModal) {
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

    $scope.redirectTo = function (val) {
        console.log(val);
        $.jStorage.set("confirmPageKey", val.sportType);
        selectService.redirectTo = val.sportType;
        console.log(selectService.redirectTo);
    }

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

    $scope.messageForTennisMixedDoubles = function () {
        $scope.uploadSizeInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/messageForTennisMixedDoubles.html"
        });
        $timeout(function () {
            $scope.uploadSizeInstances.close();
        }, 8000);
    };
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
        $scope.yourPromise = NavigationService.success().then(function () {
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
        });
    };


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
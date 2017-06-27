firstApp.controller('SportsRegistrationCtrl', function ($scope, fakeFac, TemplateService, loginService, NavigationService, $timeout, toastr, $state, $rootScope, errorService) {
    $scope.template = TemplateService.changecontent("sports-registration");
    $scope.menutitle = NavigationService.makeactive("Sports Registration");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formData = {};
    if ($.jStorage.get("userType") === null) {
        NavigationService.setUserType("athlete");
    }
    if ($.jStorage.get("userDetails") !== null) {
        $state.go('sports-selection');
    }
    if ($.jStorage.get("userType") !== null) {
        if ($.jStorage.get("userType") == "athlete") {
            $scope.formData.type = "athlete";
            $scope.ath = true;
            $scope.sch = false;
        } else {
            $scope.formData.type = "school";
            $scope.ath = false;
            $scope.sch = true;
        }
    }
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.tabchange = function (data) {
        if (data == 1) {
            $scope.ath = true;
            $scope.sch = false;
            $scope.formData.type = "athlete";
            if ($scope.formData.type) {
                NavigationService.setUserType($scope.formData.type);
            }
        } else {
            $scope.ath = false;
            $scope.sch = true;
            $scope.formData.type = "school";
            if ($scope.formData.type) {
                NavigationService.setUserType($scope.formData.type);
            }
        }

    };


    $scope.login = function (formData, formSports) {
        $scope.yourPromise = fakeFac.success().then(function () {
            if (formSports.$valid) {
                if (formData) {
                    formData.type = $.jStorage.get("userType");
                    if (formData.sfaid) {
                        if (formData.sfaid.charAt(1) == "S" && formData.type == "athlete") {
                            toastr.error('Only Athlete Can Log In.', 'Login Message');
                        } else {
                            if (formData.sfaid.charAt(1) == "A" && formData.type == "school") {
                                toastr.error('Only School Can Log In.', 'Login Message');
                            }
                        }
                    }
                    if (formData.sfaid.charAt(1) == "S" && formData.type == "school") {
                        $scope.loginFunction(formData);
                    } else {
                        if (formData.sfaid.charAt(1) == "A" && formData.type == "athlete") {
                            $scope.loginFunction(formData);
                        }
                    }
                }
            } else {
                toastr.error('Please Enter All Fields.', 'Login Message');
            }


        });
    };

    $scope.loginFunction = function (formData) {
        NavigationService.login(formData, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        console.log("alldata", allData);
                        NavigationService.setUser(allData.data);
                        toastr.success('Successfully Logged In.', 'Login Message');
                        $state.go('sports-selection');
                    } else {
                        toastr.error('Please Enter Valid SFA Id And Password.', 'Login Message');
                    }
                } else {
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };
});

firstApp.controller('ForgotPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, fakeFac) {
    $scope.template = TemplateService.changecontent("forgot-password");
    $scope.menutitle = NavigationService.makeactive("Forgot password");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    $scope.formData.type = $.jStorage.get("userType");
    $scope.forgotPasswordFunction = function (formData, url) {
        NavigationService.forgotPassword(formData, url, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        toastr.success('The Password Has Been Sent Successfully To Your Registered Email Id.', 'Forgot Password Message');
                        $state.go('sports-registration');
                    } else {
                        if (allData.error == "Incorrect Type") {
                            if ($scope.formData.type == 'athlete') {
                                toastr.error('Only Athlete Can Apply From Here For Forgot Password. Please Check You Are School Or Athlete, Please Try Again.', 'Forgot Password Message');
                            } else {
                                toastr.error('Only School Can Apply From Here For Forgot Password. Please Check You Are School Or Athlete, Please Try Again.', 'Forgot Password Message');
                            }
                        } else {
                            toastr.error('Please Try Again By Entering Valid  SFA Id And Email Id.', 'Forgot Password Message');
                        }
                    }
                } else {
                    toastr.error(allData.message, 'Error Message');
                }

            });
        });
    };

    $scope.forgotPassword = function (formData, formSports) {
        $scope.yourPromise = fakeFac.success().then(function () {
            if (formSports.$valid) {
                if (formData.type) {
                    if (formData.type == "school") {
                        $scope.typeUrl = 'login/forgotPasswordSchool';
                        $scope.forgotPasswordFunction(formData, $scope.typeUrl);
                    } else {
                        $scope.typeUrl = 'login/forgotPasswordAthlete';
                        $scope.forgotPasswordFunction(formData, $scope.typeUrl);
                    }
                }

            } else {
                toastr.error("Please Enter All Fields", 'Forgot Password Message');
            }
        });
    };

});

firstApp.controller('ChangePasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, loginService, fakeFac) {
    $scope.template = TemplateService.changecontent("change-password");
    $scope.menutitle = NavigationService.makeactive("Change Password");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    if ($.jStorage.get("userDetails") === null) {
        $state.go('sports-registration');
    }

    loginService.loginGet(function (data) {
        $scope.detail = data;
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
    $scope.data = {};
    $scope.formChange = {};

    $scope.changePassword = function (formSports, formChange) {
        $scope.yourPromise = fakeFac.success().then(function () {
            if (formSports.$valid) {
                if (formChange.password == formChange.confirmPassword) {
                    if ($.jStorage.get("userType") !== null) {
                        if ($.jStorage.get("userType") == "school") {
                            formChange.schoolToken = $.jStorage.get("userDetails").accessToken;
                        } else {
                            formChange.athleteToken = $.jStorage.get("userDetails").accessToken;
                        }
                        NavigationService.changePassword(formChange, function (data) {
                            errorService.errorCode(data, function (allData) {
                                if (!allData.message) {
                                    if (allData.value) {
                                        toastr.success("Password Is Sucessfully changed.", "Change Password Message");
                                        $timeout(function () {
                                            $state.go('sports-selection');
                                        }, 2000);
                                    } else {
                                        if (allData.error == "Incorrect Old Password") {
                                            toastr.error("Enter Valid Old Password.", "Change Password Message");
                                        } else {
                                            if (allData.error == "Password match or Same password exist") {
                                                toastr.error("The New Password is similar to the Old Password.", "Change Password Message");
                                            }
                                        }
                                    }
                                } else {
                                    toastr.error(allData.message, 'Error Message');
                                }
                            });
                        });
                    }
                } else {
                    toastr.error("New Password and Confirm Password Do Not Match.");
                }

            } else {
                toastr.error("Please Enter All Fields.", "Change Password Message");
            }
        });
    };

});
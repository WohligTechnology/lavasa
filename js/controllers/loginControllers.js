firstApp.controller('SportsRegistrationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $rootScope, errorService) {
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

    $scope.isDisabled = false;
    $scope.login = function (formData, formSports) {
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
                    $scope.isDisabled = true;
                    $scope.loginFunction(formData);
                } else {
                    if (formData.sfaid.charAt(1) == "A" && formData.type == "athlete") {
                        $scope.isDisabled = true;
                        $scope.loginFunction(formData);
                    }
                }
            }
        } else {
            $scope.isDisabled = false;
            toastr.error('Please Enter All Fields.', 'Login Message');
        }
    };

    $scope.loginFunction = function (formData) {
        NavigationService.login(formData, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        NavigationService.setUser(allData.data);
                        toastr.success('Successfully Logged In.', 'Login Message');
                        $state.go('sports-selection');
                    } else {
                        $scope.isDisabled = false;
                        toastr.error('Please Enter Valid SFA Id And Password.', 'Login Message');
                    }
                } else {
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };
});

firstApp.controller('ForgotPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService) {
    $scope.template = TemplateService.changecontent("forgot-password");
    $scope.menutitle = NavigationService.makeactive("Forgot password");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.isDisabled = false;
    $scope.formData = {};
    $scope.formData.type = $.jStorage.get("userType");
    $scope.forgotPasswordFunction = function (formData, url) {
        NavigationService.forgotPassword(formData, url, function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        $scope.isDisabled = true;
                        toastr.success('The Password Has Been Sent Successfully To Your Registered Email Id.', 'Forgot Password Message');
                        $state.go('sports-registration');
                    } else {
                        $scope.isDisabled = false;
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
                    $scope.isDisabled = false;
                    toastr.error(allData.message, 'Error Message');
                }

            });
        });
    };

    $scope.forgotPassword = function (formData, formSports) {
        if (formSports.$valid) {
            $scope.isDisabled = true;
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
            $scope.isDisabled = false;
            toastr.error("Please Enter All Fields", 'Forgot Password Message');
        }
    };

});

firstApp.controller('ChangePasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, errorService, loginService) {
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
        NavigationService.logoutCandidate(function (data) {
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
    $scope.isDisabled = false;
    $scope.changePassword = function (formSports, formChange) {
        if (formSports.$valid) {
            $scope.isDisabled = true;
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
                                    $scope.isDisabled = true;
                                    toastr.success("Password Is Sucessfully changed.", "Change Password Message");
                                    $timeout(function () {
                                        $state.go('sports-selection');
                                    }, 2000);
                                } else {
                                    $scope.isDisabled = false;
                                    if (allData.error == "Incorrect Old Password") {
                                        toastr.error("Enter Valid Old Password.", "Change Password Message");
                                    } else {
                                        if (allData.error == "Password match or Same password exist") {
                                            toastr.error("The New Password is similar to the Old Password.", "Change Password Message");
                                        }
                                    }
                                }
                            } else {
                                $scope.isDisabled = false;
                                toastr.error(allData.message, 'Error Message');
                            }
                        });
                    });
                }
            } else {
                toastr.error("New Password and Confirm Password Do Not Match.");
                $scope.isDisabled = false;
            }

        } else {
            toastr.error("Please Enter All Fields.", "Change Password Message");
            $scope.isDisabled = false;
        }
    };

});
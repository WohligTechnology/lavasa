firstapp.controller('SportsRegistrationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $rootScope) {
    $scope.template = TemplateService.changecontent("sports-registration");
    $scope.menutitle = NavigationService.makeactive("Sports Registration");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    if ($.jStorage.get("userType") == null) {
        NavigationService.setUserType("athlete");
    }
    if ($.jStorage.get("userDetails") != null) {
        $state.go('sports-selection');
    }
    if ($.jStorage.get("userType") != null) {
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
            console.log('value', 'data')
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

    }

    $scope.isDisabled = false;
    $scope.login = function (formData, formsports) {
        console.log(formData);
        if (formsports.$valid) {
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
            console.log("data", data);
            if (data.value) {
                NavigationService.setUser(data.data);
                toastr.success('Successfully Logged In.', 'Login Message');
                $state.go('sports-selection');
            } else {
                $scope.isDisabled = false;
                toastr.error('Please Enter Valid SFA Id And Password.', 'Login Message');
            }
        });
    }
})

//Forgot-password
firstapp.controller('ForgotPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("forgot-password");
    $scope.menutitle = NavigationService.makeactive("Forgot password");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.isDisabled = false;
    $scope.formData = {};
    $scope.formData.type = $.jStorage.get("userType");
    $scope.forgotPasswordFunction = function (formData, url) {
        console.log("formData", formData);
        NavigationService.forgotPassword(formData, url, function (data) {
            console.log("data", data);
            if (data.value) {
                $scope.isDisabled = true;
                toastr.success('Email Is Sent Successfully To Your Registered Email Id.', 'Forgot Password Message');
                $state.go('sports-registration');
            } else {
                $scope.isDisabled = false;
                if (data.error == "Incorrect Type") {
                    if ($scope.formData.type == 'athlete') {
                        toastr.error('Only Athlete Can Apply From Here For Forgot Password. Please Check You Are School Or Athlete, Please Try Again.', 'Forgot Password Message');
                    } else {
                        toastr.error('Only School Can Apply From Here For Forgot Password. Please Check You Are School Or Athlete, Please Try Again.', 'Forgot Password Message');
                    }
                } else {
                    toastr.error('Please Enter Valid  SFA Id And Email Id, Please Try Again.', 'Forgot Password Message');
                }


            }
        });
    }

    $scope.forgotPassword = function (formData, formsports) {
        console.log(formData);
        if (formsports.$valid) {
            console.log("submit is active");
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
            console.log('submit is false');
            $scope.isDisabled = false;
            toastr.error("Please Enter All Fields", 'Forgot Password Message');
        }
    };

})
//Change password
firstapp.controller('ChangePasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("change-password");
    $scope.menutitle = NavigationService.makeactive("Change Password");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    if ($.jStorage.get("userDetails") == null) {
        $state.go('sports-registration');
    }
    $scope.data = {};
    $scope.formchange = {};
    $scope.isDisabled = false;
    $scope.changePassword = function (formsports, formchange) {
        console.log("formchange", formchange);
        if (formsports.$valid) {
            $scope.isDisabled = true;
            console.log("disabled is on");
            if (formchange.password == formchange.confirmPassword) {
                if ($.jStorage.get("userType") != null) {
                    if ($.jStorage.get("userType") == "school") {
                        formchange.schoolToken = $.jStorage.get("userDetails").accessToken;
                    } else {
                        formchange.athleteToken = $.jStorage.get("userDetails").accessToken;
                    }
                    console.log("formchange", formchange);
                    NavigationService.changePassword(formchange, function (data) {
                        console.log("data", data);
                        if (data.value) {
                            $scope.isDisabled = true;
                            toastr.success("Password Is Sucessfully changed.", "Change Password Message");
                            $timeout(function () {
                                $state.go('sports-selection');
                            }, 2000);

                        } else {
                            console.log("im ele");
                            $scope.isDisabled = false;
                            if (data.error == "Incorrect Old Password") {
                                toastr.error("Enter Vaild Old Password.", "Change Password Message");
                            } else {
                                if (data.error == "Password match or Same password exist") {
                                    console.log("imin");
                                    toastr.error("The New Password Is Similar To The Old Password.", "Change Password Message");
                                }
                            }
                        }
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

})
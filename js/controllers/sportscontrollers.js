// angular.module('phoneControllers', ['ui.select', 'templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar', 'ui.select', 'ordinal', 'wt.responsive', 'ui.date', 'toastr'])

//form-athlete
firstapp.controller('FormathleteCtrl', function ($scope, TemplateService, $element, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("formathlete");
    $scope.menutitle = NavigationService.makeactive("Formathlete");
    TemplateService.header = "views/header2.html";
    TemplateService.footer = " ";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.changeitSchoolId = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }
    $scope.changeitPhotograph = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }
    $scope.changeitBirthImage = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }
    $scope.changeitPhotoImage = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }

    $scope.formData = {};
    $scope.formData.parentDetails = [];
    $scope.sportsLevelArray = [];
    $scope.sportsLevelArray.push({});
    $scope.m = 0;
    $scope.form = {};
    $scope.oneClick = false;
    //$scope.searchTerm = [];

    $scope.firstTime = 0;
    if ($scope.firstTime == 0) {
        $scope.formData.parentDetails.push({});
        $scope.firstTime++;
    }
    $scope.sfaId = '';
    $scope.schoolname = {};
    $scope.emailOtp = {};
    $scope.mobileOtp = {};
    $scope.showEmailOtpSuccess = {};
    $scope.showMobileOtpSuccess = {};

    //saves Athelete to database
    $scope.isDisabled = false;
    $scope.saveAthelete = function (formdata, formAthlete) { //formdata is data or body for this url
        console.log("Athlete data: ", formdata);
        // console.log('Value', $scope.isSchoolAdded(formdata));
        // $scope.isSchoolAdded(formdata);

        var isFormValid = function (form) {
            if (!form.atheleteSchoolIdImage) {
                $scope.openIdModal();
                $timeout(function () {
                    $scope.idInstances.close();
                }, 3000)
                // alert("School ID image is not uploaded");
                // return false;
            }
            // else if (!form.photograph) {
            //     $scope.openPhotoModal();
            //     $timeout(function () {
            //         $scope.modalInstances.close();
            //     }, 1000)
            //     // alert("Photograph not uploaded");
            //     // return false;
            // }
            else if (!form.birthImage) {
                // alert("Birth proof is not uploaded");
                // return false;
                $scope.openBirthModal();
                $timeout(function () {
                    $scope.birthInstances.close();
                }, 3000)
            } else if (form.ageProof == "hello" && !form.photoImage) {
                // alert("Photo id not uploaded");
                // return false;
                $scope.openAgeModal();
                $timeout(function () {
                    $scope.ageInstances.close();
                }, 3000)
            } else {
                return true;
            }
        }
        var isRegistrationFee = function (form) {
            if (!form.registrationFee) {
                $scope.openPaymentModal();
                $timeout(function () {
                    $scope.paymentInstances.close();
                }, 3000);
            } else {
                return true;
            }
        }

        var isSchoolAdded = function (form) {
            console.log('enter', form);
            if (form.school || (form.atheleteSchoolName && form.atheleteSchoolLocality && form.atheleteSchoolContact)) {
                console.log('enter true');
                return true;
            } else {
                console.log('enter false');
                $scope.openSchoolModal();
                $timeout(function () {
                    $scope.schoolInstances.close();
                }, 3000);
                // return false;

            }
        }
        if (!isSchoolAdded(formdata)) {
            return;
        }
        if (!isFormValid(formdata)) {
            return;
        }
        // if ($scope.isSchoolAdded(formdata) == false) {
        //     console.log('Value', $scope.isSchoolAdded(formdata));
        //     // alert("Please select the school or enter all school details manually.");
        //     // return;
        // }
        if (!isRegistrationFee(formdata)) {
            return;
        }

        console.log("form", formdata);
        var sportLevelArray = []

        if (formdata.school && formdata.schoolName) {
            formdata.school = "";
        }

        // console.log('tnc', formdata.termsAndCondition);
        if (formdata.termsAndCondition == undefined || formdata.termsAndCondition == false) {
            $scope.showTerm = true;

        } else {
            $scope.showTerm = false;
        }
        formdata.sfaId = $scope.sfaId;
        formdata.age = $scope.age;
        formdata.school = $scope.schoolname;

        $scope.url = "Athelete/saveAthelete";
        console.log($scope.url);
        if (formAthlete.$valid && $scope.showTerm == false) {
            if ($scope.showEmailOtpSuccess == false && $scope.showMobileOtpSuccess == false) {
                $scope.isDisabled = true;
                NavigationService.apiCallWithData($scope.url, formdata, function (data) {
                    if (data.value == true) {
                        console.log("registrationFee", data.data[0].registrationFee);
                        console.log("value", data.value);
                        if (data.data[0].registrationFee == "online PAYU") {
                            var id = data.data[0]._id;
                            console.log("true and in payment", id);
                            var url = "payU/atheletePayment?id=" + id;
                            window.location.href = adminurl2 + url;
                        } else {
                            console.log("opening modal");
                            $scope.openModal();
                        }
                    } else {
                        $scope.isDisabled = false;
                        if (data.error == 'Athlete Already Exist') {
                            console.log("User Already Exist");
                            $scope.openExistModal();
                            $timeout(function () {
                                $scope.existInstances.close();
                            }, 3000);
                        } else {
                            $scope.openErrModal();
                            $timeout(function () {
                                $scope.errInstances.close();
                            }, 3000);
                        }
                    }
                });
            }
        } else {
            $scope.isDisabled = false;
            console.log("Enter all mandatory fields");
            $scope.openErrorModal();
            $timeout(function () {
                $scope.modalInstances.close();
            }, 3000);
        }

    }


    $scope.count = 0;

    $scope.checkMobileOTP = function (otp) {
        console.log("opt", $scope.mobileOtp, otp);
        console.log(typeof otp, typeof $scope.mobileOtp);

        var otpCheck = otp.toString();
        console.log("length", otpCheck.length);
        if (otpCheck.length == 4) {

            if (_.isEqual($scope.mobileOtp, otpCheck)) {
                console.log("email OTP verified");
                $scope.showMobileOtpSuccess = false;
            } else {
                $scope.showMobileOtpSuccess = true;
            }
        } else if (otpCheck.length == 3) {
            otpCheck = "0" + otpCheck;
            console.log("otpCheck", otpCheck);
            if (_.isEqual($scope.emailOtp, otpCheck)) {
                console.log("email OTP verified");
                $scope.showMobileOtpSuccess = false;

            } else {
                $scope.showMobileOtpSuccess = true;
            }
        }
    }



    $scope.checkEmailOTP = function (otp) {
        console.log("opt", $scope.emailOtp, otp);
        console.log(typeof otp, typeof $scope.emailOtp);

        var otpCheck = otp.toString();
        console.log("length", otpCheck.length);
        if (otpCheck.length == 4) {

            if (_.isEqual($scope.emailOtp, otpCheck)) {
                // $(' .verify-otp-regis').html('<i class="fa fa-check"></i>').css("color", "green");
                console.log("email OTP verified");
                $scope.showEmailOtpSuccess = false;

            } else {
                // alert("Incorrect OTP!");
                // $(' .verify-otp-regis').html('<i class="fa fa-times"></i>').css("color", "red");
                $scope.showEmailOtpSuccess = true;
            }
        } else if (otpCheck.length == 3) {
            otpCheck = "0" + otpCheck;
            console.log("otpCheck", otpCheck);
            if (_.isEqual($scope.emailOtp, otpCheck)) {
                // $(' .verify-otp-regis').html('<i class="fa fa-check"></i>').css("color", "green");
                console.log("email OTP verified");
                $scope.showEmailOtpSuccess = false;

            } else {
                // alert("Incorrect OTP!");
                // $(' .verify-otp-regis').html('<i class="fa fa-times"></i>').css("color", "red");
                $scope.showEmailOtpSuccess = true;
            }
        }
    }

    $scope.ageCalculate = function (birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        $scope.age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return $scope.age;
    }

    $scope.sendMobileOTP = function (mobile) {
        var formData = {};
        console.log("form", formData);
        $scope.url = "athelete/generateMobileOTP";
        console.log($scope.url);
        formData.mobile = mobile;
        NavigationService.apiCallWithData($scope.url, formData, function (data) {
            $scope.mobileOtp = data.data;
        });
    }
    $scope.sendEmailOTP = function (email) {
        var formData = {};
        console.log("form", email);
        $scope.url = "athelete/generateEmailOTP";
        console.log($scope.url);
        formData.email = email;
        NavigationService.apiCallWithData($scope.url, formData, function (data) {
            $scope.emailOtp = data.data;
        });
    }

    //search filter
    $scope.refreshChange = function (paramData) {
        NavigationService.getAtheleteSFA(paramData, function (data) {
            console.log("sfa", data);
            $scope.atheleList = data.data.results;

        });
    }

    $scope.searchChange = function (paramData) {
        console.log("changekeyword", paramData);
        $scope.sfaId = paramData;
    }

    $scope.searchChangeSchool = function (paramData) {
        console.log("changekeyword", paramData);
        $scope.schoolname = paramData;
    }
    $scope.refreshChangeSchool = function (paramData) {
        NavigationService.getSchoolSFA(paramData, function (data) {
            console.log("sfa 1", data);
            $scope.schoolList = data.data.results;
        });
    }

    $scope.getDataBasedonSFA = function (uiselCust) {
        console.log("inside get");
        if (uiselCust.schoolName == "----Otributor Group") {
            $scope.uiCarrierGroups = {
                name: "abc-ui"
            };
        } else {
            $scope.uiCarrierGroups = {
                name: "def-ui"
            };
        }
    }


    // //get school name for binding with dropdown
    // NavigationService.getSchoolName({}, function (data) {
    //     console.log("schoolName", data);
    //     $scope.schoolList = data.data;

    //     // console.log("schoolName", $scope.schoolName);
    // });

    // NavigationService.getAtheleteSFA("", function (data) {
    //     console.log("sfa", data);
    //     $scope.atheleList = data.data.results;
    //     // $scope.atheleList = data.data;
    // });

    //removes image uploaded
    $scope.removeProof = function (data, className) {
        console.log(className);
        $("." + className + " input").val("");
        delete $scope.formData.birthImage;
        $scope.show = 0;
    }
    $scope.removeProof1 = function (data, className) {
        console.log(className);
        $("." + className + " input").val("");
        delete $scope.formData.photoImage;
        $scope.show = 0;
    }

    $scope.removePhoto = function (data, className) {
        console.log(className);
        $("." + className + " input").val("");
        delete $scope.formData.photograph;
        $scope.show = 0;
    }
    $scope.removeImage = function (data, className) {
        console.log(className);
        $("." + className + " input").val("");
        delete $scope.formData.atheleteSchoolIdImage;
        $scope.show = 0;
    }

    $scope.addSportForm = function () {
        if ($scope.formData.parentDetails.length < 3) {

            $scope.formData.parentDetails.push({});
            console.log("sportsDepartment", $scope.formData.parentDetails);

        }
    };

    $scope.removeSportForm = function (index) {
        console.log("hello remove", index);
        if (index !== 0) {
            $scope.formData.parentDetails.splice(index, 1);
            console.log("sportsDepartment", $scope.formData.parentDetails);
        }
    };

    $scope.goto = function () {
        if ($scope.oneClick == false) {
            $scope.showSchool = !$scope.showSchool;
            $scope.oneClick = true;
        }
    }

    $scope.goToPrevious = function () {
        $scope.showSchool = !$scope.showSchool;
        $scope.formData.atheleteSchoolName = '';
        $scope.formData.atheleteSchoolLocality = '';
        $scope.formData.atheleteSchoolContact = '';
        $scope.oneClick = false;
    }

    // $scope.formData.sportLevel = _.chunk($scope.sportsLevelArray, 3);
    // $scope.addSportLevelForm = function () {
    //     if ($scope.sportsLevelArray.length <= 9) {
    //         $scope.sportsLevelArray.push({});
    //         $scope.formData.sportLevel = _.chunk($scope.sportsLevelArray, 3);

    //     }
    //     // console.log("sportsLevelArray", $scope.sportsLevelArray);

    // };
    // $scope.removeSportLevelForm = function (indexX, indexY) {
    //     if (indexX >= 0 && indexY >= 0) {
    //         if ($scope.sportsLevelArray.length > 1) {
    //             $scope.formData.sportLevel[indexX].splice(indexY, 1);
    //             $scope.sportsLevelArray = _.flatten($scope.formData.sportLevel);
    //         } else {
    //             $scope.sportsLevelArray = [];
    //             $scope.sportsLevelArray.push({});
    //             $scope.myshow = false;
    //             $scope.formData.played = 'no';
    //         }

    //         $scope.formData.sportLevel = _.chunk($scope.sportsLevelArray, 3);
    //     }
    // };


    // $scope.formData.sportLevel = _.chunk($scope.sportsLevelArray, 3);
    $scope.addSportLevelForm = function (index) {
        if ($scope.formData.sportLevel.length < 9) {
            $scope.formData.sportLevel.splice(index + 1, 0, {})
            // $scope.formData.sportLevel.push({});
        }
    };
    $scope.removeSportLevelForm = function (index) {
        _.pullAt($scope.formData.sportLevel, index);
    };
    $scope.showLevels = function (value) {
        if (value) {
            $scope.formData.sportLevel = [{}];
        } else {
            $scope.formData.sportLevel = [];
        }
    };


    $scope.test = function (size) {

        $scope.testModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/modsub.html',
            scope: $scope,
            size: size,
            windowClass: "test-modal"

        });
    };
    $scope.athBenModal = function () {
        $scope.errInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            templateUrl: "views/modal/athletebenefits.html",
            size: 'lg'
        });
    };
    $scope.termcondition = function (size) {

        $scope.termconditionModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/terms.html',
            scope: $scope,
            size: size,
            windowClass: "termcondition-modal"

        });
    };
    $scope.openModal = function () {
        $timeout(function () {
            fbq('track', 'Lead', {
                value: 10.00,
                currency: 'USD'
            });
            fbq('track', 'CompleteRegistration', {
                value: 25.00,
                currency: 'USD'
            });
        });
        var modalInstance = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/thankyou.html"
        });
    };

    $scope.openErrorModal = function () {
        $scope.modalInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/error.html"
        });
    };

    $scope.openErrModal = function () {
        $scope.errInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/err.html"
        });
    };

    $scope.openExistModal = function () {
        $scope.existInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorExist.html"
        });
    };

    $scope.openPaymentModal = function () {
        $scope.paymentInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorPayment.html"
        });
    };
    $scope.openSchoolModal = function () {
        $scope.schoolInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorSchool.html"
        });
    };

    $scope.openBirthModal = function () {
        $scope.birthInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorBirth.html"
        });
    };

    $scope.openAgeModal = function () {
        $scope.ageInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorPhoto.html"
        });
    };

    $scope.openIdModal = function () {
        $scope.idInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorId.html"
        });
    };

    $scope.openUploadSizeModal = function () {
        $scope.uploadSizeInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorUploadSize.html"
        });
    };

    $scope.openUploadTypeModal = function () {
        $scope.uploadTypeInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorUploadType.html"
        });
    };

})

//form-regis
firstapp.controller('FormregisCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.changeitSchoolLogo = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }
    $scope.changeitPhotograph = function (err, data) {
        console.log(err, data);
        if (err) {
            $scope.errorMsgpan = err;
            if (err == 'Please Upload File Size Upto 1 MB') {
                $scope.openUploadSizeModal();
                $timeout(function () {
                    $scope.uploadSizeInstances.close();
                }, 2000);
            }
            if (err == 'Please upload png or jpg.') {
                $scope.openUploadTypeModal();
                $timeout(function () {
                    $scope.uploadTypeInstances.close();
                }, 2000);
            }
        } else {
            $scope.errorMsgpan = " ";
            // $scope.errorMsgpan = "Successfully uploaded";
        }
    }
    $scope.formData = {}
    $scope.formData.sportsDepartment = [];
    $scope.sportDepart = {
        name: "",
        designation: "",
        email: "",
        photo: "",
        mobile: ""
    };
    // $scope.dateOptions = {
    //     changeYear: true,
    //     changeMonth: true,
    //     yearRange: '1900:-0',
    //     dateFormat: "dd/mm/yy"
    // };
    // $scope.menu = "menu-out";
    // $scope.getMenu = function () {
    //     if ($scope.menu == "menu-out") {
    //         $scope.menu = "menu-out";
    //     } else {
    //         $scope.menu = "menu-in";
    //     }
    // }

    $scope.formdata = {}

    $scope.openModal = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/thankyou.html"
        });
    };

    $scope.openErrorModal = function () {
        $scope.modalInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/error.html"
        });
    };

    $scope.openErrModal = function () {
        $scope.errInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/err.html"
        });
    };
    $scope.regisBenModal = function () {
        $scope.errInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            templateUrl: "views/modal/registerbenefits.html",
            size: 'lg'
        });
    };

    $scope.firstTime = 0;
    if ($scope.firstTime == 0) {
        $scope.formData.sportsDepartment.push($scope.sportDepart);
        $scope.firstTime++;
    }

    $scope.addSportForm = function () {
        if ($scope.formData.sportsDepartment.length < 3) {
            $scope.sportDepart = {
                name: null,
                designation: null,
                email: null,
                photo: null,
                mobile: null
            };
            $scope.formData.sportsDepartment.push($scope.sportDepart);
            console.log("sportsDepartment", $scope.formData.sportsDepartment);
        }
    };
    //    $scope.removeArrayImage = function (index) {
    //         console.log("remove me", document.getElementById("inputImage").value);
    //         $scope.formData.sportsDepartment[index].photograph = null;
    //     }

    $scope.removeSportForm = function (index) {
        console.log("hello remove", index);
        if (index != 0) {
            $scope.formData.sportsDepartment.splice(index, 1);
            console.log("sportsDepartment", $scope.formData.sportsDepartment);
        }
    };
    $scope.teamSport = [];
    $scope.aquaticsSports = [];
    $scope.racquetSports = [];
    $scope.combatSports = [];
    $scope.targetSports = [];
    $scope.individualSports = [];
    $scope.sfaID = '';
    $scope.emailOtp = {};
    $scope.showOtpSuccess = {};

    // var isSportSelected = function (form) {
    //     if (formdata.teamSports.length > 0 || formdata.racquetSports.length > 0 || formdata.combatSports.length > 0 || formdata.targetSports.length > 0 || formdata.individualSports.length > 0 || formdata.aquaticsSports.length > 0) {
    //         $scope.showTeamSports = false;
    //     } else {
    //         console.log('enter');
    //         $scope.showTeamSports = true;
    //     }
    // }

    //save registerform to database
    $scope.isDisabled = false;
    $scope.saveRegis = function (formdata, formvalid) {
        formdata.teamSports = $scope.teamSport
        formdata.racquetSports = $scope.racquetSports
        formdata.combatSports = $scope.combatSports
        formdata.targetSports = $scope.targetSports
        formdata.individualSports = $scope.individualSports
        formdata.aquaticsSports = $scope.aquaticsSports
        formdata.sfaID = $scope.sfaID

        $scope.value = {}

        // if (formdata.teamSports == '' || formdata.racquetSports == '' || formdata.combatSports == '' || formdata.targetSports == '' || formdata.individualSports == '' || formdata.aquaticsSports == '') {
        //     $scope.showTeamSports = true;
        // } else {
        //     $scope.showTeamSports = false;
        // }

        // if (formdata.teamSports == '') {
        //     $scope.showTeamSports = true;
        // } else
        // if (formdata.racquetSports == '') {
        //     $scope.showTeamSports = true;
        // } else if (formdata.combatSports == '') {
        //     $scope.showTeamSports = true;
        // } else if (formdata.targetSports == '') {
        //     $scope.showTeamSports = true;
        // } else if (formdata.individualSports == '') {
        //     $scope.showTeamSports = true;
        // } else if (formdata.aquaticsSports == '') {
        //     $scope.showTeamSports = true;
        // } else {
        //     $scope.showTeamSports = false;
        // }

        // if (formdata.teamSports != null || formdata.racquetSports != null || formdata.combatSports != null || formdata.targetSports != null || formdata.individualSports != null || formdata.aquaticsSports != null) {
        //     $scope.showTeamSports = false;
        // } else {
        //     console.log(enter);
        //     $scope.showTeamSports = true;
        // }
        if (formdata.teamSports.length > 0 || formdata.racquetSports.length > 0 || formdata.combatSports.length > 0 || formdata.targetSports.length > 0 || formdata.individualSports.length > 0 || formdata.aquaticsSports.length > 0) {
            $scope.showTeamSports = false;
        } else {
            console.log('enter');
            $scope.showTeamSports = true;
        }

        if (formdata.termsAndCondition == undefined || formdata.termsAndCondition == false) {
            $scope.showTerm = true;
        } else {
            $scope.showTerm = false;
        }

        $scope.url = "registration/saveRegistrationForm";
        console.log($scope.url);
        if (formvalid.$valid && $scope.showTerm == false && $scope.showTeamSports == false) {
            if ($scope.showOtpSuccess == false) {
                $scope.isDisabled = true;
                NavigationService.apiCallWithData($scope.url, formdata, function (data) {
                    if (data.value == true) {
                        if (data.data.registrationFee == "online PAYU") {
                            var id = data.data._id;
                            console.log("true and in payment");
                            var url = "payU/schoolPayment?id=" + id;
                            window.location.href = adminurl2 + url;
                        } else {
                            console.log("opening modal");
                            $scope.openModal();
                        }
                    } else {
                        $scope.isDisabled = false;
                        $scope.openErrModal();
                        $timeout(function () {
                            $scope.errInstances.close();
                        }, 3000);
                    }
                });
            }
        } else {
            $scope.isDisabled = false;
            console.log("Enter all mandatory fields");
            $scope.openErrorModal();
            $timeout(function () {
                $scope.modalInstances.close();
            }, 3000)
        }
    }
    // $scope.checkOTP = function (otp) {
    //     console.log("opt", $scope.emailOtp, otp);
    //     if ($scope.emailOtp == otp) {
    //         console.log("email OTP verified");
    //     } else {
    //         alert("Incorrect OTP!");
    //     }
    // }

    // $scope.checkOTP = function (otp) {
    //     console.log("opt", $scope.emailOtp, otp);
    //     if (_.isEqual($scope.emailOtp, otp)) {
    //         $(' .verify-otp-regis').html('<i class="fa fa-check"></i>').css("color", "green");
    //         console.log("email OTP verified");
    //     } else {
    //         alert("Incorrect OTP!");
    //         $(' .verify-otp-regis').html('<i class="fa fa-times"></i>').css("color", "red");
    //     }
    // }

    $scope.checkOTP = function (otp) {
        console.log("opt", $scope.emailOtp, otp);
        console.log(typeof otp, typeof $scope.emailOtp);

        var otpCheck = otp.toString();
        console.log("length", otpCheck.length);
        if (otpCheck.length == 4) {

            if (_.isEqual($scope.emailOtp, otpCheck)) {
                // $(' .verify-otp-regis').html('<i class="fa fa-check"></i>').css("color", "green");
                console.log("email OTP verified");
                $scope.showOtpSuccess = false;

            } else {
                // alert("Incorrect OTP!");
                // $(' .verify-otp-regis').html('<i class="fa fa-times"></i>').css("color", "red");
                $scope.showOtpSuccess = true;
            }
        } else if (otpCheck.length == 3) {
            otpCheck = "0" + otpCheck;
            console.log("otpCheck", otpCheck);
            if (_.isEqual($scope.emailOtp, otpCheck)) {
                // $(' .verify-otp-regis').html('<i class="fa fa-check"></i>').css("color", "green");
                console.log("email OTP verified");
                $scope.showOtpSuccess = false;

            } else {
                // alert("Incorrect OTP!");
                // $(' .verify-otp-regis').html('<i class="fa fa-times"></i>').css("color", "red");
                $scope.showOtpSuccess = true;
            }
        }

    }



    $scope.sendOTP = function (email) {
        var formdata = {}
        formdata.email = email;
        console.log("form", formdata);
        $scope.url = "registration/generateOTP";
        console.log($scope.url);
        NavigationService.apiCallWithData($scope.url, formdata, function (data) {
            $scope.emailOtp = data.data;
        });
    }

    $scope.termcondition = function (size) {

        $scope.termconditionModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/terms-school.html',
            scope: $scope,
            size: size,
            windowClass: "termcondition-modal"

        });
    };

    // $scope.addTeamSports = function (formdata) {
    //         // formdata.serviceRequest = $scope.serviceList;
    //         console.log("formdata", formdata);
    //         var frm = {};
    //         frm.name = formdata;
    //         //document.getElementById(formdata).checked
    //         $scope.teamSport.push(frm);

    //     }

    //team sports array
    $scope.addTeamSports = function (formdata) {
        var index = _.findIndex($scope.teamSport, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.teamSport, index);
        } else {
            $scope.teamSport.push({
                name: formdata
            });
        }
        console.log($scope.teamSport);
    }

    //racquet sports array
    $scope.addRacquetSports = function (formdata) {
        $scope.combatSports = [];
        $scope.targetSports = [];
        $scope.individualSports = [];
        var index = _.findIndex($scope.racquetSports, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.racquetSports, index);
        } else {
            $scope.racquetSports.push({
                name: formdata
            });
        }
    }

    //combatSports array
    $scope.addCombatSports = function (formdata) {
        var index = _.findIndex($scope.combatSports, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.combatSports, index);
        } else {
            $scope.combatSports.push({
                name: formdata
            });
        }
    }

    //targetSports array
    $scope.addTargetSports = function (formdata) {
        var index = _.findIndex($scope.targetSports, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.targetSports, index);
        } else {
            $scope.targetSports.push({
                name: formdata
            });
        }
    }

    //individualSports array
    $scope.addIndividualSports = function (formdata) {
        var index = _.findIndex($scope.individualSports, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.individualSports, index);
        } else {
            $scope.individualSports.push({
                name: formdata
            });
        }

    }
    //aquaticsSports array
    $scope.addAquaticsSports = function (formdata) {
        var index = _.findIndex($scope.aquaticsSports, function (n) {
            return n.name == formdata;
        });
        if (index >= 0) {
            _.pullAt($scope.aquaticsSports, index);
        } else {
            $scope.aquaticsSports.push({
                name: formdata
            });
        }
    }

    //called on refresh
    $scope.refreshSFA = function (paramData) {
        NavigationService.getSchoolSFA(paramData, function (data) {
            console.log("sfa regis", data);
            $scope.schoolList = data.data.results;
            //$scope.schoolList = data.data;
        });
    }

    //called on select for taking value
    $scope.searchSFA = function (paramData) {
        console.log("changekeyword", paramData);
        $scope.sfaID = paramData;
        console.log("sfaid", $scope.sfaID);
    }

    //get school name for binding with dropdown
    // NavigationService.getSchoolSFA("", function (data) {
    //     console.log("sfa regis", data);
    //     $scope.schoolList = data.data.results;
    //     //$scope.schoolList = data.data;
    // });


    $scope.template = TemplateService.changecontent("formregis");
    $scope.menutitle = NavigationService.makeactive("Form Registration");
    TemplateService.header = "views/header2.html";
    TemplateService.footer = "";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.test = function (size) {

        $scope.testModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/modsub.html',
            scope: $scope,
            size: size,
            windowClass: "test-modal"

        });
    };

    $scope.openUploadSizeModal = function () {
        $scope.uploadSizeInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorUploadSize.html"
        });
    };

    $scope.openUploadTypeModal = function () {
        $scope.uploadTypeInstances = $uibModal.open({
            animation: true,
            scope: $scope,
            backdrop: 'static',
            keyboard: false,
            // size: 'sm',
            templateUrl: "views/modal/errorUploadType.html"
        });
    };

    //removes image uploaded
    $scope.removeImage = function (data, className) {
        // console.log("remove me", document.getElementById("inputImage").value);
        // $scope.formData.schoolLogo = null;
        console.log(className);
        $("." + className + " input").val("");
        delete $scope.formData.schoolLogo;
        $scope.show = 0;
    }
    $scope.removeArrayImage = function (index, className) {
        // console.log("remove me", document.getElementById("inputImage").value);
        // $scope.formData.sportsDepartment[index].photograph = null;
        console.log(className);
        $("." + className + " input").val("");
        console.log($scope.formData.sportsDepartment[index].photograph);
        delete $scope.formData.sportsDepartment[index].photograph;
        console.log($scope.formData.sportsDepartment[index].photograph);
        $scope.show = 0;
    }

})



//school-registrationForm
firstapp.controller('SportsRegistrationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state, $rootScope) {
    //Used to name the .html file

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
            $scope.ath = true;
            $scope.sch = false;
        } else {
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
                console.log('everything is alright');
                // $scope.isDisabled = true;
                console.log("formData", formData);
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
//Rules
firstapp.controller('SportsRulesCtrl', function ($scope, TemplateService, $state, NavigationService, toastr, $timeout, $stateParams) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("sportsreg-terms");
    $scope.menutitle = NavigationService.makeactive("Sports Rules And Regulations");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.termsandCondition = "This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports.The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports.The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports.The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.This is a one-time registration process. Completion of this process will allow you to register using your SFA ID for all future SFA Events. This also enables us to create a personalized sporting experience for your school on our website www.sfanow.in to highlight your performances in sport by way of profiles, records maintenance, match videos, statistics and reports. The annual school registration fee for SFA Mumbai 2017 is Rs. 12,000 (Inclusive of all applicable taxes) Click here to view registered school benefits for SFA Mumbai 2017.";
    if ($stateParams.id) {
        NavigationService.getSportsRules($stateParams.id, function (data) {
            console.log("dataa", data);
            if (data.value) {
                $scope.sportsRulesAndRegulation = data.data;
                console.log($scope.sportsRulesAndRegulation, "data");
            } else {
                console.log("no data found");
            }

        })
    }
    $scope.goTotermsCheck = function (val, id) {
        console.log("imin", val);
        if (val == undefined) {
            toastr.error('Please Accept Terms And Conditions');
            $scope.errorMsg = true;

        } else {
            console.log("id", id);
            if (val == true) {
                $state.go('athletes-selection');
                $state.go('athletes-selection', {
                    id: id

                })
            }
        }

    }


})

//Sports-congrats
firstapp.controller('SportsCongratsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("sports-congrats");
    $scope.menutitle = NavigationService.makeactive("Sports Congrats");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})
//Sports-Selection
firstapp.controller('SportsSelectionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $state) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("sports-tab");
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
            console.log('value', 'data')
            $scope.sportsschool = true;
            $scope.sportsregistered = false;
            console.log('school');
        } else {
            $scope.sportsschool = false;
            $scope.sportsregistered = true;
            console.log('register');
        }
    };


    if ($.jStorage.get("userDetails") != null) {
        $scope.isLoggedIn = true;
        if ($.jStorage.get("userType") == "school") {
            $scope.sfaIdObj = $.jStorage.get("userDetails").sfaID;
            $scope.schoolName = $.jStorage.get("userDetails").schoolName;

        } else {
            $scope.sfaIdObj = $.jStorage.get("userDetails").sfaId;
            if ($.jStorage.get("userDetails").atheleteSchoolName) {
                $scope.schoolName = $.jStorage.get("userDetails").atheleteSchoolName;
                NavigationService.setUserSchool($scope.schoolName);
            } else {
                if ($.jStorage.get("userDetails").school) {
                    $scope.schoolName = $.jStorage.get("userDetails").school.name;
                    NavigationService.setUserSchool($scope.schoolName);
                }
            }


        }
    } else {

        $scope.isLoggedIn = false;
    }
    if ($.jStorage.get("userDetails") == null) {
        $state.go('sports-registration');
    }
    $scope.requestObjUserType = {};
    $scope.logoutCommomFun = function (requestObjUserType) {
        NavigationService.logout(requestObjUserType, function (data) {
            console.log("data", data);
            if (data.value) {
                toastr.success('Successfully Logged Out', 'Logout Message');
                $scope.isLoggedIn = false;
                $state.go('sports-registration');
            } else {
                toastr.error('Something went wrong', 'Logout Message');
            }
        });
    }
    $scope.logoutCandidate = function () {
        if ($.jStorage.get("userType") != null && $.jStorage.get("userDetails") != null) {
            if ($.jStorage.get("userType") == "school") {
                $scope.requestObjUserType.schoolToken = $.jStorage.get("userDetails").accessToken;
                console.log($scope.requestObjUserType, "$scope.requestObjUserType");
                $scope.logoutCommomFun($scope.requestObjUserType);

            } else {
                $scope.requestObjUserType.athleteToken = $.jStorage.get("userDetails").accessToken;
                console.log($scope.requestObjUserType, "$scope.requestObjUserType");
                $scope.logoutCommomFun($scope.requestObjUserType);
            }
        }
    }

    // ==========getAllSportsListSubCategory==============
    $scope.allSportsListSubCatArr = [];
    var tempObj = {};
    tempObj.tempArr = [];
    NavigationService.getAllSportsListSubCategory(function (data) {
        console.log("data", data);
        if (data.value) {
            $scope.allSportsListSubCat = data.data;
            _.each($scope.allSportsListSubCat, function (key, value) {
                console.log(key, "key",
                    value);
                tempObj.sportName = value;
                tempObj.tempArr = _.cloneDeep(key);
                $scope.allSportsListSubCatArr.push(tempObj);
                tempObj = {};
            })
            console.log(" $scope.allSportsListSubCatArr", $scope.allSportsListSubCatArr);
        }
    })
})

//Athletes-Selection
firstapp.controller('AthletesSelectionCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("selectathletes");
    $scope.menutitle = NavigationService.makeactive("Athletes Selection");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.ageGroup = [];
    $scope.maleAgeGrp = [];
    $scope.femaleAgeGrp = [];
    $scope.constraints = {};
    $scope.constraints._id = $stateParams.id;
    $scope.getAthletePerSchoolObj = {};
    $scope.getAthletePerSchoolObj.sfaid = '';
    $scope.getAthletePerSchoolObj.page = '1';
    if ($.jStorage.get("schoolName") != null) {
        $scope.getAthletePerSchoolObj.school = $.jStorage.get("schoolName");
    }
    $scope.getAthletePerSchool = function (constraints) {
        NavigationService.getOneSport(constraints, function (data) {
            console.log(data, "data");
            if (data.value) {
                $scope.showMsg = true
                $scope.getAthletePerSchoolObj.sport = data.data.sport;

                console.log($scope.getAthletePerSchoolObj, "$scope.getAthletePerSchoolObj");
                NavigationService.getAthletePerSchool($scope.getAthletePerSchoolObj, function (data) {
                    console.log(data, "data");
                    if (data.value) {
                        $scope.isLoading = false;
                        $scope.selectAthlete = data.data;
                    }
                })
            }
        })

    }
    $scope.goToAge = function (ageId) {
        $scope.isLoading = true;
        $scope.constraints.age = ageId;
        $scope.getAthletePerSchoolObj.age = ageId;
        console.log($scope.constraints.age, "$scope.constraints.age");
        $scope.getAthletePerSchool($scope.constraints);
    }
    $scope.loadMore = function () {

    }
    // $scope.filterData = function () {
    //     $scope.selectAthlete = [];
    //     $scope.getAthletePerSchoolObj.page = '1'
    //     NavigationService.getAthletePerSchool($scope.getAthletePerSchoolObj, function (data) {
    //         console.log(data, "data");
    //         if (data.value) {
    //             $scope.isLoading = false;
    //             $scope.selectAthlete = data.data;
    //         }
    //     })

    // }

    $scope.showAgeGrp = function (gender) {
        console.log("gender", gender);
        if (gender == "female") {
            $scope.ageGroup = [];
            $scope.ageGroup = $scope.femaleAgeGrp;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;
        } else {
            console.log("im in else");
            $scope.ageGroup = [];
            $scope.ageGroup = $scope.maleAgeGrp;
            $scope.constraints.gender = gender;
            $scope.getAthletePerSchoolObj.gender = gender;

        }
    }

    if ($stateParams.id) {
        NavigationService.getSports($stateParams.id, function (data) {
            $scope.getSports = data.data;
            $scope.maleAgeGrp = _.cloneDeep($scope.getSports.male);
            $scope.femaleAgeGrp = _.cloneDeep($scope.getSports.female);
            $scope.showAgeGrp('male');
        })
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





})

//Sports-Confirm-Team
firstapp.controller('ConfirmTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("sports-confirmteam");
    $scope.menutitle = NavigationService.makeactive("Confirm Team");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

firstapp.controller('headerctrl', function ($scope, TemplateService, $rootScope) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $scope.variables = {};
    $scope.$watch('online', function (newStatus) {
        $scope.variables.online = $rootScope.online;
    });
    $scope.games = // JavaScript Document
        [{
            "img": "img/footer/n1.jpg",
            "href": "http://madeofgreat.tatamotors.com/tiago/",
            "game": "Fantastico Partner"
        }, {
            "img": "img/footer/n2.jpg",
            "href": "",
            "game": "Smartphone Partner"
        }, {
            "img": "img/footer/p4.jpg",
            "href": "",
            "game": "Energy Drinks Partner"
        }, {
            "img": "img/footer/n3.jpg",
            "href": "",
            "game": "Support Partner"
        }, {
            "img": "img/footer/p7.jpg",
            "href": "",
            "game": "Media Partner "
        }, {
            "img": "img/footer/n4.jpg",
            "href": "https://www.facebook.com/sportsillustratedindia/",
            "game": "Magazine Partner"
        }, {
            "img": "img/footer/n1.jpg",
            "href": "http://madeofgreat.tatamotors.com/tiago/",
            "game": "Fantastico Partner"
        }, {
            "img": "img/footer/n2.jpg",
            "href": "",
            "game": "Smartphone Partner"
        }, {
            "img": "img/footer/p4.jpg",
            "href": "",
            "game": "Energy Drinks Partner"
        }, {
            "img": "img/footer/n3.jpg",
            "href": "",
            "game": "Support Partner"
        }];
    $scope.partner = // JavaScript Document
        [{
            "img": "img/footer/p1.jpg",
            "href": "",
            "game": "Venue Partner"
        }, {
            "img": "img/footer/p6.jpg",
            "href": "",
            "game": "Hospital Partner"
        }, {
            "img": "img/footer/na1.jpg",
            "href": "",
            "game": "Sports Equipment Partner"
        }, {
            "img": "img/footer/na2.jpg",
            "href": "",
            "game": "Apparel Partner"
        }, {
            "img": "img/footer/na3.jpg",
            "href": "",
            "game": "Sports Surface Partner"
        }, {
            "img": "img/footer/na6.jpg",
            "href": "",
            "game": "Sports Mentorship Partner"
        }, {
            "img": "img/footer/na4.jpg",
            "href": "",
            "game": "Shooting Range Partner"
        }, {
            "img": "img/footer/p5.jpg",
            "href": "",
            "game": "Medical Partner"
        }, {
            "img": "img/footer/na5.jpg",
            "href": "",
            "game": "Event Partner "
        }];

})
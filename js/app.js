// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.select',
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    'ui.date'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    // cfpLoadingBarProvider.latencyThreshold = 2000;
    // cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;
    // cfpLoadingBarProvider.spinnerTemplate = '<div class="loaderHeader"><img src="img/load.gif" alt="" /></div>';
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl'
        })
        .state('championship', {
            url: "/championship",
            templateUrl: "views/template.html",
            controller: 'ChampionshipCtrl'
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/template.html",
            controller: 'RegisterCtrl'
        })
        .state('certificate', {
            url: "/certificate",
            templateUrl: "views/template.html",
            controller: 'CertificateCtrl'
        })
        .state('draw-schedule', {
            url: "/draw-schedule",
            templateUrl: "views/template.html",
            controller: 'DrawScheduleCtrl'
        })

        .state('special-awards', {
            url: "/special-awards",
            templateUrl: "views/template.html",
            controller: 'SpecialAwardsCtrl'
        })
        .state('league-knockout', {
            url: "/league-knockout/:id",
            templateUrl: "views/template.html",
            controller: 'LeagueKnockoutCtrl'
        })
        .state('venue', {
            url: "/venue",
            templateUrl: "views/template.html",
            controller: 'VenueCtrl'
        })
        .state('formathlete', {
            url: "/formathlete",
            templateUrl: "views/template.html",
            controller: 'FormathleteCtrl'
        })
        .state('formregis', {
            url: "/formregis",
            templateUrl: "views/template.html",
            controller: 'FormregisCtrl'
        })
        .state('workshop-clinic', {
            url: "/workshop-clinic",
            templateUrl: "views/template.html",
            controller: 'WorkshopClinicCtrl'
        })
        .state('download-schedule', {
            url: "/download-schedule",
            templateUrl: "views/template.html",
            controller: 'DownloadScheduleCtrl'
        })
        .state('merchandise-apparels', {
            url: "/merchandise-apparels",
            templateUrl: "views/template.html",
            controller: 'MerchandiseApparelsCtrl'
        })
        .state('medical-aid', {
            url: "/medical-aid",
            templateUrl: "views/template.html",
            controller: 'medicalAidCtrl'
        })
        .state('food-and-entertainment', {
            url: "/food-and-entertainment",
            templateUrl: "views/template.html",
            controller: 'foodAndEntertainmentCtrl'
        })
        .state('special-days', {
            url: "/special-days",
            templateUrl: "views/template.html",
            controller: 'specialDaysCtrl'
        })
        .state('knockout-qualify', {
            url: "/knockout-qualify",
            templateUrl: "views/template.html",
            controller: 'KnockoutQualifyCtrl'
        })
        .state('form-submit', {
            url: "/form-submit",
            templateUrl: "views/template.html",
            controller: 'FormSubmitCtrl'
        })
        .state('after-form', {
            url: "/after-form/:id",
            templateUrl: "views/template.html",
            controller: 'AfterFormCtrl'
        })
        .state('blog-detail', {
            url: "/blog-detail",
            templateUrl: "views/template.html",
            controller: 'BlogDetailCtrl'
        })
        .state('school-ranking', {
            url: "/school-ranking",
            templateUrl: "views/template.html",
            controller: 'SchoolRankingCtrl'
        })
        .state('result', {
            url: "/result",
            templateUrl: "views/template.html",
            controller: 'ResultCtrl'
        })
        .state('sponser-partner', {
            url: "/sponser-partner",
            templateUrl: "views/template.html",
            controller: 'SponserCtrl'
        })
        .state('champions', {
            url: "/champions",
            templateUrl: "views/template.html",
            controller: 'ChampionsCtrl'
        })
        .state('school', {
            url: "/school",
            templateUrl: "views/template.html",
            controller: 'SchoolCtrl'
        })
        .state('media-gallery', {
            url: "/media-gallery",
            templateUrl: "views/template.html",
            controller: 'MediaGalleryCtrl'
        })
        .state('media-gallery-inside', {
            url: "/media-gallery/:type/:folder",
            templateUrl: "views/template.html",
            controller: 'MediaGalleryCtrl'
        })

        .state('media-gallery-type', {
            url: "/media-gallery/:type",
            templateUrl: "views/template.html",
            controller: 'MediaGalleryCtrl'
        })
        .state('draw', {
            url: "/draw/:id",
            templateUrl: "views/template.html",
            controller: 'DrawCtrl'
        })
        .state('swiss', {
            url: "/swiss",
            templateUrl: "views/template.html",
            controller: 'SwissCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "views/template.html",
            controller: 'FaqCtrl'
        })
        .state('registration', {
            url: "/registration",
            templateUrl: "views/template.html",
            controller: 'RegistrationCtrl'
        })
        .state('team', {
            url: "/team",
            templateUrl: "views/template.html",
            controller: 'TeamCtrl'
        })
        .state('sport', {
            url: "/sport/:name",
            templateUrl: "views/template.html",
            controller: 'SportCtrl'
        })
        .state('heats', {
            url: "/heats/:id",
            templateUrl: "views/template.html",
            controller: 'HeatsCtrl'
        })
        .state('qualify', {
            url: "/qualify/:id",
            templateUrl: "views/template.html",
            controller: 'QualifyCtrl'
        })
        .state('knockout', {
            url: "/knockout",
            templateUrl: "views/template.html",
            controller: 'KnockoutCtrl'
        })
        .state('round-robin', {
            url: "/round-robin/:id",
            templateUrl: "views/template.html",
            controller: 'RoundRobinCtrl'
        })
        .state('team-detail', {
            url: "/team-detail/:id",
            templateUrl: "views/template.html",
            controller: 'TeamDetailCtrl'
        })
        .state('school-bio', {
            url: "/school-bio/:id",
            templateUrl: "views/template.html",
            controller: 'SchoolBioCtrl'
        })
        .state('terms-condition', {
            url: "/terms-condition",
            templateUrl: "views/template.html",
            controller: 'TermsConditionCtrl'
        })
        .state('training-development', {
            url: "/training-development",
            templateUrl: "views/template.html",
            controller: 'TraininDevelopmentCtrl'
        })
        .state('school-profile', {
            url: "/school-profile/:id",
            templateUrl: "views/template.html",
            controller: 'SchoolProfileCtrl'
        })
        .state('student-bio', {
            url: "/student-bio/:id",
            templateUrl: "views/template.html",
            controller: 'StudentBioCtrl'
        })
        .state('student-profile', {
            url: "/student-profile/:id",
            templateUrl: "views/template.html",
            controller: 'StudentProfileCtrl'
        })
        .state('about-us', {
            url: "/about-us",
            templateUrl: "views/template.html",
            controller: 'AboutUsCtrl'
        })
        .state('students', {
            url: "/students",
            templateUrl: "views/template.html",
            controller: 'StudentsCtrl'
        })
        .state('paymentSuccess', {
            url: "/paymentSuccess",
            templateUrl: "views/template.html",
            controller: 'PaymentSuccessCtrl'
        })
        .state('sorryAthelete', {
            url: "/sorryAthelete",
            templateUrl: "views/template.html",
            controller: 'SorryAtheleteCtrl'
        })
        .state('paymentFailure', {
            url: "/paymentFailure",
            templateUrl: "views/template.html",
            controller: 'PaymentFailureCtrl'
        })
        //School-registerform
        .state('sports-registration', {
            url: "/sports-registration",
            templateUrl: "views/template.html",
            controller: 'SportsRegistrationCtrl'
        })
        //forgot-password
        .state('forgot-password', {
            url: "/forgot-password",
            templateUrl: "views/template.html",
            controller: 'ForgotpasswordCtrl'
        })
        //Change-password
        .state('change-password', {
            url: "/change-password",
            templateUrl: "views/template.html",
            controller: 'ChangepasswordCtrl'
        })
        //sportsreg-terms
        .state('sportsreg-terms', {
            url: "/sportsreg-terms",
            templateUrl: "views/template.html",
            controller: 'SportsregtermsCtrl'
        })
        //Sports-congrats
        .state('sports-congrats', {
            url: "/sports-congrats",
            templateUrl: "views/template.html",
            controller: 'SportscongratsCtrl'
        })
        //Sports-tab
        .state('sports-tab', {
            url: "/sports-tab",
            templateUrl: "views/template.html",
            controller: 'SportstabCtrl'
        });


    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

firstapp.directive('mycircle', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var amount = 1;
            var myinterval = {};
            $element.ready(function () {
                console.log("DEMO");

                $element.hover(function () {
                    clearInterval(myinterval);
                }, function () {


                    myinterval = setInterval(function () {
                        var $element = $(element);
                        var $elementli = $element.children("li");
                        $abc = $elementli;



                        amount++;
                        var elewidth = $elementli.eq(0).width();
                        //                        console.log(elewidth);
                        var num = amount % elewidth;
                        if (num == 0 && amount > 0) {
                            amount = -15;
                            //                            console.log(amount);
                            var $firstelement = $elementli.eq(0);
                            $element.append("<li>" + $firstelement.html() + "</li>");
                            $firstelement.eq(0).remove();
                        }



                        for (var i = 0; i < $elementli.length; i++) {
                            $elementli.eq(i).css("transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-webkit-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-moz-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-ms-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-o-transform", "translateX(" + (-1 * amount) + "px)");
                        }

                    }, 20);

                });

                $element.trigger("mouseleave");


            });

        }
    };
});
firstapp.run(function ($window, $rootScope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function () {
            $rootScope.online = false;
        });
    }, false);

    $window.addEventListener("online", function () {
        $rootScope.$apply(function () {
            $rootScope.online = true;
        });
    }, false);
});
firstapp.directive('giveitmargin', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $element = $(element);
            var i = 0;

            function addmarginleft(j) {
                $("ul.menu-list").css("margin-left", 0);
                var windowwidth = $(window).width();
                var navigationlogowidth = $(".logoli").width();
                var leftcomp = $(".logoli").position();
                var marginleft = ((windowwidth - navigationlogowidth) / 2) - leftcomp.left;
                if (j == i) {

                    $("ul.menu-list").css("margin-left", marginleft);
                }
            }
            $element.find("img").load(function () {
                addmarginleft(++i);
            });
            $(window).resize(function () {
                addmarginleft(++i);
            });
        }
    };
});
firstapp.filter('ageYearFilter', function () {
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - new Date(birthday).getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
        if (birthdate) {
            return calculateAge(birthdate);
        } else {
            return '-';
        }
    };
});

firstapp.filter('uploadpath', function () {
    return function (input, width, height, style) {
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;
            } else {
                return input;
            }
        }
    };
});

firstapp.filter('letterLimit', function () {
    return function (value, limit) {
        if (value) {
            if (value.length < limit) {
                return value;
            } else {
                return value.slice(0, limit - 2) + "..";
            }
        } else {
            return "";
        }
    };
});
firstapp.filter('removeSchool', function () {
    return function (value, school) {
        if (value) {
            return value.replace(school + " ", "");
        } else {
            return "";
        }
    };
});
firstapp.filter('knockoutRoundName', function () {
    return function (value) {
        if (value) {
            return value.substring(value.indexOf(' ') + 1);
        } else {
            return "";
        }
    };
});
firstapp.filter('mediapath', function () {
    return function (value) {
        if (value) {
            return "https://storage.googleapis.com/sportsforall/media%26gallery/" + value;
        } else {
            return "";
        }
    };
});

firstapp.filter('videothumbnail', function () {
    return function (value) {
        if (value) {
            return "http://img.youtube.com/vi/" + value + "/hqdefault.jpg";
        } else {
            return "";
        }
    };
});

firstapp.filter('lessthan10', function () {
    return function (value) {
        if (value) {
            if (value < 10) {
                return "0" + value;
            } else {
                return value;
            }
        } else {
            return "00";
        }
    };
});

firstapp.filter('ageFilter', function () {
    return function (birthdate) { // birthday is a date
        var birth = _.clone(birthdate);
        if (birth) {
            if (new Date(birth) > new Date(2011, 1, 1)) {
                return 'U-6';
            } else if (new Date(birth) > new Date(2010, 1, 1)) {
                return 'U-7';
            } else if (new Date(birth) > new Date(2009, 1, 1)) {
                return 'U-8';
            } else if (new Date(birth) > new Date(2008, 1, 1)) {
                return 'U-9';
            } else if (new Date(birth) > new Date(2007, 1, 1)) {
                return 'U-10';
            } else if (new Date(birth) > new Date(2006, 1, 1)) {
                return 'U-11';
            } else if (new Date(birth) > new Date(2005, 1, 1)) {
                return 'U-12';
            } else if (new Date(birth) > new Date(2004, 1, 1)) {
                return 'U-13';
            } else if (new Date(birth) > new Date(2003, 1, 1)) {
                return 'U-14';
            } else if (new Date(birth) > new Date(2002, 1, 1)) {
                return 'U-15';
            } else if (new Date(birth) > new Date(2001, 1, 1)) {
                return 'U-16';
            } else if (new Date(birth) > new Date(2000, 1, 1)) {
                return 'U-17';
            } else if (new Date(birth) > new Date(1999, 1, 1)) {
                return 'U-18';
            } else if (new Date(birth) > new Date(1998, 1, 1)) {
                return 'U-19';
            } else {
                return "";
            }
        }
    };
});
firstapp.directive('giveitmargin', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $element = $(element);
            var i = 0;

            function addmarginleft(j) {
                $("ul.menu-list").css("margin-left", 0);
                var windowwidth = $(window).width();
                var navigationlogowidth = $(".logoli").width();
                var leftcomp = $(".logoli").position();
                var marginleft = ((windowwidth - navigationlogowidth) / 2) - leftcomp.left;
                if (j == i) {

                    $("ul.menu-list").css("margin-left", marginleft);
                }
            }
            $element.find("img").load(function () {
                addmarginleft(++i);
            });
            $(window).resize(function () {
                addmarginleft(++i);
            });
        }
    };
});

firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                // $element.after("<img src='img/loading.gif' class='loading' />");
                $element.after("<img src='img/noimage.png' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('mychart', function ($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function ($scope, element, attrs) {
            $(element).mychart();
        }
    };
});

firstapp.directive('fancyboxBox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                overflow: 'hidden',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('fancybox', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function () {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    overflow: 'hidden',
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('hovericon', function ($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'views/directive/hovericon.html',
        scope: {
            game: '='
        },
        link: function (scope, element, attr) {

            var ishover;
            var $element = $(element);
            if (scope.game.grey) {
                $element.addClass("grey");
            } else {
                var $top = $element.children(".top");
                var $bottom = $element.children(".bottom");
                $bottom.width($top.width());

                $element.hover(function () {
                    $element.addClass("bigger");
                }, function () {
                    $element.removeClass("bigger");
                    $bottom.width($top.width());
                });
            }
        }

    };
});
firstapp.directive('scores', function ($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "views/directive/score.html",
        link: function (scope, element, attr) {
            // console.info(scope.person);
        }
    };
});
firstapp.directive('draw', function ($document, $state) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "views/directive/draw-list.html",
        scope: {
            knockout: '='
        },
        link: function ($scope, element, attr) {
            // console.info(scope.person);
            var sfastate = "";
            $scope.profiles = function (participantType, id) {
                console.log(participantType, id);
                if (participantType == 'player') {
                    sfastate = 'student-profile';
                } else {
                    sfastate = 'team-detail';
                }
                $state.go(sfastate, {
                    id: id
                });
            };
        }
    };
});
firstapp.filter('rawHtml', ['$sce',
    function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
]);
firstapp.filter('englishNumeralDate', function () {
    return function (value) {
        if (value) {
            return moment(new Date(value)).format("Do MMMM YYYY");
        }
    };
});
firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function () {
                $element.css("min-height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.directive('fancyboxButton', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function () {
                $(".varies").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    overflow: 'auto',
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});

firstapp.directive('uploadImage', function ($http, $filter, $timeout) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            type: "@type",
            callback: "&ngCallback"
        },
        link: function ($scope, element, attrs) {
            console.log($scope.model);
            $scope.showImage = function () {};
            $scope.check = true;
            if (!$scope.type) {
                $scope.type = "image";
            }
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple == "true") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            // if (attrs.required) {
            //     $scope.required = true;
            // } else {
            //     $scope.required = false;
            // }

            $scope.$watch("image", function (newVal, oldVal) {
                console.log(newVal, oldVal);
                isArr = _.isArray(newVal);
                if (!isArr && newVal && newVal.file) {
                    $scope.uploadNow(newVal);
                } else if (isArr && newVal.length > 0 && newVal[0].file) {

                    $timeout(function () {
                        console.log(oldVal, newVal);
                        console.log(newVal.length);
                        _.each(newVal, function (newV, key) {
                            if (newV && newV.file) {
                                $scope.uploadNow(newV);
                            }
                        });
                    }, 100);

                }
            });

            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function (n) {
                        $scope.image.push({
                            url: n
                        });
                    });
                } else {
                    if (_.endsWith($scope.model, ".pdf")) {
                        $scope.type = "pdf";
                    }
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function () {
                $scope.model = [];
                $scope.uploadStatus = "removed";
            };
            $scope.removeImage = function (index) {
                $scope.image = [];
                $scope.model.splice(index, 1);
                _.each($scope.model, function (n) {
                    $scope.image.push({
                        url: n
                    });
                });
            }

            $scope.uploadNow = function (image) {
                $scope.uploadStatus = "uploading";

                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.file.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).then(function (data) {
                    data = data.data;
                    $scope.uploadStatus = "uploaded";
                    if ($scope.isMultiple) {
                        if ($scope.inObject) {
                            $scope.model.push({
                                "image": data.data[0]
                            });
                        } else {
                            if (!$scope.model) {
                                $scope.clearOld();
                            }
                            $scope.model.push(data.data[0]);
                        }
                    } else {
                        if (_.endsWith(data.data[0], ".pdf")) {
                            $scope.type = "pdf";
                        } else {
                            $scope.type = "image";
                        }
                        $scope.model = data.data[0];
                        console.log($scope.model, 'model means blob')

                    }
                    $timeout(function () {
                        $scope.callback();
                    }, 100);

                });
            };
        }
    };
});

firstapp.directive('uploadImage2', function ($http, $filter, $timeout) {
    return {
        templateUrl: 'views/directive/uploadFile2.html',
        scope: {
            model: '=ngModel',
            type: "@type",
            callback: "&ngCallback"
        },
        link: function ($scope, element, attrs) {
            console.log($scope.model);
            $scope.showImage = function () {};
            $scope.check = true;
            if (!$scope.type) {
                $scope.type = "image";
            }
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple == "true") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            // if (attrs.required) {
            //     $scope.required = true;
            // } else {
            //     $scope.required = false;
            // }

            $scope.$watch("image", function (newVal, oldVal) {
                console.log(newVal, oldVal);
                isArr = _.isArray(newVal);
                if (!isArr && newVal && newVal.file) {
                    $scope.uploadNow(newVal);
                } else if (isArr && newVal.length > 0 && newVal[0].file) {

                    $timeout(function () {
                        console.log(oldVal, newVal);
                        console.log(newVal.length);
                        _.each(newVal, function (newV, key) {
                            if (newV && newV.file) {
                                $scope.uploadNow(newV);
                            }
                        });
                    }, 100);

                }
            });

            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function (n) {
                        $scope.image.push({
                            url: n
                        });
                    });
                } else {
                    if (_.endsWith($scope.model, ".pdf")) {
                        $scope.type = "pdf";
                    }
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function () {
                $scope.model = [];
                $scope.uploadStatus = "removed";
            };
            $scope.removeImage = function (index) {
                $scope.image = [];
                $scope.model.splice(index, 1);
                _.each($scope.model, function (n) {
                    $scope.image.push({
                        url: n
                    });
                });
            }

            $scope.uploadNow = function (image) {
                $scope.uploadStatus = "uploading";

                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.file.name);
                $http.post(uploadurl2, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).then(function (data) {
                    data = data.data;
                    $scope.uploadStatus = "uploaded";
                    if ($scope.isMultiple) {
                        if ($scope.inObject) {
                            $scope.model.push({
                                "image": data.data[0]
                            });
                        } else {
                            if (!$scope.model) {
                                $scope.clearOld();
                            }
                            $scope.model.push(data.data[0]);
                        }
                    } else {
                        if (_.endsWith(data.data[0], ".pdf")) {
                            $scope.type = "pdf";
                        } else {
                            $scope.type = "image";
                        }
                        $scope.model = data.data[0];
                        console.log($scope.model, 'model means blob')

                    }
                    $timeout(function () {
                        $scope.callback();
                    }, 100);

                });
            };
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});


firstapp.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});

firstapp.filter('serverimage', function () {
    return function (image) {
        if (image && image !== null) {
            console.log("adminurl--", adminurl);
            return adminurl + "upload/readFile?file=" + image;
        } else {
            return undefined;
        }
    }
});

firstapp.filter('serverimage2', function () {
    return function (image) {
        if (image && image !== null) {
            console.log("adminurl--", adminurl);
            return adminurl2 + "upload/readFile?file=" + image;
        } else {
            return undefined;
        }
    }
});

// firstapp.directive('onlyDigits', function () {
//     return {
//         require: 'ngModel',
//         restrict: 'A',
//         link: function (scope, element, attr, ctrl) {
//             var digits;

//             function inputValue(val) {
//                 if (val) {
//                     if (attr.type == "tel") {
//                         digits = val.replace(/[^0-9\+\\]/g, '');
//                     } else {
//                         digits = val.replace(/[^0-9\-\\]/g, '');
//                     }


//                     if (digits !== val) {
//                         ctrl.$setViewValue(digits);
//                         ctrl.$render();
//                     }
//                     return parseInt(digits, 10);
//                 }
//                 return undefined;
//             }
//             ctrl.$parsers.push(inputValue);
//         }
//     };
// });

firstapp.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

firstapp.directive('inputDate', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            value: "=ngModel",
        },
        templateUrl: 'views/directive/date.html',
        link: function ($scope, element, attrs) {
            console.log("This is loaded atlease");
            $scope.data = {};
            console.log($scope.value);
            $scope.dateOptions = {
                dateFormat: "dd/mm/yy",
                changeYear: true,
                changeMonth: true,
                yearRange: "1900:-0"
            };
            if (!_.isEmpty($scope.value)) {
                $scope.data.dob = moment($scope.value).toDate();
            }
            $scope.changeDate = function (data) {
                console.log("ChangeDate Called");
                $scope.value = $scope.data.dob;
            };
        }
    };
});
firstapp.directive('onlyAlpha', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z\s]+/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput; // or return Number(transformedInput)
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

firstapp.directive('alphaSpecial', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z\s\-\.,"']+/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput; // or return Number(transformedInput)
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
// firstapp.directive('capitalize', function () {
//     return {
//         require: 'ngModel',
//         link: function (scope, element, attrs, modelCtrl) {
//             var capitalize = function (inputValue) {
//                 if (inputValue == undefined) inputValue = '';
//                 var capitalized = inputValue.toUpperCase();
//                 if (capitalized !== inputValue) {
//                     modelCtrl.$setViewValue(capitalized);
//                     modelCtrl.$render();
//                 }
//                 return capitalized;
//             }
//             modelCtrl.$parsers.push(capitalize);
//             capitalize(scope[attrs.ngModel]); // capitalize initial value
//         }
//     };
// });

firstapp.directive('capitalize', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            var capitalize = function (inputValue) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                var capitalized = inputValue.charAt(0).toUpperCase() +
                    inputValue.substring(1);
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
        }
    };
});
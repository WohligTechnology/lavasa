// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
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
            url: "/draw",
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
            url: "/heats",
            templateUrl: "views/template.html",
            controller: 'HeatsCtrl'
        })
        .state('qualify', {
            url: "/qualify",
            templateUrl: "views/template.html",
            controller: 'QualifyCtrl'
        })
        .state('knockout', {
            url: "/knockout",
            templateUrl: "views/template.html",
            controller: 'KnockoutCtrl'
        })
        .state('round-robin', {
            url: "/round-robin",
            templateUrl: "views/template.html",
            controller: 'RoundRobinCtrl'
        })
        .state('team-detail', {
            url: "/team-detail",
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
            url: "/student-bio",
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
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('giveitmargin', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
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
            $element.find("img").load(function() {
                addmarginleft(++i);
            });
            $(window).resize(function() {
                addmarginleft(++i);
            });
        }
    };
});
firstapp.filter('uploadpath', function() {
    return function(input, width, height, style, defaultFlag) {
        //console.log(width, height, style, defaultFlag)
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
        } else {
            if (defaultFlag === false) {
                return "img/sf-handball.png";

            } else {
                return "img/noimage.png";

            }
        }
    };
});
firstapp.filter('letterLimit', function() {
    return function(value, limit) {
        if (value.length < limit) {
            return value;
        } else {
            return value.slice(0, limit - 2) + "..";
        }
    };
});
firstapp.filter('mediapath', function() {
    return function(value) {
        if (value) {
          return "https://storage.googleapis.com/sportsforall/media%26gallery/"+value;
        } else {
            return "";
        }
    };
});

firstapp.filter('videothumbnail', function() {
    return function(value) {
        if (value) {
          return "http://img.youtube.com/vi/"+value+"/hqdefault.jpg";
        } else {
            return "";
        }
    };
});


firstapp.filter('ageFilter', function() {
    return function(birthdate) { // birthday is a date
        if (birthdate) {
            if (new Date(birthdate) > new Date(2011, 1, 1)) {
                return 'U-6';
            } else if (new Date(birthdate) > new Date(2010, 1, 1)) {
                return 'U-7';
            } else if (new Date(birthdate) > new Date(2009, 1, 1)) {
                return 'U-8';
            } else if (new Date(birthdate) > new Date(2008, 1, 1)) {
                return 'U-9';
            } else if (new Date(birthdate) > new Date(2007, 1, 1)) {
                return 'U-10';
            } else if (new Date(birthdate) > new Date(2006, 1, 1)) {
                return 'U-11';
            } else if (new Date(birthdate) > new Date(2005, 1, 1)) {
                return 'U-12';
            } else if (new Date(birthdate) > new Date(2004, 1, 1)) {
                return 'U-13';
            } else if (new Date(birthdate) > new Date(2003, 1, 1)) {
                return 'U-14';
            } else if (new Date(birthdate) > new Date(2002, 1, 1)) {
                return 'U-15';
            } else if (new Date(birthdate) > new Date(2001, 1, 1)) {
                return 'U-16';
            } else if (new Date(birthdate) > new Date(2000, 1, 1)) {
                return 'U-17';
            } else if (new Date(birthdate) > new Date(1999, 1, 1)) {
                return 'U-18';
            } else if (new Date(birthdate) > new Date(1998, 1, 1)) {
                return 'U-19';
            } else {
                return "";
            }
        }
    };
});
firstapp.directive('giveitmargin', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
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
            $element.find("img").load(function() {
                addmarginleft(++i);
            });
            $(window).resize(function() {
                addmarginleft(++i);
            });
        }
    };
});
firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
firstapp.directive('mychart', function($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function($scope, element, attrs) {
            $(element).mychart();
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
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
firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
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
firstapp.directive('hovericon', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './views/directive/hovericon.html',
        scope: {
            game: '='
        },
        link: function(scope, element, attr) {

            scope.$watch('demo', function() {
                //			   console.log(demo);

                var ishover;
                var $element = $(element);
                $test = $element;
                $element.ready(function() {

                    if (scope.game.grey) {
                        $element.addClass("grey");
                    } else {
                        var $top = $element.children(".top");
                        var $bottom = $element.children(".bottom");
                        $bottom.width($top.width());

                        $element.hover(function() {
                            $element.addClass("bigger");
                        }, function() {
                            $element.removeClass("bigger");
                            $bottom.width($top.width());
                        });
                    }

                });
            })

        }

    }
});
firstapp.directive('scores', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "views/directive/score.html",
        link: function(scope, element, attr) {
            // console.info(scope.person);
        }
    };
});
firstapp.directive('draw', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: "views/directive/draw-list.html",
        link: function(scope, element, attr) {
            // console.info(scope.person);
        }
    };
});
firstapp.filter('rawHtml', ['$sce',
    function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }
]);
firstapp.filter('englishNumeralDate', function() {
    return function(value) {
        if (value) {
            console.log(angular.isDate(value));
            return moment(new Date(value)).format("Mo MMMM YYYY");
        }
    };
});
firstapp.directive('fancyboxButton', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
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

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});

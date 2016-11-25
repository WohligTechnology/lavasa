angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar', 'ui.select', 'ordinal'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $interval) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.countdown = {};
        $scope.changeSlideClass = function(obj, index) {
            obj.class = "active";
            // console.log("active = ", index);
            for (var i = index - 1, j = 1; i >= 0; i--) {
                $scope.game[i].class = "near-" + (j++);
            }
            for (var i = index + 1, j = 1; i < $scope.game.length; i++) {
                $scope.game[i].class = "near-" + (j++);
            }
        };
        $scope.removeSlideClass = function(obj, index) {
            for (var i = 0; i < $scope.game.length; i++) {
                $scope.game[i].class = "";
            }
            // $scope.$apply();
        };
        $scope.refreshTimer = function(eventTime) {
            eventTime = new Date(eventTime);
            $scope.rightNow = new Date();
            $scope.diffTime = eventTime - $scope.rightNow;
            var duration = moment.duration($scope.diffTime, 'milliseconds');

            $interval(function() {
                duration = moment.duration(duration - 1000, 'milliseconds');
                $scope.countdown.months = duration.months();
                $scope.countdown.days = duration.days();
                $scope.countdown.hours = duration.hours();
                $scope.countdown.minutes = duration.minutes();
                $scope.countdown.seconds = duration.seconds();
            }, 1000);
        };
        $scope.refreshTimer(moment().set({
            'year': 2016,
            'month': 10,
            'date': 28,
            'hour': 8,
            'minute': 0,
            'seconds': 0
        }));
        //
        // $scope.games = // JavaScript Document
        //     [{
        //
        //         "icon2": "img/icon/1_Handball.png",
        //         "url": "handball",
        //         "game": "Handball"
        //     }, {
        //
        //         "icon2": "img/icon/2_Basketball.png",
        //         "url": "basketball",
        //         "game": "basketball"
        //     }, {
        //
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "volleyball"
        //     }, {
        //
        //         "icon2": "img/icon/4_Throwball.png",
        //         "url": "throwball",
        //         "game": "throwball"
        //     }, {
        //
        //         "icon2": "img/icon/5_Hockey.png",
        //         "url": "hockey",
        //         "game": "hockey"
        //     }, {
        //
        //         "icon2": "img/icon/6_Kho Kho.png",
        //         "url": "kho-kho",
        //         "game": "kho-kho"
        //     }, {
        //
        //         "icon2": "img/icon/7_Kabaddi.png",
        //         "url": "kabaddi",
        //         "game": "kabaddi"
        //     }, {
        //
        //         "icon2": "img/icon/8_Football.png",
        //         "url": "football",
        //         "game": "football"
        //     }, {
        //
        //         "icon2": "img/icon/9_Badminton.png",
        //         "url": "badminton",
        //         "game": "badminton"
        //     }, {
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "tennis"
        //     }, {
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "table tennis"
        //     }, {
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "squash"
        //     }, {
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "judo"
        //     }, {
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "taekwondo"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "boxing"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "fencing"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "karate"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "sport mma"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "shooting"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "archery"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "swimming"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "water polo"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "carrom"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "chess"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "chess"
        //     },{
        //         "icon": "img/icon/blue/Volleyball.png",
        //         "icon2": "img/icon/3_Volleyball.png",
        //         "url": "volleyball",
        //         "game": "athletics"
        //     }];

        // $scope.mySlides = [
        //     'img/banner1.jpg',
        //     'img/banner2.jpg',
        //     'img/banner1.jpg',
        //     'img/banner2.jpg'
        // ];
        NavigationService.getAllEnabledBanner(function(response) {
            if (response.value) {
                $scope.banners = response.data;
            } else {
                console.log("Banner not found");
            }
        });

        setTimeout(function() {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1452795161694777";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + "://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, "script", "twitter-wjs");
        })

        NavigationService.getAllSportList(function(response) {
            if (response.value) {
                $scope.game = response.data;
            } else {
                console.log("Sports List data not found");
            }
        });
    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("about-us");
        $scope.menutitle = NavigationService.makeactive("About-Us");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('SponserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("sponser-partner");
        $scope.menutitle = NavigationService.makeactive("Sponser");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.image = [
            'img/sp1.jpg',
            'img/sp2.jpg',
            'img/sp3.jpg',
            'img/sp4.jpg'
        ]

        $scope.games = // JavaScript Document
            [{
                "img": "img/footer/n1.jpg",
                "href": "",
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
                "img": "img/footer/n4.jpg",
                "href": "",
                "game": "Magazine Partner"
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
        $scope.teams=[{
          "img":"img/sports/football.jpg",
          "name":"football"
        },{
          "img":"img/sports/Handball.jpg",
          "name":"HANDBALL"
        },{
          "img":"img/sports/Basketball.jpg",
          "name":"BASKETBALL"
        },{
          "img":"img/sports/Volleyball.jpg",
          "name":"VOLLEYBALL"
        },{
          "img":"img/sports/Throwball.jpg",
          "name":"THROWBALL"
        },{
          "img":"img/sports/Hockey.jpg",
          "name":"HOCKEY"
        },{
          "img":"img/sports/Khokho.jpg",
          "name":"KHO-KHO"
        },{
          "img":"img/sports/Kabaddi.jpg",
          "name":"KABADDI"
        }]

        $scope.racquet=[{
          "img":"img/sports/Badminton.jpg",
          "name":"BADMINTON"
        },{
          "img":"img/sports/Tennis.jpg",
          "name":"TENNIS"
        },{
          "img":"img/sports/Table-tennis.jpg",
          "name":"TABLE TENNIS"
        },{
          "img":"img/sports/Squash.jpg",
          "name":"SQUASH"
        }]
        $scope.combat=[{
          "img":"img/sports/Judo.jpg",
          "name":"JUDO"
        },{
          "img":"img/sports/Tavkwondo.jpg",
          "name":"TAEKWONDO"
        },{
          "img":"img/sports/Boxing.jpg",
          "name":"BOXING"
        },{
          "img":"img/sports/Fencing.jpg",
          "name":"FENCING"
        },{
          "img":"img/sports/Karate.jpg",
          "name":"KARATE"
        },{
          "img":"img/sports/MMA.jpg",
          "name":"SPORT MIXED MARTIAL ARTS"
        }]
        $scope.indi=[{
          "img":"img/sports/Carrom.jpg",
          "name":"CARROM"
        },{
          "img":"img/sports/Chess.jpg",
          "name":"CHESS"
        },{
          "img":"img/sports/Athletics.jpg",
          "name":"ATHLETICS"
        }]
        $scope.target=[{
          "img":"img/sports/Shooting.jpg",
          "name":"SHOOTING"
        },{
          "img":"img/sports/Archery.jpg",
          "name":"ARCHERY"
        }]
        $scope.aqua=[{
          "img":"img/sports/SWIMMING.jpg",
          "name":"SHOOTING"
        },{
          "img":"img/sports/WATER POLO.jpg",
          "name":"ARCHERY"
        }]

    })
    .controller('FormSubmitCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("form-submit");
        $scope.template.header = "";
        $scope.template.footer = "";
        $scope.menutitle = NavigationService.makeactive("Form Submit");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.verify = {};
        var i = 0;

        $scope.getPlayer = function(search) {
            $scope.students = [];
            var constraints = {};
            constraints.search = search;
            if (isNaN(search) || search === null || search === undefined || search === "") {
                constraints.search = search;
                constraints.sfaid = undefined;
            } else {
                constraints.search = undefined;
                constraints.sfaid = parseInt(search);
            }
            if ($scope.verify.school) {
                constraints.school = $scope.verify.school._id;
            }
            NavigationService.forFormSearch(constraints, ++i, function(data, ini) {
                if (i == ini) {
                    if (data && data.value !== false) {
                        $scope.students = data.data;
                    } else {
                        $scope.students = [];
                    }
                }
            });
        };
        $scope.getSchool = function(search) {
            $scope.schools = [];
            var constraints = {};
            constraints.search = search;
            if (isNaN(search) || search === null || search === undefined || search === "") {
                constraints.search = search;
                constraints.sfaid = undefined;
            } else {
                constraints.search = undefined;
                constraints.sfaid = parseInt(search);
            }
            NavigationService.forFormSearchSchool(constraints, ++i, function(data, ini) {
                if (i == ini) {
                    if (data && data.value !== false) {
                        $scope.schools = data.data;
                        $scope.getPlayer("");
                    } else {
                        $scope.schools = [];
                    }
                }
            });
        };
        $scope.toVerify = function() {
            // NavigationService.
            console.log($scope.verify);
            $state.go("after-form", {
                id: $scope.verify.student._id
            });
        };

    })
    .controller('LeagueKnockoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("league-knockout");
        $scope.menutitle = NavigationService.makeactive("League Cum Knockout");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

    })
    .controller('KnockoutQualifyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("knockout-qualify");
        $scope.menutitle = NavigationService.makeactive("Knockout Qualify");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('AfterFormCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter,$state) {

        $scope.template = TemplateService.changecontent("after-form");
        $scope.template.header = "";
        $scope.template.footer = "";
        $scope.menutitle = NavigationService.makeactive("After Form");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.student = {};
        $scope.variables = {};
        $scope.variables.verified = false;
        if ($stateParams.id) {
            var constraints = {};
            constraints.year = "2016";
            constraints.student = $stateParams.id;
            NavigationService.getStudentProfile($stateParams.id, function(response) {
                if (response.value) {
                    $scope.student = response.data;
                    $scope.student.dob = new Date(response.data.dob);
                    if ($scope.student.profilePic) {
                        $scope.student.dp = $filter('uploadpath')($scope.student.profilePic);
                    }
                    $scope.student.sport = "";
                    $scope.getStudentSport(constraints);

                } else {
                    $scope.student = {};
                }
            });
        }

        $scope.getStudentSport = function(constraints) {
            var i = 0;
            $scope.studentSport = undefined;
            NavigationService.getStudentSport(constraints, function(response) {
                if (response.value) {
                    _.each(response.data, function(key) {
                        $scope.student.sport += key.name + ", ";
                    });
                } else {
                    $scope.studentSport = [];
                    console.log("Error while fetching Student Sports.");
                }
            });
        };
        $scope.editStudent = function () {
          NavigationService.editStudent($scope.student,function (response) {
            if(response.value){
              _.assignIn($scope.student,response.data);
              $scope.student.dob = new Date(response.data.dob);
              if ($scope.student.profilePic) {
                  $scope.student.dp = $filter('uploadpath')($scope.student.profilePic);
              }
              $timeout(function () {
                $state.go('form-submit');
              },2000);
            }else{

            }
          });
        };

    })
    .controller('ResultCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {

        $scope.template = TemplateService.changecontent("result");
        $scope.menutitle = NavigationService.makeactive("Result");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.dropdowns = {};
        $scope.filter = {};
        $scope.filter.year = "";
        $scope.filter.agegroup = "";
        $scope.filter.gender = "";
        $scope.filter.sport = "";
        $scope.filter.category = "";
        $scope.doesNotHaveSport = true;
        $scope.sportName = ['Badminton', 'Tennis', 'Table Tennis', 'Volleyball', 'Handball', 'Squash', 'Basketball', 'Swimming', 'Judo'];
        $scope.getSportList = function() {
            NavigationService.getAllSportList(function(response) {
                if (response.value) {
                    $scope.dropdowns.sport = response.data;
                    if ($scope.filter.year == '2015') {
                        _.remove($scope.dropdowns.sport, function(key) {
                            return !_.includes($scope.sportName, key.name);
                        });
                    }
                }
            });
        };
        $scope.getSportAgeGroup = function() {
            $scope.doesNotHaveSport = true;
            $scope.dropdowns.agegroup = undefined;
            $scope.filter.agegroup = undefined;
            NavigationService.filterAgegroupBySport({
                sportList: $scope.filter.sport
            }, function(response) {
                if (response.value) {
                    $scope.dropdowns.agegroup = response.data;
                } else {
                    $scope.dropdowns.agegroup = [];
                }
            });
        };
        $scope.getSportCategory = function() {
            $scope.doesNotHaveSport = true;
            $scope.dropdowns.category = undefined;
            $scope.filter.category = undefined;
            if ($scope.filter.sport && $scope.filter.gender) {
                NavigationService.filterCategoryForFrontendGender({
                    sportList: $scope.filter.sport,
                    gender: $scope.filter.gender
                }, function(response) {
                    if (response.value) {
                        $scope.dropdowns.category = response.data;
                    } else {
                        $scope.dropdowns.category = [];
                    }
                });
            }
        };
        $scope.getSport = function() {
            $scope.sport = undefined;
            console.log($scope.filter);

            NavigationService.getOneSportForResult($scope.filter, function(response) {
                $scope.doesNotHaveSport = response.value;
                if (response.value) {
                    $state.go(NavigationService.resultDispatcher(response.data.drawFormat), {
                        id: response.data._id
                    });
                }
            });
        };

    })
    .controller('SchoolRankingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("school-ranking");
        $scope.menutitle = NavigationService.makeactive("School Ranking");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.filter = {};
        $scope.schools = [];
        $scope.filter.year = "2015";
        $scope.rankingByYear = function() {
            $scope.schools = undefined;
            NavigationService.getAllSchoolRank($scope.filter, function(response) {
                if (response.value) {
                    $scope.schools = response.data;
                } else {
                    $scope.schools = [];
                }
            });
        };
        $scope.rankingByYear();

    })
    .controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("blog");
        $scope.menutitle = NavigationService.makeactive("Blog");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.mySlides = [
            'img/blog.jpg',
            'img/blog.jpg',
            'img/blog.jpg',
            'img/blog.jpg'
        ];

        $scope.blog = [{
            img: "img/b1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }, {
            img: "img/b1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }, {
            img: "img/b1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }, {
            img: "img/b1.jpg",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        }];

    })
    .controller('DrawScheduleCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("draw-schedule");
        $scope.menutitle = NavigationService.makeactive("Draw Schedule");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.statuses = {};
        $scope.statuses.open = {};
        $scope.draws = {};
        $scope.teleport = function(drawFormat, sportid) {
            $state.go(NavigationService.resultDispatcher(drawFormat), {
                id: sportid
            });
        };
        $scope.getDraws = function(sportid) {
            $scope.draws = undefined;
            _.each($scope.statuses.open, function(value, key) {
                $scope.statuses.open[key] = false;
            });
            NavigationService.getDrawUpdatedSports({
                sport: sportid
            }, function(response) {
                $scope.draws = {};
                if (response.value) {

                    $scope.draws.sports = response.data;
                    console.log($scope.draws.sports);
                } else {
                    $scope.draws.sports = [];
                    $scope.draws.message = response.data.yearBeforeContent;
                }
            });
        };
        $scope.getSportList = function() {
            $scope.sports = undefined;
            NavigationService.getAllSportList(function(response) {
                if (response.value) {
                    // if ($scope.filter.year == '2015') {
                    //     _.remove(response.data, function(key) {
                    //         return !_.includes($scope.sportName, key.name);
                    //     });
                    // }
                    $scope.sports = _.chain(response.data)
                        .groupBy("sporttype")
                        .toPairs()
                        .map(function(currentItem) {
                            return _.zipObject(["sporttype", "name"], currentItem);
                        })
                        .value();
                    console.log($scope.sports);
                } else {
                    $scope.sports = [];
                }
            });
        };
        $scope.getSportList();

    })
    .controller('BlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("blog-detail");
        $scope.menutitle = NavigationService.makeactive("Blog Detail");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('SwissCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("swiss");
        $scope.menutitle = NavigationService.makeactive("Swiss");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('MediaGalleryCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("media-gallery");
        $scope.menutitle = NavigationService.makeactive("Media Gallery");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.flags = {};
        $scope.flags.openGallery = false;
        $scope.flag = {};
        $scope.classes = {};
        $scope.filter = {};
        $scope.folders = [];
        $scope.flag.openGallerys = false;
        // if ($stateParams.name) {
        //     console.log($stateParams);
        //     $scope.flags.openGallery = true
        // }
        // if ($stateParams.name) {
        //     console.log($stateParams);
        //     $scope.flag.openGallerys = true
        // }

        $scope.tab = 'photos';
        $scope.classa = 'active-list';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';


        $scope.tabchange = function(tab, a) {
            //console.log(tab);
            $scope.tab = tab;
            if (a == 1) {

                $scope.classa = "active-list";
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';

            } else if (a == 2) {

                $scope.classa = '';
                $scope.classb = "active-list";
                $scope.classc = "";
                $scope.classd = '';


            } else if (a == 3) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classd = '';
                $scope.classc = "active-list";

            } else {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = "active-list";

            }
        };
        $scope.tabchanges = function(tabs, a) {
            $scope.tabs = tabs;
            console.log(tabs);
            if (tabs === 'photo') {

                $scope.classes.classp = "active-list";
                $scope.classes.classv = '';
                $scope.classes.classpc = '';

            } else if (tabs == 'video') {

                $scope.classes.classp = '';
                $scope.classes.classv = "active-list";
                $scope.classes.classpc = '';
            } else if (tabs == 'press-photo') {
                $scope.classes.classp = "";
                $scope.classes.classv = '';
                $scope.classes.classpc = 'active-list';
                $scope.classes.classpcp = 'active-list';

            } else if (tabs == 'press-video') {
                $scope.classes.classp = "";
                $scope.classes.classv = '';
                $scope.classes.classpc = 'active-list';
                $scope.classes.classpcv = 'active-list';
            }

        };
        $scope.getMediaFolders = function() {
            $scope.folders = undefined;
            NavigationService.getFolders($scope.filter, function(response) {
                if (response) {
                    console.log(response);
                    $scope.folders = response.data;
                } else {
                    // console.log("No data found");
                    $scope.folders = [];
                }
            })
        }
        $scope.loadMedia = function() {
            $scope.mediaArr = undefined;
            NavigationService.getLimitedMedia($scope.filter, function(response) {
                if (response) {
                    console.log("get limited media : ", response);
                    $scope.mediaArr = response.data;
                } else {
                    console.log("No data found");
                    $scope.mediaArr.data = [];
                }
            })
        };
        //console.log($stateParams);
        if (!$stateParams.type && !$stateParams.folder) {
            $scope.filter.mediatype = "photo";
            $scope.flags.openGallery = false;
            $scope.tabchanges('photo', 1);
            $scope.getMediaFolders();
        } else {
            if ($stateParams.type && $stateParams.folder) {
                $scope.filter.mediatype = $stateParams.type;
                $scope.filter.folder = $stateParams.folder;
                $scope.filter.year = "2015";
                $scope.filter.pagenumber = 1;

                $scope.loadMedia();
                $scope.tabchanges($scope.filter.mediatype, 1);
                $scope.flags.openGallery = true;
            } else if ($stateParams.type) {
                $scope.filter.mediatype = $stateParams.type;
                $scope.flags.openGallery = false;
                $scope.tabchanges($stateParams.type, 1);
                console.log($scope.filter);
                $scope.getMediaFolders();
            }
        }
        $scope.tabs = 'photo';
        $scope.classp = 'active-list';
        $scope.classv = '';

        $scope.folder = [
            'img/m1.jpg',
            'img/m2.jpg',
            'img/m3.jpg',
            'img/m1.jpg',
            'img/m2.jpg',
            'img/m3.jpg',
            'img/m3.jpg',
            'img/m3.jpg'

        ];
    })

.controller('FaqCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("faq");
        $scope.menutitle = NavigationService.makeactive("Faq");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('RegistrationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("registration");
        $scope.menutitle = NavigationService.makeactive("Registration");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("terms-condition");
        $scope.menutitle = NavigationService.makeactive("Terms Condition");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('SpecialAwardsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("special");
        $scope.menutitle = NavigationService.makeactive("Special Awards");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('medicalAidCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("medical-aid");
        $scope.menutitle = NavigationService.makeactive("Medical Care");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('foodAndEntertainmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("food-and-entertainment");
        $scope.menutitle = NavigationService.makeactive("Food & Entertainment");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('specialDaysCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("special-days");
        $scope.menutitle = NavigationService.makeactive("Special Days");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('TraininDevelopmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        $scope.template = TemplateService.changecontent("training-development");
        $scope.menutitle = NavigationService.makeactive("Training Development");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

.controller('DrawCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, $filter) {

    $scope.template = TemplateService.changecontent("draw");
    $scope.menutitle = NavigationService.makeactive("Draw");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.tabs = 'round1';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.classf = '';
    $scope.knockout = {};
    $scope.statuses = {};
    $scope.statuses.slider = {};
    $scope.statuses.board = {};
    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classa = 'active-list';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classf = '';

        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = 'active-list';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classf = '';
        } else if (a == 3) {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = 'active-list';
            $scope.classd = '';
            $scope.classf = '';
        } else if (a == 4) {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = 'active-list';
            $scope.classf = '';
        } else if (a == 5) {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classf = 'active-list';
        }
    };


    $scope.round = [{
        name: "round1",
        class: "classa",
        tab: "round1",
        id: "1"
    }, {
        name: "round2",
        class: "classb",
        tab: "round2",
        id: "2"
    }, {
        name: "round2",
        class: "classc",
        tab: "round3",
        id: "3"
    }, {
        name: "quater-final",
        class: "classd",
        tab: "round4",
        id: "4"
    }, {
        name: "semi-final",
        class: "classe",
        tab: "round5",
        id: "5"
    }, {
        name: "final",
        class: "classf",
        tab: "round6",
        id: "6"
    }];
    $scope.selectRound = function(index) {
        console.log("round index", index);
        if (index !== 0 && index !== $scope.knockout.rounds.length - 1) {
            $scope.statuses.slider.startAt = index;
            $scope.statuses.board.left = $scope.knockout.rounds[index - 1];
            if ($scope.knockout.rounds[index])
                $scope.statuses.board.center = $scope.knockout.rounds[index];
            if ($scope.knockout.rounds[index + 1])
                $scope.statuses.board.right = $scope.knockout.rounds[index + 1];
            console.log($scope.statuses.board);
        }
    };
    // $scope.getLeftRightDraw = function() {
    //
    // }

    $scope.getSportRoundKnockout = function() {
        NavigationService.getSportRoundKnockout({
            sport: $stateParams.id
        }, function(response) {
            if (response.value) {
                $scope.knockout.sport = response.data.sport;
                $scope.knockout.medals = response.data.medals;
                $scope.knockout.knockouts = _.groupBy(response.data.knockouts, function(key) {
                    return key.roundno + " " + key.round;
                });

                $scope.knockout.rounds = [];
                var maxOrder = 0,
                    i = 0;
                var pseudoRound = [];
                _.each($scope.knockout.knockouts, function(value, key) {
                    $scope.knockout.rounds.push(key);
                    maxOrder = _.maxBy(value, function(kno) {
                        return kno.order;
                    }).order;
                    console.log(value, maxOrder);
                    pseudoRound = [];
                    for (i = 0; i <= maxOrder; i++) {
                        if (_.findIndex(value, function(single) {
                                return single.order == i
                            }) === -1) {
                            pseudoRound.push({
                                order: -999
                            });
                        } else {
                            pseudoRound.push(_.find(value, function(knock) {
                                return knock.order == i
                            }));
                        }
                    }
                    $scope.knockout.knockouts[key] = pseudoRound;
                    console.log($scope.knockout.rounds);
                });
                if (_.findIndex($scope.knockout.rounds, function(key) {
                        return key === '-1 Third Place';
                    }) !== -1) {
                    _.remove($scope.knockout.rounds, function(key) {
                        return key === '-1 Third Place';
                    });

                    $scope.knockout.rounds.push('-1 Third Place');
                }
                console.log($scope.knockout);
                if ($scope.knockout.rounds.length > 2) {
                    $scope.selectRound(1);

                } else {
                    $scope.statuses.slider.startAt = $scope.knockout.rounds.length - 1;
                    $scope.statuses.board.left = $scope.knockout.rounds[0];
                    $scope.statuses.board.center = $scope.knockout.rounds[1];
                }
            } else {
                $scope.knockout = {};
            }
        });
    };
    if ($stateParams.id) {
        $scope.getSportRoundKnockout();
    }
})

.controller('StudentBioCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("student-bio");
    $scope.menutitle = NavigationService.makeactive("Student Bio");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.studentProfile = {};
    $scope.filter = {};
    $scope.filter.year = '2016';
    $scope.tabs = 'photos';
    $scope.classp = 'active-list';
    $scope.classv = '';
    $scope.studentMedal = {};
    var constraints = {};
    $scope.getSport = function(sport) {
        console.log(sport);

        constraints.agegroup = sport.agegroup.name;
        if (sport.firstcategory) {
            constraints.category = sport.firstcategory.name;
        }
        constraints.sport = sport.sportslist._id;
        constraints.year = sport.year;
        NavigationService.getOneSportForResult(constraints, function(response) {
            $scope.doesNotHaveSport = response.value;
            if (response.value) {
                $state.go(NavigationService.resultDispatcher(response.data.drawFormat), {
                    id: response.data._id
                });
            }
        });
    };
    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-list";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-list";
        }
    };

    $scope.tab = 'record';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';

    $scope.tabchange = function(tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";
        } else {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "active-list";
        }
    };

    $scope.games = // JavaScript Document
        [{
            "icon": "img/sf-icon.png",
            "icon2": "img/sf-icon-big.png",
            "url": "tabletennis",
            "game": "table tennis"
        }, {
            "icon": "img/sf-icon.png",
            "icon2": "img/sf-icon-big.png",
            "url": "tennis",
            "game": "tennis"
        }, {
            "icon": "img/sf-icon.png",
            "icon2": "img/sf-icon-big.png",
            "url": "badminton",
            "game": "badminton"
        }];


    $scope.photos = [
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg',
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg'
    ];
    $scope.video = [{
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"

    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }];
    $scope.getStudentProfile = function() {
        NavigationService.getStudentProfile($stateParams.id, function(data) {
            if (data.value) {
                console.log(data);
                $scope.studentProfile = data.data;
                constraints.gender = data.data.gender;
                if ($scope.studentProfile.gender == "Boys") {
                    $scope.studentProfile.gender = "Male";
                } else {
                    $scope.studentProfile.gender = "Female";
                }
            } else {
                $scope.studentProfile = [];
                console.log("Error while fetching Student Profile.");
            }
        });
    };
    $scope.getStudentProfile();
    $scope.changeYear = function() {
        var constraints = {};
        constraints.year = $scope.filter.year;
        constraints.student = $stateParams.id;
        // $scope.filterStatistics.sport = undefined;
        // $scope.studentStats = [];
        $scope.getStudentSport(constraints);
        $scope.studentMedalCount(constraints);
    };

    $scope.studentMedalCount = function(constraints) {
        NavigationService.getStudentMedalCount(constraints, function(data) {
            if (data.value) {
                $scope.studentMedal[constraints.year] = data.data;
                console.log($scope.studentMedal);
            } else {
                $scope.studentMedal[constraints.year] = {};
                console.log("No Student Medal found");
            }
        });
    };
    // $scope.statuses.emptyobject = {};
    $scope.profiles = function(participantType, id) {
        if (participantType == 'player') {
            sfastate = 'student-profile';
        } else {
            sfastate = 'team-detail';
        }
        $state.go(sfastate, {
            _id: id
        });
    };
    $scope.getStudentSport = function(constraints) {
        //console.log("constraints : ",constraints);
        var i = 0;
        $scope.studentSport = {};
        NavigationService.getStudentSport(constraints, function(response) {
            if (response.value) {
                //   console.log("studentSport data = ",data);
                $scope.studentSport[constraints.year] = response.data;
                console.log($scope.studentSport);
                _.each($scope.studentSport[constraints.year], function(key) {
                    key.active = false;
                });
            } else {
                $scope.studentSport[constraints.year] = [];
            }
        });
    };
    $scope.changeYear();
})

.controller('SportCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    console.log("FUCK THIS SHIT");
    $scope.template = TemplateService.changecontent("sport");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.gallery = {};
    $scope.filter = {};
    $scope.classes = {};
    $scope.sportFolder = {};
    $scope.sport = {};
    $scope.is2015Sport = false;


    $scope.mediaArr = {};
    if ($stateParams.name === '') {
        $state.go('home');
    }
    $scope.student = [{
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "45211"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "45211"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "45211"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "45211"
    }];

    NavigationService.getSportRuleByName($stateParams, function(response) {
        if (response.value) {
            $scope.sport = response.data;
        } else {
            console.log("No sports data found");
        }
    });

    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (tabs === 'photo') {

            $scope.classes.classp = "active-list";
            $scope.classes.classv = '';

        } else {

            $scope.classes.classp = '';
            $scope.classes.classv = "active-list";
        }
    };
    $scope.profiles = function(participantType, studentid, teamid) {
        if (participantType == 'player') {
            $state.go('student-profile', {
                id: studentid
            });
        } else {
            sfastate = 'team-detail';
            $state.go(sfastate, {
                id: teamid
            });
        }

    };
    $scope.winners = [];
    $scope.statuses = {};
    $scope.statuses.doubleBronze = false;
    $scope.getWinners = function() {
        var constraints = {};
        constraints.sport = $scope.sport.sportid._id;
        constraints.year = "2015";
        $scope.statuses.doubleBronze = false;
        $scope.winners = undefined;
        NavigationService.getWinners(constraints, function(response) {
            if (response.value) {
                $scope.winners = response.data;
                _.each($scope.winners, function(key) {
                    if (key.Bronze.length > 1) {
                        $scope.statuses.doubleBronze = true;
                    }
                });
            } else {
                $scope.winners = [];
            }
        });
    };
    $scope.getSport = function() {
        NavigationService.getSportRuleByName($stateParams, function(response) {
            if (response.value) {
                $scope.sport = response.data;
                console.log($scope.sport);
                $scope.getWinners();
            } else {
                console.log("No sports data found");
            }
        });
    };
    if ($stateParams.name) {
        var sports2015 = ["basketball", "volleyball", "handball", "table tennis", "tennis", "squash", "badminton", "swimming", "judo"];
        $scope.is2015Sport = false;
        _.each(sports2015, function(key) {
            if (key.toUpperCase() == $stateParams.name.toUpperCase()) {
                $scope.is2015Sport = true;
            }
        });
    }
    $scope.getSport();
    $scope.oneAtATime = true;
    $scope.tab = '2016';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.tabchange = function(tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        console.log("Tab :  ", $scope.tab);
        if (a == 1) {

            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";
            $scope.classd = "";

        } else if (a == 3) {

            $scope.classa = '';
            $scope.classc = "active-list";
            $scope.classb = "";
            $scope.classd = "";
            $scope.filter.mediatype = "photo";
            $scope.filter.folder = $stateParams.name;
            $scope.filter.year = "2015";
            $scope.filter.pagenumber = 1;
            console.log("filter", $scope.filter);
            $scope.loadMedia();

        } else {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classd = "active-list";
            $scope.classc = "";
        }
    };
    $scope.video = [{
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"

    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }];
    // $scope.photos = [
    //     'img/m1.jpg',
    //     'img/m2.jpg',
    //     'img/m3.jpg',
    //     'img/m1.jpg',
    //     'img/m2.jpg',
    //     'img/m3.jpg'
    //
    // ];
    console.log($scope.sportFolder.sportName);
    $scope.tabs = 'photo';
    $scope.classes.classp = 'active-list';
    $scope.classes.classv = '';
    //$scope.filter.year = "2015";
    $scope.media = function(type, id) {
        console.log("tabs = ", type);
        $scope.filter.mediatype = type;
        $scope.filter.folder = $stateParams.name;
        //$scope.filter.year = "2015";
        $scope.filter.pagenumber = 1;
        // console.log("filter", $scope.filter);
        $scope.loadMedia();
        $scope.tabchanges($scope.filter.mediatype, 1);
    };

    $scope.loadMedia = function() {
        if ($scope.mediaArr.data) {
            $scope.mediaArr.data = [];
        } else {
            $scope.mediaArr = {};
        }

        NavigationService.getLimitedMedia($scope.filter, function(response) {
            if (response) {
                console.log("get limited media : ", response);
                $scope.mediaArr = response.data;
                console.log($scope.mediaArr);
                //console.log("folder data : ",$scope.folders);
            } else {
                console.log("No data found");
                $scope.mediaArr = {};
            }
        })
    };

})

.controller('SchoolBioCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    //Used to name the .html file


    $scope.template = TemplateService.changecontent("school-bio");
    $scope.menutitle = NavigationService.makeactive("School Bio");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.school = {};


    $scope.photos = [
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg',
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg'
    ];

    $scope.open = function(sports, size) {
        $scope.modalSports = sports;
        console.log($scope.modalSports);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/sports.html',
            size: size,
            scope: $scope
        });
    };
    $scope.tabs = 'photos';
    $scope.classp = 'active-list';
    $scope.classv = '';


    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-list";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-list";
        }
    };


    $scope.oneAtATime = true;

    $scope.tab = 'about';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';

    $scope.tabchange = function(tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";
            $scope.classd = "";

        } else if (a == 3) {

            $scope.classa = '';
            $scope.classc = "active-list";
            $scope.classb = "";
            $scope.classd = "";
        } else {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classd = "active-list";
            $scope.classc = "";
        }
    };
    $scope.video = [{
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"

    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }];

    $scope.getSchoolProfile = function() {
        NavigationService.getOnePopulated($stateParams.id, function(data) {
            console.log(data.data);
            $scope.school = data.data.school;
            $scope.school.medal = data.data.medal;
            $scope.school.rank = data.data.rank;
            $scope.school.contingent = data.data.contingent;
            if ($scope.school.status) {
                $scope.school.isVerified = "Verified";
            } else {
                $scope.school.isVerified = "Not Verif ied";
            }
            $scope.school.contingentLeader = _.map($scope.school.contingentLeader).join(', ');
            $scope.department = $scope.school.department;

            // _.forEach($scope.department, function(value, key) {
            //     value = _.merge(value, {
            //         icon: "img/sf-student-profile.png"
            //     });
            // });
            $scope.school.sports = _.groupBy($scope.school.sports, function(key) {
                return key.year;
            });
            $scope.school.departmentSorted = _.groupBy($scope.school.department, function(key) {
                return key.year;
            });
            console.log($scope.school);
        });
    };
    $scope.getSchoolProfile();
})

.controller('ChampionsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    console.log("Testing Consoles");
    $scope.template = TemplateService.changecontent("champions");
    $scope.menutitle = NavigationService.makeactive("Champions");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.sportName = ['Badminton', 'Tennis', 'Table Tennis', 'Volleyball', 'Handball', 'Squash', 'Basketball', 'Swimming', 'Judo'];
    $scope.filter = {};
    $scope.filter.year = "2015";
    $scope.winners = [];
    $scope.statuses = {};
    $scope.statuses.open = {};
    $scope.statuses.doubleBronze = false;
    $scope.profiles = function(participantType, studentid, teamid) {
        if (participantType == 'player') {
            $state.go('student-profile', {
                id: studentid
            });
        } else {
            sfastate = 'team-detail';
            $state.go(sfastate, {
                id: teamid
            });
        }

    };
    $scope.getWinners = function(sportid) {
        var constraints = {};
        constraints.sport = sportid;
        _.each($scope.statuses.open, function(value, key) {
            $scope.statuses.open[key] = false;
        });
        constraints.year = $scope.filter.year;
        $scope.statuses.doubleBronze = false;
        $scope.winners = undefined;
        NavigationService.getWinners(constraints, function(response) {
            if (response.value) {
                $scope.winners = response.data;
                _.each($scope.winners, function(key) {
                    if (key.Bronze.length > 1) {
                        $scope.statuses.doubleBronze = true;
                    }
                });
            } else {
                $scope.winners = [];
            }
        });
    };
    $scope.getSportList = function() {
        $scope.sports = undefined;
        NavigationService.getAllSportList(function(response) {
            if (response.value) {
                if ($scope.filter.year == '2015') {
                    _.remove(response.data, function(key) {
                        return !_.includes($scope.sportName, key.name);
                    });
                }
                $scope.sports = _.chain(response.data)
                    .groupBy("sporttype")
                    .toPairs()
                    .map(function(currentItem) {
                        return _.zipObject(["sporttype", "name"], currentItem);
                    })
                    .value();
                console.log($scope.sports);
            }
        });
    };
    $scope.getSportList();

})

.controller('SchoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school");
    $scope.menutitle = NavigationService.makeactive("School");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.search = {};
    $scope.search.active = false;
    $scope.filter = {};
    $scope.filterselected = {};
    $scope.school = {};
    $scope.pagination = {};
    $scope.pagination.pagesize = 20;
    $scope.filter.pagenumber = 1;
    $scope.parseSearch = function(input) {
        $scope.search.active = false;
        $scope.filter.pagenumber = 1;
        if (input === '' || input === null) {
            $scope.filter.name = undefined;
            $scope.filter.sfaid = undefined;
        } else {
            if (isNaN(input)) {
                $scope.filter.name = input;
                $scope.filter.sfaid = undefined;
            } else {
                $scope.filter.name = undefined;
                $scope.filter.sfaid = parseInt(input);
            }
            $scope.schools = [];
            $scope.pagination.total = 0;
            $scope.pagination.totalpages = 0;
            $scope.search.active = true;
        }
        $scope.submitSearch();
    };
    var i = 0;
    $scope.submitSearch = function() {
        if ($scope.search.active) {
            NavigationService.schoolSearch($scope.filter, ++i, function(data, ini) {
                console.log(data);
                if (i == ini) {
                    if (data.value) {
                        $scope.schools = data.data.data;
                        console.log("Schools data", $scope.schools);
                        $scope.pagination.totalpages = data.data.totalpages;
                        $scope.pagination.total = data.data.total;
                    }
                }
            });
        } else {
            NavigationService.getFirstListSchool({
                year: "2015"
            }, function(data) {
                if (data.value !== false) {
                    $scope.topschools = data.data.data;
                    //console.log("top school",$scope.topschools);
                    $scope.count = data.data.count;
                } else {
                    $scope.getFirstList = [];
                }
            });
        }
    };

    $scope.changeYear = function() {
        $scope.filterselected.title = "";

        if ($scope.filter.year == "top20") {
            $scope.school.showAll = false;
            $scope.school.showTop20 = false;
            $scope.submitSearch();
            $scope.filterselected.title = "SFA MUMBAI 2015 - Top 20 Schools";
        } else {
            var constraints = {};
            constraints.year = null;
            $scope.filterselected.title = "All Schools";
            if ($scope.filter.year == '2015' || $scope.filter.year == '2016') {
                $scope.filterselected.title = "SFA MUMBAI " + $scope.filter.year;
                constraints.year = $scope.filter.year;

            }
            $scope.allSchoolByYear(constraints);
            $scope.school.showAll = true;
            $scope.school.showTop20 = true;
        }
    };

    $scope.allSchoolByYear = function(constraints) {
        NavigationService.getSchoolByYear(constraints, function(data) {
            if (data.value !== false) {
                $scope.allSchools = data.data.data;
                $scope.schoolSplit = Math.round($scope.allSchools.length / 2);
                $scope.schoolsData = _.chunk($scope.allSchools, $scope.schoolSplit);
            } else {
                $scope.allSchools = [];
                $scope.schoolsData = [];
            }
        });
    };
    $scope.filter.year = "top20";
    $scope.changeYear();
})

.controller('SchoolProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school-profile");
    $scope.menutitle = NavigationService.makeactive("School Profile");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.callObject = {};
    var year = new Date();
    $scope.filter = {};
    $scope.callObject._id = $stateParams.id;
    $scope.callObject.year = year.getFullYear().toString();
    $scope.callObject.gender = "All";
    $scope.callObject.agegroup = "All";
    console.log($scope.callObject);
    $scope.schooldata = {};
    $scope.schooldata['Boys'] = 0;
    $scope.schooldata['Girls'] = 0;
    $scope.sportsStudentGender = {};
    $scope.dropdowns = {};
    $scope.dropdowns.category = [];
    $scope.filterStatistics = {};
    $scope.filterStatistics.pagenumber = 1;
    $scope.filterStatistics.pagesize = 8;
    $scope.filterStatistics.school = $stateParams.id;
    $scope.table = {};
    $scope.state = $state;
    $scope.students = {};
    $scope.allYears = NavigationService.getAllYears();
    $scope.gender = [{
        value: "",
        name: "All"
    }, {
        value: "Boys",
        name: "Boys"
    }, {
        value: "Girls",
        name: "Girls"
    }];
    $scope.sportContingent = {};
    // $scope.schooldata.boys
    $scope.callReload = function() {
        if ($scope.filterStatistics.sport) {
            $scope.callObject.sport = $scope.filterStatistics.sport;
        }
        $scope.students.student = undefined;
        NavigationService.filterStud($scope.callObject, function(data) {
            console.log(data.data);
            if (data.value !== false) {
                $scope.students = data.data;
                if ($scope.students.student && $scope.students.student.length > 0 && $scope.students.school.contingentLeader && $scope.students.school.contingentLeader.length > 0) {
                    _.each($scope.students.student, function(z) {
                        _.each($scope.students.school.contingentLeader, function(n) {
                            if (n.student._id == z._id && n.year == $scope.callObject.year) {
                                z.isCl = true;
                            }
                        });
                    });
                }
            } else {
                $scope.students = {};
                $scope.students.student = [];
                $scope.students.school = {};
            }
        });
    };
    $scope.tabchange = function(tab, a) {
        $scope.tab = tab;
        if (a == 1) {
            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
            $scope.callReload();

        } else if (a == 2) {
            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";

        } else {
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "active-list";
            NavigationService.filterCategoryBySport({
                sportList: $scope.filterStatistics.sport
            }, function(response) {
                if (response.value) {
                    $scope.dropdowns.category = response.data;
                    $scope.dropdowns.category.unshift({
                        name: ""
                    });
                    $scope.filterStatistics.category = $scope.dropdowns.category[0].name;

                } else {
                    $scope.dropdowns.category = [];
                }
                NavigationService.filterAgegroupBySport({
                    sportList: $scope.filterStatistics.sport
                }, function(response) {
                    if (response.value) {
                        console.log(response);
                        $scope.dropdowns.agegroup = response.data;
                        $scope.dropdowns.agegroup.unshift({
                            name: ""
                        });
                        $scope.filterStatistics.agegroup = $scope.dropdowns.agegroup[0].name;
                    } else {
                        $scope.dropdowns.agegroup = [];
                    }
                    $scope.getStats();
                });
            });
        }
    };
    $scope.contingent = {};
    $scope.onChangeContingentYear = function() {
        $scope.filterStatistics.pagenumber = 1;
        $scope.contingent = {};
        $scope.contingentStrengthByYear();
    };
    $scope.contingentStrengthByYear = function() {
        $scope.contingent.data = undefined;

        //This was to fix the All being sent in year, if you dont understand this fix I am sorry.
        var constraints = {};
        constraints = _.cloneDeep($scope.filterStatistics);
        constraints.year = null;
        if ($scope.filterStatistics.year == '2015' || $scope.filterStatistics.year == '2016') {
            constraints.year = $scope.filterStatistics.year;
        }
        //end
        NavigationService.contingentStrengthByYear(constraints, function(response) {
            if (response.value) {
                $scope.contingent = response.data;
            } else {
                $scope.contingent.data = [];
            }
        });
    };
    $scope.video = [{
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"

    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m2.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m1.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }, {
        icon: "img/m3.jpg",
        name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
    }];
    NavigationService.getSchoolProfile($stateParams.id, function(data) {
        if (data.value) {
            console.log("school data : ", data.data);
            $scope.getSchoolProfile = data.data;
            $scope.schoolSports = data.data.sports;
        } else {
            {
                $scope.getSchoolProfile = '';
                $scope.schoolSports = '';
                console.log("Error while fetching School Profile.");
            }
        }
    });
    $scope.changeYear = function() {
        $scope.schooldata.Boys = 0;
        $scope.schooldata.Girls = 0;
        $scope.filter.sport = undefined;
        $scope.filterStatistics.sport = undefined;
        var constraints = {};
        constraints.year = $scope.filter.year;
        constraints._id = $stateParams.id;
        constraints.school = $stateParams.id;
        $scope.getSportParticipated(constraints);
        $scope.schoolMedalCount(constraints);
        if ($scope.filter.year === '2016') {
            $scope.filterStatistics.year = $scope.filter.year;
            $scope.contingentStrengthByYear();

        }
        $scope.filterStatistics.pagenumber = 1;

    };

    $scope.selectSport = function(selected) {
        $scope.filterStatistics = {};
        $scope.schoolStats = [];
        $scope.sportContingent.showContingent = true;
        $scope.filter.sport = selected;
        $scope.filterStatistics.sport = selected._id;
        $scope.table.layout = selected.drawFormat;
        $scope.tabchange('player', 1);
        $scope.filterStatistics.year = _.clone($scope.filter.year);
        $scope.callObject.year = _.clone($scope.filter.year);

    };
    $scope.getStats = function() {
        $scope.filterStatistics.school = $stateParams.id;
        $scope.schoolStats = undefined;
        NavigationService.getStatsForSchool($scope.filterStatistics, function(response) {
            if (response.value) {
                $scope.schoolStats = response.data;
                // console.log($scope.schoolStats);
                if ($scope.schoolStats) {
                    if ($scope.schoolStats[0].drawFormat == 'Knockout') {
                        _.each($scope.schoolStats, function(key) {
                            key.opponent = {};
                            key.self = {};
                            if (key.knockout.participantType == 'player') {
                                if (key.knockout[key.knockout.participantType + '1'] && key.knockout[key.knockout.participantType + '1'].school._id == $stateParams.id) {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.self.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                } else {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.self.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                }
                            } else {
                                if (key.knockout[key.knockout.participantType + '1'] && key.knockout[key.knockout.participantType + '1'].school._id == key.team.school._id) {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.self.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                } else {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.self.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                }
                            }

                        });

                    }
                    console.log($scope.schoolStats);
                }
            } else {
                $scope.schoolStats = [];
            }
        });
    };
    $scope.schoolMedalCount = function(constraints) {
        NavigationService.getSchoolMedalCount(constraints, function(data) {
            if (data.value) {
                $scope.schoolMedal = data.data;
            } else {
                $scope.schoolMedal = '';
                console.log("No School Medal data found");
            }
        });
    };

    $scope.getSportParticipated = function(constraints) {
        $scope.sportsStudentGender[constraints.year] = undefined;
        NavigationService.getSchoolSportByGender(constraints, function(data) {
            if (data.value) {
                $scope.sportsStudentGender[constraints.year] = data.data.sports;
                $scope.schooldata.gender = data.data.gender;
                $scope.schooldata.rank = data.data.rank;
                _.each($scope.sportsStudentGender[constraints.year], function(key) {
                    _.each(key.gender, function(value) {
                        key[value.name] = value.count;
                    });
                });
            } else {
                $scope.sportsStudentGender[constraints.year] = [];
            }
        });
    };
    $scope.filter.year = "2016";
    $scope.changeYear();
    NavigationService.getAgegroup(function(data) {
        data.data.unshift({
            _id: "All",
            name: "All"
        });
        $scope.agegroup = data.data;
        //console.log("agegroup : ", $scope.agegroup);
    });
})

.controller('StudentsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("students");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.inputs = {};
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.maxSize = 20;

    NavigationService.countStudent(function(data) {
        $scope.count = data.data;
    });
    $scope.getsearch = false;
    $scope.searchFilter = {};
    $scope.searchFilter.pagenumber = 1;
    $scope.searchFilter.pagesize = 12;
    $scope.searchFilter.search = "";
    $scope.parseSearch = function(input) {
        $scope.searchFilter.pagenumber = 1;

        if (input === '' || input === null) {
            $scope.searchFilter.search = undefined;
            $scope.searchFilter.sfaid = undefined;
            $scope.getsearch = false;
        } else {
            $scope.getsearch = true;

            if (isNaN(input)) {
                $scope.searchFilter.search = input;
                $scope.searchFilter.sfaid = undefined;
            } else {
                $scope.searchFilter.search = undefined;
                $scope.searchFilter.sfaid = parseInt(input);
            }

        }
        $scope.doSearch();
    };
    var i = 0;
    $scope.doSearch = function() {
        NavigationService.getSearchDataStudent($scope.searchFilter, ++i, function(data, ini) {
            if (i == ini) {
                $scope.getSearchData = data.data;
            }
        });
    };
})

.controller('StudentProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("student-profile");
    $scope.menutitle = NavigationService.makeactive("Student Profile");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.studentProfile = {};
    $scope.tabs = 'photos';
    $scope.classp = 'active-list';
    $scope.classv = '';
    $scope.filter = {};
    $scope.filterStatistics = {};
    $scope.studentSportList = [];
    $scope.dropdowns = {};
    $scope.table = {};
    $scope.dropdowns.category = [];
    $scope.studentid = $stateParams.id;

    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-list";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-list";
        }
    };

    $scope.tab = 'record';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';

    $scope.tabchange = function(tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";
        } else {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "active-list";
        }
    };
    $scope.getStudentProfile = function() {
        NavigationService.getStudentProfile($stateParams.id, function(data) {
            if (data.value) {
                $scope.studentProfile = data.data;
                if ($scope.studentProfile.gender == "Boys") {
                    $scope.studentProfile.gender = "Male";
                } else {
                    $scope.studentProfile.gender = "Female";
                }
            } else {
                $scope.studentProfile = [];
                console.log("Error while fetching Student Profile.");
            }
        });
    };
    $scope.getStudentProfile();

    $scope.changeYear = function() {
        var constraints = {};
        constraints.year = $scope.filter.year;
        constraints.student = $stateParams.id;
        $scope.filterStatistics.sport = undefined;
        $scope.studentStats = [];
        $scope.getStudentSport(constraints);
        $scope.studentMedalCount(constraints);
    };
    $scope.getStudentSport = function(constraints) {
        //console.log("constraints : ",constraints);
        var i = 0;
        $scope.studentSport = undefined;
        NavigationService.getStudentSport(constraints, function(response) {
            if (response.value) {
                //   console.log("studentSport data = ",data);
                $scope.studentSport = response.data;
                console.log($scope.studentSport);
                _.each($scope.studentSport, function(key) {
                    key.active = false;
                });
            } else {
                $scope.studentSport = [];
                console.log("Error while fetching Student Sports.");
            }
        });
    };

    $scope.studentMedalCount = function(constraints) {
        NavigationService.getStudentMedalCount(constraints, function(data) {
            if (data.value) {
                $scope.studentMedal = data.data;
            } else {
                $scope.studentMedal = '';
                console.log("No Student Medal found");
            }
        });
    };
    $scope.activateSports = function(sportid) {
        _.each($scope.studentSport, function(key) {
            if (key._id == sportid) {
                key.active = true;
            } else {
                key.active = false;
            }
        });
    };
    $scope.sportsSelected = function(sport) {
        $scope.activateSports(sport._id);
        $scope.participatedSports = _.groupBy(sport.sports, function(key) {
            return key.year;
        });
        $scope.filterStatistics.category = undefined;
        $scope.filterStatistics.year = $scope.filter.year;
        $scope.filterStatistics.sport = sport._id;
        $scope.table.layout = sport.drawFormat;
        NavigationService.filterCategoryBySport({
            sportList: sport._id
        }, function(response) {
            if (response.value) {
                console.log(response);
                $scope.dropdowns.category = response.data;
                $scope.dropdowns.category.unshift({
                    name: ""
                });
                $scope.filterStatistics.category = $scope.dropdowns.category[0].name;
            } else {
                $scope.dropdowns.category = [];
            }
            $scope.getStats();
        });
    };
    $scope.getStats = function() {
        $scope.filterStatistics.student = $stateParams.id;
        $scope.studentStats = undefined;

        NavigationService.getStatsForStudent($scope.filterStatistics, function(response) {
            if (response.value) {
                $scope.studentStats = response.data;
                // console.log($scope.studentStats);
                if ($scope.studentStats) {
                    if ($scope.studentStats[0].drawFormat == 'Knockout') {
                        _.each($scope.studentStats, function(key) {
                            key.opponent = {};
                            key.self = {};
                            if (key.knockout.participantType == 'player') {
                                console.log("");
                                if (key.knockout[key.knockout.participantType + '1']._id == $stateParams.id) {
                                    console.log("here");
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                } else {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                }
                            } else {
                                if (key.knockout[key.knockout.participantType + '1']._id == key.team._id) {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                } else {
                                    key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                    key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                }
                            }
                        });
                        // console.log("opponent", $scope.studentStats);

                    } else if ($scope.studentStats[0].drawFormat == 'League') {
                        _.each($scope.studentStats, function(key) {
                            key.opponent = {};
                            key.self = {};
                            if (key.league.participantType == 'player') {
                                if (key.league[key.league.participantType + '1']._id == $stateParams.id) {
                                    key.opponent.detail = key.league[key.league.participantType + '2'];
                                    key.opponent.result = key.league.result2;
                                    key.self.result = key.league.result1;
                                } else {
                                    key.opponent.detail = key.league[key.league.participantType + '1'];
                                    key.opponent.result = key.league.result1;
                                    key.self.result = key.league.result2;
                                }
                            } else {
                                if (key.league[key.league.participantType + '1']._id == key.team._id) {
                                    key.opponent.detail = key.league[key.league.participantType + '2'];
                                    key.opponent.result = key.league.result2;
                                    key.self.result = key.league.result1;
                                } else {
                                    key.opponent.detail = key.league[key.league.participantType + '1'];
                                    key.opponent.result = key.league.result1;
                                    key.self.result = key.league.result2;
                                }
                            }
                        });
                    } else if ($scope.studentStats[0].drawFormat == 'Heats') {
                        _.each($scope.studentStats, function(key) {
                            key.self = {};
                            _.each(key.heat.heats, function(single) {
                                if (single.player._id == $stateParams.id) {
                                    key.self = single;
                                }
                            });
                        });
                    }
                }
                console.log($scope.studentStats);
            } else {
                $scope.studentStats = [];
            }
        });
    };
    // $scope.makeActive = function(sports) {
    //     //console.log("sports : ",sports.sportslist);
    //     console.log(sports);
    // };

    $scope.filter.year = "2015";
    $scope.changeYear();
})

.controller('HeatsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("heats");
        $scope.menutitle = NavigationService.makeactive("Heats");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.heat = {};
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.student = [{
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }];
        $scope.profiles = function(participantType, id) {
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
        $scope.getSportRoundHeat = function() {
            NavigationService.getSportRoundHeat({
                sport: $stateParams.id
            }, function(response) {
                if (response.value) {
                    $scope.heat.sport = response.data.sport;
                    $scope.heat.heats = _.chain(response.data.heats)
                        .groupBy("round")
                        .toPairs()
                        .map(function(currentItem) {
                            currentItem[2] = currentItem[1][0].order;
                            return _.zipObject(["round", "heats", "order"], currentItem);
                        })
                        .value();
                    if (_.findIndex($scope.heat.heats, function(key) {
                            return key.round == 'Final';
                        }) !== -1) {
                        $scope.heat.final = _.find($scope.heat.heats, function(key) {
                            return key.round == 'Final';
                        }).heats[0];
                    }
                    console.log($scope.heat);
                } else {
                    $scope.heat = {};
                }
            });
        };
        $scope.getSportRoundHeat();
    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("team");
        $scope.menutitle = NavigationService.makeactive("Team");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.inputs = {};
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        NavigationService.countTeam(function(data) {
            $scope.count = data.data;
        });
        $scope.getsearch = false;
        $scope.searchFilter = {};
        $scope.searchFilter.pagenumber = 1;
        $scope.searchFilter.pagesize = 12;
        $scope.searchFilter.search = "";
        $scope.parseSearch = function(input) {
            $scope.searchFilter.pagenumber = 1;

            if (input === '' || input === null) {
                $scope.searchFilter.search = undefined;
                $scope.searchFilter.sfaid = undefined;
                $scope.getsearch = false;
            } else {
                $scope.getsearch = true;

                if (isNaN(input)) {
                    $scope.searchFilter.search = input;
                    $scope.searchFilter.sfaid = undefined;
                } else {
                    $scope.searchFilter.search = undefined;
                    $scope.searchFilter.sfaid = parseInt(input);
                }

            }
            $scope.doSearch();
        };
        var i = 0;
        $scope.doSearch = function() {
            NavigationService.getSearchDataTeam($scope.searchFilter, ++i, function(data, ini) {
                if (i == ini) {
                    $scope.getSearchData = data.data;

                }
            });
        };

    })

.controller('QualifyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("qualify");
        $scope.menutitle = NavigationService.makeactive("Qualify");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        // $scope.student = [{
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png ",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }, {
        //   icon: "img/sf-student-profile.png",
        //   name: "Harshit Shah",
        //   dep: "45211"
        // }];

    })
    .controller('TeamDetailCtrl', function($scope, TemplateService, NavigationService, $stateParams, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("team-detail");
        $scope.menutitle = NavigationService.makeactive("Team Detail");
        TemplateService.header = "views/header2.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.filterStatistics = {};

        $scope.tabs = 'photos';
        $scope.classp = 'active-list';
        $scope.classv = '';


        $scope.tabchanges = function(tabs, a) {
            //        console.log(tab);
            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-list";
                $scope.classv = '';

            } else {

                $scope.classp = '';
                $scope.classv = "active-list";
            }
        };

        $scope.tab = 'squad';
        $scope.classa = 'active-list';
        $scope.classb = '';
        $scope.classc = '';

        $scope.tabchange = function(tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {

                $scope.classa = "active-list";
                $scope.classb = '';
                $scope.classc = '';
            } else if (a == 2) {

                $scope.classa = '';
                $scope.classb = "active-list";
                $scope.classc = "";
                $scope.getStats();
            } else {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active-list";
            }
        };

        $scope.student = [{
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }, {
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            dep: "45211"
        }];

        $scope.photos = [
            'img/m1.jpg',
            'img/m2.jpg',
            'img/m3.jpg',
            'img/m1.jpg',
            'img/m2.jpg',
            'img/m3.jpg'

        ];
        $scope.video = [{
            icon: "img/m1.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"

        }, {
            icon: "img/m2.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
        }, {
            icon: "img/m3.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
        }, {
            icon: "img/m2.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
        }, {
            icon: "img/m1.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
        }, {
            icon: "img/m3.jpg",
            name: "girls | u-14 | semi final- Harshit shah VS Manav mehta"
        }];

        $scope.teamDetail = function() {
            NavigationService.getTeamDetail($stateParams.id, function(data) {
                console.log(data.data);
                if (data.value) {
                    $scope.teamDetails = data.data;
                    console.log($scope.teamDetails);
                } else {
                    $scope.teamDetails = {};
                    console.log("Error while fetching team details");
                }
            });
        };
        $scope.teamDetail();
        $scope.getStats = function() {
            $scope.filterStatistics.team = $stateParams.id;
            $scope.teamStats = undefined;
            NavigationService.getStatsForTeam($scope.filterStatistics, function(response) {
                if (response.value) {
                    $scope.teamStats = response.data;
                    // console.log($scope.teamStats);
                    if ($scope.teamStats) {
                        if ($scope.teamStats[0].drawFormat == 'Knockout') {
                            _.each($scope.teamStats, function(key) {
                                key.opponent = {};
                                key.self = {};
                                if (key.knockout.participantType == 'player') {
                                    if (key.knockout[key.knockout.participantType + '1']._id == $stateParams.id) {
                                        key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                        key.self.detail = key.knockout[key.knockout.participantType + '1'];
                                        key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                        key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    } else {
                                        key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                        key.self.detail = key.knockout[key.knockout.participantType + '2'];
                                        key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                        key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    }
                                } else {
                                    console.log(key.knockout[key.knockout.participantType + '1']._id, $stateParams.id);
                                    if (key.knockout[key.knockout.participantType + '1']._id == $stateParams.id) {
                                        key.opponent.detail = key.knockout[key.knockout.participantType + '2'];
                                        key.self.detail = key.knockout[key.knockout.participantType + '1'];
                                        key.opponent.result = key.knockout["result" + key.knockout.participantType + '2'];
                                        key.self.result = key.knockout["result" + key.knockout.participantType + '1'];
                                    } else {
                                        key.opponent.detail = key.knockout[key.knockout.participantType + '1'];
                                        key.self.detail = key.knockout[key.knockout.participantType + '2'];
                                        key.opponent.result = key.knockout["result" + key.knockout.participantType + '1'];
                                        key.self.result = key.knockout["result" + key.knockout.participantType + '2'];
                                    }
                                }
                            });
                        }
                    }
                } else {
                    $scope.teamStats = [];
                }
            });
        };
    })

.controller('RoundRobinCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("round-robin");
    $scope.menutitle = NavigationService.makeactive("Round Robin");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.league = {};
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.feedLimit = 2;
    $scope.loadMore = function() {
        $scope.feedLimit += 1;
    };
    $scope.matchs = [{
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, ]
    }];
    $scope.profiles = function(participantType, id) {
        if (participantType == 'player') {
            sfastate = 'student-profile';
        } else {
            sfastate = 'team-detail';
        }
        $state.go(sfastate, {
            id: id
        });
    };
    var participants = [];
    var stats = {};
    $scope.getSportRoundLeague = function() {
        NavigationService.getSportRoundLeague({
            sport: $stateParams.id
        }, function(response) {
            if (response.value) {
                $scope.league.sport = response.data.sport;
                $scope.league.leagues = _.clone(response.data.leagues);
                participants = [];
                _.each(response.data.leagues, function(key) {
                    if (key[key.participantType + '1']) {
                        participants.push({
                            participant: key[key.participantType + '1'],
                            point: key.point1,
                            result: key.result1,
                            participantType: key.participantType
                        });
                    }
                    if (key[key.participantType + '2']) {
                        participants.push({
                            participant: key[key.participantType + '2'],
                            point: key.point2,
                            result: key.result2,
                            participantType: key.participantType
                        });
                    }
                });
                $scope.league.standings = _.groupBy(participants, function(key) {
                    return key.participant._id;
                });
                $scope.league.standings = _.map($scope.league.standings, function(value, property) {
                    stats = {};
                    stats.point = 0.0;
                    _.each(value, function(single) {
                        if (!stats[single.result]) {
                            stats[single.result] = 0;
                        }
                        stats[single.result] += 1;
                        stats.point += single.point;

                        stats.participantType = single.participantType;
                    });
                    stats.participant = value[0].participant;
                    stats.matches = value.length;
                    return stats;
                });
                console.log($scope.league);
            } else {
                $scope.league = {};
            }
        });
    };
    $scope.getSportRoundLeague();
})

.controller('KnockoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("knockout");
    $scope.menutitle = NavigationService.makeactive("Knockout");
    TemplateService.header = "views/header2.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.feedLimit = 5;
    $scope.matchs = [{
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }, {
        match: "1",
        team1: "dhirubhai ambani intertional school",
        team2: "dhirubhai ambani intertional school",
        score: [{
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }, {
            score1: "11",
            score2: "5"
        }]
    }];

})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $scope.games = // JavaScript Document
        [{
            "img": "img/footer/n1.jpg",
            "href": "",
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
            "img": "img/footer/n4.jpg",
            "href": "",
            "game": "Magazine Partner"
        },{
            "img": "img/footer/n1.jpg",
            "href": "",
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

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };
})

;

// angular.module('phonecatControllers', ['ui.select', 'templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar', 'ui.select', 'ordinal', 'wt.responsive', 'ui.date', 'toastr'])
// var globalLinkSchoolRegister = schoolLink;
// var globalLinkCollegeRegister = collegeLink;
// var tempLink = "sfanow.in";
// var tempLinks = "www.sfanow.in";
// var tempLink1 = "mumbai.sfanow.in";
// var sublinkTemp = "http://mumbai.sfanow.in";

// var type = 'test';
// var sublink1 = "http://testmumbaischool.sfanow.in";
// var sublink2 = "http://testmumbaicollege.sfanow.in";
// var sublink3 = "http://testhyderabadschool.sfanow.in";
// var sublink4 = "http://testhyderabadcollege.sfanow.in";
// var sublink5 = "http://testahmedabadschool.sfanow.in";
// var sublink6 = "http://testahmedabadcollege.sfanow.in";
// var mainLink = "test.sfanow.in";
// var link1 = "testmumbai.sfanow.in";
// var link2 = "testhyderabad.sfanow.in";
// var link3 = "testahmedabad.sfanow.in";

var year15 = '2015-16';
var year16 = '2016-17';
var year17 = '2017-18';
var year18 = '2018-19';
var eventYear = '2018-19';

// var mainLink = "localhost:8080";
// var link1 = "localhost:8080";
// var link2 = "localhost:8080";
// var link3 = "localhost:8080";


var type = 'live';
var sublink1 = "https://mumbaischool.sfanow.in";
var sublink2 = "http://mumbaicollege.sfanow.in";
var sublink3 = "https://hyderabadschool.sfanow.in";
var sublink4 = "http://hyderabadcollege.sfanow.in";
var sublink5 = "http://ahmedabadschool.sfanow.in";
var sublink6 = "http://ahmedabadcollege.sfanow.in";
var mainLink = "sfanow.in";
var link1 = "mumbai.sfanow.in";
var link2 = "hyderabad.sfanow.in";
var link3 = "ahmedabad.sfanow.in";
// var eventYear = '2017';
// var year15 = '2015';
// var year16 = '2016';

firstApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $interval, cityService, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("SPORTS FOR ALL | PROFESSIONAL SCHOOL & COLLEGE SPORTING SYSTEM");
    TemplateService.description = "Mumbai’s largest professional sport event & tournament for athletes from Schools & Colleges. Click here for athlete bios & match videos. Register now for SFA MUMBAI 2017";
    TemplateService.keywords = "inter college, inter school, tournament, sport event, tournament for athletes ,athlete bios , match videos";
    TemplateService.title = $scope.menutitle;
    // TemplateService.header = "views/header1.html";
    $scope.navigation = NavigationService.getnav();
    if (window.location.host != mainLink) {
        $scope.hideHome = true;
        TemplateService.header = "views/header.html";
        $scope.countdown = {};
        $scope.changeSlideClass = function (obj, index) {
            obj.class = "active";
            // console.log("active = ", index);
            for (var i = index - 1, j = 1; i >= 0; i--) {
                $scope.game[i].class = "near-" + (j++);
            }
            for (i = index + 1, j = 1; i < $scope.game.length; i++) {
                $scope.game[i].class = "near-" + (j++);
            }
        };
        $scope.removeSlideClass = function (obj, index) {
            for (var i = 0; i < $scope.game.length; i++) {
                $scope.game[i].class = "";
            }
            // $scope.$apply();
        };
        $scope.refreshTimer = function (eventTime) {
            eventTime = new Date(eventTime);
            $scope.rightNow = new Date();
            $scope.diffTime = eventTime - $scope.rightNow;
            var duration = moment.duration($scope.diffTime, 'milliseconds');

            $interval(function () {
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

        // CITY SERVICE INITIALISATIONS
        cityService.getCurrentCity(function (response) {
            if (window.location.host == response.link1) {
                $scope.city = "mumbai";
            } else if (window.location.host == response.link2) {
                $scope.city = "hyderabad";
            } else if (window.location.host == response.link3) {
                $scope.city = "ahemdabad";
            } else {
                $scope.city = "hyderabad";
            }
        });
        // CITY SERVICE INITIALISATIONS END

        NavigationService.getAllEnabledBanner(function (response) {
            console.log('data', response);
            if (response.value) {
                if (window.location.host == link1) {
                    $scope.banners = response.data.Mumbai;
                } else if (window.location.host == link2) {
                    $scope.banners = response.data.Hyderabad;
                    // $scope.banners = [{
                    //     city: "Hyderabad",
                    //     image: "img/Hyderabad_1.jpg",
                    //     link: "https://hyderabadschool.sfanow.in/register",
                    //     order: '1'
                    // }, {
                    //     city: "Hyderabad",
                    //     image: "img/Hyderabad_2.jpg",
                    //     link: "https://hyderabadschool.sfanow.in/register",
                    //     order: '2'
                    // }, {
                    //     city: "Hyderabad",
                    //     image: "img/Hyderabad_3.jpg",
                    //     link: "https://hyderabadschool.sfanow.in/register",
                    //     order: '3'
                    // }];
                } else if (window.location.host == link3) {
                    // $scope.banners = response.data.Ahmedabad;
                }
            } else {
                console.log("Banner not found");
            }
        });

        function twitterReload(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }

        function facebookReload(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            //  if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=1452795161694777";
            fjs.parentNode.insertBefore(js, fjs);

        }
        $timeout(function () {
            twitterReload(document, "script", "twitter-wjs");
            facebookReload(document, 'script', 'facebook-jssdk');
        }, 1000);

        var f, t;
        f = $interval(function () {
            if (typeof FB !== undefined) {
                FB = null;
                $interval.cancel(f);
                facebookReload(document, 'script', 'facebook-jssdk');
            }
        }, 100);
        t = $interval(function () {
            if (typeof twttr !== undefined) {
                twttr.widgets.load();
                $interval.cancel(t);

            }
        }, 100);

        NavigationService.getAllSportList(function (response) {
            if (response.value) {
                $scope.game = response.data;
            } else {
                console.log("Sports List data not found");
            }
        });
    } else {
        $scope.hideHome = true;
        TemplateService.footer = "";
        if (window.location.pathname != '/contact' && window.location.pathname != '/about-us') {
            $state.go('home');
            // window.open("https://hyderabad.sfanow.in/liveupdates", "_self");
        } else {
            // do nothing
        }
        // window.open("https://mumbai.sfanow.in/liveupdates", "_self");
    }
    if (window.location.host == link1) {
        // $state.go('liveupdates');
    } else if (window.location.host == link2) {
        $state.go('liveupdates');
    } else if (window.location.host == link3) {

    }

    $scope.ticker = {
        scroll: true,
        duration: 15000,
        duplicated: true
    };

    // SPORTS ICONS AS PER THE CITY
    if ($scope.city === 'mumbai') {
        $scope.sportIcons = [{
            name: 'Handball'
        }, {
            name: 'Basketball'
        }, {
            name: 'Volleyball'
        }, {
            name: 'Throwball'
        }, {
            name: 'Hockey'
        }, {
            name: 'Kho Kho'
        }, {
            name: 'Kabaddi'
        }, {
            name: 'Football'
        }, {
            name: 'Badminton'
        }, {
            name: 'Tennis'
        }, {
            name: 'Table Tennis'
        }, {
            name: 'Squash'
        }, {
            name: 'Judo'
        }, {
            name: 'Taekwondo'
        }, {
            name: 'Boxing'
        }, {
            name: 'Fencing'
        }, {
            name: 'Karate'
        }, {
            name: 'Sport MMA'
        }, {
            name: 'Shooting'
        }, {
            name: 'Archery'
        }, {
            name: 'Swimming'
        }, {
            name: 'Water Polo'
        }, {
            name: 'Carrom'
        }, {
            name: 'Chess'
        }, {
            name: 'Athletics'
        }, {
            name: 'Wrestling'
        }]
    } else if ($scope.city === 'hyderabad') {
        $scope.sportIcons = [{
            name: 'Handball'
        }, {
            name: 'Basketball'
        }, {
            name: 'Volleyball'
        }, {
            name: 'Throwball'
        }, {
            name: 'Hockey'
        }, {
            name: 'Kho Kho'
        }, {
            name: 'Kabaddi'
        }, {
            name: 'Football'
        }, {
            name: 'Badminton'
        }, {
            name: 'Tennis'
        }, {
            name: 'Table Tennis'
        }, {
            name: 'Judo'
        }, {
            name: 'Taekwondo'
        }, {
            name: 'Boxing'
        }, {
            name: 'Fencing'
        }, {
            name: 'Karate'
        }, {
            name: 'Shooting'
        }, {
            name: 'Archery'
        }, {
            name: 'Swimming'
        }, {
            name: 'Water Polo'
        }, {
            name: 'Carrom'
        }, {
            name: 'Chess'
        }, {
            name: 'Athletics'
        }, {
            name: 'Skating'
        }]
    }
    // SPORTS ICONS AS PER THE CITY END


});
firstApp.controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About-Us | SFA");
    TemplateService.description = "SFA brings you excellence in sports activities. Let your child participate in the best interschool competition events, get access to quality resources & excel! ";
    TemplateService.keywords = "best interschool competition, inter school competition, inter school competition events, gymnastics for kids, international sporting events, kids sports activities, sport activities";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    if (window.location.host == mainLink) {
        TemplateService.header = "";
        TemplateService.footer = "";
    } else {
        TemplateService.header = "views/header.html";
    }

});
firstApp.controller('VenueCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("venue");
    $scope.menutitle = NavigationService.makeactive("Venue");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});

firstApp.controller('CertificateCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("certificate");
    $scope.menutitle = NavigationService.makeactive("Certificate");
    TemplateService.header = "";
    TemplateService.footer = "";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.sport = [{
        name: "Water polo",
        index: "1"
    }, {
        name: "Swimming",
        index: "2"
    }];

});
firstApp.controller('DownloadScheduleCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("download-schedule");
    $scope.menutitle = NavigationService.makeactive("Download Schedule Program");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('MerchandiseApparelsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("merchandise-apparels");
    $scope.menutitle = NavigationService.makeactive("Merchandise Apparels");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('WorkshopClinicCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("workshop-clinic");
    $scope.menutitle = NavigationService.makeactive("Workshop Clinic");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('SponserCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("sponser-partner");
    $scope.menutitle = NavigationService.makeactive("Sponser");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.image = [
        'img/sp1.jpg',
        'img/sp2.jpg',
        'img/sp3.jpg',
        'img/sp4.jpg'
    ];

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
            "game": "Hydration partner"
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
            "game": "Event Partner"
        }, {
            "img": "img/footer/n13.png",
            "href": "",
            "game": "Goodwill Partner"
        }, {
            "img": "img/footer/n14.png",
            "href": "",
            "game": "Online Promotional Partner"
        }];
    // {
    //     "img": "img/footer/na1.jpg",
    //     "href": "",
    //     "game": "Sports Equipment Partner"
    // }, {
    //     "img": "img/footer/na2.jpg",
    //     "href": "",
    //     "game": "Apparel Partner"
    // },
    $scope.teams = [{
        "img": "img/sports/football.jpg",
        "name": "football"
    }, {
        "img": "img/sports/Handball.jpg",
        "name": "HANDBALL"
    }, {
        "img": "img/sports/Basketball.jpg",
        "name": "BASKETBALL"
    }, {
        "img": "img/sports/Volleyball.jpg",
        "name": "VOLLEYBALL"
    }, {
        "img": "img/sports/Throwball.jpg",
        "name": "THROWBALL"
    }, {
        "img": "img/sports/Hockey.jpg",
        "name": "HOCKEY"
    }, {
        "img": "img/sports/Khokho.jpg",
        "name": "KHO-KHO"
    }, {
        "img": "img/sports/Kabaddi.jpg",
        "name": "KABADDI"
    }];

    $scope.racquet = [{
        "img": "img/sports/Badminton.jpg",
        "name": "BADMINTON"
    }, {
        "img": "img/sports/Tennis.jpg",
        "name": "TENNIS"
    }, {
        "img": "img/sports/Table-tennis.jpg",
        "name": "TABLE TENNIS"
    }, {
        "img": "img/sports/Squash.jpg",
        "name": "SQUASH"
    }];
    $scope.combat = [{
        "img": "img/sports/Judo.jpg",
        "name": "JUDO"
    }, {
        "img": "img/sports/Tavkwondo.jpg",
        "name": "TAEKWONDO"
    }, {
        "img": "img/sports/Boxing.jpg",
        "name": "BOXING"
    }, {
        "img": "img/sports/Fencing.jpg",
        "name": "FENCING"
    }, {
        "img": "img/sports/Karate.jpg",
        "name": "KARATE"
    }, {
        "img": "img/sports/MMA.jpg",
        "name": "SPORT MIXED MARTIAL ARTS"
    }];
    $scope.indi = [{
        "img": "img/sports/Carrom.jpg",
        "name": "CARROM"
    }, {
        "img": "img/sports/Chess.jpg",
        "name": "CHESS"
    }, {
        "img": "img/sports/Athletics.jpg",
        "name": "ATHLETICS"
    }, {
        "img": "img/sports/Skating.jpg",
        "name": "Skating"
    }];
    $scope.target = [{
        "img": "img/sports/Shooting.jpg",
        "name": "SHOOTING"
    }, {
        "img": "img/sports/Archery.jpg",
        "name": "ARCHERY"
    }];
    $scope.aqua = [{
        "img": "img/sports/SWIMMING.jpg",
        "name": "SHOOTING"
    }, {
        "img": "img/sports/WATER POLO.jpg",
        "name": "ARCHERY"
    }];

});
firstApp.controller('FormSubmitCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("form-submit");
    $scope.template.header = "";
    $scope.template.footer = "";
    $scope.menutitle = NavigationService.makeactive("Form Submit");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.verify = {};
    var i = 0;

    $scope.getPlayer = function (search) {
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
        NavigationService.forFormSearch(constraints, ++i, function (data, ini) {
            if (i == ini) {
                if (data && data.value !== false) {
                    $scope.students = data.data;
                } else {
                    $scope.students = [];
                }
            }
        });
    };
    $scope.getSchool = function (search) {
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
        NavigationService.forFormSearchSchool(constraints, ++i, function (data, ini) {
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
    $scope.toVerify = function () {
        // NavigationService.
        console.log($scope.verify);
        $state.go("after-form", {
            id: $scope.verify.student._id
        });
    };

});
firstApp.controller('LeagueKnockoutCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("league-knockout");
    $scope.menutitle = NavigationService.makeactive("League Cum Knockout");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
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
    $scope.getLeagueKnockout = function () {
        NavigationService.getLeagueKnockout({
            sport: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.leagueknockouts = _.chain(response.data)
                    .groupBy("leagueknockoutround")
                    .toPairs()
                    .map(function (currentItem) {
                        currentItem[2] = currentItem[1][0].leagueknockoutorder;
                        return _.zipObject(["leagueknockoutround", "leagueknockouts", "leagueknockoutorder"], currentItem);
                    })
                    .value();
                if (_.findIndex($scope.leagueknockouts, function (key) {
                        return key.leagueknockoutround == 'Final';
                    }) !== -1) {
                    $scope.knockouts = _.remove($scope.leagueknockouts, function (key) {
                        return key.leagueknockoutround == 'Final';
                    })[0];
                }
                //Standing code real Smart
                var participants = [];
                _.each($scope.leagueknockouts, function (lk) {
                    participants = [];
                    _.each(lk.leagueknockouts, function (key) {
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
                    lk.standings = _.groupBy(participants, function (key) {
                        return key.participant._id;
                    });
                    lk.standings = _.map(lk.standings, function (value, property) {
                        stats = {};
                        stats.point = 0.0;
                        _.each(value, function (single) {
                            if (single.result == "No Show") {
                                single.result = "Noshow";
                                if (!stats[single.result]) {
                                    stats[single.result] = 0;
                                }
                                stats[single.result] += 1;
                            } else {
                                if (!stats[single.result]) {
                                    stats[single.result] = 0;
                                }
                                stats[single.result] += 1;

                            }
                            stats.point += single.point;

                            stats.participantType = single.participantType;
                        });
                        stats.participant = value[0].participant;
                        stats.matches = value.length;
                        return stats;
                    });
                });

                console.log($scope.leagueknockouts, $scope.knockouts);
            }
        });
    };
    if ($stateParams.id) {
        NavigationService.getOneSport({
            _id: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.sport = response.data;
                $scope.getLeagueKnockout();
            }
        });
    }

});

firstApp.controller('KnockoutQualifyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("knockout-qualify");
    $scope.menutitle = NavigationService.makeactive("Knockout Qualify");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});

firstApp.controller('AfterFormCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $filter, $state) {

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
        NavigationService.getStudentProfile($stateParams.id, function (response) {
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

    $scope.getStudentSport = function (constraints) {
        var i = 0;
        $scope.studentSport = undefined;
        NavigationService.getStudentSport(constraints, function (response) {
            if (response.value) {
                _.each(response.data, function (key) {
                    $scope.student.sport += key.name + ", ";
                });
            } else {
                $scope.studentSport = [];
                console.log("Error while fetching Student Sports.");
            }
        });
    };
    $scope.editStudent = function () {
        NavigationService.editStudent($scope.student, function (response) {
            if (response.value) {
                _.assignIn($scope.student, response.data);
                $scope.student.dob = new Date(response.data.dob);
                if ($scope.student.profilePic) {
                    $scope.student.dp = $filter('uploadpath')($scope.student.profilePic);
                }
                $timeout(function () {
                    $state.go('form-submit');
                }, 2000);
            } else {

            }
        });
    };

});
firstApp.controller('ResultCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {

    $scope.template = TemplateService.changecontent("result");
    $scope.menutitle = NavigationService.makeactive("Result");
    TemplateService.header = "views/header.html";
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
    $scope.getSportList = function () {
        NavigationService.getAllSportList(function (response) {
            if (response.value) {
                $scope.dropdowns.sport = response.data;
                if ($scope.filter.year == '2015') {
                    _.remove($scope.dropdowns.sport, function (key) {
                        return !_.includes($scope.sportName, key.name);
                    });
                }
            }
        });
    };
    $scope.getSportAgeGroup = function () {
        $scope.doesNotHaveSport = true;
        $scope.dropdowns.agegroup = undefined;
        $scope.filter.agegroup = undefined;
        NavigationService.filterAgegroupBySport({
            sportList: $scope.filter.sport
        }, function (response) {
            if (response.value) {
                $scope.dropdowns.agegroup = response.data;
            } else {
                $scope.dropdowns.agegroup = [];
            }
        });
    };
    $scope.getSportCategory = function () {
        $scope.doesNotHaveSport = true;
        $scope.dropdowns.category = undefined;
        $scope.filter.category = undefined;
        if ($scope.filter.sport && $scope.filter.gender) {
            NavigationService.filterCategoryForFrontendGender({
                sportList: $scope.filter.sport,
                gender: $scope.filter.gender
            }, function (response) {
                if (response.value) {
                    $scope.dropdowns.category = response.data;
                } else {
                    $scope.dropdowns.category = [];
                }
            });
        }
    };
    $scope.getSport = function () {
        $scope.sport = undefined;
        console.log($scope.filter);

        NavigationService.getOneSportForResult($scope.filter, function (response) {
            $scope.doesNotHaveSport = response.value;
            if (response.value) {
                $state.go(NavigationService.resultDispatcher(response.data.drawFormat), {
                    id: response.data._id
                });
            }
        });
    };

});
firstApp.controller('SchoolRankingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("school-ranking");
    $scope.menutitle = NavigationService.makeactive("School Ranking");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.filter = {};
    $scope.schools = [];
    $scope.filter.year = "2016";
    $scope.rankingByYear = function () {
        $scope.schools = undefined;
        NavigationService.getAllSchoolRank($scope.filter, function (data) {
            $scope.schools = data;
        });
    };
    $scope.rankingByYear();

});
firstApp.controller('BlogCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.header = "views/header.html";
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

});
firstApp.controller('DrawScheduleCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("draw-schedule");
    $scope.menutitle = NavigationService.makeactive("Draw Schedule");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.statuses = {};
    $scope.statuses.open = {};
    $scope.draws = {};
    $scope.teleport = function (drawFormat, sportid) {
        $state.go(NavigationService.resultDispatcher(drawFormat), {
            id: sportid
        });
    };
    $scope.getDraws = function (sportid) {
        $scope.draws = {};
        _.each($scope.statuses.open, function (value, key) {
            $scope.statuses.open[key] = false;
        });
        NavigationService.getOneBySportId({
            sport: sportid
        }, function (response) {

            if (response.value) {
                $scope.draws.sports = [];
                $scope.draws.message = response.data.yearBeforeContent;
            } else {

            }
        });
    };
    $scope.getSportList = function () {
        $scope.sports = undefined;
        NavigationService.getAllSportList(function (response) {
            if (response.value) {
                // if ($scope.filter.year == '2015') {
                //     _.remove(response.data, function(key) {
                //         return !_.includes($scope.sportName, key.name);
                //     });
                // }
                $scope.sports = _.chain(response.data)
                    .groupBy("sporttype")
                    .toPairs()
                    .map(function (currentItem) {
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

});
firstApp.controller('BlogDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("blog-detail");
    $scope.menutitle = NavigationService.makeactive("Blog Detail");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('SwissCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("swiss");
    $scope.menutitle = NavigationService.makeactive("Swiss");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});

firstApp.controller('MediaGalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, cityService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("media-gallery");
    $scope.menutitle = NavigationService.makeactive("Media Gallery");
    TemplateService.header = "views/header.html";
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
    // CITY SERVICE INITIALISATIONS
    cityService.getCurrentCity(function (response) {
        if (window.location.host == response.link1) {
            $scope.sfaCity = "Mumbai";
        } else if (window.location.host == response.link2) {
            $scope.sfaCity = "Hyderabad";
        } else if (window.location.host == response.link3) {
            $scope.sfaCity = "Ahemdabad";
        } else {
            $scope.sfaCity = "Hyderabad";
        }
    });
    // CITY SERVICE INITIALISATIONS END

    $scope.tab = 'photos';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';


    $scope.tabchange = function (tab, a) {
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
    $scope.tabchanges = function (tabs, a) {
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
    $scope.getMediaFolders = function () {
        $scope.folders = undefined;
        NavigationService.getFolders($scope.filter, function (response) {
            if (response) {
                console.log(response);
                $scope.folders = response.data;
            } else {
                // console.log("No data found");
                $scope.folders = [];
            }
        });
    };
    $scope.loadMedia = function (year) {
        if (year == '2017') {
            if ($stateParams.type && $stateParams.folder) {
                window.open("https://mumbaischool.sfanow.in/#media-gallery/" + $stateParams.type + "/" + $stateParams.folder, '_self');
            } else {
                window.open("https://mumbaischool.sfanow.in/#media-gallery", '_self');
            }

        }
        $scope.mediaArr = undefined;
        NavigationService.getLimitedMedia($scope.filter, function (response) {
            if (response) {
                console.log("get limited media : ", response);
                $scope.mediaArr = response.data;
            } else {
                console.log("No data found");
                $scope.mediaArr.data = [];
            }
        });
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
            $scope.filter.year = "2016";
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
});

firstApp.controller('MediaPressCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, cityService) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("media-press");
    $scope.menutitle = NavigationService.makeactive("Media Press");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.flags = {};
    $scope.flags.openGallery = false;
    $scope.flag = {};
    $scope.classes = {};
    $scope.filter = {};
    $scope.folders = [];
    $scope.flag.openGallerys = false;
    $scope.tabs = 'press-photo';
    $scope.classp = 'active-list';
    $scope.classv = '';

    // CITY SERVICE INITIALISATIONS
    cityService.getCurrentCity(function (response) {
        if (window.location.host == response.link1) {
            $scope.sfaCity = "Mumbai";
        } else if (window.location.host == response.link2) {
            $scope.sfaCity = "Hyderabad";
        } else if (window.location.host == response.link3) {
            $scope.sfaCity = "Ahemdabad";
        } else {
            $scope.sfaCity = "Hyderabad";
        }
    });

    // CITY SERVICE INITIALISATIONS END
    $scope.tabchanges = function (tabs, a) {
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
    $scope.getMediaFolders = function () {
        $scope.folders = undefined;
        NavigationService.getFolders($scope.filter, function (response) {
            if (response) {
                console.log(response);
                $scope.folders = response.data;
            } else {
                // console.log("No data found");
                $scope.folders = [];
            }
        });
    };

    $scope.loadMedia = function (year) {
        if (year == '2017') {
            if ($stateParams.type && $stateParams.folder) {
                console.log("im", $stateParams.type, $stateParams.folder);
                window.open("https://mumbaischool.sfanow.in/#media-press/" + $stateParams.type + "/" + $stateParams.folder, '_self');
            } else {
                window.open("https://mumbaischool.sfanow.in/#media-press", '_self');
            }

        }
        $scope.mediaArr = undefined;
        NavigationService.getLimitedMedia($scope.filter, function (response) {
            if (response) {
                console.log("get limited media : ", response);
                $scope.mediaArr = response.data;
            } else {
                console.log("No data found");
                $scope.mediaArr.data = [];
            }
        });
    };
    //console.log($stateParams);
    if (!$stateParams.type && !$stateParams.folder) {
        $scope.filter.mediatype = "press-photo";
        $scope.flags.openGallery = true;
        $scope.filter.year = "2016";
        $scope.filter.folder = "press-coverage";
        $scope.filter.pagenumber = 1;
        $scope.loadMedia();
        $scope.tabchanges('press-photo', 1);
    } else {
        if ($stateParams.type && $stateParams.folder) {
            $scope.filter.mediatype = $stateParams.type;
            $scope.filter.folder = $stateParams.folder;
            $scope.filter.year = "2016";
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
});

firstApp.controller('FaqCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("faq");
    $scope.menutitle = NavigationService.makeactive("FAQ");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };

});
firstApp.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    if (window.location.host == mainLink) {
        TemplateService.header = "";
        TemplateService.footer = "";
    } else {
        TemplateService.header = "views/header.html";
    }
    if (window.location.host == link1) {
        $scope.selectedCity = 'mumbai';
    } else if (window.location.host == link2) {
        $scope.selectedCity = 'hyderabad';
    } else if (window.location.host == link3) {
        $scope.selectedCity = 'ahmedabad';
    }
    if (window.location.host == link1) {
        $scope.registerSchool = sublink1;
        $scope.registerCollege = sublink2;
    } else if (window.location.host == link2) {
        $scope.registerSchool = sublink3;
        $scope.registerCollege = sublink4;
    } else if (window.location.host == link3) {
        $scope.registerSchool = sublink5;
        $scope.registerCollege = sublink6;
    }
});
firstApp.controller('RegistrationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("registration");
    $scope.menutitle = NavigationService.makeactive("Registration");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('TermsConditionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("terms-condition");
    $scope.menutitle = NavigationService.makeactive("Terms Condition");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


});
firstApp.controller('SpecialAwardsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("special");
    $scope.menutitle = NavigationService.makeactive("Special Awards");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('medicalAidCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("medical-aid");
    $scope.menutitle = NavigationService.makeactive("Medical Care");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('foodAndEntertainmentCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("food-and-entertainment");
    $scope.menutitle = NavigationService.makeactive("Food & Entertainment");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('specialDaysCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("special-days");
    $scope.menutitle = NavigationService.makeactive("Special Days");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});
firstApp.controller('TraininDevelopmentCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("training-development");
    $scope.menutitle = NavigationService.makeactive("Sport Training | Training Academy | SFA");
    TemplateService.header = "views/header.html";
    TemplateService.description = "Get the best kids fitness programs & sport training and let your child excel in everything from swimming competitions to table tennis with Sports For All!";
    TemplateService.keywords = "sport training, swimming competition, swimming coaching in Mumbai ,table tennis training, table tennis academy, kids fitness programs";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    if (window.location.host == link1) {
        $scope.selectedCity = 'mumbai';
    } else if (window.location.host == link2) {
        $scope.selectedCity = 'hyderabad';
    } else if (window.location.host == link3) {
        $scope.selectedCity = 'ahmedabad';
    }
    if (window.location.host == link1) {
        $scope.registerSchool = sublink1;
        $scope.registerCollege = sublink2;
    } else if (window.location.host == link2) {
        $scope.registerSchool = sublink3;
        $scope.registerCollege = sublink4;
    } else if (window.location.host == link3) {
        $scope.registerSchool = sublink5;
        $scope.registerCollege = sublink6;
    }

});

firstApp.controller('DrawCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, $filter) {

    $scope.template = TemplateService.changecontent("draw");
    $scope.menutitle = NavigationService.makeactive("Draw");
    TemplateService.header = "views/header.html";
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
    $scope.tabchanges = function (tabs, a) {
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
    $scope.selectRound = function (index) {
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

    $scope.getSportRoundKnockout = function () {
        NavigationService.getSportRoundKnockout({
            sport: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.knockout.sport = response.data.sport;
                $scope.knockout.medals = response.data.medals;
                $scope.knockout.knockouts = _.groupBy(response.data.knockouts, function (key) {
                    return key.roundno + " " + key.round;
                });

                $scope.knockout.rounds = [];
                var maxOrder = 0,
                    i = 0;
                var pseudoRound = [];
                _.each($scope.knockout.knockouts, function (value, key) {
                    $scope.knockout.rounds.push(key);
                    maxOrder = _.maxBy(value, function (kno) {
                        return kno.order;
                    }).order;
                    console.log(value, maxOrder);
                    pseudoRound = [];
                    for (i = 0; i <= maxOrder; i++) {
                        if (_.findIndex(value, function (single) {
                                return single.order == i;
                            }) === -1) {
                            pseudoRound.push({
                                order: -999
                            });
                        } else {
                            pseudoRound.push(_.find(value, function (knock) {
                                return knock.order == i;
                            }));
                        }
                    }
                    $scope.knockout.knockouts[key] = pseudoRound;
                    console.log($scope.knockout.rounds);
                });
                if (_.findIndex($scope.knockout.rounds, function (key) {
                        return key === '-1 Third Place';
                    }) !== -1) {
                    _.remove($scope.knockout.rounds, function (key) {
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
});


firstApp.controller('StudentBioCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("student-bio");
    $scope.menutitle = NavigationService.makeactive("Student Bio");
    TemplateService.header = "views/header.html";
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




    $scope.getSport = function (sport) {
        console.log(sport);

        constraints.agegroup = sport.agegroup.name;
        if (sport.firstcategory) {
            constraints.category = sport.firstcategory.name;
        }
        constraints.sport = sport.sportslist._id;
        constraints.year = sport.year;
        NavigationService.getOneSportForResult(constraints, function (response) {
            $scope.doesNotHaveSport = response.value;
            if (response.value) {
                $state.go(NavigationService.resultDispatcher(response.data.drawFormat), {
                    id: response.data._id
                });
            }
        });
    };
    $scope.tabchanges = function (tabs, a) {
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

    $scope.tabchange = function (tab, a) {
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
    $scope.getStudentProfile = function () {
        NavigationService.getStudentProfile($stateParams.id, function (data) {
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
    $scope.changeYear = function () {
        var constraints = {};
        constraints.year = $scope.filter.year;
        constraints.student = $stateParams.id;
        // $scope.filterStatistics.sport = undefined;
        // $scope.studentStats = [];
        $scope.getStudentSport(constraints);
        $scope.studentMedalCount(constraints);
    };

    $scope.studentMedalCount = function (constraints) {
        NavigationService.getStudentMedalCount(constraints, function (data) {
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
    $scope.profiles = function (participantType, id) {
        if (participantType == 'player') {
            sfastate = 'student-profile';
        } else {
            sfastate = 'team-detail';
        }
        $state.go(sfastate, {
            _id: id
        });
    };
    $scope.getStudentSport = function (constraints) {
        //console.log("constraints : ",constraints);
        var i = 0;
        $scope.studentSport = {};
        NavigationService.getStudentSport(constraints, function (response) {
            if (response.value) {
                //   console.log("studentSport data = ",data);
                $scope.studentSport[constraints.year] = response.data;
                console.log($scope.studentSport);
                _.each($scope.studentSport[constraints.year], function (key) {
                    key.active = false;
                });
            } else {
                $scope.studentSport[constraints.year] = [];
            }
        });
    };
    $scope.changeYear();
});

firstApp.controller('SportCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams, errorService) {
    $scope.template = TemplateService.changecontent("sport");
    // $scope.menutitle = NavigationService.makeactive($stateParams.name);
    TemplateService.header = "views/header.html";
    $scope.navigation = NavigationService.getnav();
    $scope.gallery = {};
    $scope.filter = {};
    $scope.classes = {};
    $scope.sportFolder = {};
    $scope.sport = {};
    $scope.is2015Sport = false;

    if (window.location.host == link1) {
        $scope.city = 'mumbai';
    } else if (window.location.host == link2) {
        $scope.city = 'hyderabad';
    } else if (window.location.host == link3) {
        $scope.city = 'ahmedabad';
    }


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



    $scope.tabchanges = function (tabs, a) {
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
    $scope.profiles = function (participantType, studentid, teamid) {
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
    $scope.winners = undefined;
    $scope.getWinners = function (year) {
        var constraints = {};
        constraints.sport = $scope.sport.sportid._id;
        constraints.year = year;
        $scope.statuses.doubleBronze = false;
        if (!$scope.winners) {
            $scope.winners = {};
        }
        NavigationService.getWinners(constraints, function (response) {
            if (response.value) {
                $scope.winners[year] = response.data;
                _.each($scope.winners[year], function (key) {
                    if (key.Bronze.length > 1) {
                        $scope.statuses.doubleBronze = true;
                    }
                });
            } else {
                $scope.winners[year] = [];
            }
        });
    };

    $scope.getSport = function () {
        NavigationService.getSportRuleByName($stateParams, function (response) {
            if (response.value) {
                $scope.sport = response.data;
                console.log($scope.sport);
                $scope.getWinners("2016");
            } else {
                console.log("No sports data found");
            }
        });
    };



    if ($stateParams.name) {
        $scope.typeSelected = 'school';
        var sports2015 = ["basketball", "volleyball", "handball", "table tennis", "tennis", "squash", "badminton", "swimming", "judo"];
        $scope.is2015Sport = false;
        _.each(sports2015, function (key) {
            if (key.toUpperCase() == $stateParams.name.toUpperCase()) {
                $scope.is2015Sport = true;
            }
        });
        // var sports2017 = ["Basketball", "volleyball"];
        var sports2017 = [{
            sport: "Basketball",
            Title: "Enroll your Child in Exciting Basketball Competitions| SFA",
            Description: "Give your child a platform to showcase his or her abilities via basketball tournaments to instil a sense of healthy competition. Have them join Sports For All today!",
            Keywords: "Basketball competitions, basketball tournaments"
        }, {
            sport: "Football",
            Title: "Build Confidence with the Best Football Training| SFA",
            Description: "If you can see the potential in your kid to become the next Lionel Messi, help them reach their potential with great football coaching in Mumbai with us!",
            Keywords: "Football training, football coaching in Mumbai"
        }, {
            sport: "Handball",
            Title: "Join the Handball Academy for Fun and Sports| SFA",
            Description: "Maybe you want to play a sport that is different and exciting. In that case, come and participate in our handball competitions to experience a new game.",
            Keywords: "Handball academy, handball competitions"
        }, {
            sport: "Hockey",
            Title: "Come and Learn with the Hockey Academy| SFA",
            Description: "Be a part of the sports revolution by training in India’s national sport. To encourage love for all sports, practice with SFA’s intense but fun hockey training today!",
            Keywords: "Hockey academy, hockey training"
        }, {
            sport: "Kabaddi",
            Title: "Play like a Pro at Kabaddi Tournaments Today| SFA",
            Description: "Toughen up and train in this hard-core Indian sport. Practice and play this mentally and physically challenging game at kabaddi competitions with SFA.",
            Keywords: "Kabaddi tournaments, kabaddi competitions"
        }, {
            sport: "Kho Kho",
            Title: "Take Part in the Specialised Kho Kho Coaching Now with SFA| SFA",
            Description: "A game of skill, speed and sharpness, the sport of Kho Kho is a great one. Join our Kho Kho training sessions to know learn more and train to become a pro.",
            Keywords: "Kho Kho coaching, kho kho training"
        }, {
            sport: "Throwball",
            Title: "The Biggest Throwball Tournament for All the Kids Around| SFA",
            Description: "Practice makes better is absolutely true, especially when it comes to sports. So if you want your children to play well, help them to get great throwball training.",
            Keywords: "Throwball tournament, throwball training"
        }, {
            sport: "Volleyball",
            Title: "Introducing a World Class Volleyball Academy| SFA",
            Description: "If you think your kid has strong arms, is quick to move and loves sports, send them over to Sports For All today to be a part of our volleyball coaching in Mumbai.",
            Keywords: "Volleyball academy, volleyball coaching in Mumbai"
        }, {
            sport: "Badminton",
            Title: "Participate in Mumbai’s Exciting Badminton Competitions| SFA",
            Description: "Feeling inspired by our great national badminton players representing the country? You can get there too! Just practice hard at our badminton coaching for kids.",
            Keywords: "Badminton competition, badminton coaching for kids"
        }, {
            sport: "Table Tennis",
            Title: "Move like the Wind for the Best Table-Tennis Tournaments| SFA",
            Description: "Work hard and practice harder at a well-equipped table-tennis academy in Mumbai. Get the best training along with an enriching experience at SFA.",
            Keywords: "Table-tennis tournaments, table-tennis academy in Mumbai"
        }, {
            sport: "Tennis",
            Title: "Become the One of the World’s Next Tennis Champions| SFA",
            Description: "Are you a huge fan of the way Sania Mirza plays and wish to have a forehand as strong as hers? You now can if you start playing with us for tennis training!",
            Keywords: "Tennis champion, tennis training"
        }, {
            sport: "squash",
            Title: "Play the Game with Skill, Only with Squash Coaching Courses| SFA",
            Description: "Learn everything from the basic rules, grips and score keeping along with how to dominate the game. Do this with practice and play in squash training in Mumbai.",
            Keywords: "Squash coaching courses, squash training in Mumbai"
        }, {
            sport: "Boxing",
            Title: "You Can Be The Next Big Thing with Good Boxing Training| SFA",
            Description: "From start to end, in a safe but extremely well-equipped environment, your children can now learn how to box. Introduce them to our boxing academy today!",
            Keywords: "Boxing training, boxing academy"
        }, {
            sport: "fencing",
            Title: "Tackle your Way to the Top at the Fencing Academy in Mumbai| SFA",
            Description: "Figure out how professionals fence around the world and with practice, you can do the same or maybe even better! All you have to do is join us for fencing training.",
            Keywords: "Fencing academy in Mumbai, fencing training"
        }, {
            sport: "judo",
            Title: "For More than Just Self Defence, Join Judo Training| SFA",
            Description: "Master a part of the renowned martial arts and find a brilliant way to ensure self-defence along with a great fitness regime at the judo academy.",
            Keywords: "Judo training, judo academy"
        }, {
            sport: "Karate",
            Title: "Now Become the New Karate Kid at the Karate Academy| SFA",
            Description: "Rock the badass attitude with discipline, charm and physical strength like Jaden Smith today. Attain all of this by participating in karate competitions in Mumbai.",
            Keywords: "Karate academy, karate competitions in Mumbai"
        }, {
            sport: "Sport MMA",
            Title: "Win MMA Competitions and Live Like a Champion Now| SFA",
            Description: "Join, practice, play and participate with the best teachers and an exciting environment for Mixed Martial Arts. This is possible with SFA’s MMA academy!",
            Keywords: "MMA competitions, MMA academy"
        }, {
            sport: "Taekwondo",
            Title: "Kick-Ass like a Professional Today with SFA’s Taekwondo Training| SFA",
            Description: "Why be just fascinated and interested in the sport by watching all those marital arts movies? Be one of them by learning it at the taekwondo academy in Mumbai.",
            Keywords: "Taekwondo training, taekwondo academy"
        }, {
            sport: "Wrestling",
            Title: "Wrestling",
            Description: "Wrestling"
        }, {
            sport: "Archery",
            Title: "With Archery Coaching, You will Always Hit the Target| SFA",
            Description: "Achieve perfect aim along with discipline, hard work and fun at the archery academy in Mumbai. Sports For All promises you a great overall experience!",
            Keywords: "Archery coaching, archery academy"
        }, {
            sport: "Shooting",
            Title: "Aim and Shoot to your Heart’s Content with Shooting Coaching| SFA",
            Description: "Are you interested in handling rifles, loading the, cleaning them and shooting targets with them? Then you must come for shooting coaching in Mumbai!",
            Keywords: "Shooting coaching, shooting coaching in Mumbai"
        }, {
            sport: "Swimming",
            Title: "Swim your Way to the Top at Swimming Competitions| SFA",
            Description: "Push through your fears and demonstrate your strengths with lots of swimming training in Mumbai. With time and practice, become the next Michal Phelps!",
            Keywords: "Swimming competitions, swimming training in Mumbai"
        }, {
            sport: "water polo",
            Title: "Be the Best in the Game with Water Polo Training, Only with SFA| SFA",
            Description: "Who said polo can only be played on land and on horses? Join the sports revolution and play a unique game at the water polo academy in Mumbai.",
            Keywords: "Water polo training, water polo academy"
        }, {
            sport: "Athletics",
            Title: "Run, Jump or Sprint: Do It All with the Athletics Academy| SFA",
            Description: "Help your child hone his or her abilities by training them with professionals. Encourage them to participate in inter school athletics competitions also.",
            Keywords: "Athletics academy, inter school athletics competitions"
        }, {
            sport: "Carrom",
            Title: "Teach your Kids to Play at Carrom Competitions in Mumbai| SFA",
            Description: "It’s one thing to play some fun family games with your kids, but what if they have the capability for more? Find out with good carrom coaching in the city.",
            Keywords: "Carrom competitions, carrom coaching"
        }, {
            sport: "Chess",
            Title: "Train your Brain the Right Way with Chess Training in Mumbai| SFA",
            Description: "If you think your child has the intelligence to become a chess player, what are you waiting for? Start teaching them to play at chess tournaments in Mumbai!",
            Keywords: "Chess training, chess tournaments in Mumbai"
        }, {
            sport: "Skating",
            Title: "Skating | SFA",
            Description: "Skating",
            Keywords: "Skating training, skating tournaments in Hyderabad"
        }];
        $scope.getRules = function (constraints) {
            $scope.ruleArray = [];
            _.each(sports2017, function (name) {
                if (name.sport.toUpperCase() == constraints.sportName.toUpperCase()) {
                    // $scope.is2015Sport = true;
                    // $scope.Description = 'desc' + $stateParams.name;
                    // $scope.Keywords = 'key' + $stateParams.name;
                    $scope.menutitle = NavigationService.makeactive(name.Title);
                    TemplateService.title = $scope.menutitle;
                    TemplateService.description = name.Description;
                    TemplateService.keywords = name.Keywords;
                    $scope.ruleArray = undefined;
                    NavigationService.getOneRuleBySportsName(constraints, function (data) {
                        console.log('get Sports Data', data);
                        if (data.value === true) {
                            if (_.isEmpty(data.data)) {
                                $scope.ruleArray = [];
                            } else {
                                $scope.ruleArray = [];
                                $scope.ruleArray.push(data.data);
                            }
                        } else {
                            toastr.error(allData.message, 'Error Message');
                        }
                    });
                }
            });
        }
        $scope.changeType = function (data) {
            $scope.constraints = {};
            if (data) {
                if (window.location.host == link1) {
                    $scope.constraints.city = 'mumbai';
                    $scope.constraints.type = data;
                    $scope.constraints.sportName = $stateParams.name;
                } else if (window.location.host == link2) {
                    $scope.constraints.city = 'hyderabad';
                    $scope.constraints.type = data;
                    $scope.constraints.sportName = $stateParams.name;
                } else if (window.location.host == link3) {
                    $scope.constraints.city = 'ahmedabad';
                    $scope.constraints.type = data;
                    $scope.constraints.sportName = $stateParams.name;
                }
                $scope.getRules($scope.constraints);
            }
        }
        $scope.changeType('school');
    }
    $scope.getSport();
    $scope.oneAtATime = true;
    $scope.tab = 'rules';
    $scope.classa = '';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.classe = 'active-list';
    $scope.tabchange = function (tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        console.log("Tab :  ", $scope.tab);
        if (a == 1) {

            $scope.classa = "active-list";
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = '';
            $scope.classe = '';
        } else if (a == 2) {

            $scope.classa = '';
            $scope.classb = "active-list";
            $scope.classc = "";
            $scope.classd = "";
            $scope.classe = '';

        } else if (a == 3) {

            $scope.classa = '';
            $scope.classc = "active-list";
            $scope.classb = "";
            $scope.classd = "";
            $scope.classe = '';
            $scope.filter.mediatype = "photo";
            $scope.filter.folder = $stateParams.name;
            $scope.filter.year = "2016";
            $scope.filter.pagenumber = 1;
            console.log("filter", $scope.filter);
            $scope.loadMedia();

        } else if (a == 4) {

            $scope.classa = '';
            $scope.classb = '';
            $scope.classd = "active-list";
            $scope.classc = "";
            $scope.classe = '';
        } else {
            $scope.classa = '';
            $scope.classb = '';
            $scope.classd = "";
            $scope.classc = "";
            $scope.classe = "active-list";

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
    $scope.media = function (type, id) {
        console.log("tabs = ", type);
        $scope.filter.mediatype = type;
        $scope.filter.folder = $stateParams.name;
        //$scope.filter.year = "2015";
        $scope.filter.pagenumber = 1;
        // console.log("filter", $scope.filter);
        $scope.loadMedia();
        $scope.tabchanges($scope.filter.mediatype, 1);
    };

    $scope.loadMedia = function () {
        if ($scope.mediaArr.data) {
            $scope.mediaArr.data = [];
        } else {
            $scope.mediaArr = {};
        }

        NavigationService.getLimitedMedia($scope.filter, function (response) {
            if (response) {
                console.log("get limited media : ", response);
                $scope.mediaArr = response.data;
                console.log($scope.mediaArr);
                //console.log("folder data : ",$scope.folders);
            } else {
                console.log("No data found");
                $scope.mediaArr = {};
            }
        });
    };

});

firstApp.controller('SchoolBioCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    //Used to name the .html file


    $scope.template = TemplateService.changecontent("school-bio");
    $scope.menutitle = NavigationService.makeactive("School Bio");
    TemplateService.header = "views/header.html";
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

    $scope.open = function (sports, size) {
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


    $scope.tabchanges = function (tabs, a) {
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

    $scope.tabchange = function (tab, a) {
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

    $scope.getSchoolProfile = function () {
        NavigationService.getOnePopulated($stateParams.id, function (data) {
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
            $scope.school.sports = _.groupBy($scope.school.sports, function (key) {
                return key.year;
            });
            $scope.school.departmentSorted = _.groupBy($scope.school.department, function (key) {
                return key.year;
            });
            console.log($scope.school);
        });
    };
    $scope.getSchoolProfile();
});

firstApp.controller('ChampionsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    console.log("Testing Consoles");
    $scope.template = TemplateService.changecontent("champions");
    $scope.menutitle = NavigationService.makeactive("Champions");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.sportName = ['Badminton', 'Tennis', 'Table Tennis', 'Volleyball', 'Handball', 'Squash', 'Basketball', 'Swimming', 'Judo'];
    $scope.filter = {};
    $scope.filter.year = "2016";
    $scope.winners = [];
    $scope.statuses = {};
    $scope.statuses.open = {};
    $scope.statuses.doubleBronze = false;
    $scope.profiles = function (participantType, studentid, teamid) {
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
    $scope.getWinners = function (sportid) {
        var constraints = {};
        constraints.sport = sportid;
        _.each($scope.statuses.open, function (value, key) {
            $scope.statuses.open[key] = false;
        });
        constraints.year = $scope.filter.year;
        $scope.statuses.doubleBronze = false;
        $scope.winners = undefined;
        NavigationService.getWinners(constraints, function (response) {
            if (response.value) {
                $scope.winners = response.data;
                _.each($scope.winners, function (key) {
                    if (key.Bronze.length > 1) {
                        $scope.statuses.doubleBronze = true;
                    }
                });
            } else {
                $scope.winners = [];
            }
        });
    };
    $scope.getSportList = function () {
        $scope.sports = undefined;
        NavigationService.getAllSportList(function (response) {
            if (response.value) {
                if ($scope.filter.year == '2015') {
                    _.remove(response.data, function (key) {
                        return !_.includes($scope.sportName, key.name);
                    });
                }
                $scope.sports = _.chain(response.data)
                    .groupBy("sporttype")
                    .toPairs()
                    .map(function (currentItem) {
                        return _.zipObject(["sporttype", "name"], currentItem);
                    })
                    .value();
                console.log($scope.sports);
            }
        });
    };
    $scope.getSportList();

});


firstApp.controller('SchoolCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school");
    $scope.menutitle = NavigationService.makeactive("School");
    TemplateService.header = "views/header.html";
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
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.maxSize = 20;
    $scope.parseSearch = function (input) {
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
    $scope.submitSearch = function () {
        if ($scope.search.active) {
            NavigationService.schoolSearch($scope.filter, ++i, function (data, ini) {
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
                year: "2016"
            }, function (data) {
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

    $scope.changeYear = function () {
        $scope.filterselected.title = "";

        if ($scope.filter.year == "top20") {
            $scope.school.showAll = false;
            $scope.school.showTop20 = false;
            $scope.submitSearch();
            $scope.filterselected.title = "SFA MUMBAI " + year16 + " - Top 20 Schools";
        } else {
            var constraints = {};
            constraints.year = null;
            $scope.filterselected.title = "All Schools";
            if ($scope.filter.year == '2015') {
                $scope.filterselected.title = "SFA MUMBAI " + year15;
                constraints.year = $scope.filter.year;
            } else if ($scope.filter.year == '2016') {
                $scope.filterselected.title = "SFA MUMBAI " + year16;
                constraints.year = $scope.filter.year;
            }
            $scope.allSchoolByYear(constraints);
            $scope.school.showAll = true;
            $scope.school.showTop20 = true;
        }
    };

    $scope.allSchoolByYear = function (constraints) {
        NavigationService.getSchoolByYear(constraints, function (data) {
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
});

firstApp.controller('SchoolProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, $uibModal, toastr) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school-profile");
    $scope.menutitle = NavigationService.makeactive("School Profile");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.callObject = {};
    var year = new Date();
    var schoolProfileId = '';
    $scope.filter = {};
    $scope.filterStatistics = {};
    $scope.filterStatistics.pagenumber = 1;
    $scope.filterStatistics.pagesize = 8;
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

    $scope.table = {};
    $scope.state = $state;
    $scope.students = {};
    $scope.allYears = NavigationService.getAllYears();
    if ($stateParams.id) {
        if ($stateParams.id.substr(0, 3) == 'Old') {
            NavigationService.getSchoolProfile($stateParams.id, function (data) {
                if (data.value) {
                    $scope.callObject._id = data.data._id;
                    $scope.filterStatistics.school = data.data._id;
                }
            });

        } else {
            $scope.callObject._id = $stateParams.id;
            $scope.filterStatistics.school = $stateParams.id;
        }

    }



    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.maxSize = 20;
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
    $scope.callReload = function () {
        if ($scope.filterStatistics.sport) {
            $scope.callObject.sport = $scope.filterStatistics.sport;
        }
        $scope.students.student = undefined;
        NavigationService.filterStud($scope.callObject, function (data) {
            console.log(data.data);
            if (data.value !== false) {
                $scope.students = data.data;
                if ($scope.students.student && $scope.students.student.length > 0 && $scope.students.school.contingentLeader && $scope.students.school.contingentLeader.length > 0) {
                    _.each($scope.students.student, function (z) {
                        _.each($scope.students.school.contingentLeader, function (n) {
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


    $scope.contingentStrengthByYear = function () {
        $scope.contingent.data = undefined;

        //This was to fix the All being sent in year, if you dont understand this fix I am sorry.
        var constraints = {};
        constraints = _.cloneDeep($scope.filterStatistics);
        constraints.year = null;
        if ($scope.filterStatistics.year == '2015' || $scope.filterStatistics.year == '2016') {
            constraints.year = $scope.filterStatistics.year;
        }
        //end
        NavigationService.contingentStrengthByYear(constraints, function (response) {
            if (response.value) {
                $scope.contingent = response.data;
            } else {
                $scope.contingent.data = [];
            }
        });
    };
    NavigationService.getSchoolProfile($stateParams.id, function (data) {
        if (data.value) {
            console.log("school data : ", data.data);
            $scope.getSchoolProfile = data.data;
            console.log("getSchoolProfile", $scope.getSchoolProfile);
            schoolProfileId = $scope.getSchoolProfile.sfaid;
            $scope.schoolSports = data.data.sports;
        } else {
            {
                $scope.getSchoolProfile = '';
                $scope.schoolSports = '';
                console.log("Error while fetching School Profile.");
                if (!$scope.getSchoolProfile || $scope.getSchoolProfile == 'undefined') {
                    toastr.error('No School Found');
                    $state.go('school');
                }
            }
        }
    });
    $scope.contingent = {};
    $scope.onChangeContingentYear = function () {
        console.log("getSchoolProfile", $scope.getSchoolProfile);
        if ($scope.filterStatistics.year == '2017') {
            window.open("https://mumbaischool.sfanow.in/school-profile/" + 'MS16' + schoolProfileId, '_self');

        }
        $scope.filterStatistics.pagenumber = 1;
        $scope.contingent = {};
        $scope.contingentStrengthByYear();
    };

    $scope.tabchange = function (tab, a) {
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
            }, function (response) {
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
                }, function (response) {
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

    $scope.changeYear = function () {

        if ($scope.filter.year == '2017') {
            window.open("https://mumbaischool.sfanow.in/school-profile/" + 'MS16' + schoolProfileId, '_self');

        }
        $scope.schooldata.Boys = 0;
        $scope.schooldata.Girls = 0;
        $scope.filter.sport = undefined;
        $scope.filterStatistics.sport = undefined;
        var constraints = {};
        constraints.year = $scope.filter.year;
        if ($stateParams.id) {
            if ($stateParams.id.substr(0, 3) == 'Old') {
                NavigationService.getSchoolProfile($stateParams.id, function (data) {
                    if (data.value) {
                        constraints._id = data.data._id;
                        constraints.school = data.data._id;
                    }
                });
            } else {
                constraints._id = $stateParams.id;
                constraints.school = $stateParams.id;
            }
        }

        $scope.getSportParticipated(constraints);
        $scope.schoolMedalCount(constraints);
        $scope.filterStatistics.year = $scope.filter.year;
        $scope.contingentStrengthByYear();
        $scope.filterStatistics.pagenumber = 1;

    };

    $scope.selectSport = function (selected) {
        $scope.filterStatistics = {};
        $scope.schoolStats = [];
        $scope.sportContingent.showContingent = true;
        $scope.filter.sport = selected;
        $scope.filterStatistics.sport = selected._id;
        $scope.table.layout = selected.drawFormat;
        $scope.tabchange('player', 1);
        $scope.agegroup = [];
        $scope.filterStatistics.year = _.clone($scope.filter.year);
        $scope.callObject.year = _.clone($scope.filter.year);
        $scope.getSportAgeGroup();
    };
    $scope.getStats = function () {
        $scope.schoolStats = undefined;
        NavigationService.getStatsForSchool($scope.filterStatistics, function (response) {
            if (response.value) {
                $scope.schoolStats = response.data;
                // console.log($scope.schoolStats);
                var drawF = "";
                if ($scope.schoolStats[0].drawFormat == 'Knockout') {
                    drawF = "knockout";
                } else if ($scope.schoolStats[0].drawFormat == "Swiss League") {
                    drawF = "swissleague"
                } else {
                    drawF = "leagueknockout"
                }
                if ($scope.schoolStats) {
                    if ($scope.schoolStats[0].drawFormat == 'Knockout' || $scope.schoolStats[0].drawFormat == 'League cum Knockout' || $scope.schoolStats[0].drawFormat == 'Swiss League') {
                        _.each($scope.schoolStats, function (key) {
                            key.opponent = {};
                            key.self = {};
                            if (key[drawF].participantType == 'player') {
                                if (key[drawF][key[drawF].participantType + '1'] && key[drawF][key[drawF].participantType + '1'].school._id == $stateParams.id) {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.opponent.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                } else {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.opponent.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                }
                            } else {
                                if (key[drawF][key[drawF].participantType + '1'] && key[drawF][key[drawF].participantType + '1'].school._id == key.team.school._id) {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.opponent.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                } else {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.opponent.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                }
                            }

                        });

                    } else if ($scope.schoolStats[0].drawFormat == 'Heats') {
                        _.each($scope.schoolStats, function (key) {
                            key.self = {};
                            _.each(key.heat.heats, function (single) {
                                var schoolid = single.player ? single.player.school._id : single.team.school._id;
                                if (schoolid == $stateParams.id) {
                                    key.self = single;
                                }
                            });
                        });
                    } else if ($scope.schoolStats[0].drawFormat == 'Qualifying Knockout') {
                        _.each($scope.schoolStats, function (key) {
                            key.opponent = {};
                            key.self = {};
                            if (key.qualifyingknockout.heats.length == 0) {
                                if (key.qualifyingknockout.participantType == 'player') {
                                    console.log("");
                                    if (key.qualifyingknockout[key.qualifyingknockout.participantType + '1']._id == $stateParams.id) {
                                        console.log("here");
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '2'];
                                        key.opponent.result = key.qualifyingknockout["result2"];
                                        key.self.result = key.qualifyingknockout["result1"];
                                    } else {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '1'];
                                        key.opponent.result = key.qualifyingknockout["result1"];
                                        key.self.result = key.qualifyingknockout["result2"];
                                    }
                                } else {
                                    if (key.qualifyingknockout[key.qualifyingknockout.participantType + '1']._id == key.team._id) {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '2'];
                                        key.opponent.result = key.qualifyingknockout["result2"];
                                        key.self.result = key.qualifyingknockout["result1"];
                                    } else {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '1'];
                                        key.opponent.result = key.qualifyingknockout["result1"];
                                        key.self.result = key.qualifyingknockout["result2"];
                                    }
                                }
                            } else {

                                _.each(key.qualifyingknockout.heats, function (single) {
                                    var schoolid = single.player ? single.player.school._id : single.team.school._id;
                                    if (schoolid == $stateParams.id) {
                                        key.self = single;
                                    }
                                });

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

    $scope.schoolMedalCount = function (constraints) {
        NavigationService.getSchoolMedalCount(constraints, function (data) {
            if (data.value) {
                $scope.schoolMedal = data.data;
            } else {
                $scope.schoolMedal = '';
                console.log("No School Medal data found");
            }
        });
    };

    $scope.getSchoolRank = function (statParamsid) {
        if (statParamsid) {
            NavigationService.getAllSchoolRank({
                year: "2016"
            }, function (data) {
                var school = _.find(data, function (school) {
                    return school._id == statParamsid;
                });
                $scope.schooldata.rank = school.rank;
            });
        }
    }
    $scope.getAllSchoolRank = function () {
        if ($stateParams.id) {
            if ($stateParams.id.substr(0, 3) == 'Old') {
                NavigationService.getSchoolProfile($stateParams.id, function (data) {
                    if (data.value) {
                        $scope.getSchoolRank(data.data._id);
                    }
                });

            } else {
                $scope.getSchoolRank($stateParams.id);
            }
        }
    }
    $scope.getAllSchoolRank();


    $scope.getSportParticipated = function (constraints) {
        $scope.sportsStudentGender[constraints.year] = undefined;
        NavigationService.getSchoolSportByGender(constraints, function (data) {
            if (data.value) {
                $scope.sportsStudentGender[constraints.year] = data.data.sports;
                $scope.schooldata.gender = data.data.gender;
                // $scope.schooldata.rank = data.data.rank;
                _.each($scope.sportsStudentGender[constraints.year], function (key) {
                    _.each(key.gender, function (value) {
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
    $scope.getSportAgeGroup = function () {
        NavigationService.filterAgegroupBySport({
            sportList: $scope.filter.sport._id
        }, function (response) {
            if (response.value) {
                $scope.agegroup = response.data;
            } else {
                $scope.agegroup = [];
            }
        });
    };

    $scope.videoNA = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoNA.html',
            size: 'sm',
            scope: $scope
        });
    };

    $scope.videoYTU = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoYTU.html',
            size: 'sm',
            scope: $scope
        });
    };

});

firstApp.controller('StudentsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("students");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.inputs = {};
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.maxSize = 20;

    NavigationService.countStudent(function (data) {
        $scope.count = data.data;
    });
    $scope.getsearch = false;
    $scope.searchFilter = {};
    $scope.searchFilter.pagenumber = 1;
    $scope.searchFilter.pagesize = 12;
    $scope.searchFilter.search = "";
    $scope.parseSearch = function (input) {
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
    $scope.doSearch = function () {
        NavigationService.getSearchDataStudent($scope.searchFilter, ++i, function (data, ini) {
            if (i == ini) {
                $scope.getSearchData = data.data;
            }
        });
    };
});

firstApp.controller('StudentProfileCtrl', function ($scope, $filter, TemplateService, NavigationService, $timeout, $stateParams, $state, $window, toastr, $uibModal) {
    //Used to name the .html file
    // $scope.exportCertificate = function(data) {
    //     if (data) {
    //         console.log("data", data);
    //         window.open(adminUrl + 'Config/generatePdf' + data, '_blank');
    //         // window.close();
    //     }
    //
    // };


    // $scope.abc;
    $scope.template = TemplateService.changecontent("student-profile");
    $scope.menutitle = NavigationService.makeactive("Student Profile");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


    $scope.SPORTDATA = {};
    $scope.medalData = {};
    console.log("PARAMS", $state.params.id);

    // var student_id = {
    //     _id: $state.params.id
    // };
    var student_id = {};
    $scope.getMedal = function (studenid) {
        if ($state.params.id.substr(0, 3) == 'Old') {
            student_id = {
                _id: studenid
            };

        } else {
            student_id = {
                _id: $state.params.id
            };
        }

        NavigationService.getMedal(student_id, function (data) {
            $scope.medalData = data;
            console.log("MEDAL DATA", data);
        });
    };

    $scope.exportCertificate = function (studentProfile, sportName, medalName) {
        studentProfile.ageGroup = $filter('ageFilter')(studentProfile.dob);
        // studentProfile.dob = studentProfile.dobDemo;
        console.log('studentProfile.dob', studentProfile.dobDemo);
        console.log("LOg", studentProfile);
        var studentProfile = studentProfile;
        var sportname = sportName;
        var medal = medalName;
        var spname = [];
        _.forEach(sportName, function (name) {
            //    console.log("THE SPORTS NAME", name.name);
            spname.push(name.name);
        });
        var MAINDATA = [];
        _.each(medal, function (innermedal) {
            console.log("Medal", innermedal);
            _.forEach(innermedal, function (data) {
                console.log("INNER DATAA", data.year);

                if (data.year != "2015") {
                    if (data.medal === 1) {
                        data.medal = "Gold";
                    } else if (data.medal === 2) {
                        data.medal = "Silver";
                    } else if (data.medal === 3) {
                        data.medal = "Bronze";

                    }


                    console.log("INNER DATAA", data.medal);
                    console.log("SPNAME", data.sport.sportslist.name);
                    MAINDATA.medal = data.medal;
                    MAINDATA.sport = data.sport.sportslist.name;
                    MAINDATA.push({
                        "medal": data.medal,
                        "sport": data.sport.sportslist.name,
                        "isMedal": true
                    });
                    //          console.log("JSONNN", MAINDATA);
                }

            });
            console.log("JSON", MAINDATA);

        });

        studentProfile.sports = spname;
        studentProfile.medal = MAINDATA;
        $scope.OBJECT = studentProfile;




        console.log("sportname NEW OBJ", studentProfile);
        NavigationService.pdfGenerate(studentProfile, function (data) {
            console.log("PDF", data);
        });


    };
    console.log("Testing Consoles");


    var studentProfileId = '';
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
    if ($stateParams.id) {
        if ($stateParams.id.substr(0, 3) == 'Old') {
            NavigationService.getStudentProfile($stateParams.id, function (data) {

                if (data.value) {
                    $scope.studentid = data.data._id;
                }
            })
        } else {
            $scope.studentid = $stateParams.id;
        }

    }

    $scope.drawDispatcher = function (drawFormat, id) {
        $state.go(NavigationService.resultDispatcher(drawFormat), {
            id: id
        });
    };

    $scope.OBJECT = {};

    $scope.tabchanges = function (tabs, a) {
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

    $scope.tabchange = function (tab, a) {
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
    $scope.getStudentProfile = function () {
        NavigationService.getStudentProfile($stateParams.id, function (data) {
            if (data.value) {
                $scope.studentProfile = data.data;
                if ($scope.studentProfile) {
                    $scope.changeYear();
                    $scope.getMedal($scope.studentProfile._id);
                    $scope.getStats($scope.studentProfile._id);
                }
                studentProfileId = $scope.studentProfile.sfaid;
                if ($scope.studentProfile.gender == "Boys") {
                    $scope.studentProfile.gender = "Male";
                } else {
                    $scope.studentProfile.gender = "Female";
                }
            } else {
                $scope.studentProfile = [];
                if (_.isEmpty($scope.studentProfile)) {
                    toastr.error('No Student Found');
                    $state.go('students');
                }
                console.log("Error while fetching Student Profile.");
            }
        });
    };
    $scope.getStudentProfile();
    $scope.changeYear = function () {
        if ($scope.filter.year == '2017') {
            window.open("https://mumbaischool.sfanow.in/student-profile/" + 'MA16' + studentProfileId, '_self');

        }
        var constraints = {};
        constraints.year = $scope.filter.year;
        if ($stateParams.id.substr(0, 3) == 'Old') {
            constraints.student = $scope.studentProfile._id;
        } else {
            constraints.student = $stateParams.id;
        }
        $scope.filterStatistics.sport = undefined;
        $scope.studentStats = [];
        $scope.getStudentSport(constraints);
        $scope.studentMedalCount(constraints);

    };

    // $scope.changeYear = function () {
    //     console.log("im in");

    //     if ($scope.filter.year == '2017') {
    //         window.open("http://mumbaischool.sfanow.in/student-profile/" + 'MA16' + studentProfileId, '_self');

    //     }
    //     var constraints = {};
    //     constraints.year = $scope.filter.year;
    //     constraints.student = $stateParams.id;
    //     $scope.filterStatistics.sport = undefined;
    //     $scope.studentStats = [];
    //     $scope.getStudentSport(constraints);
    //     $scope.studentMedalCount(constraints);

    // };
    $scope.getStudentSport = function (constraints) {
        //console.log("constraints : ",constraints);
        var i = 0;
        $scope.studentSport = undefined;
        NavigationService.getStudentSport(constraints, function (response) {
            if (response.value) {
                //   console.log(s"studentSport data = ",data);
                $scope.studentSport = response.data;
                $scope.SPORTDATA = response.data;
                console.log($scope.studentSport);
                _.each($scope.studentSport, function (key) {
                    key.active = false;
                });
            } else {
                $scope.studentSport = [];
                console.log("Error while fetching Student Sports.");
            }
        });
    };

    $scope.studentMedalCount = function (constraints) {
        NavigationService.getStudentMedalCount(constraints, function (data) {
            if (data.value) {
                $scope.studentMedal = data.data;
            } else {
                $scope.studentMedal = '';
                console.log("No Student Medal found");
            }
        });
    };
    $scope.activateSports = function (sportid) {
        _.each($scope.studentSport, function (key) {
            if (key._id == sportid) {
                key.active = true;
            } else {
                key.active = false;
            }
        });
    };
    $scope.nowSport = {};
    $scope.sportsSelected = function (sport) {
        $scope.nowSport = sport;
        $scope.activateSports(sport._id);
        $scope.participatedSports = _.groupBy(sport.sports, function (key) {
            return key.year;
        });
        $scope.filterStatistics.category = undefined;
        $scope.filterStatistics.year = $scope.filter.year;
        $scope.filterStatistics.sport = sport._id;
        $scope.table.layout = sport.drawFormat;
        NavigationService.filterCategoryBySport({
            sportList: sport._id
        }, function (response) {
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
    $scope.getStats = function (studentId) {
        if ($state.params.id.substr(0, 3) == 'Old') {
            $scope.filterStatistics.student = studentId;
        } else {
            $scope.filterStatistics.student = $stateParams.id;
        }
        $scope.studentStats = undefined;

        NavigationService.getStatsForStudent($scope.filterStatistics, function (response) {
            if (response.value) {
                $scope.studentStats = response.data;
                console.log($scope.studentStats);
                var drawf = "";
                if ($scope.studentStats[0].drawFormat == 'Knockout') {
                    drawf = "knockout";
                } else if ($scope.studentStats[0].drawFormat == "Swiss League") {
                    drawf = "swissleague"
                } else if ($scope.studentStats[0].drawFormat == "Qualifying Knockout") {
                    drawf = "qualifyingknockout"
                }
                if ($scope.studentStats) {
                    if ($scope.studentStats[0].drawFormat == 'Knockout' || $scope.studentStats[0].drawFormat == 'Swiss League') {
                        _.each($scope.studentStats, function (key) {
                            key.opponent = {};
                            //jagruti
                            key.self = {};
                            console.log("layout", key);
                            if (key[drawf].participantType == 'player') {
                                console.log("");
                                if (key[drawf][key[drawf].participantType + '1']._id == $stateParams.id) {
                                    console.log("here");
                                    key.opponent.detail = key[drawf][key[drawf].participantType + '2'];
                                    key.opponent.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '2'] : key[drawf]["result2"];
                                    key.self.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '1'] : key[drawf]["result1"];
                                } else {
                                    key.opponent.detail = key[drawf][key[drawf].participantType + '1'];
                                    key.opponent.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '1'] : key[drawf]["result1"];
                                    key.self.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '2'] : key[drawf]["result2"];
                                }
                            } else {
                                if (key[drawf][key[drawf].participantType + '1']._id == key.team._id) {
                                    key.opponent.detail = key[drawf][key[drawf].participantType + '2'];
                                    key.opponent.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '2'] : key[drawf]["result2"];
                                    key.self.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '1'] : key[drawf]["result1"];
                                } else {
                                    key.opponent.detail = key[drawf][key[drawf].participantType + '1'];
                                    key.opponent.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '1'] : key[drawf]["result1"];
                                    key.self.result = drawf == "knockout" ? key[drawf]["result" + key[drawf].participantType + '2'] : key[drawf]["result2"];
                                }
                            }
                        });
                        // console.log("opponent", $scope.studentStats);

                    } else if ($scope.studentStats[0].drawFormat == 'League') {
                        _.each($scope.studentStats, function (key) {
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
                        _.each($scope.studentStats, function (key) {
                            key.self = {};
                            if (!_.isEmpty(key.heat.video)) {
                                _.each(key.heat.heats, function (single) {
                                    if (key.heat.participantType == "team") {
                                        if (key.team._id == single.team._id) {
                                            key.self = single;
                                        }
                                    } else {
                                        if (single.player._id == $stateParams.id) {
                                            key.self = single;
                                        }
                                    }
                                });
                            } else {
                                _.each(key.heat.heats, function (single) {
                                    if (key.heat.participantType == "team") {
                                        if (key.team._id == single.team._id) {
                                            key.self = single;
                                        }
                                    } else {
                                        if (single.player._id == $stateParams.id) {
                                            key.heat.video = single.video;
                                            key.self = single;
                                        }
                                    }
                                });
                            }

                        });
                    } else if ($scope.studentStats[0].drawFormat == 'League cum Knockout') {
                        _.each($scope.studentStats, function (key) {
                            key.opponent = {};
                            key.self = {};
                            console.log("layout", key);
                            if (key.leagueknockout.participantType == 'player') {
                                console.log("");
                                if (key.leagueknockout[key.leagueknockout.participantType + '1']._id == $stateParams.id) {
                                    console.log("here");
                                    key.opponent.detail = key.leagueknockout[key.leagueknockout.participantType + '2'];
                                    key.opponent.result = key.leagueknockout["result2"];
                                    key.self.result = key.leagueknockout["result1"];
                                } else {
                                    key.opponent.detail = key.leagueknockout[key.leagueknockout.participantType + '1'];
                                    key.opponent.result = key.leagueknockout["result1"];
                                    key.self.result = key.leagueknockout["result2"];
                                }
                            } else {
                                if (key.leagueknockout[key.leagueknockout.participantType + '1']._id == key.team._id) {
                                    key.opponent.detail = key.leagueknockout[key.leagueknockout.participantType + '2'];
                                    key.opponent.result = key.leagueknockout["result2"];
                                    key.self.result = key.leagueknockout["result1"];
                                } else {
                                    key.opponent.detail = key.leagueknockout[key.leagueknockout.participantType + '1'];
                                    key.opponent.result = key.leagueknockout["result1"];
                                    key.self.result = key.leagueknockout["result2"];
                                }
                            }
                        });
                    } else if ($scope.studentStats[0].drawFormat == 'Qualifying Knockout') {
                        _.each($scope.studentStats, function (key) {
                            key.opponent = {};
                            key.self = {};
                            if (key[drawf].heats.length == 0) {
                                if (key.qualifyingknockout.participantType == 'player') {
                                    console.log("");
                                    if (key.qualifyingknockout[key.qualifyingknockout.participantType + '1']._id == $stateParams.id) {
                                        console.log("here");
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '2'];
                                        key.opponent.result = key.qualifyingknockout["result2"];
                                        key.self.result = key.qualifyingknockout["result1"];
                                    } else {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '1'];
                                        key.opponent.result = key.qualifyingknockout["result1"];
                                        key.self.result = key.qualifyingknockout["result2"];
                                    }
                                } else {
                                    if (key.qualifyingknockout[key.qualifyingknockout.participantType + '1']._id == key.team._id) {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '2'];
                                        key.opponent.result = key.qualifyingknockout["result2"];
                                        key.self.result = key.qualifyingknockout["result1"];
                                    } else {
                                        key.opponent.detail = key.qualifyingknockout[key.qualifyingknockout.participantType + '1'];
                                        key.opponent.result = key.qualifyingknockout["result1"];
                                        key.self.result = key.qualifyingknockout["result2"];
                                    }
                                }
                            } else {
                                _.each(key[drawf].heats, function (single) {
                                    if (key[drawf].participantType == "team") {
                                        if (key.team._id == single.team._id) {
                                            key.self = single;
                                        }
                                    } else {
                                        if (single.player._id == $stateParams.id) {
                                            key.self = single;
                                        }
                                    }
                                });
                            }
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

    $scope.filter.year = "2016";
    $scope.changeYear();

    $scope.videoNA = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoNA.html',
            size: 'sm',
            scope: $scope
        });
    };

    $scope.videoYTU = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoYTU.html',
            size: 'sm',
            scope: $scope
        });
    };
});



firstApp.controller('HeatsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("heats");
    $scope.menutitle = NavigationService.makeactive("Heats");
    TemplateService.header = "views/header.html";
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
    $scope.getSportRoundHeat = function () {
        NavigationService.getSportRoundHeat({
            sport: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.heat.sport = response.data.sport;
                $scope.heat.heats = _.chain(response.data.heats)
                    .groupBy("round")
                    .toPairs()
                    .map(function (currentItem) {
                        currentItem[2] = currentItem[1][0].order;
                        return _.zipObject(["round", "heats", "order"], currentItem);
                    })
                    .value();
                if (_.findIndex($scope.heat.heats, function (key) {
                        return key.round == 'Final';
                    }) !== -1) {
                    $scope.heat.final = _.find($scope.heat.heats, function (key) {
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
});

firstApp.controller('TeamCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("team");
    $scope.menutitle = NavigationService.makeactive("Team");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.inputs = {};
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.maxSize = 20;

    NavigationService.countTeam(function (data) {
        $scope.count = data.data;
    });
    $scope.getsearch = false;
    $scope.searchFilter = {};
    $scope.searchFilter.pagenumber = 1;
    $scope.searchFilter.pagesize = 12;
    $scope.searchFilter.search = "";
    $scope.parseSearch = function (input) {
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
    $scope.doSearch = function () {
        NavigationService.getSearchDataTeam($scope.searchFilter, ++i, function (data, ini) {
            if (i == ini) {
                $scope.getSearchData = data.data;

            }
        });
    };

});

firstApp.controller('QualifyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("qualify");
    $scope.menutitle = NavigationService.makeactive("Qualify");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.feedLimit = 2;
    $scope.loadMore = function () {
        $scope.feedLimit += 1;
    };
    $scope.getQualifyingRound = function () {
        $scope.qualifyingrounds = undefined;
        NavigationService.getQualifyingRound({
            sport: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.qualifyingrounds = _.chain(response.data)
                    .groupBy("round")
                    .toPairs()
                    .map(function (currentItem) {
                        currentItem[2] = currentItem[1][0].order;
                        return _.zipObject(["round", "qualifyingrounds", "order"], currentItem);
                    })
                    .value();
                _.each($scope.qualifyingrounds, function (key) {
                    key.feedLimit = 3;
                });
                console.log($scope.qualifyingrounds);
            } else {
                $scope.qualifyingrounds = [];
            }
        });
    };
    if ($stateParams.id) {
        NavigationService.getOneSport({
            _id: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.sport = response.data;
                $scope.getQualifyingRound();
            }
        });
    }
});

firstApp.controller('TeamDetailCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("team-detail");
    $scope.menutitle = NavigationService.makeactive("Team Detail");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.filterStatistics = {};

    $scope.tabs = 'photos';
    $scope.classp = 'active-list';
    $scope.classv = '';


    $scope.tabchanges = function (tabs, a) {
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

    $scope.tabchange = function (tab, a) {
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

    $scope.teamDetail = function () {
        NavigationService.getTeamDetail($stateParams.id, function (data) {
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
    $scope.getStats = function () {
        $scope.filterStatistics.team = $stateParams.id;
        $scope.teamStats = undefined;
        NavigationService.getStatsForTeam($scope.filterStatistics, function (response) {
            if (response.value) {
                $scope.teamStats = response.data;
                console.log($scope.teamStats);
                var drawF = "";
                if ($scope.teamStats[0].drawFormat == 'Knockout') {
                    drawF = "knockout";
                } else if ($scope.teamStats[0].drawFormat == 'League cum Knockout') {
                    drawF = "leagueknockout"
                } else if ($scope.teamStats[0].drawFormat == 'Qualifying Knockout') {
                    drawF = "qualifyingknockout"
                }
                if ($scope.teamStats) {
                    if ($scope.teamStats[0].drawFormat == 'Knockout' || $scope.teamStats[0].drawFormat == 'League cum Knockout' || $scope.teamStats[0].drawFormat == 'Qualifying Knockout') {
                        _.each($scope.teamStats, function (key) {
                            key.opponent = {};
                            key.self = {};
                            if (key[drawF].participantType == 'player') {
                                if (key[drawF][key[drawF].participantType + '1']._id == $stateParams.id) {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.opponent.result = key[drawF]["result" + key[drawF].participantType + '2'];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                } else {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.opponent.result = key[drawF]["result" + key[drawF].participantType + '1'];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                }
                            } else {
                                if (key[drawF][key[drawF].participantType + '1']._id == $stateParams.id) {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.opponent.result = key[drawF]["result" + key[drawF].participantType + '2'];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '1'] : key[drawF]["result1"];
                                } else {
                                    key.opponent.detail = key[drawF][key[drawF].participantType + '1'];
                                    key.self.detail = key[drawF][key[drawF].participantType + '2'];
                                    key.opponent.result = key[drawF]["result" + key[drawF].participantType + '1'];
                                    key.self.result = drawF == "knockout" ? key[drawF]["result" + key[drawF].participantType + '2'] : key[drawF]["result2"];
                                }
                            }
                        });
                    } else if ($scope.teamStats[0].drawFormat == 'Heats') {
                        _.each($scope.teamStats, function (key) {
                            key.self = {};
                            _.each(key.heat.heats, function (single) {
                                var schoolid = single.team._id;
                                if (schoolid == $stateParams.id) {
                                    key.self = single;
                                }

                                // if (key.heat.participantType == "team") {
                                //     if (key.team._id == $stateParams.id) {
                                //         key.self = single;
                                //     }
                                // } else {
                                //     if (single.player._id == single.team._id) {
                                //         key.self = single;
                                //     }
                                // }
                            });
                        });
                    }
                }
            } else {
                $scope.teamStats = [];
            }
        });
    };

    $scope.videoNA = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoNA.html',
            size: 'sm',
            scope: $scope
        });
    };

    $scope.videoYTU = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/videoYTU.html',
            size: 'sm',
            scope: $scope
        });
    };
});

firstApp.controller('RoundRobinCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("round-robin");
    $scope.menutitle = NavigationService.makeactive("Round Robin");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.league = {};
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    $scope.feedLimit = 4;
    $scope.loadMore = function () {
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
    $scope.profiles = function (participantType, id) {
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
    $scope.getSportRoundLeague = function () {
        NavigationService.getSportRoundLeague({
            sport: $stateParams.id
        }, function (response) {
            if (response.value) {
                $scope.league.sport = response.data.sport;
                $scope.league.leagues = _.clone(response.data.leagues);
                participants = [];
                _.each(response.data.leagues, function (key) {
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
                $scope.league.standings = _.groupBy(participants, function (key) {
                    return key.participant._id;
                });
                $scope.league.standings = _.map($scope.league.standings, function (value, property) {
                    stats = {};
                    stats.point = 0.0;
                    _.each(value, function (single) {
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
});

firstApp.controller('KnockoutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("knockout");
    $scope.menutitle = NavigationService.makeactive("Knockout");
    TemplateService.header = "views/header.html";
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

});

firstApp.controller('ChampionshipCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("championship");
    $scope.menutitle = NavigationService.makeactive("Championship");
    TemplateService.header = "views/header.html";
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});

firstApp.controller('headerctrl', function ($scope, TemplateService, $rootScope, NavigationService, errorService, toastr, $state, $uibModal, $rootScope) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
        // $scope.hideBlink = true;
    });
    $rootScope.year15 = year15;
    console.log('NAME - ', $state.current.name);
    if ($state.current.name == 'home' || $state.current.name == 'champions' || $state.current.name == 'media-gallery' || $state.current.name == 'media-press' || $state.current.name == 'school-bio' || $state.current.name == 'school' || $state.current.name == 'school-profile' || $state.current.name == 'school-ranking' || $state.current.name == 'sport' || $state.current.name == 'student-bio' || $state.current.name == 'media-press-inside' || $state.current.name == 'media-gallery-inside' || $state.current.name == 'student-profile') {
        $rootScope.year16 = year16;
    } else {
        if ($state.current.name == '') {
            $rootScope.year16 = year16;
        } else {
            $rootScope.year16 = year18;
        }
    }
    $rootScope.eventYear = eventYear
    if (window.location.host == mainLink) {
        if (window.location.pathname != '/contact' && window.location.pathname != '/about-us') {
            $scope.hideHeaderContent = false;
        } else {
            $scope.hideHeaderContent = true;
        }
    } else {
        $scope.hideHeaderContent = true;
    }
    // $uibModal.open({
    //     animation: true,
    //     scope: $scope,
    //     backdrop: 'static',
    //     backdropClass: 'blackOut',
    //     keyboard: false,
    //     templateUrl: "views/modal/city-video.html",
    //     size: 'md',
    //     windowClass: 'sfacity-selectmodal'
    // });
    //----------FOR SINGLE CITY-----------//
    // $scope.hideBlink = false;
    // if (window.location.host == tempLink || window.location.host == tempLinks) {
    //     window.open(sublinkTemp, '_self');
    // } else if (window.location.host == tempLink1) {
    //     $scope.sfaCity = 'mumbai';
    //     NavigationService.setSfaCity($scope.sfaCity);
    // } else {
    //     console.log('enter');
    // }


    $scope.newdate = new Date();
    $scope.currendate = moment($scope.newdate).format('DD-MMM-YYYY');
    $scope.closingdate = moment('25-Nov-2017').format('DD-MMM-YYYY')
    $scope.endday = moment($scope.closingdate).diff($scope.currendate, 'days') + 1;


    //------------For Multiple City------------//
    $scope.openCity = function (selectedCity, type) {
        var sublink = '';
        switch (selectedCity) {
            case 'mumbai':
                if ($.jStorage.get("sfaCity") == 'mumbai') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink1 + "/register/player";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink2 + "/register/player";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") != 'mumbai') {
                    $.jStorage.flush();
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink1 + "/register/player";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink2 + "/register/player";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") == '') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink1 + "/register/player";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = sublink2 + "/register/player";
                        window.open(sublink, '_self');
                    }
                    break;
                }
            case 'hyderabad':
                if ($.jStorage.get("sfaCity") == 'hyderabad') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink3 + "/register/player";
                        // sublink = "https://" + link2 + "/liveupdates";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink4 + "/register/player";
                        // sublink = sublink4 + "/liveupdates";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") != 'hyderabad') {
                    $.jStorage.flush();
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink3 + "/register/player";
                        // sublink = "https://" + link2 + "/liveupdates";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink4 + "/register/player";
                        // sublink = sublink4 + "/liveupdates";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") == '') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink3 + "/register/player";
                        // sublink = "https://" + link2 + "/liveupdates";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = sublink4 + "/register/player";
                        // sublink = sublink4 + "/liveupdates";
                        window.open(sublink, '_self');
                    }
                    break;
                }
            case 'ahmedabad':
                if ($.jStorage.get("sfaCity") == 'ahmedabad') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink5 + "/register";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink6 + "/register";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") != 'ahmedabad') {
                    $.jStorage.flush();
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink5 + "/register";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink6 + "/register";
                        window.open(sublink, '_self');
                    }
                    break;
                } else if ($.jStorage.get("sfaCity") == '') {
                    if (type == 'school') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink5 + "/register";
                        window.open(sublink, '_self');
                    } else if (type == 'college') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = sublink6 + "/register";
                        window.open(sublink, '_self');
                    }
                    break;
                }
            default:
                toastr.error("Something Went Wrong");
                break;
        }
    }

    if (type == 'test') {
        $scope.openCityInHeader = function (selectedCity) {
            var sublink = '';
            switch (selectedCity) {
                case 'mumbai':
                    if ($.jStorage.get("sfaCity") == 'mumbai') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'mumbai') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                case 'hyderabad':
                    if ($.jStorage.get("sfaCity") == 'hyderabad') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'hyderabad') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                case 'ahmedabad':
                    if ($.jStorage.get("sfaCity") == 'ahmedabad') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'ahmedabad') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://test" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                default:
                    toastr.error("Something Went Wrong");
                    break;
            }
        }
    } else {
        $scope.openCityInHeader = function (selectedCity) {
            var sublink = '';
            switch (selectedCity) {
                case 'mumbai':
                    if ($.jStorage.get("sfaCity") == 'mumbai') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'mumbai') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'mumbai';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                case 'hyderabad':
                    if ($.jStorage.get("sfaCity") == 'hyderabad') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'hyderabad') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'hyderabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                case 'ahmedabad':
                    if ($.jStorage.get("sfaCity") == 'ahmedabad') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") != 'ahmedabad') {
                        $.jStorage.flush();
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                        break;
                    } else if ($.jStorage.get("sfaCity") == '') {
                        NavigationService.setSfaCity(selectedCity);
                        $scope.sfaCity = 'ahmedabad';
                        sublink = "http://" + selectedCity + ".sfanow.in";
                        window.open(sublink, '_self');
                    }
                default:
                    toastr.error("Something Went Wrong");
                    break;
            }
        }
    }

    // if(window.location.host == mainLink){
    //     window.open("https://mumbai.sfanow.in","_self")
    // }

    if (window.location.host == mainLink && $.jStorage.get("sfaCity") == null) {
        if (window.location.pathname != '/') {
            if (window.location.pathname != '/contact' && window.location.pathname != '/about-us') {
                $state.go('home');
            }
        } else {
            $scope.hideBlink = true;
            if ($state.current.name == 'home') {
                $uibModal.open({
                    animation: true,
                    scope: $scope,
                    backdrop: 'static',
                    backdropClass: 'blackOut',
                    keyboard: false,
                    templateUrl: "views/modal/city-video.html",
                    size: 'md',
                    windowClass: 'sfacity-selectmodal'
                });
            }
            // window.open("https://hyderabad.sfanow.in", "_self");
            // window.open("https://mumbai.sfanow.in", "_self");
        }
        // if (window.location.pathname != '/') {
        //     $state.go('home');
        // } else {
        //     $scope.hideBlink = true;
        //     if ($state.current.name == 'home') {
        //         $uibModal.open({
        //             animation: true,
        //             scope: $scope,
        //             backdrop: 'static',
        //             backdropClass: 'blackOut',
        //             keyboard: false,
        //             templateUrl: "views/modal/city-video.html",
        //             size: 'md',
        //             windowClass: 'sfacity-selectmodal'
        //         });
        //     }
        // }
    } else if (window.location.host == mainLink && $.jStorage.get('sfaCity') != null) {
        if (window.location.pathname != '/') {
            if (window.location.pathname != '/contact' && window.location.pathname != '/about-us') {
                $state.go('home');
            }
        } else {
            // window.open("https://hyderabad.sfanow.in", "_self");
            // window.open("https://mumbai.sfanow.in", "_self");
            $.jStorage.flush();
            $scope.hideBlink = true;
            if ($state.current.name == 'home') {
                $uibModal.open({
                    animation: true,
                    scope: $scope,
                    backdrop: 'static',
                    backdropClass: 'blackOut',
                    keyboard: false,
                    templateUrl: "views/modal/city-video.html",
                    size: 'md',
                    windowClass: 'sfacity-selectmodal'
                });
            }
        }
    } else if (window.location.host != mainLink) {
        if (window.location.host == link1) {
            $scope.sfaCity = 'mumbai';
            NavigationService.setSfaCity($scope.sfaCity);
        } else if (window.location.host == link2) {
            $scope.sfaCity = 'hyderabad';
            NavigationService.setSfaCity($scope.sfaCity);
        } else if (window.location.host == link3) {
            $scope.sfaCity = 'ahmedabad';
            NavigationService.setSfaCity($scope.sfaCity);
        }
        $scope.hideBlink = false;
    } else {
        toastr.error("Something went wrong. Please reload and try again.")
    }

    if (window.location.host == link1) {
        $scope.selectedCity = 'mumbai';
    } else if (window.location.host == link2) {
        $scope.selectedCity = 'hyderabad';
    } else if (window.location.host == link3) {
        $scope.selectedCity = 'ahmedabad';
    }

    var a = window.location.host;
    $scope.infoEmail = [];

    if (a == 'localhost:8080') {
        $scope.infoEmail = [{
            'head': 'INFO LINE',
            'data1': '7045684365 / 66 / 022 65522221',
            'data2': '79811 75508 / 7045684367'
        }, {
            'head': 'EMAIL',
            'data1': 'info@sfanow.in'
        }, {
            'head': 'INFO LINE',
            'data1': '7045684367 / 79811 75508'
        }, {
            'head': 'EMAIL',
            'data1': 'info.hyd@sfanow.in'
        }];
    } else if (a == 'mumbai.sfanow.in') {
        $scope.infoEmail = [{
            'head': 'INFO LINE',
            'data1': '7045684365 / 7045684366',
            'data2': '8655585582'
        }, {
            'head': 'EMAIL',
            'data1': 'info@sfanow.in'
        }];
    } else if (a == 'hyderabad.sfanow.in') {
        $scope.infoEmail = [{
            'head': 'INFO LINE',
            'data1': '79811 75508 / +916303610871'
        }, {
            'head': 'EMAIL',
            'data1': 'info.hyd@sfanow.in'
        }];
    } else if (a == 'sfanow.in') {
        $scope.hide = true;
    }
    // For Mumbai: 7045684367 /
    //  FOr Hyderabad:  'data1': '7045684367 / 79811 75508'

    if (window.location.host == link1) {
        $scope.registerSchool = sublink1;
        $scope.registerCollege = sublink2;
    } else if (window.location.host == link2) {
        $scope.registerSchool = sublink3;
        $scope.registerCollege = sublink4;
    } else if (window.location.host == link3) {
        $scope.registerSchool = sublink5;
        $scope.registerCollege = sublink6;
    }
    $scope.eventYear = eventYear;
    $scope.variables = {};
    $scope.$watch('online', function (newStatus) {
        $scope.variables.online = $rootScope.online;
    });
});

firstApp.controller('footerctrl', function ($scope, TemplateService, $rootScope, NavigationService, errorService, toastr, $state, $uibModal, $rootScope) {
    $scope.template = TemplateService;
    $rootScope.year15 = year15;
    if ($state.current.name == 'home' || $state.current.name == 'champions' || $state.current.name == 'media-gallery' || $state.current.name == 'media-press' || $state.current.name == 'school-bio' || $state.current.name == 'school' || $state.current.name == 'school-profile' || $state.current.name == 'school-ranking' || $state.current.name == 'sport' || $state.current.name == 'student-bio' || $state.current.name == 'media-press-inside' || $state.current.name == 'media-gallery-inside' || $state.current.name == 'student-profile') {
        $rootScope.year16 = year16;
    } else {
        if ($state.current.name == '') {
            $rootScope.year16 = year16;
        } else {
            $rootScope.year16 = year18;
        }
    }
    if (window.location.host == link1) {
        $scope.selectedCity = 'mumbai';
    } else if (window.location.host == link2) {
        $scope.selectedCity = 'hyderabad';
    } else if (window.location.host == link3) {
        $scope.selectedCity = 'ahmedabad';
    }
    $scope.getSponsor = function () {
        if (window.location.host == link1) {
            $scope.url = sublink1 + '/api/SponsorPage/getAllBySponsorType';
        } else if (window.location.host == link2) {
            $scope.url = sublink3 + '/api/SponsorPage/getAllBySponsorType';
        } else if (window.location.host == link3) {
            $scope.url = sublink5 + '/api/SponsorPage/getAllBySponsorType';
        }
        NavigationService.getSponsor($scope.url, function (data) {
            console.log('Get Sponsor', data);
            $scope.sponsorData = data.data.data;
            console.log($scope.sponsorData, "console")
            _.each($scope.sponsorData, function (n) {
                if ($scope.selectedCity == 'mumbai') {
                    if (n._id === 'Sponsors') {
                        _.each(n.info, function (m) {
                            if (m.name == 'STORIA' || m.name == 'Storia' || m.name == 'storia') {
                                if (m.status === 'enable' && m.insidePage == "true") {
                                    $rootScope.storiaId = m._id;
                                }
                            }
                            if (m.name == 'ENERZAL' || m.name == 'Enerzal' || m.name == 'enerzal') {
                                if (m.status === 'enable' && m.insidePage == "true") {
                                    $rootScope.enerzalId = m._id;
                                }
                            }
                        });
                    }
                } else {
                    if (n._id === 'Sponsors & Partners') {
                        _.each(n.info, function (m) {
                            if (m.name == 'ENERZAL' || m.name == 'Enerzal' || m.name == 'enerzal') {
                                if (m.status === 'enable' && m.insidePage == "true") {
                                    $rootScope.enerzalId = m._id;
                                }
                            }
                        });
                    }
                }
            })
        });
    };
    $scope.getSponsor();

    $scope.goSponsor = function (data) {
        // console.log(data)
        if (data.insidePage === "true") {
            $state.go('individual-sponsor', {
                id: data._id
            })
        } else {
            // console.log("nothing")
        }
    };
    if (window.location.host == link1) {
        $scope.registerSchool = sublink1;
        $scope.registerCollege = sublink2;
    } else if (window.location.host == link2) {
        $scope.registerSchool = sublink3;
        $scope.registerCollege = sublink4;
    } else if (window.location.host == link3) {
        $scope.registerSchool = sublink5;
        $scope.registerCollege = sublink6;
    }
    $scope.eventYear = eventYear;

    $scope.games = // JavaScript Document
        [
            //     {
            //     "img": "img/footer/n1.jpg",
            //     "href": "http://madeofgreat.tatamotors.com/tiago/",
            //     "game": "Fantastico Partner"
            // },
            {
                "img": "img/footer/p4.jpg",
                "href": "",
                "game": "Energy Drink Partner"
            }
            // ,{
            //     "img": "img/footer/n2.jpg",
            //     "href": "",
            //     "game": "Smartphone Partner"
            // }, {
            //     "img": "img/footer/n9.png",
            //     "href": "",
            //     "game": "Radio Partner"
            // }, {
            //     "img": "img/footer/n11.png",
            //     "href": "",
            //     "game": "Health & Togetherness Partner"
            // }

            //  {
            //     "img": "img/footer/p7.jpg",
            //     "href": "",
            //     "game": "Media Partner "
            // }, {
            //     "img": "img/footer/n4.jpg",
            //     "href": "https://www.facebook.com/sportsillustratedindia/",
            //     "game": "Magazine Partner"
            // }
        ];
    $scope.partner = // JavaScript Document
        [{
            "img": "img/footer/n10.png",
            "href": "",
            "game": "Digital Parenting Partner"
        }, {
            "img": "img/footer/n12.png",
            "href": "https://mumbaischool.sfanow.in/individual-sponsor/5a0d06ff772e85299c1bca66",
            "game": "Sports Development Partner"
        }, {
            "img": "img/footer/p1.jpg",
            "href": "",
            "game": "Venue Partner"
        }, {
            "img": "img/footer/p6.jpg",
            "href": "",
            "game": "Hospital Partner"
        }, {
            "img": "img/footer/n13.png",
            "href": "",
            "game": "Goodwill Partner"
        }, {
            "img": "img/footer/n15.png",
            "href": "",
            "game": "Official Gaming Partner"
        }];
    // {
    //     "img": "img/footer/n14.png",
    //     "href": "",
    //     "game": "Online Promotional Partner"
    // },
    // {
    //     "img": "img/footer/na3.jpg",
    //     "href": "",
    //     "game": "Sports Surface Partner"
    // }, {
    //     "img": "img/footer/na6.jpg",
    //     "href": "",
    //     "game": "Sports Mentorship Partner"
    // }, {
    //     "img": "img/footer/na4.jpg",
    //     "href": "",
    //     "game": "Shooting Range Partner"
    // }, {
    //     "img": "img/footer/p5.jpg",
    //     "href": "",
    //     "game": "Medical Partner"
    // }, {
    //     "img": "img/footer/na5.jpg",
    //     "href": "",
    //     "game": "Event Partner"
    // }


    //  {
    //             "img": "img/footer/na1.jpg",
    //             "href": "",
    //             "game": "Sports Equipment Partner"
    //         }, {
    //             "img": "img/footer/na2.jpg",
    //             "href": "",
    //             "game": "Apparel Partner"
    //         },
    $scope.supportedBy = [{
        "img": "img/footer/hyd/government.png",
        "href": "",
        "game": "Government of Telangana"
    }, {
        "img": "img/footer/hyd/authority.png",
        "href": "",
        "game": "Under the aegis of SATS"
    }];
    // $scope.sponsor_partner = [{
    //     "img": "img/footer/hyd/enerzal.png",
    //     "href": "",
    //     "game": "Energy Drink Partner"
    // }, {
    //     "img": "img/footer/hyd/fever.png",
    //     "href": "",
    //     "game": "Radio Partner"
    // }, {
    //     "img": "img/footer/hyd/tv5.png",
    //     "href": "",
    //     "game": "News Channel Partner"
    // }, {
    //     "img": "img/footer/hyd/ibrand.png",
    //     "href": "",
    //     "game": "Marketing & Strategy Partner"
    // }, {
    //     "img": "img/footer/hyd/wizcraft.png",
    //     "href": "",
    //     "game": "Event Partner"
    // }, {
    //     "img": "img/footer/n12.png",
    //     "href": "",
    //     "game": "Sports Development Partner"
    // }];
    $scope.sponsor_partner = [{
        "img": "img/footer/n12.png",
        "href": "",
        "game": "Sports Development Partner"
    }, {
        "img": "img/footer/hyd/enerzal.png",
        "href": "",
        "game": "Energy Drink Partner"
    }, {
        "img": "img/footer/n15.png",
        "href": "",
        "game": "Official Gaming Partner"
    }, {
        "img": "img/footer/n10.png",
        "href": "",
        "game": "Digital Parenting Partner"
    }];
    // TV Support Partner

    // FOOTER SPORTS MUMBAI
    $scope.hyderabadFooter = [{
        name: 'archery'
    }, {
        name: 'athletics'
    }, {
        name: 'badminton'
    }, {
        name: 'basketball'
    }, {
        name: 'boxing'
    }, {
        name: 'carrom'
    }, {
        name: 'chess'
    }, {
        name: 'fencing'
    }, {
        name: 'football'
    }, {
        name: 'handball'
    }, {
        name: 'hockey'
    }, {
        name: 'judo'
    }, {
        name: 'kabaddi'
    }, {
        name: 'karate'
    }, {
        name: 'kho Kho'
    }, {
        name: 'skating'
    }, {
        name: 'shooting'
    }, {
        name: 'swimming'
    }, {
        name: 'table Tennis'
    }, {
        name: 'taekwondo'
    }, {
        name: 'tennis'
    }, {
        name: 'throwball'
    }, {
        name: 'volleyball'
    }, {
        name: 'water Polo'
    }]

    $scope.mumbaiFooter = [{
        name: 'archery'
    }, {
        name: 'athletics'
    }, {
        name: 'badminton'
    }, {
        name: 'basketball'
    }, {
        name: 'boxing'
    }, {
        name: 'carrom'
    }, {
        name: 'chess'
    }, {
        name: 'fencing'
    }, {
        name: 'football'
    }, {
        name: 'handball'
    }, {
        name: 'hockey'
    }, {
        name: 'judo'
    }, {
        name: 'kabaddi'
    }, {
        name: 'karate'
    }, {
        name: 'kho Kho'
    }, {
        name: 'sport MMA'
    }, {
        name: 'shooting'
    }, {
        name: 'squash'
    }, {
        name: 'swimming'
    }, {
        name: 'table Tennis'
    }, {
        name: 'taekwondo'
    }, {
        name: 'tennis'
    }, {
        name: 'throwball'
    }, {
        name: 'volleyball'
    }, {
        name: 'water Polo'
    }, {
        name: 'wrestling'
    }]
    // FOOTER SPORTS END

    // CHAMPIONS JOSN
    $scope.mumbaiChampion = [{
        name: 'school championship',
        champDetail: [{
            name: 'about championship',
            link: ''
        }, {
            name: 'register',
            link: ''
        }, {
            name: 'championship schedule',
            link: ''
        }, {
            name: 'faqs',
            link: ''
        }]
    }, {
        name: 'college championship',
        champDetail: [{
            name: 'register',
            link: ''
        }, {
            name: 'championship schedule',
            link: ''
        }, {
            name: 'faqs',
            link: ''
        }]
    }]
    // CHAMPIONS JOSN END

    // MUMBAI PROFILE
    $scope.sfaProfile = [{
        name: 'athletes',
        link: 'students'
    }, {
        name: 'school',
        link: 'school'
    }, {
        name: 'college',
        link: 'school'
    }, {
        name: 'teams',
        link: 'team'
    }]
    // MUMBAI PROFILE END
});

firstApp.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
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
});
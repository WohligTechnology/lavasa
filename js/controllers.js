angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.changeSlideClass = function(obj,index) {
          obj.class="active";
          console.log(index);
          for(var i=index-1,j=1;i>=0;i--) {
            $scope.games[i].class = "near-"+(j++);
          }
          for(var i=index+1,j=1;i<$scope.games.length;i++) {
            $scope.games[i].class = "near-"+(j++);
          }

        };

        $scope.games = // JavaScript Document
            [{
                "icon": "img/icon/blue/Table-tennis.png",
                "icon2": "img/icon/11_Table-Tennis.png",
                "url": "tabletennis",
                "game": "table tennis"
            }, {
                "icon": "img/icon/blue/Tennis.png",
                "icon2": "img/icon/10_Tennis.png",
                "url": "tennis",
                "game": "tennis"
            }, {
                "icon": "img/icon/blue/Badminton.png",
                "icon2": "img/icon/9_Badminton.png",
                "url": "badminton",
                "game": "badminton"
            },{
                "icon": "img/icon/blue/Handball.png",
                "icon2": "img/icon/1_Handball.png",
                "url": "handball",
                "game": "handball"
            }, {
                "icon": "img/icon/blue/Judo.png",
                "icon2": "img/icon/13_Judo.png",
                "url": "judo",
                "game": "judo"
            }, {
                "icon": "img/icon/blue/Squash.png",
                "icon2": "img/icon/12_Squash.png",
                "url": "squash",
                "game": "squash"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            },{
                "icon": "img/icon/blue/Volleyball.png",
                "icon2": "img/icon/3_Volleyball.png",
                "url": "volleyball",
                "game": "volleyball"
            }];

        $scope.mySlides = [
            'img/banner1.jpg',
            'img/banner2.jpg',
            'img/banner1.jpg',
            'img/banner2.jpg'
        ];

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
    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("about-us");
        $scope.menutitle = NavigationService.makeactive("About-Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('SwissCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("swiss");
        $scope.menutitle = NavigationService.makeactive("Swiss");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('MediaGalleryCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("media-gallery");
        $scope.menutitle = NavigationService.makeactive("Media Gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.flags = {};
        $scope.flags.openGallery = false;
        $scope.flag = {};
        $scope.flag.openGallerys = false;
        if($stateParams.name){
          console.log($stateParams);
          $scope.flags.openGallery = true
        }
        if($stateParams.name){
          console.log($stateParams);
          $scope.flag.openGallerys = true
        }
        $scope.tab = 'photos';
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


            }  else {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active-list";

            }
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

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("faq");
        $scope.menutitle = NavigationService.makeactive("Faq");
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

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('RegistrationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("Registration");
        $scope.menutitle = NavigationService.makeactive("Registration");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("terms-condition");
        $scope.menutitle = NavigationService.makeactive("Terms Condition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('TraininDevelopmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("training-development");
        $scope.menutitle = NavigationService.makeactive("Training Development");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

.controller('DrawCtrl', function($scope, TemplateService, NavigationService, $timeout) {

    $scope.template = TemplateService.changecontent("draw");
    $scope.menutitle = NavigationService.makeactive("Draw");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.tabs = 'round1';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.classf = '';
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

})

.controller('StudentBioCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("student-bio");
    $scope.menutitle = NavigationService.makeactive("Student Bio");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
})

.controller('SportCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
  console.log("FUCK THIS SHIT");
    $scope.template = TemplateService.changecontent("sport");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
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
    $scope.getSport = function () {
      NavigationService.getSportRuleByName($stateParams,function (response) {
        if(response.value){
          $scope.sport = response.data;
        }else{

        }
      });
    };
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
    $scope.photos = [
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg',
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg'

    ];
})

.controller('SchoolBioCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file


    $scope.template = TemplateService.changecontent("school-bio");
    $scope.menutitle = NavigationService.makeactive("School Bio");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



    $scope.photos = [
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg',
        'img/m1.jpg',
        'img/m2.jpg',
        'img/m3.jpg'

    ];

    $scope.open = function(size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/sports.html',
            controller: 'SchoolBioCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
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

    $scope.student = [{
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "sports head"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "sports head"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "sports head"
    }, {
        icon: "img/sf-student-profile.png",
        name: "Harshit Shah",
        dep: "sports head"
    }];
})

.controller('SchoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school");
    $scope.menutitle = NavigationService.makeactive("School");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.search = {};
    $scope.search.active = false;
    $scope.filter= {};

    // $scope.school = [{
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "1"
    // }, {
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "2"
    // }, {
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "3"
    // }, {
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "4"
    // }, {
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "19"
    // }, {
    //     img: "img/sf-school.png",
    //     name: "Dhirubhai Ambani Intertional School",
    //     rank: "20"
    // }];
    $scope.pagination= {};
    $scope.pagination.pagesize = 20;
    $scope.getMoreSchools = function() {
        NavigationService.getFirstListSchool(function(data) {
            if (data.value !== false) {
                $scope.getFirstList = data.data.data;
                console.log('$scope.getFirstList', $scope.getFirstList);
                $scope.count = data.data.count;
            } else {
                $scope.getFirstList = [];
            }
        });
    };
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
    };
    $scope.submitSearch = function () {
      if($scope.search.active){
        console.log("its searching");
        NavigationService.schoolSearch($scope.filter,function (data) {
          console.log(data);
          if(data.value){
            $scope.schools =data.data.data;
            $scope.pagination.totalpages = data.data.totalpages;
            $scope.pagination.total = data.data.total;
          }
        });
      }else{
        NavigationService.getFirstListSchool(function(data) {
          if (data.value != false) {
              $scope.topschools = data.data.data;
              $scope.count = data.data.count;
          } else {
              $scope.getFirstList = [];
          }
      });
      }
    };
    $scope.submitSearch();
})

.controller('SchoolProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school-profile");
    $scope.menutitle = NavigationService.makeactive("School Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.callObject = {};
    var year = new Date();
    $scope.callObject._id = $stateParams.id;
    $scope.callObject.year = year.getFullYear().toString();
    $scope.callObject.gender = "All";
    $scope.callObject.agegroup = "All";
    console.log($scope.callObject);
    $scope.allYears = NavigationService.getAllYears();
    $scope.gender = [{
        value: "All",
        name: "All"
    }, {
        value: "Boys",
        name: "Male"
    }, {
        value: "Girls",
        name: "Female"
    }];
    $scope.tab = 'player';
    $scope.classa = 'active-list';
    $scope.classb = '';
    $scope.classc = '';
    $scope.callReload = function() {
        NavigationService.filterStud($scope.callObject, function(data) {
            console.log(data.data);
            if (data.value != false) {
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
        console.log(data.data);
        $scope.getSchoolProfile = data.data;
        $scope.schoolSports = data.data.sports;
    });
    NavigationService.getAgegroup(function(data) {
        data.data.unshift({
            _id: "All",
            name: "All"
        });
        $scope.agegroup = data.data;
    });
    $scope.callReload();
})

.controller('StudentsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("students");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // $scope.student = [{
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }, {
    //     icon: "img/sf-student-profile.png",
    //     name: "Harshit Shah",
    //     dep: "45211"
    // }];
    NavigationService.countStudent(function(data) {
        $scope.count = data.data;
    });
    $scope.getsearch = false;
    $scope.searchFilter = {};
    $scope.searchFilter.pagenumber = 1;
    $scope.searchFilter.pagesize = 9;
    $scope.searchFilter.search = "";
    $scope.doSearch = function() {
        if ($scope.searchFilter.search == '') {
            $scope.getsearch = false;
        } else {
            $scope.getsearch = true;
            NavigationService.getSearchDataStudent($scope.searchFilter, function(data) {
                console.log($scope.searchFilter);
                $scope.getSearchData = data.data.data;
            });
        }
    }
})

.controller('StudentProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("student-profile");
    $scope.menutitle = NavigationService.makeactive("Student Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.studentProfile = {};
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
    NavigationService.getStudentProfile($stateParams.id, function(data) {
        console.log(data);
        $scope.studentProfile = data.data;
        if ($scope.studentProfile.gender == "Boys") {
            $scope.studentProfile.gender = "Male";
        } else {
            $scope.studentProfile.gender = "Female";
        }
    });
})

.controller('HeatsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("heats");
        $scope.menutitle = NavigationService.makeactive("Heats");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
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

    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("team");
        $scope.menutitle = NavigationService.makeactive("Team");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.student = [{
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }, {
            icon: "img/sf-icon-big.png",
            sport: "basketball | girls u-17 ‘A’",
            school: "dhirubhai ambani intertional school",
            id: "586"
        }];

    })

.controller('QualifyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("qualify");
        $scope.menutitle = NavigationService.makeactive("Qualify");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
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

    })
    .controller('TeamDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("team-detail");
        $scope.menutitle = NavigationService.makeactive("Team Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

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

    })

.controller('RoundRobinCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("round-robin");
    $scope.menutitle = NavigationService.makeactive("Round Robin");
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

})

.controller('KnockoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("knockout");
    $scope.menutitle = NavigationService.makeactive("Knockout");
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

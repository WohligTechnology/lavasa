angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
    })
.controller('SchoolBioCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("school-bio");
        $scope.menutitle = NavigationService.makeactive("School-Bio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('SchoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("school");
        $scope.menutitle = NavigationService.makeactive("School");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.school = [{
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "1"
        }, {
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "2"
        }, {
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "3"
        }, {
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "4"
        }, {
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "19"
        }, {
            img: "img/sf-school.png",
            name: "Dhirubhai Ambani Intertional School",
            rank: "20"
        }];
    })
    .controller('SchoolProfileCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("school-profile");
        $scope.menutitle = NavigationService.makeactive("School-Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.tab = 'player';
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
         } else if (a == 2){

             $scope.classa = '';
             $scope.classb = "active-list";
             $scope.classc = "";
         }
          else {

             $scope.classa = '';
             $scope.classb = '';
             $scope.classc = "active-list";
         }
     };

        $scope.games = [{
            icon: "img/sf-icon.png",
            icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }, {
          icon: "img/sf-icon.png",
          icon2: "img/sf-icon-big.png",
            name: "Table Tennis"
        }];
        $scope.student = [{
            icon: "img/sf-student-profile.png",
            name: "Harshit Shah",
            id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }, {
          icon: "img/sf-student-profile.png",
          name: "Harshit Shah",
          id: "45211"
        }];
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
    .controller('StudentsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("students");
        $scope.menutitle = NavigationService.makeactive("Students");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

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

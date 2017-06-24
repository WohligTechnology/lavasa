// JavaScript Document
var firstApp = angular.module('firstApp', [
    'ui.select',
    'ui.router',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    'ui.date',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'angular-loading-bar',
    'ordinal',
    'wt.responsive',
    'toastr',
    'infinite-scroll',
    'angularPromiseButtons'

]);

firstApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
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




        //SPORTS REGISTRATION MODULE

        .state('sports-registration', {
            url: "/sports-registration",
            templateUrl: "views/template.html",
            controller: 'SportsRegistrationCtrl'
        })

        .state('forgot-password', {
            url: "/forgot-password",
            templateUrl: "views/template.html",
            controller: 'ForgotPasswordCtrl'
        })

        .state('change-password', {
            url: "/change-password",
            templateUrl: "views/template.html",
            controller: 'ChangePasswordCtrl'
        })

        .state('sports-rules', {
            url: "/sports-rules/:id",
            templateUrl: "views/template.html",
            controller: 'SportsRulesCtrl'
        })

        .state('sports-congrats', {
            url: "/sports-congrats",
            templateUrl: "views/template.html",
            controller: 'SportsCongratsCtrl'
        })

        .state('sports-selection', {
            url: "/sports-selection",
            templateUrl: "views/template.html",
            controller: 'SportsSelectionCtrl'
        })

        .state('team-selection', {
            url: "/team-selection/:id",
            templateUrl: "views/template.html",
            controller: 'TeamSelectionCtrl'
        })

        .state('individual-selection', {
            url: "/individual-selection/:id",
            templateUrl: "views/template.html",
            controller: 'IndividualSelectionCtrl'
        })

        .state('confirmteam', {
            url: "/confirmteam",
            templateUrl: "views/template.html",
            controller: 'ConfirmTeamCtrl'
        })
        .state('confirm-individual', {
            url: "/confirm-individual",
            templateUrl: "views/template.html",
            controller: 'ConfirmIndividualCtrl'
        })
        .state('confirm-fencing', {
            url: "/confirm-fencing",
            templateUrl: "views/template.html",
            controller: 'ConfirmFencingCtrl'
        })
        .state('confirm-karate', {
            url: "/confirm-karate",
            templateUrl: "views/template.html",
            controller: 'ConfirmKarateCtrl'
        })
        .state('confirm-relay', {
            url: "/confirm-relay",
            templateUrl: "views/template.html",
            controller: 'ConfirmRelayCtrl'
        })
        .state('confirm-athleteswim', {
            url: "/confirm-athleteswim",
            templateUrl: "views/template.html",
            controller: 'ConfirmAthSwmCtrl'
        });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isProduction);
});

firstApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
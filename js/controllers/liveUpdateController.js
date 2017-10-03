firstApp.controller('LiveUpdatesCtrl', function($scope, $stateParams, $location, TemplateService, NavigationService, $timeout, toastr, $state, $uibModal) {
  $scope.template = TemplateService.changecontent("liveupdates");
  $scope.menutitle = NavigationService.makeactive("Live Updates");
  TemplateService.header = "views/header2.html";
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  // BANNER SWIPER INIT
  $scope.initSwiper = function() {
      $scope.$on('$viewContentLoaded', function() {
              $timeout(function() {
                  var liveupdateBanner = new Swiper('.liveupdate-bannerswiper .swiper-container', {
                      slidesPerView: 1,
                      direction: 'horizontal',
                      loop: true,
                      grabCursor: true,
                      nextButton: '.liveupdate-bannernext',
                      prevButton: '.liveupdate-bannerprev',
                      touchEventsTarget: 'container',
                  })
              }, 300);
          });
      };
      $scope.initSwiper();
      // BANNER SWIPER INIT END

      // JSONS
      // SCHOOL RANKING TABLE
      $scope.rankTable = [{
        rank: 1,
        school: 'jamnabai high school jamnabai high school',
        goldPoints: 20,
        silverPoints: 20,
        bronzePoints: 20,
        totalPoints: 200,
        details: [{
          name: 'Athletics',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Archery ',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Badminton',
          gold: 2,
          silver: 2,
          bronze: 2
        }]
      },{
        rank: 2,
        school: 'jamnabai high school',
        goldPoints: 20,
        silverPoints: 20,
        bronzePoints: 20,
        totalPoints: 200,
        details: [{
          name: 'Athletics',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Archery ',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Badminton',
          gold: 2,
          silver: 2,
          bronze: 2
        }]
      },{
        rank: 3,
        school: 'jamnabai high school',
        goldPoints: 20,
        silverPoints: 20,
        bronzePoints: 20,
        totalPoints: 200,
        details: [{
          name: 'Athletics',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Archery ',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Badminton',
          gold: 2,
          silver: 2,
          bronze: 2
        }]
      },{
        rank: 4,
        school: 'jamnabai high school',
        goldPoints: 20,
        silverPoints: 20,
        bronzePoints: 20,
        totalPoints: 200,
        details: [{
          name: 'Athletics',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Archery ',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Badminton',
          gold: 2,
          silver: 2,
          bronze: 2
        }]
      },{
        rank: 5,
        school: 'jamnabai high school',
        goldPoints: 20,
        silverPoints: 20,
        bronzePoints: 20,
        totalPoints: 200,
        details: [{
          name: 'Athletics',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Archery ',
          gold: 2,
          silver: 2,
          bronze: 2
        },{
          name: 'Badminton',
          gold: 2,
          silver: 2,
          bronze: 2
        }]
      }];
      // SCHOOL RANKING TABLE END
      // JSONS END
});

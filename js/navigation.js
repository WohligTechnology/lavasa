var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";


var imgpath2 = adminurl2 + "upload/readFile";
var uploadurl2 = adminurl2 + "upload/";
var currentYears = ["2015", "2016"];
var navigationservice = angular.module('navigationservice', [])

    .factory('NavigationService', function ($http, $window) {
        var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }];

        return {

            getnav: function () {
                return navigation;
            },
            makeactive: function (menuname) {
                for (var i = 0; i < navigation.length; i++) {
                    if (navigation[i].name == menuname) {
                        navigation[i].classis = "active";
                    } else {
                        navigation[i].classis = "";
                    }
                }
                return menuname;
            },
            getAllYears: function () {
                return currentYears;
            },
            getAllBanner: function (callback) {
                $http({
                    url: adminurl + 'banner/getAll',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getAllBanner: function (callback) {
                $http({
                    url: adminurl + 'banner/getAll',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getAllEnabledBanner: function (callback) {
                $http({
                    url: adminurl + 'banner/getAllEnabledBanner',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getFirstListSchool: function (request, callback) {
                $http({
                    url: adminurl + 'school/getFirstList',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getAllSchoolRank: function (request, callback) {
                $http({
                    url: adminurl + 'school/getAllSchoolRank',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(function (data) {
                    data.data = _.filter(data.data, function (n) {
                        return n._id != "585764172f6a2920432518fb";
                    });
                    var ranks = _.map(data.data, function (n) {
                        n.points = (n.gold * 5) + (n.silver * 3) + (n.bronze * 2);
                        return n;
                    });
                    ranks = _.orderBy(ranks, ['points', 'gold', "silver", "bronze"], ["desc", 'desc', 'desc', 'desc']);
                    ranks = _.map(ranks, function (n, key) {
                        n.rank = key + 1;
                        return n;
                    });
                    callback(ranks);
                });
            },
            getSearchDataSchool: function (input, callback) {
                $http({
                    url: adminurl + 'school/searchSchool',
                    method: 'POST',
                    withCredentials: true,
                    data: input
                }).success(callback);
            },
            getDrawUpdatedSports: function (request, callback) {
                $http({
                    url: adminurl + 'StudentStats/getDrawUpdatedSports',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getLeagueKnockout: function (request, callback) {
                $http({
                    url: adminurl + 'leagueknockout/getAll',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getQualifyingRound: function (request, callback) {
                $http({
                    url: adminurl + 'qualifyinground/getAll',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getSearchDataStudent: function (input, i, callback) {
                $http({
                    url: adminurl + 'student/searchStudent',
                    method: 'POST',
                    withCredentials: true,
                    data: input
                }).success(function (data) {
                    callback(data, i);
                });
            },
            resultDispatcher: function (drawFormat) {
                switch (drawFormat) {
                    case 'Knockout':
                        return 'draw';
                    case 'League':
                        return 'round-robin';
                    case 'League cum Knockout':
                        return 'league-knockout';
                    case 'Heats':
                        return 'heats';
                    case 'Qualifying Round':
                        return 'qualify';
                    case 'Swiss League':
                        return 'draw';
                }
            },
            getSearchDataTeam: function (input, i, callback) {
                $http({
                    url: adminurl + 'team/searchTeam',
                    method: 'POST',
                    withCredentials: true,
                    data: input
                }).success(function (data) {
                    callback(data, i);
                });
            },
            getSchoolProfile: function (id, callback) {
                $http({
                    url: adminurl + 'school/getOne',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        "_id": id
                    }
                }).success(callback);
            },
            getOneSportForResult: function (request, callback) {
                $http({
                    url: adminurl + 'sport/getOneSportForResult',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getOneSport: function (request, callback) {
                $http({
                    url: adminurl + 'sport/getOne',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getOnePopulated: function (id, callback) {
                $http({
                    url: adminurl + 'school/getOnePopulated',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        "_id": id
                    }
                }).success(callback);
            },
            contingentStrengthByYear: function (request, callback) {
                $http({
                    url: adminurl + 'school/contingentStrengthByYear',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getSchoolByYear: function (request, callback) {
                console.log('form data: ', request);
                $http({
                    url: adminurl + 'school/getSchoolByYear',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getSportRuleByName: function (request, callback) {
                $http({
                    url: adminurl + 'sportrule/getOneByName',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getAllSportList: function (callback) {
                $http({
                    url: adminurl + 'sportsList/getAll',
                    method: 'POST',
                    withCredentials: true
                }).success(callback);
            },
            getOneBySportId: function (request, callback) {
                $http({
                    url: adminurl + 'sportrule/getOneBySportId',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStudentProfile: function (id, callback) {
                $http({
                    url: adminurl + 'student/getOne',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        "_id": id
                    }
                }).success(callback);
            },
            editStudent: function (request, callback) {
                $http({
                    url: adminurl + 'student/editStudent',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getTeamDetail: function (id, callback) {
                $http({
                    url: adminurl + 'team/getOne',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        "_id": id
                    }
                }).success(callback);
            },
            schoolSearch: function (request, i, callback) {
                $http({
                    url: adminurl + 'school/getLimited',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(function (data) {
                    callback(data, i);
                });
            },
            getSchoolSportByGender: function (request, callback) {
                $http({
                    url: adminurl + 'studentsport/getSchoolSportByGender',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStudentSport: function (request, callback) {
                $http({
                    url: adminurl + 'studentsport/getsportspopulated',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            forFormSearch: function (request, i, callback) {
                $http({
                    url: adminurl + 'student/forFormSearch',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(function (data) {
                    callback(data, i);
                });
            },
            forFormSearchSchool: function (request, i, callback) {
                $http({
                    url: adminurl + 'school/getLimitedSchool',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(function (data) {
                    callback(data, i);
                });
            },
            getSchoolMedalCount: function (request, callback) {
                $http({
                    url: adminurl + 'medal/countOneSchoolMedal',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStudentMedalCount: function (request, callback) {
                //console.log('request data: ', request);
                $http({
                    url: adminurl + 'medal/countOneStudentMedal',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getWinners: function (request, callback) {
                //console.log('request data: ', request);
                $http({
                    url: adminurl + 'medal/getMedalsBySport',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStatsForStudent: function (request, callback) {
                //console.log('request data: ', request);
                $http({
                    url: adminurl + 'studentstats/getStudentStatByFilters',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStatsForSchool: function (request, callback) {
                //console.log('request data: ', request);
                $http({
                    url: adminurl + 'studentstats/getSchoolStatByFilters',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getStatsForTeam: function (request, callback) {
                //console.log('request data: ', request);
                $http({
                    url: adminurl + 'studentstats/getTeamStatByFilters',
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            getAgegroup: function (callback) {
                $http({
                    url: adminurl + 'agegroup/getAll',
                    method: 'POST'
                }).success(callback);
            },
            countStudent: function (callback) {
                $http({
                    url: adminurl + 'student/countStudent',
                    method: 'POST'
                }).success(callback);
            },
            countTeam: function (callback) {
                $http({
                    url: adminurl + 'team/countTeam',
                    method: 'POST'
                }).success(callback);
            },
            filterStud: function (data, callback) {
                $http({
                    url: adminurl + 'school/filterStud',
                    method: 'POST',
                    data: data
                }).success(callback);
            },
            filterCategoryBySport: function (request, callback) {
                $http({
                    url: adminurl + 'sport/filterCategoryForFrontend',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            filterCategoryForFrontendGender: function (request, callback) {
                $http({
                    url: adminurl + 'sport/filterCategoryForFrontendGender',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            filterAgegroupBySport: function (request, callback) {
                $http({
                    url: adminurl + 'sport/filterAgegroupForFrontend',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getFolders: function (request, callback) {
                $http({
                    url: adminurl + 'media/getFolders',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getSportRoundKnockout: function (request, callback) {
                $http({
                    url: adminurl + 'knockout/getSportRoundKnockout',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getSportRoundHeat: function (request, callback) {
                $http({
                    url: adminurl + 'heat/getSportRoundHeat',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getSchoolName: function (request, callback) {
                $http({
                    url: adminurl2 + 'school/getAllSchoolDetails',
                    method: 'POST',
                    data: request
                }).success(callback);
            },

            getSchoolSFA: function (request, callback) {
                $http({
                    url: adminurl2 + 'school/search',
                    method: 'POST',
                    data: {
                        keyword: request
                    },
                }).success(callback);
            },


            getAtheleteSFA: function (request, callback) {
                $http({
                    url: adminurl2 + 'student/search',
                    method: 'POST',
                    data: {
                        keyword: request
                    },
                }).success(callback);
            },

            apiCallWithData: function (url, formData, callback) {
                console.log("inside nav");
                $http.post(adminurl2 + url, formData).then(function (data) {
                    data = data.data;
                    callback(data);

                });
            },


            getSportRoundLeague: function (request, callback) {
                $http({
                    url: adminurl + 'league/getSportRoundLeague',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            getMedal: function (formData, callback) {
                $http.post(adminurl + 'medal/getStudentMedal', formData).success(callback);
            },
            pdfGenerate: function (formData, callback) {
                $http.post(adminurl + 'student/generatePdf', formData).then(function (data) {
                    data = data.data;
                    console.log("THE PDF ARRAY", data.data);
                    _.each(data.data, function (n) {
                        window.open(n);

                    });

                    // console.log(callback);
                    // console.log("URLURL NS", data.url);
                    // window.open(data.url);
                });
                // console.log(callback);
                //   $window.open(data.url);
            },
            getLimitedMedia: function (request, callback) {
                $http({
                    url: adminurl + 'media/getLimitedMedia',
                    method: 'POST',
                    data: request
                }).success(callback);
            },

            //Sports Registration api calling
             login: function (request, callback) {
                $http({
                    url: adminurl2 + 'login/login',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            //logout api calling
             logout: function (request,callback) {
                 $.jStorage.flush();
               $http({
                    url: adminurl2 + 'login/logout',
                    method: 'POST',
                    data: request
                }).success(callback);
            },
            //Set Jstorage for User
            setUser: function (data) {
                $.jStorage.set("userDetails", data);
            },
            setUserType: function (data) {
                $.jStorage.set("userType", data);
            },
            //Forgot password api calling
             forgotPassword: function (request,url, callback) {
                $http({
                    url: adminurl2 + url,
                    method: 'POST',
                    withCredentials: true,
                    data: request
                }).success(callback);
            },
            //Change password api calling
             changePassword: function (request, callback) {
                $http({
                    url: adminurl2 + 'login/changePassword',
                    method: 'POST',
                    data: request
                }).success(callback);
            }
        };
    });

// var adminURL = "";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }


// var adminurl = "http://104.154.89.21:83/api/";
// var adminurl = "http://localhost:1337/";
var adminurl = "http://104.155.129.33:83/api/";
// var adminurl = "http://192.168.0.107:1337/api/";
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";
var currentYears = ["2015", "2016"];
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        getAllYears: function() {
            return currentYears;
        },
        getAllBanner : function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'banner/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getFirstListSchool: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/getFirstList',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getSearchDataSchool: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/searchSchool',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        getSearchDataStudent: function(input, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'student/searchStudent',
                method: 'POST',
                withCredentials: true,
                data: input
            }).success(callback);
        },
        getSchoolProfile: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        getSportRuleByName: function(name, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'sportrule/getOneByName',
                method: 'POST',
                withCredentials: true,
                data: {
                    "name": name
                }
            }).success(callback);
        },
        getAllSportList: function(request, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'sportsList/getAll',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getStudentProfile: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'student/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        schoolSearch: function(request, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/getLimited',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getSchoolSportByGender: function(request, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'studentsport/getSchoolSportByGender',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getStudentSport: function(request, callback) {
            console.log('request data: ', request);
            $http({
                url: adminurl + 'studentsport/getsportspopulated',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getAgegroup: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'agegroup/getAll',
                method: 'POST'
            }).success(callback);
        },
        countStudent: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'student/countStudent',
                method: 'POST'
            }).success(callback);
        },
        filterStud: function(data, callback) {
            $http({
                url: adminurl + 'school/filterStud',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getFolders: function(request, callback) {
            $http({
                url: adminurl + 'media/getFolders',
                method: 'POST',
                data: request
            }).success(callback);
        },
        getLimitedMedia: function(request, callback) {
            $http({
                url: adminurl + 'media/getLimitedMedia',
                method: 'POST',
                data: request
            }).success(callback);
        }
    };
});

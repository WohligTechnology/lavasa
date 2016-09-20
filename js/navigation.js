// var adminURL = "";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }


// var adminurl = "http://104.154.89.21:83/api/";
// var adminurl = "http://localhost:1337/";
var adminurl = "http://192.168.0.108:1337/api/";
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
        getSportRuleByName: function(request, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'sportrule/getOneByName',
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
        }
    };
});

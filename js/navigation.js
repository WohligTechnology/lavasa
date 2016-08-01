// var adminURL = "";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }


var adminurl = "http://192.168.1.119:84/";
var imgurl = "http://192.168.1.119:84/upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

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
        getFirstList: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/getFirstList',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getSearchData: function(input,callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'school/searchSchool',
                method: 'POST',
                withCredentials: true,
                data:input
            }).success(callback);
        },
        getSchoolProfile: function(id,callback) {
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

    };
});

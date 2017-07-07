firstApp.filter('ageYearFilter', function () {
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - new Date(birthday).getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
        if (birthdate) {
            return calculateAge(birthdate);
        } else {
            return '-';
        }
    };
});

firstApp.filter('uploadpath', function () {
    return function (input, width, height, style) {
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgPath + "?file=" + input + other;
            } else {
                return input;
            }
        }
    };
});

firstApp.filter('letterLimit', function () {
    return function (value, limit) {
        if (value) {
            if (value.length < limit) {
                return value;
            } else {
                return value.slice(0, limit - 2) + "..";
            }
        } else {
            return "";
        }
    };
});

firstApp.filter('removeSchool', function () {
    return function (value, school) {
        if (value) {
            return value.replace(school + " ", "");
        } else {
            return "";
        }
    };
});

firstApp.filter('knockoutRoundName', function () {
    return function (value) {
        if (value) {
            return value.substring(value.indexOf(' ') + 1);
        } else {
            return "";
        }
    };
});

firstApp.filter('mediapath', function () {
    return function (value) {
        if (value) {
            return "https://storage.googleapis.com/sportsforall/media%26gallery/" + value;
        } else {
            return "";
        }
    };
});

firstApp.filter('videothumbnail', function () {
    return function (value) {
        if (value) {
            return "http://img.youtube.com/vi/" + value + "/hqdefault.jpg";
        } else {
            return "";
        }
    };
});

firstApp.filter('lessthan10', function () {
    return function (value) {
        if (value) {
            if (value < 10) {
                return "0" + value;
            } else {
                return value;
            }
        } else {
            return "00";
        }
    };
});

firstApp.filter('ageFilter', function () {
    return function (birthdate) { // birthday is a date
        var birth = _.clone(birthdate);
        if (birth) {
            if (new Date(birth) > new Date(2011, 1, 1)) {
                return 'U-6';
            } else if (new Date(birth) > new Date(2010, 1, 1)) {
                return 'U-7';
            } else if (new Date(birth) > new Date(2009, 1, 1)) {
                return 'U-8';
            } else if (new Date(birth) > new Date(2008, 1, 1)) {
                return 'U-9';
            } else if (new Date(birth) > new Date(2007, 1, 1)) {
                return 'U-10';
            } else if (new Date(birth) > new Date(2006, 1, 1)) {
                return 'U-11';
            } else if (new Date(birth) > new Date(2005, 1, 1)) {
                return 'U-12';
            } else if (new Date(birth) > new Date(2004, 1, 1)) {
                return 'U-13';
            } else if (new Date(birth) > new Date(2003, 1, 1)) {
                return 'U-14';
            } else if (new Date(birth) > new Date(2002, 1, 1)) {
                return 'U-15';
            } else if (new Date(birth) > new Date(2001, 1, 1)) {
                return 'U-16';
            } else if (new Date(birth) > new Date(2000, 1, 1)) {
                return 'U-17';
            } else if (new Date(birth) > new Date(1999, 1, 1)) {
                return 'U-18';
            } else if (new Date(birth) > new Date(1998, 1, 1)) {
                return 'U-19';
            } else {
                return "";
            }
        }
    };
});

firstApp.filter('rawHtml', ['$sce',
    function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
]);

firstApp.filter('englishNumeralDate', function () {
    return function (value) {
        if (value) {
            return moment(new Date(value)).format("Do MMMM YYYY");
        }
    };
});

firstApp.filter('serverimage', function () {
    return function (image) {
        if (image && image !== null) {
            console.log("adminUrl--", adminUrl);
            return adminUrl + "upload/readFile?file=" + image;
        } else {
            return undefined;
        }
    };
});

firstApp.filter('serverimage2', function () {
    return function (image, width, height, style) {
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (image && image !== null) {
            console.log("adminUrl--", adminUrl);
            return adminUrl2 + "upload/readFile?file=" + image + other;
        } else {
            return undefined;
        }
    };
});

firstApp.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});

firstApp.filter('tp', function () {
    return function (items) {
        return _.filter(items, ['val', true]);
    };
});

firstApp.filter('firstcapitalize', function () {
    return function (input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});
firstApp.filter('shorten', function () {
    return function (value, limit) {
        if (value)
            if (value.length < limit) {
                return value;
            } else {
                return value.slice(0, limit) + "...";

            }

    };
});

firstApp.filter('formatEvent', function () {
    return function (age, event) {
        return age + '-' + event;
    };
});

firstApp.filter('isValidSelection', function () {
    return function (age, event) {
        return age + '-' + event;
    };
});
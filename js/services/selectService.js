firstApp.service('selectService', function ($http, TemplateService, $state, toastr, NavigationService, loginService, errorService) {

    this.team = [];
    this.detail = null;
    this.sportsId = null; // Req in api For sending data at backend eg:5864..69
    this.gender = null; // fOR confirm-team
    this.ageGroup = null; // for confirm-team eg:U-12, U-8
    this.redirectTo = null; // not in used now
    this.sportName = null; // for biforcating columns based on sportName
    this.sportType = null; // eg:F,K,AAS,ST,I
    this.isValidForm = true;
    this.showMissingFields = false;

    this.initialFun = function () {
        loginService.loginGet(function (data) {
            detail = data;
        });
        if (detail.userType === 'athlete') {
            this.gender = detail.gender;
        } else {
            this.gender = 'male';
        }
    };


    //make .checked to true if already selected
    this.isAtheleteSelected = function (listOfAthlete, team) {
        var temp = _.intersectionBy(listOfAthlete, this.team, '_id');
        _.each(temp, function (n) {
            n.checked = true;
        });
        return listOfAthlete;
    };
    // push to Team
    this.pushToTeam = function (obj, bool, listOfAthlete, events) {
        var confirmPageKey = $.jStorage.get("confirmPageKey");
        //check if added or not and do it accordingly
        if (bool) {
            //add athelete
            if (obj.isTeamSelected) {
                toastr.error('This Player has already been Selected');
            } else if (obj.isIndividualSelected) {
                toastr.error('This Player has already been Registered');
            } else {
                //get Data for columns accordingly eg:ageGroup
                obj = this.getAgeGroupByAthelete(obj, confirmPageKey, events);
                this.team.push(obj);
                console.log("sport in obj", obj.sport);
            }
        } else {
            //remove athelete
            _.remove(this.team, function (n) {
                return n._id == obj._id;
            });
            var temp = _.find(listOfAthlete, ['_id', obj._id]);
            temp.checked = false;
        }
    };

    this.getAgeGroupByAthelete = function (athelete, confirmPageKey, events) {
        var birthdate = moment(athelete.dob);
        var st = this.sportName;

        //ageGroup and weights are calculated
        function getAgeGroups(events) {
            var event = _.cloneDeep(events);
            _.each(event, function (i, key) {
                i.data = _.filter(i.data, function (j) {
                    var startDate = moment(j.fromAge);
                    var endDate = moment(j.toAge);
                    console.log(birthdate.isBetween(startDate, endDate));
                    if ((j.gender == athelete.gender) && birthdate.isBetween(startDate, endDate)) {
                        return true;
                    } else {
                        return false;
                    }
                });
                console.log("event h bhai", i.data);
            });
            event = _.reject(event, function (n) {
                return n.data.length == 0;
            });
            return event;
        }

        // for kata and kumite
        function filterEventWise(events) {
            var kata = _.cloneDeep(events);
            var kumite = _.cloneDeep(events);

            // kata
            _.each(kata, function (n, i) {
                n.data = _.filter(n.data, ['eventName', 'Kata']);
            });
            athelete.eventKata = getAgeGroups(kata);

            // kumite
            _.each(kumite, function (n, i) {
                n.data = _.filter(n.data, ['eventName', 'Kumite']);
            });
            athelete.eventKumite = getAgeGroups(kumite);
            athelete.sport = [];
            athelete.eventKata.unshift({
                '_id': 'Opt Out',
                'data': [{
                    'sport': null
                }]
            });
            athelete.eventKumite.unshift({
                '_id': 'Opt Out',
                'data': [{
                    'sport': null
                }]
            });

            return athelete;
        }

        // for fencing
        function filterFencing(events) {
            var epee = _.cloneDeep(events);
            var sabre = _.cloneDeep(events);
            var foil = _.cloneDeep(events);

            //epee
            _.each(epee, function (n, i) {
                n.data = _.filter(n.data, ['eventName', 'Epee']);
            });
            athelete.eventEpee = getAgeGroups(epee);
            athelete.eventEpee.unshift({
                '_id': 'Opt Out',
                'data': [{
                    'sport': null
                }]
            });

            // sabre
            _.each(sabre, function (n, i) {
                n.data = _.filter(n.data, ['eventName', 'Sabre']);
            });
            athelete.eventSabre = getAgeGroups(sabre);
            athelete.eventSabre.unshift({
                '_id': 'Opt Out',
                'data': [{
                    'sport': null
                }]
            });

            // foil
            _.each(foil, function (n, i) {
                n.data = _.filter(n.data, ['eventName', 'Foil']);
            });
            athelete.eventFoil = getAgeGroups(foil);
            athelete.eventFoil.unshift({
                '_id': 'Opt Out',
                'data': [{
                    'sport': null
                }]
            });

            console.log(athelete.eventFoil, "foil");
            athelete.sport = [];
            return athelete;
        }

        switch (confirmPageKey) {
            case "K":
                athelete = filterEventWise(events);
                break;
            case "FA":
                athelete = filterFencing(events);
                break;
            case "AAS":
                athelete.ageGroups = getAgeGroups(events);
                console.log(athelete);
                break;
            case "I":
                athelete.sport = [];
                athelete.ageGroups = getAgeGroups(events);
                break;
            case "CT":
                break;
        }
        return athelete;
        // athlete birthdate
        // _.filter(sports,between athlete birthdate and filter by gender as well);
    };

    this.getSportFromFilters = function (filter, sports) {
        // filter to find sports list for all
    };

    this.formatDataForSending = function () {
        // _.map();
    };

    this.goNext = function (basicSportDetails, gender, age) {
        this.yourPromise = NavigationService.success().then(function () {
            console.log(basicSportDetails, gender, age, "---------Gonext service----------");

            this.gender = gender;
            this.ageGroup = age;

            //change state based on sportType [why:coz confiem pages are different for each sports]
            switch (basicSportDetails.sportType) {
                case "K":
                    $state.go("confirm-karate");
                    break;
                case "FA":
                    $state.go("confirm-fencing");
                    break;
                case "AAS":
                    $state.go("confirm-athleteswim");
                    break;
                case "I":
                    $state.go("confirm-individual");
                    break;
                case "CT":
                    $state.go("confirmteam");
                    break;
            }
        });
    };

    this.findOverAllFormValidation = function () {
        this.isValidForm = (_.findIndex(this.team, ['isValidSelection', false]) == -1);
        if (this.isValidForm) {
            this.showMissingFields = false;
        } else {
            this.showMissingFields = true;
            toastr.error("Please select all the fields", "Confirm Message");
        }
    };

    this.confirmSelection = function () {
        console.log(this.team);
        var formData = _.cloneDeep(this.team);
        switch (this.sportType) {
            case "K":
                this.findOverAllFormValidation();
                break;
            case "FA":
                if (this.sportName == 'Fencing') {
                    this.findOverAllFormValidation();
                } else if (this.sport == 'Archery') {

                }
                console.log(this.isValidForm);
                break;
            case "AAS":

                this.findOverAllFormValidation();
                break;
            case "I":
                var st = this.sportName
                if (st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
                    this.findOverAllFormValidation();
                    _.each(formData, function (n, i) {
                        n.sport = _.filter(n.sport, function (o, i) {
                            return i == 1
                        });
                    });
                } else {
                    this.findOverAllFormValidation();
                }
                break;
            case "CT":
                break;
        }

        if (this.isValidForm) {
            console.log("isValid");
            _.each(formData, function (n, i) {
                n.sportsListSubCategory = $.jStorage.get("sportsId");
                n.athleteId = n._id
                formData[i] = _.pick(n, ['sport', 'sportsListSubCategory', 'athleteId']);
            });
            this.saveData(formData);
        } else {
            console.log("Some Fields are Missing");
        }
    };

    this.saveData = function (formData) {
        var accessToken = $.jStorage.get('userDetails').accessToken;
        var obj = {};
        obj.individual = formData;
        if ($.jStorage.get('userType') == 'school') {
            obj.schoolToken = accessToken;
        } else {
            obj.athleteToken = accessToken;
        }
        $http({
            'method': 'POST',
            'url': adminUrl2 + 'individualSport/saveInIndividual',
            'data': obj
        }).then(function (data) {
            errorService.errorCode(data, function (allData) {
                if (!allData.message) {
                    if (allData.value) {
                        toastr.success("Successfully Confirmed", 'Success Message');
                        $state.go("sports-congrats");
                    }
                } else {
                    toastr.error(allData.message, 'Error Message');
                }
            });
        });
    };

    this.isValidSelection = function (athelete) {
        console.log(this.sportsId, this.sportType);
        switch (this.sportType) {
            case "K":

                var arr = _.compact(athelete.sport);
                var weights = _.compact(athelete.event2Weights);
                weights = _.reject(athelete.event2Weights, {
                    'sport': null
                });
                console.log("arr", arr);
                console.log(" weights", weights);
                console.log("athelete.sport[0]", athelete.sport[0]);
                console.log("weights && weights[0] && weights[0].sport!=null", weights && weights[0] && weights[0].sport != null);
                console.log("athelete.sport[1]", athelete.sport[1]);
                // athelete.isValidSelection = (arr.length > 0)?(athelete.sport[0]!=''||athelete.sport[0]!=null)?true:(athelete.sport[1]!=''||athelete.sport[1]!=null)?(weights>0)?true:false:false:false;
                // partially working                // athelete.isValidSelection = athelete.sport[0] ? (athelete.sport[1]) ? true : (weights && weights[0] && weights[0].sport != null) ? false : true : (athelete.sport[1]) ? true : (weights && weights[0] && weights[0].sport != null) ? false : true;
                athelete.isValidSelection = (arr.length == 0 && weights.length == 0) ? false : (weights.length == 0 && athelete.sport[0]) ? true : (weights.length != 0 && athelete.sport[1]) ? true : false;

                break;
            case "FA":
                if (this.sportName == 'Fencing') {
                    var arr = _.compact(athelete.sport);
                    athelete.isValidSelection = arr.length > 0;
                } else if (this.sport == 'Archery') {

                }
                break;
            case "AAS":
                var arr = _.compact(athelete.sport);
                console.log(arr);
                athelete.isValidSelection = (arr.length > 0) && (arr.length < 0);
                break;
            case "I":
                var st = this.sportName;
                if (st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
                    athelete.isValidSelection = (athelete.sport && athelete.sport[1] && athelete.sport[1] != '') ? true : false;
                    console.log(athelete.isValidSelection);
                } else {
                    var arr = _.compact(athelete.sport);
                    athelete.isValidSelection = arr.length > 0;
                }

                break;
            case "CT":

                break;
        }
    };

    this.editTeam = function (state) {
        $state.go(state, {
            'id': this.sportsId
        });
    };

    this.emptyTeam = function () {
        this.team = [];
    };

    this.reset = function () {
        this.team = [];
        this.sportsId = null;
        this.gender = null;
        this.ageGroup = null;
        this.redirectTo = null;
        this.showMissingFields = false;
        this.initialFun();
    };


});
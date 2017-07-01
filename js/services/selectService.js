firstApp.service('selectService', function ($http, TemplateService, $state, toastr, NavigationService, loginService) {

    this.team = [];
    this.detail = null;
    this.sportsId = null;
    this.gender = null; // FOR confirm-team
    this.ageGroup = null; // for confirm-team eg:U-12, U-8
    this.redirectTo = null; //not in used now
    this.sportName = null; // for biforcating columns based on sportName

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
        console.log(obj, bool, listOfAthlete, events);
        var confirmPageKey = $.jStorage.get("confirmPageKey");
        //check if added or not and do it accordingly
        if (bool) {
            //add athelete
            if (obj.isTeamSelected) {
                toastr.error('This Player has already been Selected');
            } else {
                //get Data for columns accordingly eg:ageGroup
                obj = this.getAgeGroupByAthelete(obj, confirmPageKey, events);
                console.log("-----------");
                this.team.push(obj);
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
        console.log(athelete, confirmPageKey, events);
        var birthdate = moment(athelete.dob);
        var st = this.sportName;

        function getAgeGroups(athelete) {
            var event = _.cloneDeep(events);
            _.each(event, function (i, key) {
                i.data = _.filter(i.data, function (j) {
                    var startDate = moment(j.fromAge);
                    var endDate = moment(j.toAge);
                    if ((j.gender == athelete.gender) && birthdate.isBetween(startDate, endDate)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            });
            event = _.reject(event, function (n) {
                return n.data.length == 0;
            });
            // athelete.ageGroups = event;
            // return athelete;            
            return event;
        }

        function filterEventWise(athelete) {
            var kata = _.cloneDeep(events);
            var kumite = _.cloneDeep(events);

            _.each(kata, function (n, i) {
                kata[i] = _.filter(n.data, ['eventName', 'Kata']);
            });
            console.log("Kata b4 Filtering", kata);
            athelete.eventKata = getAgeGroups(kata);
            console.log("Filtered Kata", athelete.eventKata);

            _.each(kumite, function (n, i) {
                kumite[i] = _.filter(n.data, ['eventName', 'Kumite']);
            });
            console.log("Kumite b4 Filtering", kata);
            athelete.eventKumite = getAgeGroups(kumite);
            console.log("Filtered Kumite", athelete.eventKumite);

            console.log(kumite);
        }

        switch (confirmPageKey) {
            case "K":
                athelete = filterEventWise(athelete);
                break;
            case "FA":
                break;
            case "AAS":
                break;
            case "I":
                athelete.ageGroups = getAgeGroups(athelete);
                if (st == 'Judo' || st == 'Judo' || st == 'Boxing' || st == 'Taekwondo' || st == 'Sport MMA') {
                    getWeightsList(athelete);
                }
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
        this.initialFun();
    };


});
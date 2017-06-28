firstApp.service('selectService', function ($http, TemplateService, $state, toastr) {

    this.team = [];
    this.sportsId = null;
    this.gender = 'male';
    this.ageGroup = null;

    //make .checked to true if already selected
    this.isAtheleteSelected = function (listOfAthlete, team) {
        console.log("aaya");
        var temp = _.intersectionBy(listOfAthlete, this.team, '_id');
        console.log("team", team);
        _.each(temp, function (n) {
            n.checked = true;
        });
        return listOfAthlete;
    };
    // push to Team
    this.pushToTeam = function (obj, bool, listOfAthlete) {
        console.log(obj, bool, listOfAthlete);
        if (bool) {
            if (obj.isTeamSelected) {
                toastr.error('This Player has already been Selected');
            } else {
                this.team.push(obj);
            }

        } else {
            _.remove(this.team, function (n) {
                console.log(n._id, obj._id);
                return n._id == obj._id;
            });
            var temp = _.find(listOfAthlete, ['_id', obj._id]);
            temp.checked = false;
        }
    };

    this.modifyDataIfInTeam = function (obj) {
        alert(); 
        // check if this is in team 
        //      if yes status alreadyInTeam
    };


    this.getAgeGroupByAthelete = function (athelete, sports) {
        // athlete birthdate
        // _.filter(sports,between athlete birthdate and filter by gender as well);
    };

    this.getSportFromFilters = function (filter, sports) {
        // filter to find sports list for all
    };

    this.formatDataForSending = function () {
        // _.map();
    };

    this.goNext = function (state, gender, age) {
        console.log(state, gender, age, "---------Gonext service----------");
        this.gender = gender;
        this.ageGroup = age;
        $state.go(state);
    };

    this.editTeam = function (state) {
        console.log(state, this.sportsId, "---------editTeam service----------");
        $state.go(state, {
            'id': this.sportsId
        });
    };

    this.reset = function () {
        this.team = [];
        this.sportsId = null;
        this.gender = 'male';
        this.ageGroup = null;
    };

});
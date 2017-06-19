firstApp.service('selectService', function ($http, TemplateService, $state) {

    this.team = null;
    this.editTeam = function (arr, callback) {
        this.team = _.filter(arr, ['checked', true]);
        console.log(this.team);
        callback(this.team);
    }


});
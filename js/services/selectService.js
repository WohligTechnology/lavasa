firstApp.service('selectService', function ($http, TemplateService, $state) {
    return {
        editTeam: function (arr, callback) {
            console.log(_.filter(arr, ['val', true]));
            callback(_.filter(arr, ['val', true]));
        },
        next: function (stateName, arr) {

        }

    }
});
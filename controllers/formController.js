const formController = myApp;

formController.controller('formCtrl', function($scope) {
    $scope.model = {};

    $scope.submitForm = function (form) {
        if (form.$valid) {
            //In angular, every form has $valid property and this conditional will use that to test the form
            window.alert('Passed validation! 🌞');
        } else {
            window.alert('Failed validation! 🌞');
        }
    }
})
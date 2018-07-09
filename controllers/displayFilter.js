const display = myApp;

display.controller('dfilters',function ($scope) {

    $scope.displayFilter = {
    "Apple": {"type": `Apple`, "dollarPrice": 1.25 , "specialsDate": "Monday"},
    "Rabbit": {"type": "Rabbit", "dollarPrice": 34.99, "specialsDate": "Holidays"}
    };

    $scope.description = "These are the current food specials";

});


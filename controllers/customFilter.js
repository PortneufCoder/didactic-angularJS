const customFilter = myApp;

customFilter.controller('customFilterController', function($scope) {

    $scope.specialsList = {
        "Kiwi": {"species": "Fruit", "originCountry":  `New Zealand`},
        "Yam": {"species": `Tuber`, "originCountry": `Nigeria`},
        "Leche": {"species": "Seed", "originCountry": `Thailand`}
    };

    $scope.description = `Fancy food stuff from around the world`;

})

customFilter.filter('dashes', function() {

    return function(text) {
        let chars = text.split("")
        return chars.join(`-`)
    }
})

customFilter.filter('addBold', function() {
    return function(weight) {
        let embolden = weight.toUpperCase()
        return embolden;
    }
})
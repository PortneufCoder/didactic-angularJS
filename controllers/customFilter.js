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

customFilter.controller('date', function($scope) {

    $scope.theDate = Date.now();

})

customFilter.controller('grocery', function($scope) {

    $scope.foodList = [
        {name: `Apples`, location: './images/apples.jpg', group: 'Fruits'},
        {name: `Potato`, location: './images/potato.jpg', group: 'Vegetables'},
        {name: `Beans`, location: './images/beans.jpg', group: 'Vegetables'},
        {name: `Lentils`, location: './images/lentil.jpg', group: 'Grain'},
        {name: `Bread`, location: './images/bread.jpg', group: 'Grain'},
        {name: `Cheese`, location: './images/cheese.jpg', group: 'Dairy'},
        {name: `Rhubarb`, location: './images/rhubarb.jpg', group: 'Fruit'},
        {name: `Butter`, location: './images/butter.jpg', group: 'Dairy'}
    ]

    $scope.selectedFoodGroup = "";
    
})
// controllers in angular determine where dynamic content is created.
//in the index.html, you can then call that controller on an element,
//and it will be operational only within the $scope of that element.
// const myApp = angular.module('myApp', []);
const angular = myApp;

angular.controller("appController", function($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  //onClick, this function sets the name variable which is defined in the HTML
  $scope.setName = function($fName, $lName) {
    $scope.firstName = $fName;
    $scope.lastName = $lName;
  };
});

angular.controller("DivideCtrl", function($scope) {
  // angular does not accept ES6 arrow functions
  // whatever comes after $scope is just a method we invent
  $scope.numberData = {
    value1: "",
    value2: ""
  };

  $scope.divide = (val1, val2) => {
    window.alert(val1 * val2);
    if (numberData.value1 * numberData.value2 === NaN) {
      alert(`Please enter actual numbers`);
    }
  };
});

angular.controller("OuterCtrl", function($scope) {
  //   $scope.val3 = `Scott`;
  $scope.val3 = {
    name: `Scott`
  };
});

angular.controller("InnerCtrl", function($scope) {});

angular.controller("CarCtrl", function($scope) {
  $scope.cars = {
    BMW: { Make: "BMW", Model: "1 Series", Year: "2010" },
    Audi: { Make: "Audi", Model: "TT", Year: "2008" },
    Mercedes: { Make: "Mercedes", Model: "C-Class", Year: "2009" }
  };

  $scope.description = `Here are my car lists`;
});

//We use this factory method to share data between controllers.
// The two controllers below will then have access to the same data I'm returning 
//Within the factory function.
angular.factory('Share', function() {
    return {sharedMessage: `I am being shared`}
})


angular.controller("controllerA", function ($scope, Share) {
  $scope.value = `Saying hi from controller A`;
  $scope.sharedValue = Share;
});

angular.controller("controllerB", function ($scope, Share) {
  $scope.value = `Hello from controller B`;
  $scope.sharedValue = Share;
});

angular.controller(`myCtrl`, function ($scope){
    $scope.value = "One way to pass values from controllers"
})

angular.controller(`realCtrl`, function (){
    this.value = "Cool way to pass values from controllers"
})

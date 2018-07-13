// controllers in thisController determine where dynamic content is created.
//in the index.html, you can then call that controller on an element,
//and it will be operational only within the $scope of that element.
// const myApp = thisController.module('myApp', []);
const thisController = myApp;

thisController.controller("appController", function($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  //onClick, this function sets the name variable which is defined in the HTML
  $scope.setName = function($fName, $lName) {
    $scope.firstName = $fName;
    $scope.lastName = $lName;
  };
});

thisController.controller("DivideCtrl", function($scope) {
  // thisController does not accept ES6 arrow functions
  // whatever comes after $scope is just a method we invent
  $scope.numberData = {
    value1: "",
    value2: ""
  };

  $scope.divide = function (val1, val2) {
    window.alert(val1 * val2);
    $scope.divide = '';
   
  };
});

thisController.controller("OuterCtrl", function($scope) {
  //   $scope.val3 = `Scott`;
  $scope.val3 = {
    name: `Scott`
  };
});

thisController.controller("InnerCtrl", function($scope) {});

thisController.controller("CarCtrl", function($scope) {
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
thisController.factory('Share', function() {
    return {sharedMessage: `I am being shared`}
})


thisController.controller("controllerA", function ($scope, Share) {
  $scope.value = `Saying hi from controller A`;
  $scope.sharedValue = Share;
});

thisController.controller("controllerB", function ($scope, Share) {
  $scope.value = `Hello from controller B`;
  $scope.sharedValue = Share;
});

thisController.controller(`myCtrl`, function ($scope){
    $scope.value = "One way to pass values from controllers"
})

thisController.controller(`realCtrl`, function (){
    this.value = "Cool way to pass values from controllers"
})

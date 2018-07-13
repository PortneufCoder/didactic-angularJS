const builtInFilter = myApp;

// In a production environment, this data might be coming from a web server or DB

builtInFilter.controller("filters", function($scope) {
  $scope.countryInfo = [
    {
      name: "Burkina Faso",
      capital: "Ouagadougou",
      population: 1.5
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      population: 26000
    },
    {
      name: "Mongolia",
      capital: "Ulanbatuur",
      population: 2.5001
    },
    {
      name: "Paraguay",
      capital: "Asuncion",
      population: "Unknown"
    },
    {
      name: "Liechtenstein",
      capital: "Vaduz",
      population: 15824
    },
    {
      name: "Oman",
      capital: "muscat",
      population: 357186
    }
  ];
  console.log($scope.countryInfo);
  $scope.getCapital = function() {
    for (let i = 0; i < countryInfo.length; i++) {
      console.log(countryInfo[i].capital);
      return $scope.countryInfo[i].capital.charAt(0).toLowercase();
    }
  };
});

// Practising angular.forEach function
builtInFilter.controller("greetingCtrl", function($scope) {
  // We want to grab one greeting and one name to present to a user using the forEach method
  let greetings = ["Hi", "Whats the craic,", "Hows it going,"];
  let names = ["Ivan", "Clayton", "Leo"];
  console.log(typeof greetings);

  $scope.fullGreetings = [];
  //A forEach funtion takes each element in the array and performs an action on it
  angular.forEach(names, function(name) {
    let randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    let fullSentence = `${randomGreeting} ${name}!`;
    $scope.fullGreetings.push(fullSentence);
  });
});

builtInFilter.filter("lower", function() {
  let oneInstance = countryInfo.capital;
  return function() {
    for (let i = 0; i < countryInfo.length; i++) {
      if (countryInfo[i].capital === countryInfo.capital) {
        console.log(countryInfo.capital[i]);
        countryInfo[i].capital[0] = countryInfo[i].capital
          .charAt(0)
          .toLowercase();
      }
    }
  };

  //  return for(let i=0; i < countryInfo.length; i++){
  //     if(countryInfo[i].indexOf(0)){
  //         return countryInfo[i].toLowerCase;
  //     }
  // }
});

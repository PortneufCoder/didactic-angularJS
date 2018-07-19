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
  
//   for ( let countryInfo of $scope.countryInfoGroup.name ) {
//     countryInfo = countryInfo.name.substr(0, 1).toLowerCase() + countryInfo.substr(1)
//     console.log(countryInfo)
//   }

});

// Practising angular.forEach function
builtInFilter.controller("greetingCtrl", function($scope) {
  // We want to grab one greeting and one name to present to a user using the forEach method
  let greetings = ["Hi", "Whats the craic,", "Hows it going,"];
  let names = ["Ivan", "Clayton", "Leo"];
  angular.isArray(names) ? console.log(true) : console.log(false)

  $scope.fullGreetings = [];
  //A forEach funtion takes each element in the array and performs an action on it
  angular.forEach(names, function(name) {
    let randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    let fullSentence = `${randomGreeting} ${name}!`;
    $scope.fullGreetings.push(fullSentence);
  });
});

builtInFilter.controller("lower", function() {
  let countryInfo;
    for(let i=0; i < countryInfo.length; i++) {
        console.log(countryInfo)
    }
})

let victor = `I am going home`;
console.log(victor)

let updated = victor.replace('home', 'into town')
console.log(updated)
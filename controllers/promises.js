// Using $q.all to handle multiple promises.

const promiseController = myApp;

promiseController.controller("promiseCtrl", function(
  $scope,
  randomCountryGenerator,
  $q
) {
  // These new variables will fetch the data from the getCountry fn
  let africaPromise = randomCountryGenerator.getCountry("first");
  let europePromise = randomCountryGenerator.getCountry("middle");
  let asiaPromise = randomCountryGenerator.getCountry("last");

  let allPromisesDone = $q.all([africaPromise, europePromise, asiaPromise]);
  // We will set just one .then function that will execute when all the data is
  //available.

  allPromisesDone.then(function(data) {
    console.log(data);

    $scope.africa = data[0];
    $scope.europe = data[1];
    $scope.asia = data[2];
  });
});

promiseController.factory("randomCountryGenerator", function($q, $timeout) {
  //$q and timeout are provided by angular
  //Hard-coding an array here, but in a real app, this data might come from a web server or database
  let africa = [
    "Zambia",
    "Angola",
    "Mozambique",
    "Gabon",
    "Djibouti",
    "Western Sahara"
  ];
  let europe = [
    "Bulgaria",
    "Slovenia",
    "Andorra",
    "Finland",
    "Latvia",
    "Wales"
  ];
  let asia = [
    "Laos",
    "Vietnam",
    "Indonesia",
    "New Caledonia",
    "Fiji",
    "Tahiti"
  ];

  return {
    getCountry: function(countryName) {
      // A call to the getCountry function will create the defer object, and the result of that will be the promise on line 53
      let defer = $q.defer();
      $timeout(function() {
        let country = "";

        switch (countryName) {
          case "first":
            country = africa[Math.floor(Math.random() * africa.length)];
            break;
          case "middle":
            country = europe[Math.floor(Math.random() * europe.length)];
            break;
          case "last":
            country = asia[Math.floor(Math.random() * asia.length)];
            break;
        }

        defer.resolve(country);
      }, Math.random() * 3000);
      // This timeout waits for the condition above to complete before executing. This code is simulating a situation where you have to wait for a response from the server.
      return defer.promise;
    }
  };
});

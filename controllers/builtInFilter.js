const builtInFilter = myApp;

// In a production environment, this data might be coming from a web server or DB

builtInFilter.controller('filters', function($scope) {
    $scope.countryInfo = [
    {
        name: "Burkina Faso",
        capital: "Ouagadougou",
        population: 1.5000000
    },
    {
        name: "Bhutan",
        capital: "Thimphu",
        population: 26000
    },
    {
        name: "Mongolia",
        capital: "Ulanbatuur",
        population: 2.5001000
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

]
  console.log($scope.countryInfo) 
  $scope.getCapital = function () {
    for(let i=0; i < countryInfo.length; i++) {
        console.log(countryInfo[i].capital[i])
       return $scope.countryInfo[i].capital[i].charAt(0).toLowercase()
    }
}

})



// builtInFilter.filter('lower', function(){

//     return function () {
//         for(let i=0; i < countryInfo.length; i++){
//             if(countryInfo.capital[i]){
//                 console.log(countryInfo.capital[i])
//                 return Object.keys(countryInfo.capital)[0].charAt(0)
//             }
//         }
//     }

//     //  return for(let i=0; i < countryInfo.length; i++){
//     //     if(countryInfo[i].indexOf(0)){
//     //         return countryInfo[i].toLowerCase;
//     //     }
//     // }
// })
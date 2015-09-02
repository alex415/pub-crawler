angular.module('pubCrawl', ['ngAutocomplete', 'angular-mapbox']).run(function(mapboxService) {
  mapboxService.init({ accessToken: 'pk.eyJ1IjoiYWxleDQxNSIsImEiOiJmNWM4YzNjMmVmYzQyNjk1N2U1NzE2ZDIzZTU1YmFjMiJ9.Dl4FXdWAWmXKWKA4jTwCeA' });
})

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function () {
    var geolocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);
    var url = 'https://api.foursquare.com/v2/venues/search?radius=1000&ll=' + geolocation + '&limit=10&client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&v=20150901&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&categoryId=4bf58dd8d48988d116941735';
    $http.get(url)
      .then(function (response) {
        $scope.bars = response.data.response;
        // console.log(response);
    });
  };




}]); // end
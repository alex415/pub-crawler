angular.module('pubCrawl', ['ngAutocomplete', 'ngMap'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function () {
    var geolocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901&ll=' + geolocation + '&query=drinks&limit=10&radius=1000';
    $http.get(url)
      .then(function (response) {
        console.log(response.data.response.groups[0].items);
        $scope.bars = response.data.response.groups[0].items;
    });
  };

  $scope.maps = ['San Francisco'];

  $scope.addMap = function() {
      $scope.maps.push($scope.newMap);
  };




}]); // end
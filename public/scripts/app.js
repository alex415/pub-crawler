angular.module('pubCrawl', ['ngAutocomplete', 'ngMap'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  var markers = [];

  $scope.submit = function () {
    var geolocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901&ll=' + geolocation + '&query=drinks&limit=10&radius=1000';
    $http.get(url)
      .then(function (response) {
        console.log(response.data.response.groups[0].items);
        $scope.bars = response.data.response.groups[0].items;
        

        for (var i=0; i < $scope.bars.length; i++) {
          markers[i] = new google.maps.Marker({
            title: "Hi marker " + i
          });
        }

        $scope.GenerateMapMarkers();
    });
  };

  $scope.GenerateMapMarkers = function() {
    $scope.date = Date(); // Just to show that we are updating

    var numMarkers = $scope.bars.length;  // betwween 4 & 8 of them
    for (i = 0; i < numMarkers; i++) {
      var lat = $scope.bars[i].venue.location.lat;
      var lng = $scope.bars[i].venue.location.lng;
      // You need to set markers according to google api instruction
      // you don't need to learn ngMap, but you need to learn google map api v3
      // https://developers.google.com/maps/documentation/javascript/marker
      var latlng = new google.maps.LatLng(lat, lng);
      markers[i].setPosition(latlng);
      markers[i].setMap($scope.map);
    }
  };
  // $interval( $scope.GenerateMapMarkers, 2000);

}]); // end
angular.module('pubCrawl', ['ngAutocomplete', 'ngMap'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  // map markers
  var markers = [];

  $scope.submit = function () {

    // foursquare api call
    var geolocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901&ll=' + geolocation + '&query=drinks&limit=10&radius=1000';
    $http.get(url)
      .then(function (response) {
        console.log(response.data.response.groups[0].items);
        $scope.bars = response.data.response.groups[0].items;
        
        // loop map markers
        for (var i=0; i < $scope.bars.length; i++) {
          markers[i] = new google.maps.Marker({
            title: "Hi marker " + i
          });
        }

        // generate map markers
        $scope.GenerateMapMarkers();
    });
  };

  $scope.GenerateMapMarkers = function() {
    $scope.date = Date(); // Just to show that we are updating
    var numMarkers = $scope.bars.length;
    for (i = 0; i < numMarkers; i++) {
      var lat = $scope.bars[i].venue.location.lat;
      var lng = $scope.bars[i].venue.location.lng;
      var latlng = new google.maps.LatLng(lat, lng);
      markers[i].setPosition(latlng);
      markers[i].setMap($scope.map);
    }
  };

  $scope.getInstagram = function (bar) {
    // instagram api call
    console.log(bar);
    var lat = bar.latLng.G;
    var lng = bar.latLng.K;
    var url = 'https://api.instagram.com/v1/locations/search?lat=' + lat + '&lng=' + lng + '&client_id=58d7ef2ba19c481f84f6b8c3c2dbe895&callback=JSON_CALLBACK';
    $http.jsonp(url)
      .then(function (response) {
        console.log(response);
        $scope.instagram = response;
    });
  };

}]); // end
angular.module('pubCrawl', ['ngAutocomplete', 'ngMap'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  // map markers
  var markers = [];

  $scope.submit = function () {

    // start icon location
    var geolocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);

    // foursquare api call
    $scope.startLocation = $scope.details.geometry.location.toString().replace(/\s+/, '').slice(1, -1);
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901&ll=' + geolocation + '&query=drinks&limit=10&radius=1500';
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

  $scope.getPictures = function (bar) {
    // instagram api call
    var foursquareId = bar.venue.id;
    // console.log(bar.venue.id);
    var url = 'https://api.foursquare.com/v2/venues/337334/photos?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901';
    $http.get(url)
      .then(function (response) {
        // console.log(response);
        $scope.pictures = response.data.response.photos.items;
    }); // end of url
  };
}]); // end
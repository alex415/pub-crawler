angular.module('pubCrawl', ['ngAutocomplete', 'ngMap'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.submit = function () {
    var tag = $scope.autocomplete;
    var url = 'https://api.foursquare.com/v2/venues/categories?client_id=0LQEK2QFONRMHNYOBLU4ZEMSGKGWAB5J51O4JB0DPYRNW41G&client_secret=JYZ2IHWEDEKK5A3HNQKO4ELARI55YOJP0LFOF1NFM3R3LY5Z&v=20150901';
    $http.get(url)
      .then(function (response) {
        console.log(response);
        console.log("hello");
    });
  };

    $scope.autocomplete = '';
    $scope.details = '';
    $scope.options = '';


}]); // end
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(37.774929, -122.419416),

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    // styles: [{"featureType":"all","stylers":[{"saturation":-70},{"gamma":0.9}]}]
    styles: [{"elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"administrative","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"off"}]}]
  };

  // Get the HTML DOM element that will contain your map.
  // We are using a div with id="map" seen in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
}



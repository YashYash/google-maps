  // JavaScript Document
  function initialize() {
	  
	  
	  var mapOptions = {
		  center: new google.maps.LatLng(37.7908600,-122.4014700),
		  zoom: 6,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		  
  };
	  var map = new google.maps.Map(
		  document.getElementById("map-canvas"),
		  mapOptions)
  
  
  var marker = new google.maps.Marker({
	  position: mapOptions.center,
	  draggable: true,
	  animation: google.maps.Animation.DROP,
	  title: rocketU
	  
	});
	
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', toggleBounce);
  }
  function toggleBounce() {
  
	if (marker.getAnimation() != null) {
	  marker.setAnimation(null);
	} else {
	  marker.setAnimation(google.maps.Animation.BOUNCE);
	}
  }
	google.maps.event.addDomListener(window, 'load', initialize);
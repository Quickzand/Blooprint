getUserLocation();

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mapLocation, error);
  }
  else {
    alert("Sorry, please use a new device!");
  }
}

function mapLocation(position) {
  showMap(position.coords.latitude, position.coords.longitude);
}

function error(errorCode) {
  if (errorCode.code == 1) {
    alert("Please allow us to permission to your location in order to use our service!")
  }
}

function showMap(latCoords, longCoords) {
  const mapCenter = { lat: latCoords, lng: longCoords }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: mapCenter,
  });

  const marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
  });
}

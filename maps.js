navigator.geolocation.getCurrentPosition(function(position) {
  initMap(position.coords.latitude, position.coords.longitude);
});

function initMap(latCoords, lngCoords) {
  const mapCenter = { lat: latCoords, lng: lngCoords }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: mapCenter,
  });

  const marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
  });
}

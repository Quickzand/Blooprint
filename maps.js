function initMap() {
  const mapCenter = {lat: 42.3601, lng: 71.0942}

  const map = new google..maps.Map(document.getElementByID("map"));
    zoom: 4
    center: mapCenter
});

const marker = new google.maps.Marker({
  position: mapCenter,
  map: map,
});
}

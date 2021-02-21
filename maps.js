function initMap() {

  const mapCenter = { lat: 	42.360001, lng: -71.092003 }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: mapCenter,
  });

  const marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
  });
}

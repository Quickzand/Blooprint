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

  /*const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  for (let i =0; i <mapList.length; i++) {
    const marker = new google.maps.Marker({
      position: mapList[i].locationName,
      if (mapList[i].name.includes("Library")) {
        icon: iconBase + "starbucks_mark.png",
      }
      else if (mapList[i].name.includes("Starbucks")) {
        icon: iconBase + "library_mark.png",
      }
      else {
        icon: iconBase +"default_mark. png",
      }
      map: map,
    });
  }*/
}

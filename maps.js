getUserLocation();
var map;

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mapLocation, error);
  } else {
    alert("Sorry, please use a new device!");
  }
}

function mapLocation(position) {
  initMap(position.coords.latitude, position.coords.longitude);
}

function error(errorCode) {
  if (errorCode.code == 1) {
    alert("Please allow us to permission to your location in order to use our service!")
  }
}

function getDatabaseData(callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      callback(xhttp.responseText);
    }
  };
  xhttp.open("GET", "retreiveDatabaseEntries.php", true);
  xhttp.send();
}

getDatabaseData(addMarker);

function addMarker(locationListFake) {
  var locationList = JSON.parse(locationListFake).hotspots

  for (let i = 0; i < locationList.length; i++) {
    // console.log(parseInt(locationList[i].lat))
    position = new google.maps.LatLng(parseFloat(locationList[i].lat), parseFloat(locationList[i].long))
    if (locationList[i].locationName.includes("Library")) {
      icon = "library_mark.png"
    } else if (locationList[i].locationName.includes("Starbucks")) {
      icon = "starbucks_mark.png"
    } else {
      icon = "default_mark.png"
    }
    const marker = new google.maps.Marker({
      position: position,
      icon: icon,
      map: map
    });
  }
}


function initMap(latCoords, longCoords) {
  const mapCenter = {
    lat: latCoords,
    lng: longCoords
  }
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: mapCenter,
  });

  addMarker()

}
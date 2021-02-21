function pullXMLFromServer {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(this.responseText)
    }
  };
  xhttp.open("GET", "filename", true);
  xhttp.send();
  http: //www.overpass-api.de/api/xapi?node[internet_access=yes][bbox=-171.791110603, 18.91619, -66.96466, 71.3577635769]  
}
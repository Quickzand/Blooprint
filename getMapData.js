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
}
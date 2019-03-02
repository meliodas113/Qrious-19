function getdata() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "(url)", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var json = JSON.parse(xhttp.responseText);
      var reality = json.//Add number of current reality.If no,then put 0.
      var played = json.//Add the realities played.
    }
  };

  xhttp.send();

  if (reality == 0) {
    window.location.href = ("url");
  }
  else if (reality == 1) {
    window.location.href = ("url");
  }
  else if (reality == 2) {
    window.location.href = ("url");
  }
  else if (reality == 3) {
    window.location.href = ("url");
  }
  else if (reality == 4) {
    window.location.href = ("url");
  }
  
}
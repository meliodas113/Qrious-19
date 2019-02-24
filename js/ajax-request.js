function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	//if something is in form of string.
      document.getElementById("demo").innerHTML = this.responseText;

      //if something from json is retrieved.
      var json = JSON.parse(xhttp.responseText);
                document.getElementById('demo').innerHTML = json.collection.movie[0].title;
    }
  };

  //for recieving something from server
  xhttp.open("GET", "(url)", true);
  xhttp.send();

//for sending something to server
	xhttp.open("POST", "(url)", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("userid=" + userid);
}
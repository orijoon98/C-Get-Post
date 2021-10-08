var names = document.getElementById("name");
var address = document.getElementById("address");
var hobby = document.getElementById("hobby");

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

names.innerText = getParameterByName("name");
address.innerText = getParameterByName("address");
hobby.innerText = getParameterByName("hobby");

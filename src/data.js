//Llamando json users
let xhrUsers = new XMLHttpRequest();
xhrUsers.open("GET", "/data/cohorts/lim-2018-03-pre-core-pw/users.json");
xhrUsers.onload = function () {
  if (xhrUsers.status >= 200 && xhrUsers.status < 400) {// Success!
    let data = JSON.parse(xhrUsers.responseText);
    console.log(data);
  } else {// We reached our target server, but it returned an error
  }};
xhrUsers.send();
console.log(xhrUsers);
document.getElementById("demo").innerHTML = xhrUsers;


//Llamando json progress
let xhrProgress = new XMLHttpRequest();
xhrProgress.open("GET", "/data/cohorts/lim-2018-03-pre-core-pw/progress.json");
xhrProgress.onload = function () {
  if (xhrProgress.status >= 200 && xhrProgress.status < 400) {
    let data = JSON.parse(xhrProgress.responseText);
    console.log(data);
  } else {
  }};
xhrProgress.send();
console.log(xhrProgress);
document.getElementById("demo").innerHTML = xhrProgress;


//Llamando json cohorts
let xhrCohorts = new XMLHttpRequest();
xhrCohorts.open("GET", "/data/cohorts.json");
xhrCohorts.onload = function () {
  if (xhrCohorts.status >= 200 && xhrCohorts.status < 400) {
    let data = JSON.parse(xhrCohorts.responseText);
    console.log(data);
  } else {
  }};
xhrCohorts.send();
console.log(xhrCohorts);
document.getElementById("demo").innerHTML = xhrCohorts;


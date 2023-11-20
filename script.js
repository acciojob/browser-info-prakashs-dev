//your JS code here. If required.
let browserName = navigator.appName;
let version = navigator.appVersion;
const newElement = document.getElementById("browser-info");
newElement.innerText = "You are using " + browserName + " version " + version;

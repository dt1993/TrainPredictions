var Name = "";
var Destination = "";
var Time = "";
var Frequency = "";
var nextArrival = "";
var minutesAway = "";
var addName = $("#train-name");
var addDestination = $("#train-destination");
var addTime = $("#train-time").mask("00:00");
var addFreq = $("#time-freq").mask("00");

var config = {
    apiKey: "AIzaSyDJqvfbZa280Qv7WVdpdr468ptOpsjoN7w",
    authDomain: "uw-bootcamp-bb247.firebaseapp.com",
    databaseURL: "https://uw-bootcamp-bb247.firebaseio.com",
    projectId: "uw-bootcamp-bb247",
    storageBucket: "uw-bootcamp-bb247.appspot.com", 
};

firebase.initializeApp(config);
var database = firebase.database();
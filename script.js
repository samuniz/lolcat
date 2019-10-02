var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM 
var wakeuptime = 9; // 9AM
var lunchtime = 12; // 12PM
var partyTime = 17; // 5PM
var naptime = lunchtime + 2; // 2PM
var time = new Date().getHours();
var PartyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
 var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() 
{
var messageText;
var image; 
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var lolcat = document.getElementById('lolcat');

var timeEventjs= document.getElementById("timeEvent");
if (time == partyTime){
	image ="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
}
timeEventjs.innerText= messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime(); 
};
updateClock();
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

//event function    
var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Time"
     PartyTimeButton.innerText = "PARTY TIME!";

      // color of the button should be "#222" (bonus!)
	 PartyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY Over!"
	   PartyTimeButton.innerText = "PARTY OVER!";
      // color of the button should be "#222" (bonus!)
	   PartyTimeButton.style.backgroundColor ="#0A8DAB";
   }
};
PartyTimeButton.addEventListener("click", partyEvent);
// time selector wake up
var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};
	
wakeUpTimeSelector .addEventListener('change', wakeUpEvent);

//time selector lunch time 
var lunchEvent = function ()
{
	lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

// time selector nap time
var napEvent = function()
{
	naptime= napTimeSelector.value;
};
napTimeSelector.addEventListener ('change', napEvent);

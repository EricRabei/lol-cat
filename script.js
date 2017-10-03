var time = new Date().getHours();
var isPartyTime = false;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM


var updateClock = function () {
		var lolcat = document.getElementById('lolcat');
		var messageText;
	 //default cat image
		var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		//time specific cat picture and message
		if (time == partyTime){
				messageText = "IZ PARTEE TIME!!";
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		} else if (time == napTime) {
				messageText = "IZ NAP TIME...";
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		} else if (time == lunchTime) {
				messageText = "IZ NOM NOM NOM TIME!!";
				image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		} else if (time == wakeupTime) {
				messageText = "IZ TIME TO GETTUP.";
				image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		} else if (time < noon) {
				messageText = "Good morning!";
		} else if (time > evening) {
				messageText = "Good Evening!";
		} else {
				messageText = "Good afternoon!";
		};
		timeEvent.innerText = messageText;
		lolcat.src=image;
		showCurrentTime();
};

//Time Functions and Display
var showCurrentTime = function() {
		// display the string on the webpage
		var clock = document.getElementById('clock');

		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";
		// Set hours
		if (hours >= noon)
		{   meridian = "PM";}
		if (hours > noon)
		{   hours = hours - 12;}
		// Set Minutes
		if (minutes < 10)
		{   minutes = "0" + minutes;}
		// Set Seconds
		if (seconds < 10)
		{   seconds = "0" + seconds;}
		// put together the string that displays the time
		var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
		clock.innerText = clockTime;

	};


//PartyTimeButton Code
var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
		 	if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
			partyTimeButton.innterText="Party Time!";
			partyTimeButton.style.backgroundColor= "#222";
			}  else {
      isPartyTime = false;
      time = new Date().getHours();
			partyTimeButton.innerText="Party Over!";
			partyTimeButton.style.backgroundColor="#0A8DAB";
      }
};

// Wake Up Time Selector section
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function () {
	wakeupTime = wakeUpTimeSelector.value;
};

// Lunch Time Selector section
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function () {
	 lunchTime = lunchTimeSelector.value;
};

// Nap Time Selector section
var napTimeSelector = document.getElementById("napTimeSelector");
var napTimeEvent = function () {
	 napTime = napTimeSelector.value;
};


wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);

partyTimeButton.addEventListener("click", partyEvent);
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

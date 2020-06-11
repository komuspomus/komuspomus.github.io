var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/honeysuckle-flowers-drawing.jpg') {
		myImage.setAttribute('src', 'images/bloemen_1');
	} else {
		myImage.setAttribute('src', 'images/honeysuckle-flowers-drawing.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
        myHeading.textContent = 'Bloemetje, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else{
	var storedName = lolcalStorage.getItem('name');
	myHeading.textContent = 'Bloemetje,' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

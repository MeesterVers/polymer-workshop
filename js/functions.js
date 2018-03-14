function brekenStudietempo() {
	var message = "Je hebt 25 ETCS behaald.\n\nJe hudige studietempo is 4 ETCS/mnd\n\nOp basis van dit studietempo heb je 15mnnodig voor je P."
	alert(message);
}

function changeUserDp() {
	var newPictureURL = document.getElementById('change-dp-button').files[0].name; 
	var newPicturFullPath = "C:/Users/Admin/Pictures/" + newPictureURL;
	console.log(newPicturFullPath);
	document.getElementById('new-profile-picture').src=newPicturFullPath;
}
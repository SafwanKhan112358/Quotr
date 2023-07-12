document.getElementById("Happy-Button").addEventListener("click", printEmotion);
document.getElementById("Excited-Button").addEventListener("click", printEmotion);
document.getElementById("Motivated-Button").addEventListener("click", printEmotion);
document.getElementById("Angry-Button").addEventListener("click", printEmotion);
document.getElementById("Fearful-Button").addEventListener("click", printEmotion);
document.getElementById("Stressed-Button").addEventListener("click", printEmotion);
document.getElementById("Upset-Button").addEventListener("click", printEmotion);
document.getElementById("Lonely-Button").addEventListener("click", printEmotion);
document.getElementById("Frustrated-Button").addEventListener("click", printEmotion);



function printEmotion(event) {
  //event.target is an object, clickedButton is a reference to the object
  let clickedButton = event.target;
  //the clickedButton.id will be in string format
  let idClickedButton = clickedButton.id;
  alert(idClickedButton);

  
}


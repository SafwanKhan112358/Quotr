import { baseApiUrl } from './constants.js';



function getEmotion(event) {
  const clickedEmotionButton = event.target;
  const emotion = clickedEmotionButton.id;
  return emotion;
}

//API Pecking Order
//Quotable and Swanson


async function getQuote(url, event) {
  const userEmotion = await getEmotion(event);
  const response = await fetch(url + userEmotion);
  var apiResponse = await response.json();
  console.log(apiResponse);
}


//Worth Putting more Attention there
document.getElementById("happy").addEventListener("click", function (event) {
  getQuote(baseApiUrl, event);
});



import { baseApiUrl, contentKey } from './constants.js';
import { emotionQueryWordsMap } from './constants.js';
import { countKey } from './constants.js';
import { resultsKey } from './constants.js';



function getEmotion(event) {
  const clickedEmotionButton = event.target;
  const emotion = clickedEmotionButton.id;
  return emotionQueryWordsMap[emotion];
}


async function getApiResponse(baseUrl, event) {
  const queryWordsList = await getEmotion(event);

  let clientUrlRequest = baseUrl;
  await queryWordsList.forEach(function (element) {
    clientUrlRequest += ", " + element;
  });

  //TODO: API Response Validation
  const response = await fetch(clientUrlRequest);
  const apiResponse = await response.json();
  return apiResponse;
}

async function getQuote(event) {
  const response = await getApiResponse(baseApiUrl, event);
  const quoteKeyNumber = Math.floor(Math.random() * (response[countKey]));

  console.log(response[resultsKey][quoteKeyNumber][contentKey]);


}





//Worth Putting more Attention here
//TODO: clean this code, need to add more emotions
document.getElementById("happy").addEventListener("click", function (event) {
  getQuote(event);
});



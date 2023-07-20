import { baseApiUrl, contentKey } from '../constants/constants.js';
import { emotionQueryWordsMap } from '../constants/constants.js';
import { countKey } from '../constants/constants.js';
import { resultsKey } from '../constants/constants.js';


function addEventListenerToButtons() {
  const emotionButtons = document.querySelectorAll("button");
  emotionButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      getQuote(event);
    })
  });
}

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

  const quote = response[resultsKey][quoteKeyNumber][contentKey];
  //TODO:Hide the popup page, don't close it!!!

  //TODO:API Validation
  // Send a message to the content script to create the overlay
  setTimeout(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: quote });
    });
  }, 1500);

}

export { addEventListenerToButtons };
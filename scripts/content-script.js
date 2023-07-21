chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) {
    const overlay = new quoteDisplay(request.message);
  }
})


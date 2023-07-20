
// Create overlay
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
overlay.style.zIndex = "9999";

// Add an event listener to remove the overlay when clicked
/*
overlay.addEventListener("click", function () {
  overlay.remove();
});
*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) {
    overlay.innerHTML = "";
    const quote = request.message;

    const quoteElement = document.createElement("p");
    quoteElement.textContent = quote;
    quoteElement.style.fontFamily = "Arial", "Segoe UI";
    quoteElement.style.fontSize = "28px";
    quoteElement.style.fontWeight = "bold";
    quoteElement.style.color = "white";
    quoteElement.style.position = "absolute";
    quoteElement.style.top = "50%";
    quoteElement.style.left = "50%";
    quoteElement.style.transform = "translate(-50%, -50%)";

    overlay.appendChild(quoteElement);
    document.body.appendChild(overlay);
  }
});


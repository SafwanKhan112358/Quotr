//TODO: structure code 

// Create overlay
const overlay = document.createElement("div");
overlay.id = "black-overlay";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
overlay.style.zIndex = "9999";

function closeOverlay() {
  document.body.removeChild(overlay);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) {
    overlay.innerHTML = "";
    const quote = request.message;

    let quoteMessage = document.createElement("p");
    quoteMessage.textContent = quote;
    quoteMessage.style.fontFamily = "Arial", "Segoe UI";
    quoteMessage.style.fontSize = "28px";
    quoteMessage.style.fontWeight = "bold";
    quoteMessage.style.color = "white";
    quoteMessage.style.position = "absolute";
    quoteMessage.style.top = "50%";
    quoteMessage.style.left = "50%";
    quoteMessage.style.transform = "translate(-50%, -50%)";


    let overlayEscapeButton = document.createElement("button");
    overlayEscapeButton.style.position = "absolute";
    overlayEscapeButton.style.right = "60px";
    overlayEscapeButton.style.top = "25px";
    overlayEscapeButton.style.height = "30px";
    overlayEscapeButton.style.width = "45px";
    overlayEscapeButton.style.background = "white";
    overlayEscapeButton.style.borderStyle = "solid";
    overlayEscapeButton.style.borderColor = "white";
    overlayEscapeButton.textContent = "Exit";
    overlayEscapeButton.onclick = closeOverlay;



    overlay.appendChild(quoteMessage);
    overlay.appendChild(overlayEscapeButton);
    document.body.appendChild(overlay);
  }
});


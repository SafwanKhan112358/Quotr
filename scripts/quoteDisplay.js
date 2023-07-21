class quoteDisplay {
  constructor(quoteText) {
    this.quoteText = quoteText;
    const bodyElement = document.body;
    const childElements = bodyElement.children;
    const overlay = childElements[childElements.length - 1];
    overlay.remove();

    this.overlayElement = document.createElement("div");
    this.overlayElement.id = "overlay-element";
    this.quoteElement = document.createElement("p");
    this.customizeOverlayElement();
    this.customizeQuoteElement();
    this.overlayElement.appendChild(this.quoteElement);
    document.body.appendChild(this.overlayElement);

  }

  getQuoteText() {
    return this.quoteText;
  }

  customizeOverlayElement() {
    this.overlayElement.style.position = "fixed";
    this.overlayElement.style.top = "0";
    this.overlayElement.style.left = "0";
    this.overlayElement.style.width = "100%";
    this.overlayElement.style.height = "100%";
    this.overlayElement.style.backgroundColor = "rgba(0,0,0,0.95)";
    this.overlayElement.style.zIndex = "9999";
  }

  customizeQuoteElement() {
    const quoteContent = this.getQuoteText();
    this.quoteElement.textContent = quoteContent;
    this.quoteElement.style.fontFamily = "Arial", "Segoe UI";
    this.quoteElement.style.fontSize = "28px";
    this.quoteElement.style.fontWeight = "bold";
    this.quoteElement.style.color = "white";
    this.quoteElement.style.position = "absolute";
    this.quoteElement.style.top = "50%";
    this.quoteElement.style.left = "50%";
    this.quoteElement.style.transform = "translate(-50%, -50%)";
  }

}


//TODO: structure code 


/*

function closeOverlay() {
  document.body.removeChild(overlay);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) {
    overlay.innerHTML = "";
    const quoteContent = request.message;

    let quoteMessage = document.createElement("p");
    quoteMessage.textContent = quoteContent;
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
    overlayEscapeButton.style.right = "90px";
    overlayEscapeButton.style.top = "25px";
    overlayEscapeButton.style.paddingLeft = "30px";
    overlayEscapeButton.style.paddingRight = "30px";
    overlayEscapeButton.style.paddingTop = "10px";
    overlayEscapeButton.style.paddingBottom = "10px";
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

function closeOverlay() {
  document.body.removeChild(overlay);
}
*/

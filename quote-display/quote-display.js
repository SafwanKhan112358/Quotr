class quoteDisplay {
  constructor(quoteText) {
    this.quoteText = quoteText;
    this.overlayElement = document.createElement("div");
    this.quoteElement = document.createElement("p");
    this.overlayEscapeButtonElement = document.createElement("button");

    this.customizeOverlayElement();
    this.customizeQuoteElement();
    this.customizeEscapeButton();

    this.overlayElement.appendChild(this.quoteElement);
    this.overlayElement.appendChild(this.overlayEscapeButtonElement);
    document.body.appendChild(this.overlayElement);

  }

  getQuoteText() {
    return this.quoteText;
  }

  removeOverlayElement() {
    //remove overlay Element
    const childElements = document.body.children;
    const overlay = childElements[childElements.length - 1];
    overlay.remove();
  }

  customizeOverlayElement() {
    this.removeOverlayElement();
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

  customizeEscapeButton() {
    this.overlayEscapeButtonElement.textContent = "Exit";
    this.overlayEscapeButtonElement.style.position = "absolute";
    this.overlayEscapeButtonElement.style.right = "90px";
    this.overlayEscapeButtonElement.style.top = "25px";
    this.overlayEscapeButtonElement.style.paddingLeft = "30px";
    this.overlayEscapeButtonElement.style.paddingRight = "30px";
    this.overlayEscapeButtonElement.style.paddingTop = "10px";
    this.overlayEscapeButtonElement.style.paddingBottom = "10px";
    this.overlayEscapeButtonElement.style.background = "white";
    this.overlayEscapeButtonElement.style.borderStyle = "solid";
    this.overlayEscapeButtonElement.style.borderColor = "white";
    this.overlayEscapeButtonElement.onclick = this.removeOverlayElement;

  }

}
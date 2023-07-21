chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message) {
    const overlay = new quoteDisplay(request.message);
    const bodyElement = document.body;
    console.log(typeof (bodyElement));
    console.log(bodyElement);
    // Get the collection of child elements of the body
    const childElements = bodyElement.children;
    console.log(typeof (childElements));
    console.log(childElements);

    // Iterate through the child elements using a for loop
    for (let i = 0; i < childElements.length; i++) {
      const childElement = childElements[i];
      console.log(childElement); // Output: Each child element in the body
    }
  }
})


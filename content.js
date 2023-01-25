console.log("Example Extension - BlueGrid Content Script initialized.");

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "invertColors") {
    console.log("Message received!");
  }
});

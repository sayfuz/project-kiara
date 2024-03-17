import { ShreScript, beeMovieScript } from "./scripts.js";

let shrekGuionButton = document.querySelector("#shrekGuion");
let beeMovieGuionButton = document.querySelector("#beeMovieGuion");
let messageArea = document.querySelector("#message");
let sendButton = document.querySelector("#sendButton");

shrekGuionButton.addEventListener("click", function () {
  messageArea.value = ShreScript;
});

beeMovieGuionButton.addEventListener("click", function () {
  messageArea.value = beeMovieScript;
});

sendButton.addEventListener("click", function () {
  sendFuncion();
});

function sendFuncion() {
  chrome.runtime.sendMessage({
    action: "modifyDOM",
    tabId: chrome.tabs.getCurrent().id, // Obtener el ID de la pestaña actual
  });
  let totalMessage = messageArea.value
  console.log(totalMessage);
  return totalMessage;
}

export { sendFuncion };
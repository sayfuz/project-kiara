import { ShreScript, beeMovieScript } from './scripts.js';

let shrekGuionButton = document.querySelector('#shrekGuion');
let beeMovieGuionButton = document.querySelector('#beeMovieGuion');
let messageArea = document.querySelector('#message');
let sendButton = document.querySelector('#sendButton');

shrekGuionButton.addEventListener('click', function () {
  messageArea.value = ShreScript;
});

beeMovieGuionButton.addEventListener('click', function () {
  messageArea.value = beeMovieScript;
});

sendButton.addEventListener('click', function () {
  sendFuncion();
});

async function sendFuncion() {
  await chrome.runtime.sendMessage({greeting: 'sendMessage'});
  message();
}

export function message() {
  let totalMessage = messageArea.value;
  console.log(totalMessage);
  return totalMessage;
}
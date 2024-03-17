import { sendMessage } from "./send.js";

chrome.runtime.onStartup.addListener(() =>{
  console.log('Start Extension')
});

chrome.runtime.onclick.addListener(sendMessage);

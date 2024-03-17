chrome.runtime.onMessage.addListener(async function (request) {
  if (request.greeting === 'sendMessage') console.log('message send');
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log('tabId', tab.id);
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      code: 'let config = 1;',
      files: ['js/send.js']
    },
    (result) => {
      let error = chrome.runtime.lastError;
      if (
        error &&
        error.message &&
        !error.message.startsWith('Cannot access contents of url chrome') &&
        !error.message.startsWith('Cannot access a chrome:// URL')
      ) {
        console.error(error.message);
      }
    }
  );
});

// Generated by CoffeeScript 1.5.0

chrome.browserAction.onClicked.addListener(function(tab) {
  return chrome.tabs.create({
    url: chrome.extension.getURL("index.html")
  });
});

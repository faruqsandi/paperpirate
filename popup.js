chrome.browserAction.onClicked.addListener(function(activeTab) {
  var scihub_url = "https://sci-hub.st/"
  var redirect_page = scihub_url + activeTab.url
  chrome.tabs.create({
    url: redirect_page
  });
});
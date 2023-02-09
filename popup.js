document.getElementById("submitBtn").addEventListener("click", function() {
  var customCss = document.getElementById("customCss").value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.insertCSS(tabs[0].id, {code: customCss});
  });
});

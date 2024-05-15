chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.action === "closeTab" && sender.tab.id) {
    chrome.tabs.remove(sender.tab.id);
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status == "complete" &&
    tab.url.includes("youtube.com/watch")
  ) {
    console.log("show overlay");

    chrome.scripting.executeScript({
      target: { tabId },
      files: ["content.js"],
    });
  }
});

var contextMenuItem = {
    "id": "mapy.cz",
    "title": "mapy.cz",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

let url = "";
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type == "url") {
            url = request.url;
        }
        sendResponse({ status: "url delivered" });
    });

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "mapy.cz" && clickData.selectionText) {
        chrome.tabs.create({ url: url });
    }
})
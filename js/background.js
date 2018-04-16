chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color: '#3AA757'}, ()=>{
        console.log("The color is green.")
    })
    // 当 tabs 发生改变时候，对改变的 tab 显示 pageAction
    chrome.tabs.onUpdated.addListener((tabId)=>{
        chrome.pageAction.show(tabId);
    })
})


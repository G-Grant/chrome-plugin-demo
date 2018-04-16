let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
    changeColor.style.background = data.color;
    changeColor.setAttribute('value', data.color);
})

changeColor.onclick = function (e) {
    let color = e.target.value;
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + color + '";'
    })
}


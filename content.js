document.addEventListener('mouseup', function (event) {
     url = formatText(getText());
     
    if (url.length > 95) {
        chrome.runtime.sendMessage({
            type: "url",
            url: url
        }, function (response) {
            console.log(response.status);
        });
    }



});

let getText = function () {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    }

    return text;
}

let formatText = function (text) {
    let x = "";
    let yBool = false;
    let y = "";

    for (let i = 0; i < text.length; i++) {

        if (!yBool && text[i] != " ") {
            x = x + text[i]
        }
        else {
            yBool = true;
            if (text[i] != " " || text[i] != ",") {
                y = y + text[i];
            }
        }
    }

    return `https://mapy.cz/zakladni?x=${y}&y=${x}&z=17&pano=1&source=coor&id=${y}%2C${x}`;
}

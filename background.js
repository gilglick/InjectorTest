chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: `w = window, l = w.location, d = w.document, s = d.createElement('script');
        if (typeof(s) == 'object') s.setAttribute('src', 'https://gilglick.github.io/InjectorTest/injectorBD2.js');
        d.body.appendChild(s);`
    });
});
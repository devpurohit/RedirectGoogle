chrome.webNavigation.onCompleted.addListener(function () {
    chrome.tabs.query({ 'active': true, currentWindow: true },
        function (tab) {
            chrome.tabs.executeScript(tab.id, { code: "document.title = 'My lame title!'" }
                , function () {
                    for (let i = 5; i > 0; i--) {
                        setTimeout(function () {
                            chrome.tabs.executeScript(tab[0].id, { code: `document.title = ${i}` });

                            if (i == 1) {
                                setTimeout(() => {
                                    if (tab[0].url === 'https://www.google.com/') {
                                        chrome.tabs.update(tab.id, { url: 'https://news.google.co.in' });
                                    }
                                }, 1000);
                            }
                        }, (5 - i) * 1000);
                    }
                }
            );
        }
    );
}, { url: [{ urlMatches: 'https://www.google.com/' }] });


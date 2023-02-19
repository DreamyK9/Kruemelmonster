// Code, that should be executed on the currently opened website
// Here goes the code for dealing with cookie banners


let rules = [
    {
        "url": /www\.google\.[a-z]{2,}/,
        "selector": "#W0wltc"
    },
    {
        "url": "www\.ecosia\.org",
        "selector": ".cookie-consent__action"
    },
    {
        "url": "www.bing.com",
        "selector": "#bnp_btn_reject"
    },
    {
        "url": "www.microsoft.com",
        "selector": "._1XuCi2WhiqeWRUVp3pnFG3"
    }
]


let declineButton = undefined;
let foundRule = undefined;

foundRule = findMatchingRule();

if (foundRule) {
    declineBanner();
}

/* -------------------------------------------------------------------------- */

function findMatchingRule() {
    for (let r of rules) {
        if (window.location.host.match(r.url))
            return r;
    }
}


function declineBanner() {
    let declineButton = document.querySelector(foundRule.selector);

    if (declineButton) {
        declineButton.click();
    } else {
        // try again in 1 second
        setTimeout(declineBanner, 1000);
    }
}

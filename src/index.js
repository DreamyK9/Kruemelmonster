// Code, that is executed on the currently opened website
// This file starts the extension's routine of declining the website's cookie banner

let foundRule = findMatchingRule();

if (foundRule) {
    declineBanner(foundRule);
}

/* -------------------------------------------------------------------------- */
/* ---------------------------- Process Functions --------------------------- */
// These functions are a core part of the extension's routine

function findMatchingRule() {
    for (let r of rules) {
        if (window.location.host.match(r.host)) {
            return r;
        }
    }
    return undefined;
}

async function declineBanner(rule) {
    for (action of rule.actions) {
        switch (action.type) {
            case Action.click:
                await clickButton(action)
                break;
            case Action.clickAll:
                await clickAllButtons(action.selector)
                break;
        }
    }
}

/* -------------------------------------------------------------------------- */
/* ---------------------------- Library Functions --------------------------- */
// These functions fulfill specific, single purposes and are used by the process functions

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getButton(selector) {
    let button = undefined;

    switch (selector.type) {
        case Selector.class:
            button = document.getElementsByClassName(selector.query)[0];
            break;
        case Selector.id:
            button = document.getElementById(selector.query);
            break;
        case Selector.xpath:
            // TODO: implement xPath selector
            throw new Error("xPath selectors are not supported yet");
            break;
    }

    return button;
}

// Code, that should be executed on the currently opened website
// Here goes the code for dealing with cookie banners


// possible sector types
const Selector = {
    class: "class",
    id: "id",
    xpath: "xpath",
}

// possible action types
const Action = {
    click: "click",
    clickAll: "clickAll",
}

const rules = [
    {
        "host": /www\.google\.[a-z]{2,}/,
        "actions": [
            {
                "type": Action.click,
                "delay": 0,
                "selector": {
                    "query": "W0wltc",
                    "type": Selector.id
                }
            }
        ]
    },
    {
        "host": "www.ecosia.org",
        "actions": [
            {
                "type": Action.click,
                "delay": 0,
                "selector": {
                    "query": "cookie-consent__action",
                    "type": Selector.class
                }
            }
        ]
    },
    {
        "host": "www.bing.com",
        "actions": [
            {
                "type": Action.click,
                "delay": 1600,
                "selector": {
                    "query": "bnp_btn_reject",
                    "type": Selector.id
                }
            }
        ]
    },
    {
        "host": "www.microsoft.com",
        "actions": [
            {
                "type": Action.click,
                "delay": 600,
                "selector": {
                    "query": "_1XuCi2WhiqeWRUVp3pnFG3",
                    "type": Selector.class
                },
            }
        ]
    },
    {
        "host": "www.speedrun.com",
        "actions": [
            {
                "type": Action.click,
                "delay": 1200,
                "selector": {
                    "query": "fc-cta-manage-options",
                    "type": Selector.class
                }
            },
            {
                "type": Action.clickAll,
                "delay": 50,
                "selector": {
                    "query": "fc-preference-legitimate-interest",
                    "type": Selector.class
                }
            },
            {
                "type": Action.click,
                "delay": 50,
                "selector": {
                    "query": "fc-confirm-choices",
                    "type": Selector.class
                }
            }
        ]
    }
]

let foundRule = undefined;

foundRule = findMatchingRule();

if (foundRule) {
    declineBanner(foundRule);
}

/* -------------------------------------------------------------------------- */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function findMatchingRule() {
    for (let r of rules) {
        if (window.location.host.match(r.host)) {
            return r;
        }
    }
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

async function clickButton(action) {
    if (action.delay) {
        await sleep(action.delay);
    }

    let button = getButton(action.selector);
    console.log("Clicking button: ", button)
    if (button) {
        button.click();
    }
}


async function clickAllButtons(selector) {
    if (selector.delay) {
        await sleep(selector.delay);
    }

    let buttons = document.getElementsByClassName(selector.query);

    if (buttons) {
        for (let button of buttons) {
            button.click();
        }
    }
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

// These are all the actions the extensions can perform in trying to decline a cookie banner.

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

    if (selector.type != Selector.class) {
        throw new Error("clickAll only supports class selectors");
    }
    let buttons = document.getElementsByClassName(selector.query);

    if (buttons) {
        for (let button of buttons) {
            button.click();
        }
    }
}

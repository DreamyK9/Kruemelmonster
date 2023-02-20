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

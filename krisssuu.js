const puppeteer = require("puppeteer");
const accountCookie =
    {
        auth: {
            "name": "auth-token",
            "value": "<YOUR COOKIE FROM BROWSER TO LOG INTO TWITCH>",
            "domain": ".twitch.tv",
            "path": "/",
            "httpOnly": false,
            "secure": true
        }
    };

(async ()=> {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox',
            '--proxy-server="direct://"',
            '--proxy-bypass-list=*'
        ],
        // headless: false
    });
    const [page] = await browser.pages();
    await page.setCookie(account.auth);
    await page._client.send('Emulation.clearDeviceMetricsOverride');
    await page.goto("https://www.twitch.tv/popout/liverudy/chat?popout=", {waitUntil: 'networkidle0'});
    for (let i=1; i<=6; i++) await page.type('textarea', "kinguin mafia to legenda "+i+"\n");
    await browser.close();
})(accountCookie);
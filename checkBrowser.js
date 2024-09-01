module.exports = function (req, res) {

    let body = req.body
    let isHeadless = false

    let currentNavigator = body.currentUserAgent.toLowerCase()
    if (currentNavigator.includes("headless") ||
        body.webdriver ||
        body.cdp ||
        body.checkNotification === "denied" ||
        body.plugins === 0 ||
        !body.isChrome ||
        body.rtt === 0
    ) {
        isHeadless = true
    }

    if(isHeadless){
        console.log("headless")
    } else {
        console.log('generic')
    }



    res.status(200).send("ok")
}
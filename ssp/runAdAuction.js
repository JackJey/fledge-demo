// ssp
const auctionConfig = {
    seller: "https://ssp-fledge-demo.glitch.me", // should https & same as decisionLogicUrl's origin

    // x-allow-fledge: true
    decisionLogicUrl: "https://ssp-fledge-demo.glitch.me/ssp/decision_logic.js",

    interestGroupBuyers: [
        // * is not supported yet
        "https://dsp-fledge-demo.glitch.me",
    ],
    // public for everyone
    auctionSignals: { auction_signals: "auction_signals" },

    // only for single party
    sellerSignals: { seller_signals: "seller_signals" },

    // only for single party
    perBuyerSignals: {
        // listed on interestGroupByers
        "https://dsp-fledge-demo.glitch.me": { per_buyer_signals: "per_buyer_signals" },
    }
}

document.addEventListener("DOMContentLoaded", async(e) => {
    console.log(e)
    const adAuctionResult = await navigator.runAdAuction(auctionConfig)
    console.log({ adAuctionResult })

    const $iframe = document.createElement('iframe')
    $iframe.src = adAuctionResult
    document.body.appendChild($iframe)
})
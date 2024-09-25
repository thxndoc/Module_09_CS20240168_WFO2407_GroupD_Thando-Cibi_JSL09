const author = document.getElementById("author")
const cryptoTop = document.getElementById("crypto-top")
const crypto = document.getElementById("crypto");

//Get a random image from Unsplash and set it as the background
// URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
// (Change the "query" at the end to preferred theme)
// Change the body's backgroundImage to: `url(<insert the URL of the image from the API here>)`
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=textures-patterns")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        //display author's name
        author.textContent = `Photo by: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1613679169453-ef00f3730ed4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjcyNzM2NjF8&ixlib=rb-4.0.3&q=85)`
        author.textContent = `Photo by: Wolfgang Hasselmann`
    })

// Pull down cryptocurrency data for dogecoin from the CoinGecko API
// https://api.coingecko.com/api/v3/coins/dogecoin
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(response => {
        if (!response.ok) {
            throw Error("Something went wrong")
        }
        return response.json()
    })
    .then(data => {
        // Create image element and append to cryptoTop div
        const imgEl = document.createElement("img");
        imgEl.src = data.image.small;
        cryptoTop.appendChild(imgEl);

        // Create span element and append to cryptoTop div
        const spanEl = document.createElement("span");
        spanEl.textContent = data.name;
        cryptoTop.appendChild(spanEl);

        
        // Create current price paragraph element and append to crypto div
        const currentPriceEl = document.createElement("p");
        currentPriceEl.textContent = `🎯: $${data.market_data.current_price.usd}`;
        crypto.appendChild(currentPriceEl);
        

        // Create high price paragraph element and append to crypto div
        const highPriceEl = document.createElement("p");
        highPriceEl.textContent = `👆: $${data.market_data.high_24h.usd}`;
        crypto.appendChild(highPriceEl);

        // Create low price paragraph element and append to crypto div
        const lowPriceEl = document.createElement("p");
        lowPriceEl.textContent = `👇: $${data.market_data.low_24h.usd}`;
        crypto.appendChild(lowPriceEl);

    })
    .catch(err => console.error(err))


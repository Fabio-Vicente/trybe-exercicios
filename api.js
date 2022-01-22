/* const fetch = require('node-fetch') */

const fetchAssets = () =>
    fetch(`https://api.coincap.io/v2/assets`)
        .then(response => response.json())
        .then(data => document.getElementById('currencies').innerText = data.data
            .reduce((currencies, { name: currencyName, symbol, priceUsd}, index) =>
                index < 10 ?
                    `${currencies}${currencyName} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}\n`:
                    currencies, ''));

window.onload = fetchAssets();
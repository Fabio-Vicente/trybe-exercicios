/* const fetch = require('node-fetch')
 */
const fetchAssets = (convert = 1) =>
    fetch(`https://api.coincap.io/v2/assets`)
    .then(response => response.json())
    .then(data => document.getElementById('currencies').innerText = data.data
    .reduce((currencies, { name: currencyName, symbol, priceUsd}, index) =>
        index < 10 ?
            `${currencies}${currencyName} (${symbol}): ${parseFloat(priceUsd * convert).toFixed(2)}\n`:
            currencies, ''));

const convertBRL = () =>
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json')
    .then(response => response.json())
    .then(data => data.brl);

const fetchAssetsConverted = async () =>
    fetchAssets(await convertBRL());

window.onload = fetchAssetsConverted();
const productCost = 50;
const   saleValue = 120;

if (productCost < 0 || saleValue < 0)
    console.log("erro");
else {
    const tax = productCost*0.2;
    const productProfit = saleValue - (productCost + tax);

    console.log(productProfit*1000);
}
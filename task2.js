let name = "laptop"
let basePrice = 90000
let discountPercent = 15;
let taxRate = 10;
let stockStatus = 'in_stock'

function calculateDiscountedPrice(price, discount) {
    let priceDiscound = price * discount / 100
    return price - priceDiscound
}
let result = calculateDiscountedPrice(basePrice, discountPercent)
console.log(result);

function calculateTax(price, taxRate) {
    return price * taxRate / 100
}
let result2 = calculateTax(result, taxRate)
console.log(result2);

function calculateFinalPrice(price, discount, taxRate) {
    let priceDiscound = price * discount / 100
    let discountedPrice = price - priceDiscound
    let taxprice = discountedPrice * taxRate / 100
    return discountedPrice + taxprice
}
let result3 = calculateFinalPrice(basePrice, discountPercent, taxRate)
console.log(result3);

function isFreeShipping(finalprice) {
    if (finalprice >= 500) {
        return "Free Shipping"
    }
    else {
        return "Shipping:49"
    }
}
let result4 = isFreeShipping(result3)
console.log(result4);

function getStockMessage(status) {
    switch (status) {
        case "in_stock":
            return "In Stock"

        case "limited":
            return "Limited Stock"

        default:
            return "Out of Stock"
    }
}
let result5 = getStockMessage(stockStatus)
console.log(result5);

console.log(`
    Product name:${name}
    Price:${basePrice}
    Discount:${discountPercent}
    Tax:${taxRate}
    Status:${stockStatus}
    Discounted price:${result}
    Tax amount:${result2}
    Final price:${result3}
    FreeShipping:${result4}
    STockMessage:${result5}
    `);


let name="phone"
let basePrice=50000
let discountPercent=20
let taxRate=10
let stockStatus='in_stock'
function calculateDiscountedPrice(price,discount){
    let discountprice= price*discount/100
    return price-discountprice
}
let result=calculateDiscountedPrice(basePrice,discountPercent)
console.log(result);

function calculateTax(price,taxRate){
     return  price*taxRate/100
}

let result2=calculateTax(result,taxRate)
console.log(result2);


function calculateFinalPrice(price,discount,taxRate){
    let discountprice= price*discount/100
    let discountedamount=price-discountprice
    let taxamount=discountedamount*taxRate/100
    return discountedamount+taxamount

}
let result3=calculateFinalPrice(basePrice,discountPercent,taxRate)
console.log(result3);


function isFreeShipping(finalPrice){
    if(finalPrice>=500){
        return "Free shipping"
    }
    else{
        return "Shipping:Rs.49"
    }
}
let result4=isFreeShipping(result3)
console.log(result4);


function getStockMessage(status){
    switch(status){
        case "in_stock":
            return "In Stock"
        case "limited":
            return "Limited Stock"
        default:
            return "Out of Stock"

    }
}
let result5=getStockMessage(stockStatus)
console.log(result5);


console.log(`
            Product name:${name}
            Price:${basePrice}
            Discount:${discountPercent}
            Tax:${taxRate}
            Status:${stockStatus}
            Discounted price:${result}
            Tax amount:${result2}
            FinalPrice:${result3}
            Shipping:${result4}
            StockMessage:${result5}




    
    `)












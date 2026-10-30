let name="phone"
let basePrice=85000
let discountPercent=10
let taxRate=10
let stockStatus="limited"
function calculateDiscountPrice(price,discount){
    let DiscountPrice= price*discount/100
    return price-DiscountPrice
}
let result=calculateDiscountPrice(basePrice,discountPercent)

console.log(result);

function calculateTax(price,taxRate){
    return price * taxRate/100
}
let result2=calculateTax(result,taxRate)
console.log(result2);

function calculatefinalprice(price,discount,taxRate){
    let pricediscount=price*discount/100
    let discountedprice=price-pricediscount
    let taxprice=discountedprice*taxRate/100
    return discountedprice+taxprice
}
let result3=calculatefinalprice(basePrice,discountPercent,taxRate)
console.log(result3);

function isFreeShipping(finalprice){
    if(finalprice>=500){
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
            return "in stock"
        
            case "limited":
                return "limited stock"
            
                default :
                    return "out of stock"
    }
}
let result5=getStockMessage(stockStatus)
console.log(result5);


console.log(`
    product name:${name}
    price:${basePrice}
    discount:${discountPercent}
    tax:${taxRate}
    stock:${stockStatus}
    discounted price:${result}
    tax amount:${result2}
    final price:${result3}
    isfreeshipping:${result4}
    getstockmessage:${result5}`);







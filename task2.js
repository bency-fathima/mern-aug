let name="nidheesh"
let baseprice=500
let discountpercent=30
let taxRate=20
let stockstatus="limited"

function calculateDiscountedPrice(price,discount){
    let discountprice=price*discount/100

    return price-discountprice
}
let result=calculateDiscountedPrice(baseprice,discountpercent)
console.log(result)

function calculateTax(price,taxRate){
    return price*taxRate/100
}
let result2=calculateTax(result,taxRate)
console.log(result2)


function calculateFinalPrice(price,discount,taxRate){
    let priceDiscount=price*discount/100
    let discountedprice=price-priceDiscount
    let taxprice=discountedprice*taxRate/100
    return discountedprice+taxprice
}
let result3=calculateFinalPrice(baseprice,discountpercent,taxRate)
console.log(result3)

function isFreeShipping(finalprice){
    if(finalprice>=500){
        return  "free shipping"
    }
    else{
        return "shipping:Rs.49"
    }
}
let result4=isFreeShipping(result3)
console.log(result4)

function getstockMessage(status){
    switch(status){
        case "in stock" :
            return "in stock"
            
            case "limited":
                return "limited stock"
                
                default :
                   return "out of stock"
    }
}
let result5=getstockMessage(stockstatus)
console.log(result5)

console.log(`product name:${name}
    price:${baseprice}
    discount:${discountpercent}
    tax:${taxRate}
    stock:${stockstatus}
    discounted price:${result}
    tax amount:${result2}
    final price:${result3}
     isFreeShipping:${result4}
        getstockMessage;:${result5}`)
     



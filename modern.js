// let name="nidhi"
// console.log(`my name is ${name}`)


// function add(a,b){
//     return a+b;
// }
// console.log(add(5,10))

// const add=(a,b) =>{
//       return a+b
// }
//  console.log(add(3,4))

//  const add=(a,b) =>a+b
//     console.log(add(10,20))
 
// function greet(name="nidhi"){
//     console.log(`hello${name}`)
// }
//  greet()
//  greet("nidheesh")


// function total(...numbers){
//     console.log(numbers)
// }
// total(10,20,30,40)

// function total(...numbers){
//     let sum=0
//     for(let num of numbers){
//         sum+=num
//     }
//     console.log(sum)
// }
// total(10,20,30,40)


// let numbers = [10, 20, 30];

// console.log(...numbers);


// let a = [10, 20];
// let b = [30, 40];

// let result = [...a, ...b];

// console.log(...result);


// let a = [10, 20];
// let b = [30, 40];

// let result = [10,20,30,40];

// console.log(...result);







// 14 wednesday wrk out


// let name="arun"
// let age=22
// let course="mernstack"
// console.log(`my name is${name}.iam ${age} years old and learning ${course}`)


// let product="keyboard"
// let price=800
// let quantity=2


// console.log(`product:${product}|price:₹${price}|quantity:${quantity}|total:₹${quantity*price}`)


// const a=20
// const b=30

// const add=(a,b)=>a+b;
// const multi=(a,b)=>a*b;
// const divi=(a,b)=>a/b;
// const sub=(a,b)=>a-b;

// console.log(add(20,30))
// console.log(multi(20,30))
// console.log(divi(20,30))
// console.log(sub(20,30))

// function greet(name="guest"){
//     console.log(`welcome${name}`)
// }
// greet("nidheesh")
// greet()


// function student(name,...mark){
//     console.log(`student name:${name}`)
//     console.log(`student mark:${mark}`)
// }
// student("nidhi",10,20,30,40)


// let frontend=["html","css","js"]
// let backend=["node","express","mongoDB"]
// let result=[...frontend,...backend]
// console.log(result)


// const student1=(name="nidhi",mark1,mark2,mark3)=>{
//     const total=mark1+mark2+mark3
//     const avarage=total/3
//     console.log(`student name:${name}`)
//     console.log(`total mark:${total}`)
//     console.log(`avarage mark:${avarage}`)
// }
//  student1("nidhi", 10,20,30)


 
// const printBill=  (...prices)=>  {
//     let total = 0;

//     for (let price of prices) {
//         total += price;
//     }


    
//     console.log(`Total Amount: ₹${total}`);
    
// };

// printBill(100, 200, 300);


// let employee={
//      name:"nidhi",
//      role:22,
//      salary:30000
// }
// let newemployee={...employee,salary:50000,department:"IT"}
// console.log(newemployee)

// let greet=(name="guest", value="morning")=>{
//     return(`welcome${name},good${value}`)
// }
// console.log(greet());



// let batch1=["nidhi","aju"]
// let batch2=["neema","sana","rishda"]
// let newbatch=["safuana",...batch1,...batch2]
// console.log(newbatch)

// const product=(name="phone",quantity=1,price=2000)=>{
//     return(`product${name} quantity${quantity} price${price}`)
// }
// console.log(product())


// document.getElementById("nn").innerHTML="hello"
// document.getElementsByClassName("ab")[0].innerHTML="hii"


// let name="nidheesh"
// let age=40
// let course="mern"

// console.log(`iam ${name}.my age is ${age} my course is ${course}mmm
//     nnnnn`)


// let colour=["yellow","red","blue"]
// for(let i=0;i<colour.length;i++){
//     console.log("colour",i+1,"=",colour[i]);
// }

// const student = {
//     name: "Nidheesh",
//     age: 22,
//     course: "MERN Stack"
// };

// for (const key in student) {
//     console.log(key,student[key]);

// }





const fruits = ["Apple", "Mango", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

// const fruits = ["Apple", "Mango", "Orange"];

// for (const index in fruits) {
//     console.log(fruits[index]);
// }



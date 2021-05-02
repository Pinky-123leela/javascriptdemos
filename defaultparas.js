function displayDetails(name="Tim",age=21){
    console.log(name+" "+age)
 
}
 
displayDetails("Scott")
 
function add(a,b){return a+b}

//arrow functions 
const add1 =  (c,d)=>c+d;
 
const sqr = (n)=>n*n;
 
console.log(sqr(4))
 
console.log(add1(3,6))

//arrow functions 
setTimeout(function(){console.log('greetings')},2000)
 
setTimeout(()=>console.log('greetings from arrow '),1000);
 
const factorial = (n)=>{
 
    let product  = 1;
    for(let i=1;i<=n;i++){
 
        product*=i
    }
    return product
 
}
 
console.log(factorial(5))
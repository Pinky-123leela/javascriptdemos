const greet=(message,...names)=>console.log(message+names.join(','))
 
console.log(greet("scrum meet is to be held","Sam","Amit","suhani"))
 
const power = (number,exp =2)=>Math.pow(number,exp)
 
console.log(power(4))
console.log(power(5,3))
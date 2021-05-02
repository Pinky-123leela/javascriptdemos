'use strict'
const ok = true
 
const nothing  = undefined
 
const nope = null 
 
const sam={first:'Sam',age:22}
 
sam.age = 24
 
const book = {
"main title":"JavaScript",
"sub-title":"A Excellent Guide to JS",
author:{
    firstname:"Joe",
    surname:"Davengan"
}
 
}
//add  a new property
 
book.edition = 3
 
let title =  book["main title"]
console.log(title)
 
delete book.author
 
delete book.edition
 
let obj = {x:1,y:2,z:3}.toString();
 
console.log(obj)
 
let point ={
    x:10,
    y:10,
    toString:function(){return `(${this.x},${this.y})`}
}
 
console.log(point)
 
let a=23,b=45;
let obj2 = {
    a:a,
    b:b
}
 
let obj3 = {a,b}
let sum = obj3.a + obj3.b
console.log(sum)

 //spread operation
let position = {x1:0,y1:0}
 
let dimensions = {w:100,h:75}
 
let rect={...position,...dimensions}
 
console.log("x axis" +rect.x1 +" y axis " +rect.y1 +" width "+rect.w+" height"+rect.h)
 
let o = {x:1}
let p = {x:0,...o}
 
let q = {...o,x:2}
console.log(p.x)
console.log(q.x)
 
let square={
 
area(){return this.side * this.side;},
side:10
 
};
 
console.log(square.area());

/* let pet = {

    name:'marley',
    get getName(){return this.name},
    set setName(value){this.name = value}
    


}
console.log(pet.getName());
 */

//enhance for loop
const names1 =['pinky','tinku']
for (const name of names1)
{
    console.log(name)
}
//destructive
const names2 =['pinky','tinku']
for (const [index,name] of names2.entries())
{
    console.log(index + '' +name)
}

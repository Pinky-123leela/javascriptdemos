//varargs
//add(int...nums) //array nums 
//in js  - rest ...
const max = function(...values){
 
    console.log(values instanceof Array)
 
    let large = values[0]
 
    for(let i=0;i<values.length;i++)
    {
        if(values[i] > large){
 
            large =  values[i]
        }
    
    }
    return large;
 
}
 
console.log(max(3,46,12,56,76,343,655))
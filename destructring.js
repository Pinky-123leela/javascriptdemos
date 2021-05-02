let [a,b] =[1,2]
console.log(`a ${a} b ${b}`)

const {lat,lon,fav=true} ={lat:87.89,lon:67}

console.log(lat)
//destructring
const sam={name: `leela`, address:`vizag`}
const printInfo = function(person){
    console.log(`Name :${person.name} address :${person.address}`)
}

printInfo(leela)
const {name,address} =leela
console.log(`Address ${address}`)

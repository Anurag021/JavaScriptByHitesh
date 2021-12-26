var myMap = new Map()

myMap.set(1,"Uno")
myMap.set(2,"Dos")
myMap.set(3,"Tres")

// console.log(myMap)

// for (let key of myMap.keys()){
//     console.log(`key is ${key}`)
// }
// for (let [key,value] of myMap){
//     console.log(`key is ${key} and the value is ${value}`)
// }

// myMap.forEach((key)=> console.log(`value is ${key}`))

myMap.forEach((key,value)=> console.log(`value is ${key} and the key is ${value}`))

// for each used to give value when itearted 

// whereas for of will provide keys and value as per the request
// for of will give key first and then value and opposite is for foreach
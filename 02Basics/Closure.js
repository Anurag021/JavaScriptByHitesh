// function init(){
//     var firstName =  "Anurag"
//     console.log("i am init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName
// }

// var value = init()
// // the context has not just removed after that it
// just remains in the memory because of return sayFirstName (which passes the refernece)
// value()
// //is a closure
// --imp-- untill single reference is availabe it will not go away
function doAddition(x){
    return function(y){
        return x + y
    }
}

var value = doAddition(5) // value is holding execution of doAddition when this 
//executin happens it just returns reference

console.log(value)

 
console.log(value(8)); // hence it will be executed as closure function

// first value is holding up reference and then the next value() is executing it

console.log(doAddition(9)(8)); // similar to above also works
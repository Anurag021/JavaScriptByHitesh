var authenticatin = false

// if (authenticatin){
//     console.log ("show signIn button")
// }else{
//     console.log("show login button")
// }

//Terniary Operator
// authenticatin ? console.log("Show SignIn buttone") : console.log("Show Login Button")


//Switch Case
// var value = 2

// switch (value) {
//     case 1:
//         console.log("This is the first case")
//         break;
//     case 2:
//          console.log("This is the 2nd case")
//          break;
//     case 3:
//         console.log("This is the 3 case")        
//         break
//     default:
//         console.log("invalid Case")
//         break;
// }

//FUNCTIONSSSSS
function getUserRole (name, role){

    switch (role) {
        case "admin": 
            return `${name} is admin with all the access`
        case "subadmin": 
            return `${name} is having access to create and delete courses `
        case "testprep": 
            return `${name} having access to create and delete test`
        default:
            return `${name} is an invalid user`
    }
}

console.log( getUserRole("Anurag", "Subadmin"))

// this is the way to dofunctional programming
var toPrint = getUserRole("functionalProgramming","admin")
console.log(toPrint)
function init(){
    var firstName =  "Anurag"
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName()
}

init()
//the contect of the code finishes up at this point of time..
// hence the below fisrt name will throw error
console.log(firtName);
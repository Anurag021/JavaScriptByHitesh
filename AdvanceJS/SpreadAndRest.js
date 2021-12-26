function sumOne(a,b){
    return a+b
}

var myArgs = [5,9]
// console.log(sumOne(myArgs));
//will not process correctly as no of argumants doesnot match hence gibrish value

console.log(sumOne(...myArgs));
// here it will act as an spread operator, spread op 

//++++++++++++++++++
function addAll(...args)//here this is working as Rest it takes the inut and divide it into diffrent characters
{
    console.log(args)
    var sum = 0
    for (const arg of args) {
        console.log(arg)
        sum += arg
    }    
    console.log(sum)
    return sum
}
console.log(addAll(1,2,3,4,5));
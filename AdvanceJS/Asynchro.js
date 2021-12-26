const Uno = ()=>{
    return "I am one";
}
const Dos =  ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am two") ;
        },3000)  
    })
    
}

const Tres = ()=>{
    return "I am three";
}

const callMe = async() =>{
    let valOne = Uno();
    console.log(valOne)

    let valTwo = await Dos();
    console.log(valTwo)

    let valThree = Tres();
    console.log(valThree)
}

callMe()
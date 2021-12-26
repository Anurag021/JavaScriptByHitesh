const Uno = ()=>{
    console.log("I am one");
}
const Dos = ()=>{
    setTimeout(()=>{console.log("Wohooooo")},2000)
    console.log("I am Two");
}

const Tres = ()=>{
    console.log("I am Three");
}

Uno();
Dos();
Tres()
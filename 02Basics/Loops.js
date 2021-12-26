//FOR EACH--->
// var myStates = ["Uttarakhand","Delhi","Mumbai"]

// myStates.forEach((s)=>console.log(s))

//FOR OF

const socialMedia = ["Youtube","Instagram","Facebook", "Netflix"]

for (const n of socialMedia ){
    console.log(n)
}


const symbol = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
    lco: "LearnCodeOnline"
}

for (const n in symbol){
    console.log(` The key is : ${n} and the symbol is : ${symbol[n]}
    `)
}
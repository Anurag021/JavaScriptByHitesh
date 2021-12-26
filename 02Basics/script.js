var counter = document.querySelector(".counter")
var counte = document.getElementsByClassName("counter")
var followers = document.querySelector(".followers")

let count = 1;
console.log(counte)
setInterval(()=>{
    if(count<10){
        counte[0].innerText = count;
        count ++
    } },100)


    setTimeout(()=>{
        followers.innerText = "Counting Fininshed, now do your work"
    },5000)
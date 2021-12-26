const courses =[
    {name: "Complete Course On React",
        price: "5.5"},
    {name: "Complete Course On Angular",
        price: "8.5"},
    {name: "Complete Course Of java",
        price: "1.5"},
    {  name: "Complete Course Of C++",
        price: "3.5"}]

function generateLIST(){
const ul = document.querySelector(".list-group")
ul.innerHTML = ""

    courses.forEach((course)=>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$"+ course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
    })
}

window.addEventListener("load", generateLIST)

// code to sort and show data
const button = document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price - b.price);
    generateLIST()
})

// code for descending
const descbutton = document.querySelector(".sort-desc-btn")
descbutton.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price -a.price);
    generateLIST()
})


// Testing  videos for the tutorials

// let me do sme of the chanages that can be refledted inthsi code

// so that it can be saved

fetch("https://api.chucknorris.io/jokes/random")
.then((response)=> {return response.json()})
.then((data)=>{
    console.log("JOKE :" , data.value);
})


fetch("https://api.chucknorris.io/jokes/random")
.then((response)=> {console.log(response)})
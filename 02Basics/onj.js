var user = {
    namee : "anu",
    getUserName : function (){
        console.log(`userName is ${this.namee}`)
    }
}

var anurag = Object.create(user)

console.log(anurag)
anurag.namee = "Anurag Rawat"

anurag.getUserName()
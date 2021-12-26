var user = function (firstName, courseCount){
    this.firstName = firstName
    this.courseCount = courseCount
    this.getCourseCount = function (){
        console.log(`course count is : ${this.courseCount}`)
    }}

    user.prototype.WelcomeBoy= function() {
        console.log(`Welcome ${this.firstName} to the course`)
    }

    var anurag = new user("anurag", 5)
    console.log(user.hasOwnProperty("firstName"))

    anurag.getCourseCount()
    if(anurag.hasOwnProperty("firstName")){
        console.log("True")
        anurag.WelcomeBoy()
    }
    
    
   
    // var sam = new user("sam",2)
    // sam.getCourseCount()

   
var user = {
    firstName : "Anurag",
    lastName : "Rawat",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 7", this)

        function sayHello(){
            console.log("Hello")
            console.log("LINE 10", this)
        }
        sayHello()
    }
}

user.getCourseCount()
// console.log(user.getCourseCount())
const User = require("./LearnClasses.js")

const Anurag = new User("Anurag", "Anu.rawat@test.com")
 
console.log(Anurag.getInfo());

Anurag.enrollCourse("ReactJS")
Anurag.enrollCourse("AngularJS")

console.log(Anurag.getCourseList());

// how to loop through array 

let courses = Anurag.getCourseList()

courses.forEach(c=>{
    console.log(c)
})
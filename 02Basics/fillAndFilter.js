// var testArray = [2,4,6,8,9];

// console.log(testArray.fill("h",2,4))

// var testArr = [15,25,35,55,76,88,92]

// console.log(testArr.filter((num)=>(num<50)))

var user = {
    firstName : "Anurag",
    lastName: "Rawat",
    role : "admin",
    loginCount : 32,
    courseList:[],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return ` ${this.firstName} is enrolled in the total no of ${this.courseList.length} Courses`
    },

    info : function(){
        return `the name of user is ${this.firstName} ${this.lastName} is having role as ${this.role} have been enroll in 
        ${this.courseList.length}`
    }
    
}

console.log(user.getCourseCount())
user.buyCourse("Angular Course")
console.log(user.getCourseCount())

console.log(user.info())
// console.log(onePlus.modelNo)

// console.log(onePlus["camera"])
class  User {

    //constructor will run as soon as object is created
    constructor ( name, email){
        this.name = name;
        this.email = email;
    }

    // function can be defined in that way also people call it method
    courseList = []
    getInfo (){
        return{
            name: this.name, email : this.email
        }; }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList(){
        return this.courseList
    }
     login(){
        return "You are logged in"
    }
    static  Slogin(){
        return "You are Static logged in"
    }
}
// we can put our class seprate and the use it in some other file
// hence we are going to export this class
module.exports = User;

// const Anu = new User("Anu","anuka@gmail.com")

// console.log(Anu.getInfo());
// Anu.enrollCourse("ReacJi")

// console.log(Anu.getCourseList());
// console.log(Anu.getCourseList)

class  subAdmin extends User {
    constructor(name, email){
        super(name, email)
    }

    getAdminInfo(){
        return "I Am an SubAdmin"
    }

    login(){
        return "Login for Sub Admin Only"
    }
}

const tom = new subAdmin ("tom","tom@jerry.com")
console.log(tom.getAdminInfo());
console.log(tom.login());
// console.log(tom.Slogin());

console.log(tom.getInfo());
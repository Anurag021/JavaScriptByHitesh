const anurag = {
    firstName : "Anurag",
    lastName : "Rawat",
    Role : "Assistant Manager",
    getInfo : function(){
        console.log(`
        The Fist Name is ${this.firstName}
        and the last Name is ${this.lastName}
        is currrently having Role of ${this.Role}
        `)
    }}

    console.log(anurag)

    const DJ = {
        firstName : "Dwayne",
        lastName : "Johnson",
        Role : "Rock"
    }

    // console.log(DJ);

    // var DJinfo = anurag.getInfo.bind(DJ)
    // DJinfo()

    // anurag.getInfo.bind(DJ)()

    // console.log(DJ)
    // console.log(DJ.getInfo);
    
    anurag.getInfo.call(DJ)
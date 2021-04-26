const Employee = require("./Employee");

//I need a super in my constructor for name id and email
class Engineer extends Employee {
    constructor (name, role, id, email, github) {
        super(name, role)
        this.github = github
        this.email = email
        this.id = id
    }

    getgithub(){
        return this.github
    }

    getroles(){
        return 'Engineer'
    }
};

module.exports= Engineer
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role)
        this.school = school
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getschool() {
        return this.school
    }

    getroles() {
        return 'Intern'
    }
}

module.exports = Intern
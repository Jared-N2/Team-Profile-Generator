const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, id)
        this.officeNumber = officeNumber
        this.email = email;
        this.role = role
        this.id = id
        
    }

    getofficeNumber() {
        return this.officeNumber
    }

    getroles() {
        return 'manager'
    }
}

module.exports = Manager
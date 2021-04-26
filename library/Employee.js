class Employee {
    constructor (name, role, id, email,) {
       this.name = name;
       this.role = role;
       this.id= id;
       this.email= email;
    } 
    
    getname(){
        return this.name
    }

    getid(){
        return this.id
    }

    getemail(){
        return this.email
    }
    
    getroles(){
    return 'Employee'
};

}

module.exports= Employee


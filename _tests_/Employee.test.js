const Employee= require ('../library/Employee')

describe('Employee', () => {
    it ('should create a new employee', () => {
        const employee = new Employee()

        expect(typeof(employee)).toBe('object')

    });
})
describe('Employee Name', () => {
    it ('should create a new employee with a name', () => {
        const employee = new Employee('name')

        expect(employee.name).toBe('name')

    })
})
describe('Employee id', () => {
    it ('should create a new employee with an Id', () => {
        const employee = new Employee('name', id)

        expect(employee.id).toBe(id)

    })
})
describe('Employee email', () => {
    it ('should create a new employee with an email', () => {
        const employee = new Employee('name', 'id', 'email')

        expect(employee.email).toBe('email')

    })
})
describe('Employee Name', () => {
    it ('should create a new employee with a name', () => {
        const employee = new Employee('name', 'id', "email")

        expect(employee.getname()).toBe('name')

    })
})
describe('Employee Id', () => {
    it ('should create a new employee with an Id of 5', () => {
        const employee = new Employee('name', id, "email")

        expect(employee.getid()).toBe(id)

    })
})
describe('Employee email', () => {
    it ('should create a new employee with an email', () => {
        const employee = new Employee('name', 'id', 'email')

        expect(employee.getemail()).toBe('email')

    })
})
describe('Employee roles', () => {
    it ('should create a new employee with their role', () => {
        const employee = new Employee('name', 'id', "email",)

        expect(employee.getroles()).toBe('Employee')

    })
})
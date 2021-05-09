// creates the class for all employees to use and creates functions to pass the tests
class Employee {
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        var employee = new Employee('Nate', '24', 'n8dogg59@hotmail.com');
        return employee.constructor.name;
    }
}    

module.exports = Employee;
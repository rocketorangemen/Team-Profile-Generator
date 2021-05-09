// creates the functions to pass the tests for the office phone number and verifies the role

const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    officeNumber() {
        return this.number;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
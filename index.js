// Write your solution in this file!
const employee = {
    name: "John",
    Address: "123 Nowhere Road"
} 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key];
    return newEmployee;
} 

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}
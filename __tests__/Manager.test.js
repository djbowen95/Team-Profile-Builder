const Manager = require("../library/Manager");

test("Office Number", () => {
    const officeNo = 4263;
    const employee = new Manager("James", 2212, "james@fakeemail.com", officeNo);
    expect(employee.officeNo).toEqual(officeNo);
})

test("Get Office Number Function", () => {
    const officeNo = 4263;
    const employee = new Manager("James", 2212, "james@fakeemail.com", officeNo);
    expect(employee.getOfficeNo()).toEqual(officeNo);
})


test("Get Role Function", () => {
    const role = "Manager";
    const employee = new Manager();
    expect(employee.getRole()).toEqual(role);
})
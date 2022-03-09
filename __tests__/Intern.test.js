const Intern = require("../lib/Intern");

test("School", () => {
    const school = "Kings Hill High";
    const employee = new Intern("James", 2212, "james@fakeemail.com", school);
    expect(employee.school).toEqual(school);
})

test("Get School Function", () => {
    const school = "Kings Hill High";
    const employee = new Intern("James", 2212, "james@fakeemail.com", school);
    expect(employee.getSchool()).toEqual(school);
})


test("Get Role Function", () => {
    const role = "Intern";
    const employee = new Intern();
    expect(employee.getRole()).toEqual(role);
})
const Engineer = require("../library/Engineer");

test("GitHub", () => {
    const github = "jamesmakeswebsites";
    const employee = new Engineer("James", 2212, "james@fakeemail.com", github);
    expect(employee.github).toEqual(github);
})

test("Get Office Number Function", () => {
    const github = "jamesmakeswebsites";
    const employee = new Engineer("James", 2212, "james@fakeemail.com", github);
    expect(employee.getGitHub()).toEqual(github);
})


test("Get Role Function", () => {
    const role = "Engineer";
    const employee = new Engineer();
    expect(employee.getRole()).toEqual(role);
})
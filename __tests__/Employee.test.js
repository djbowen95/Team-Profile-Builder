const Employee = require('../library/Employee');

describe('Employee constructor', () => {
    // Initialization test would be good. 

    describe('Properties',() => {
        it('Name', () => {
            const name = "Marlin";
            const employee = new Employee(name);

            expect(employee.name).toEqual("Marlin");
        });

        it('ID', () => {
            const id = 27;
            const employee = new Employee("Nemo", id);

            expect(employee.id).toEqual(27);
        });

        it('Email', () => {
            const email = "dory@thefish.com";
            const employee = new Employee("Dory", 39, email);

            expect(employee.email).toEqual("dory@thefish.com");
        });
    });

    describe('Methods', () => {});
})
// test("Name", () => {
//         const name = "James";
//         const employee = new Employee(name);
//         expect(employee.name).toEqual(name);
// })

// test("ID", () => {
//     const id = 453;
//     const employee = new Employee("James", id);
//     expect(employee.id).toBe(id);
// })

// test("Email", () => {
//     const email = "James@FakeEmail.com";
//     const employee = new Employee("James", 434, email);
//     expect(employee.email).toBe(email);
// })

// test("Get Name Function", () => {
//     const name = "James";
//     const employee = new Employee(name);
//     expect(employee.getName()).toEqual(name);
// })

// test("Get ID Function", () => {
//     const id = 1124;
//     const employee = new Employee("James", id);
//     expect(employee.getId()).toEqual(id);
// })

// test("Get Email Function", () => {
//     const email = "james@fakeemail.com";
//     const employee = new Employee("James", 424, "james@fakeemail.com");
//     expect(employee.getEmail()).toEqual(email);
// })


// test("Get Role Function", () => {
//     const role = "Employee";
//     const employee = new Employee("James", 453, "james@fakeemail.com");
//     expect(employee.getRole()).toEqual(role);
// })

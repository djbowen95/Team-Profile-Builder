const Employee = require("../library/Employee");
const Manager = require("../library/Manager");

describe("Manager", () => {
    describe("Properties", () => {
        it("Office Number", () => {
            const officeNo = 25;
            const manager = new Manager("Bruce", 16, "bruce@theshark.com", officeNo);

            expect(manager.officeNo).toEqual(25);
        });
        
    });

    describe("Methods", () => {
        it(".getOfficeNo()", () => {
            const officeNo = 26;
            const manager = new Manager("Nigel", 17, "nigel@thepelican.net", officeNo);

            expect(manager.getOfficeNo()).toEqual(26);
        });

        it(".getRole()", () => {
            const name = "Darla";
            const manager = new Manager(name);

            expect(manager.getRole()).toEqual("Manager");
        })
    });

    describe("Inheritance", () => {
        it("Properties", () => {
            const name = "Nemo";
            const manager = new Manager(name);

            expect(manager.name).toEqual("Nemo");
        });

        it("Methods", () => {
            const name = "Marlin";
            const manager = new Manager(name);

            expect(manager.getName()).toEqual("Marlin");
        });

        it("Manager is an instance of Employee", () => {
            const name = "Dory";
            const manager = new Manager(name);
            
            expect(manager).toBeInstanceOf(Employee);
        });
    });
})

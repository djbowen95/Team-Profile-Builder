const Employee = require("../library/Employee");
const Intern = require("../library/Intern");

describe("Intern subclass", () => {
  describe("Properties", () => {
    it("School", () => {
      const school = "Mr. Ray's School for Fish";
      const intern = new Intern("Nemo", 1, "nemo@thefish.com", school);

      expect(intern.school).toEqual("Mr. Ray's School for Fish");
    });
  });

  describe("Methods", () => {
    it(".getSchool()", () => {
        const school = "Mr. Ray's Adult Learning Centre for Fish with Poor Memories";
        const intern = new Intern("Dory", 2, "dory@thefish.com", school);
        
        expect(intern.getSchool()).toEqual("Mr. Ray's Adult Learning Centre for Fish with Poor Memories");
    });
    it(".getRole()", () => {
        const school = "Mr. Ray's Summer Camp for Turtles";
        const intern = new Intern("Squirt", 3, "squirt@turtlebay.com", school);

        expect(intern.getRole()).toEqual("Intern");
    })


  });

  describe("Inheritance", () => {
    it("Properties", () => {
        const name = "Nemo";
        const intern = new Intern(name);

        expect(intern.name).toEqual("Nemo");
    });
    it("Methods", () => {
        const name = "Dory";
        const intern = new Intern(name);

        expect(intern.getName()).toEqual("Dory");
    })
    it("Is instance of Employee", () => {
        const name = "Marlin";
        const intern = new Intern(name);

        expect(intern).toBeInstanceOf(Employee);
    })
  });
});

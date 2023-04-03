const Employee = require("../library/Employee");

describe("Employee constructor", () => {
  describe("Properties", () => {
    it("Name", () => {
      const name = "Marlin";
      const employee = new Employee(name);

      expect(employee.name).toEqual("Marlin");
    });

    it("ID", () => {
      const id = 27;
      const employee = new Employee("Nemo", id);

      expect(employee.id).toEqual(27);
    });

    it("Email", () => {
      const email = "dory@thefish.com";
      const employee = new Employee("Dory", 39, email);

      expect(employee.email).toEqual("dory@thefish.com");
    });
  });

  describe("Methods", () => {
    it(".getName()", () => {
      const name = "Marlin";
      const employee = new Employee(name);

      expect(employee.getName()).toEqual("Marlin");
    });

    it(".getId()", () => {
      const id = 27;
      const employee = new Employee("Nemo", 27);

      expect(employee.getId()).toEqual(27);
    });

    it(".getEmail()", () => {
      const email = "dory@thefish.com";
      const employee = new Employee("Dory", 39, email);

      expect(employee.getEmail()).toEqual("dory@thefish.com");
    });
    it(".getRole()", () => {
      const employee = new Employee("Crush", 1012, "crush@turtlebay.net");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});

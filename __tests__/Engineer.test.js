const Employee = require("../library/Employee");
const Engineer = require("../library/Engineer");

describe("Engineer subclass", () => {
    describe("Properties", () => {
        it("GitHub", () => {
            const gitHub = "GillsGits";
            const engineer = new Engineer("Gill", 10, "Gill@dentist-aquarium.net", gitHub);

            expect(engineer.gitHub).toEqual("GillsGits");
        });
    });
    
    describe("Methods", () => {
        it(".getGitHub()", () => {
            const gitHub = "BubblesBuilds";
            const engineer = new Engineer("Bubbles", 11, "Bubbles@dentist-aquarium.net", gitHub);

            expect(engineer.getGitHub()).toEqual("BubblesBuilds");
        });

        it(".getRole()", () => {
            const gitHub = "PeachtheStarFish";
            const engineer = new Engineer("Peach", 12, "Peach@dentist-aquarium.net", gitHub);

            expect(engineer.getRole()).toEqual("Engineer");
        })
    });

    describe("Inheritance", () => {
        it("Properties", () => {
            const name = "Marlin";
            const engineer = new Engineer(name);
      
            expect(engineer.name).toEqual("Marlin");
        });

        it("Method", () => {
            const name = "Nemo";
            const engineer = new Engineer(name);

            expect(engineer.getName()).toEqual("Nemo");
        });

        it("Is an instance of Employee", () => {
            const name = "Dory";
            const engineer = new Engineer(name);

            expect(engineer).toBeInstanceOf(Employee);
        })
    })
})

// test("GitHub", () => {
//     const github = "jamesmakeswebsites";
//     const engineer = new Engineer("James", 2212, "james@fakeemail.com", github);
//     expect(engineer.github).toEqual(github);
// })

// test("Get Office Number Function", () => {
//     const github = "jamesmakeswebsites";
//     const engineer = new Engineer("James", 2212, "james@fakeemail.com", github);
//     expect(engineer.getGitHub()).toEqual(github);
// })

// test("Get Role Function", () => {
//     const role = "Engineer";
//     const engineer = new Engineer();
//     expect(engineer.getRole()).toEqual(role);
// })
const Engineer = require("../library/Engineer");

describe("Engineer subclass", () => {
    describe("Properties", () => {
        it("GitHub", () => {
            const gitHub = "GillsGits";
            const employee = new Engineer("Gill", 10, "Gill@dentist-aquarium.net", gitHub);

            expect(employee.gitHub).toEqual("GillsGits");
        });
    });
    
    describe("Methods", () => {
        it(".getGitHub()", () => {
            const gitHub = "BubblesBuilds";
            const employee = new Engineer("Bubbles", 11, "Bubbles@dentist-aquarium.net", gitHub);

            expect(employee.getGitHub()).toEqual("BubblesBuilds");
        });

        it(".getRole()", () => {
            const gitHub = "PeachtheStarFish";
            const employee = new Engineer("Peach", 12, "Peach@dentist-aquarium.net", gitHub);

            expect(employee.getRole()).toEqual("Engineer");
        })
    });
})

// test("GitHub", () => {
//     const github = "jamesmakeswebsites";
//     const employee = new Engineer("James", 2212, "james@fakeemail.com", github);
//     expect(employee.github).toEqual(github);
// })

// test("Get Office Number Function", () => {
//     const github = "jamesmakeswebsites";
//     const employee = new Engineer("James", 2212, "james@fakeemail.com", github);
//     expect(employee.getGitHub()).toEqual(github);
// })

// test("Get Role Function", () => {
//     const role = "Engineer";
//     const employee = new Engineer();
//     expect(employee.getRole()).toEqual(role);
// })
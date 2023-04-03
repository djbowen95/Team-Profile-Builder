const prompts = require("../library/prompts");

// "Must be a mock or spy function".

describe(("Test framework"), () => {
    const called = prompts.begin();

    expect(prompts.begin()).toHaveBeenCalled();
})
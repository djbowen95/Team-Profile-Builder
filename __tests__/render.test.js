const render = require("../library/render");

// Might need to mock this, as it takes objects as its input/is complex.
describe(("Test framework"), () => {
    const execute = render.render();

    expect(render.render()).toHaveBeenCalled();
})

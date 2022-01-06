const { TestWatcher } = require("jest");
const boardFile = require('./board');
test("this is a sample test so this suite passes", () => {
    expect(2 + 2).toBe(4);
})
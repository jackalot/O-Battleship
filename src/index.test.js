const shipFile = require('./ship');
const { TestWatcher } = require("jest");

test("ship factory returns an object", () => {
    expect(shipFile( coord1 = [1, 1], coord2 = [1, 7])).toStrictEqual({ coord1: [1, 1], coord2: [1, 7]});
})
test.only("ship factory return a length of 6", () => {
    expect(shipFile({ coord1: [1, 1], coord2: [1, 7]}).toBe({length: 6}));
})
test("ship factory will get hit at [1, 1]", () => {
    expect(shipFile.shipFactory.hit([1, 1], { coord1: [1, 1], coord2: [1, 7]})).toBe(true);
})
test("ship factory will not sink", () => {
    expect(shipFile.shipFactory.sink().toBe(false));
})
const indexFile =  require('index');

test("ship factory returns an object", () => {
    expect(indexFile.shipFactory([1, 2], [1, 4])).toBe(typeof({}));
})
test("ship factory return a length of 6", () => {
    expect(indexFile.shipFactory({ coord1: [1, 1], coord2: [1, 7]}).toBe({length: 6}));
})
test("ship factory will get hit at [1, 1]", () => {
    expect(indexFile.shipFactory.hit([1, 1], { coord1: [1, 1], coord2: [1, 7]})).toBe(true);
})
const indexFile =  require('./index');

test.only("ship factory returns an object", () => {
    expect(indexFile.shipFactory({ coord1: [1, 1], coord2: [1, 7]}).toBe(typeof({})));
})
test("ship factory return a length of 6", () => {
    expect(indexFile.shipFactory({ coord1: [1, 1], coord2: [1, 7]}).toBe({length: 6}));
})
test("ship factory will get hit at [1, 1]", () => {
    expect(indexFile.shipFactory.hit([1, 1], { coord1: [1, 1], coord2: [1, 7]})).toBe(true);
})
test("ship factory will not sink", () => {
    expect(indexFile.shipFactory.sink().toBe(false));
})
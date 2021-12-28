const indexFile =  require('index');

test("ship factory returns an object", () => {
    expect(indexFile.shipFactory(3)).toBe(typeof({}));
})

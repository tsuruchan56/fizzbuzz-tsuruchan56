
const  toCounter = require('./index.ts');

test("fizzbuzzのユニットテスト", () => {
    expect(() => toCounter('test')).toThrow(RangeError);

});
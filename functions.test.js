const functions = require('./functions');
// toBe()
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});


// .not() - to be falsy
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});


// isNull()
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Should be falsy
// feed null into check value method, expect it to be falsy- 
// null is a false value.. so this passes
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// to be is for primitave types like numbers, an object is a reference type, so even though the objects look the same, they're actually different memory
test('User should be Barkley Santo object', () => {
  expect(functions.createUser()).toEqual({ firstName: "Barkley", lastName: "Santo" });
});


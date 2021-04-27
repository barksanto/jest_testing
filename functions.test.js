const axios = require('axios');
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

// to be is for primitave types like numbers, an object is
// a reference type, so even though the objects look the same, they're actually different memory
test('User should be Barkley Santo object', () => {
  expect(functions.createUser()).toEqual({ firstName: "Barkley", lastName: "Santo" });
});

// Less than and greater than
// No test key in other file
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;

  expect(load1 + load2).toBeLessThan(1600);
});


// regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ['bark', 'alex', 'mango', 'admin'];

  expect(usernames).toContain('admin');
});


// working with async data
// Promise
test("Username fetched should be Leanne Graham", () => {
  // used when testing async code to make sure that the asserions ina callback or in this
  // case a .then of a promise actually get called
  // expect.assertions(1);
  // need to return the promise first or the test will complete before the fetch request is finished
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

// Async Await - similar to above
test("Username fetched should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');

});

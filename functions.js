// These are our tests - add, isNull...
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Barkley" }
    user["lastName"] = "Santo";

    return user
  }
  // add: function (num1, num2) {
  //   return num1 + num2
  // }
}

// export the object
module.exports = functions;
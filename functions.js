const { default: axios } = require("axios");

// These are our tests - add, isNull...
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Barkley" }
    user["lastName"] = "Santo";

    return user
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),
}

// export the object
module.exports = functions;
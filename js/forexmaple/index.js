let id = Symbol("id");
let user = {
  name: "John",
  [id]: 2,
};


// user[id] = 1;
// user[id] = 4;
// user.id = 66;

console.log(user);

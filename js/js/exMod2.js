// exMod2.js

function User(name, gender) {
  this.name = name;
  this.gender = gender;
}
User.prototype.info = function () {
  return `name: ${this.name}, gender: ${this.gender}`;
};

const user1 = new User("Alice", "female");
const user2 = new User("Bob", "male");

export { User, user1, user2 };

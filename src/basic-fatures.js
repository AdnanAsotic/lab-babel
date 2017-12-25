// Expression bodies
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Statement bodies
var odds = data.map(v => v + 1);
odds.forEach(v => {
  if (v % 5 === 0) console.log(v);
});

// lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

bob.printFriends();

// lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]
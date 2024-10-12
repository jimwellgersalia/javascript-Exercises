// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
userExclamation = [];
const newArray = array.forEach(item => userExclamation.push(item.username + '!',));
//Andrei Answer
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
})
console.log(userExclamation);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(item => item.username + '?');
//Andrei Answer:
const mapArray = array.map(user => {
  let { username } = user;
  return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(item => item.team === "red");
console.log(filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((acc, item) => {
   return acc + item.score;
}, 0); //Accumalator value

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//Value of i is the index of the array.
  0,1,2,3,4,5

//Making function pure.
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num*2);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const exclamationArray = array.map((user) =>{
  user.items = user.items.map(item => item + '!');
  return user
});

console.log(exclamationArray);

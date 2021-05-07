console.log("hello world");

let database = [
	{
		username: "John",
		password: "secret"
	},

	{
		username: "Alison",
		password: "topsecret"
	},

	{
		username: "Jay",
		password: "supersecret"
	}
];

let newsFeed = [
	{
		username: "Timmy",
		timeline: "So tired from the long drive!"
	},

	{
		username: "Sara",
		timeline: "Had fun at mom's!"
	}
];

let userNamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
	for (let i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, username and/or password not found.")
	}
}

signIn(userNamePrompt, passwordPrompt);
var galLiter = function(gallons) {
	return gallons * 3.78541;
};

var teaTable = function(teaspoon) {
	return teaspoon / 3;
};

var cupFluidOunce = function(cup1) {
	return cup1 * 8;
};

var cupPint = function(cup2) {
	return cup2 /2;
};

var pintQuart = function(pint) {
	return pint /2;
};

var gallons = parseInt(prompt("How many gallons?"));

alert("That equals " + galLiter(gallons) + " in liters.");

var teaspoon = parseInt(prompt("How many teaspoons?"));

alert("That equals " + teaTable(teaspoon) + " in tablespoons.");

var cup1 = parseInt(prompt("How many cups?"));

alert("That equals " + cupFluidOunce(cup1) + " in fluid ounces.");

var cup2 = parseInt(prompt("How many cups?"));

alert("That equals " + cupPint(cup2) + " in pints.");

var pint = parseInt(prompt("How many pints?"));

alert("That equals " + pintQuart(pint) + " in quarts.");

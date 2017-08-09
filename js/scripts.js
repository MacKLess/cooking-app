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



$(document).ready(function(){
	$("form#gaLt").submit(function(event) {
		event.preventDefault();
		var gallons = parseInt($("#galLiter").val());
		var result = galLiter(gallons);

		$("#output").text(result);
	});

	$("form#teTa").submit(function(event) {
		event.preventDefault();
		var teaspoon = parseInt($("#teaTable").val());
		var result = teaTable(teaspoon);

		$("#output").text(result);
	});

	$("form#cuFo").submit(function(event) {
		event.preventDefault();
		var cup1 = parseInt($("#cupFluidOunce").val());
		var result = cupFluidOunce(cup1);

		$("#output").text(result);
	});

	$("form#cuPi").submit(function(event) {
		event.preventDefault();
		var cup2 = parseInt($("#cupPint").val());
		var result = cupPint(cup2);

		$("#output").text(result);
	});

	$("form#piQu").submit(function(event) {
		event.preventDefault();
		var pint = parseInt($("#pintQuart").val());
		var result = pintQuart(pint);

		$("#output").text(result);
	});

});





// alert("That equals " + galLiter(gallons) + " in liters.");



// alert("That equals " + teaTable(teaspoon) + " in tablespoons.");



// alert("That equals " + cupFluidOunce(cup1) + " in fluid ounces.");



// alert("That equals " + cupPint(cup2) + " in pints.");



// alert("That equals " + pintQuart(pint) + " in quarts.");

function checkForm() {
	var name = document.forms["orderForm"]["name"].value;
	var city = document.forms["orderForm"]["city"].value;
	var address = document.forms["orderForm"]["address"].value;
	var payment = document.forms["orderForm"]["payment"].value;
	var quantity = document.forms["orderForm"]["quantity"].value;
	if (name == "") {
			alert("Name must be filled out");
			return false;
	} else if (city == "") {
			alert("City must be filled out");
			return false;
	} else if (address == "") {
			alert("Address must be filled out");
			return false;
	} else if (payment == "") {
			alert("Payment must be filled out");
			return false;
	} else if (quantity == "") {
			alert("Quantity must be filled out");
			return false;
	}
}
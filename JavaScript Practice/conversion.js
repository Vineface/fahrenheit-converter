const toFahrenheit = (fahrenheit) => {
	fah = parseFloat(fahrenheit);
	celsius = 5 / 9 * (fah - 32);
	document.getElementById('celsius').innerHTML = celsius;
};


function convertToFahrenheit(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32
    console.log(fahrenheit);
    return fahrenheit;
}


function convertToCelsius(farenheit) {
    let celsius;
    celsius = (farenheit - 32) * 5/9
    console.log(celsius);
    return celsius;
}


function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        return convertToFahrenheit(degrees) + 'F';
    } else if(unit === 'F') {
        return convertToCelsius(degrees) + 'C';
    }
}

convertTemperature(100, 'F');
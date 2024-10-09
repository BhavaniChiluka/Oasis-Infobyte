document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input values
    let temperature = parseFloat(document.getElementById('temperature').value);
    let type = document.getElementById('type').value;
    let result;

    // converting Celcius to Fahrenheit and Kelvin
    if (type === 'Celsius') {
        result = `${(temperature * 9/5 + 32).toFixed(4)} °F / ${(temperature + 273.15).toFixed(4)} K`;
    }
    // converting Fahrenheit to Calcius and Kelvin
    else if (type === 'Fahrenheit') {
        result = `${((temperature - 32) * 5/9).toFixed(4)} °C / ${(((temperature - 32) * 5/9) + 273.15).toFixed(4)} K`;
    }
    // converting Kelvin to Celcius and Fahrenheit
    else if (type === 'Kelvin') {
        result = `${(temperature - 273.15).toFixed(4)} °C / ${((temperature - 273.15) * 9/5 + 32).toFixed(4)} °F`;
    }

    //Displaying the result
    document.getElementById('result').value = result;
});

function convertTemperature() {
        
    var inputValue = parseFloat(document.getElementById("temperatureInput").value);

    
    var selectedUnit = document.getElementById("cars").value;


    var convertedValue = "";
    var resultText = "The converted value is: ";

    if (selectedUnit === "celsius") {
        convertedValue = inputValue;
        
    } else if (selectedUnit === "fahrenheit") {
        convertedValue= (inputValue * 9 / 5) + 32;
       
    } else if (selectedUnit === "kelvin") {
        convertedValue = inputValue + 273.15;
        
    }
    
    document.getElementById("convertedValue").textContent = convertedValue.toFixed(2)+ " " + selectedUnit;
    
}
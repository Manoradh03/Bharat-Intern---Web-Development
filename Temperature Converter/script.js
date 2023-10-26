const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const result = document.getElementById('result');

temperatureInput.addEventListener('input', convertTemperature);
unitSelect.addEventListener('change', convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  let resultText = '';

  if (unit === 'celsius') {
    resultText = `${temperature} °C is equal to ${((temperature * 9/5) + 32).toFixed(2)} °F and ${(temperature + 273.15).toFixed(2)} K`;
  } else if (unit === 'fahrenheit') {
    resultText = `${temperature} °F is equal to ${((temperature - 32) * 5/9).toFixed(2)} °C and ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
  } else if (unit === 'kelvin') {
    resultText = `${temperature} K is equal to ${(temperature - 273.15).toFixed(2)} °C and ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
  }

  result.textContent = resultText;
}

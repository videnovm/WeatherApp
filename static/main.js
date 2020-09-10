var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var mintemp = document.querySelector('.mintemp');
var button= document.querySelector('.submit');

const API_KEY = "9ce4ae7a53443fd24a0055d293faf21c";

button.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=27246259aabc1b11ce70b1b84bb09bf4')
    .then(response => response.json())
      .then(data => {
        console.log(data);
        weatherShow(data);
        //showWeatherTest(input.value);
      })
      .catch(err=>
        alert("Please enter correct city name!")
      );
})  

const weatherShow = (weather) => {

  var temperature = weather['main']['temp'];
  var mintemperature = weather['main']['temp_min'];
  var maxtemperature = weather['main']['temp_max'];
  var cityName = weather['name'];
  var countryName = weather['sys']['country'];
  var description = weather['weather'][0]['description'];

  temp.innerHTML = `${temperature}°<span>C</span>`;
  mintemp.innerHTML = `Minimal temperature: ${mintemperature}°<span>C</span>  Max temperature: ${maxtemperature}°<span>C</span>`
  desc.innerHTML = `Description: ${description}`;
  main.innerHTML = `${cityName}, ${countryName}`;
}

function temperatureConverter(value) {
  value = parseFloat(value);
  var converted = (value-32) / 1.8;
  return converted;
}

//not sure
const showWeatherTest = async (weather) => {
  const message = document.querySelector(".msg");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=27246259aabc1b11ce70b1b84bb09bf4`;
  const response = await fetch(url);
  const newResponse = await response.json();
  newResponse = JSON.stringify;
  message.innerHTML = newResponse;
}
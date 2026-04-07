// Weather App

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "2e5b8abdc9c13687836a60e70fd72857";

weatherForm.addEventListener("submit",asnyc event => {

  event.preventDefault();

  const city = cityInput.value;

  if(city){
    try{
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(errorDisplay);
    }catch(error){
      console.error(error);
      errorDisplay(error);
    }
  }else{
    displayError("Please enter a city");
  }
});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent ="";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
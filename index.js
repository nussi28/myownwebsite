console.clear();
// const temperature = document.querySelector("#temperature");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

async function currentWeather() {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid={APIKEY}`
	);
	const data = await response.json();
	// console.log(data);

	const img = document.createElement("img");
	/* Icon documentation
	 * https://openweathermap.org/weather-conditions
	 */
	img.setAttribute(
		"src",
		`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	);
	icon.appendChild(img);

	city.innerText = data.name;
	description.innerText = data.weather[0].description;
	temperature.innerText = `${data.main.temp} °C`;
}
currentWeather();
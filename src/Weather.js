import axios from "axios";
import React, { useState } from "react";

export default function Weather({ city }) {
	const [weather, setWeather] = useState({});

	function getTemperature(res) {
		setWeather({
			temperature: res.data.main.temp,
			wind: res.data.wind.speed,
			humidity: res.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
			description: res.data.weather[0].description,
		});
	}

	const apiKey = "b0d417b9a05ce1bce437f53ce8e8f48d";
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
	axios.get(apiUrl).then(getTemperature);

	return (
		<>
			{
				<ul style={{ textAlign: "left" }}>
					<li>Temperature: {Math.round(weather.temperature)}°C</li>
					<li>Description: {weather.description}</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind: {weather.wind}km/h</li>
					<li>
						<img src={weather.icon} alt={weather.description} />
					</li>
				</ul>
			}
		</>
	);
}

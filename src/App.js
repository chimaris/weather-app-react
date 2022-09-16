import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="New York" />

				<footer>
					This project was coded by{" "}
					<a href="https://www.linkedin.com/in/stellamaris-chinwendu/" target="_blank" rel="noopener noreferrer">
						Stella Maris
					</a>{" "}
					and is{" "}
					<a href="https://github.com/chimaris/weather-react" target="_blank" rel="noopener noreferrer">
						open-sourced on GitHub
					</a>{" "}
					and{" "}
					<a href="https://maris-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">
						hosted on Netlify
					</a>
				</footer>
			</div>
		</div>
	);
}

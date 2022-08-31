import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
	const [city, setCity] = useState("");
	const [display, setDisplay] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		setDisplay(<Weather city={city} />);
	};
	const updatedValue = (e) => {
		setCity(e.target.value);
	};
	return (
		<div className="search-div">
			<form onSubmit={submitHandler}>
				<label>
					<input type="text" onChange={updatedValue} />
				</label>
				<input type="submit" value="Search" />
			</form>
			<div style={{ margin: "0 auto" }}>{display}</div>
		</div>
	);
}

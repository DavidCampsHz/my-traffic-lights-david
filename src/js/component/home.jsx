import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("green");
	return (
		<div>
			<div id="hanging"></div>
			<div className="semaforo">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;

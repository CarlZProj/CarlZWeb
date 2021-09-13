import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Home />
			</Router>
		</React.Fragment>
	);
}

export default App;

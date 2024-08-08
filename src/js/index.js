//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import TrafficLight from "./component/trafficLight.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight/>);


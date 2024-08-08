import React, { useState } from "react";

const TrafficLight = () => {

    const [lightOn, setLightOn] = useState("");
    const [activateAutomatic, setActivateAutomatic] = useState(false)

    const makeLightOn = (color) => {
        setLightOn(color);
    };

    return (
        <div>
            <div id="bar"></div>

            <div id="trafficLight">

                <div 
                    className= "red light" id={`${lightOn == "red" ? "on" : ""}`}
                    onClick={()=>makeLightOn("red")}>
                </div>

                <div 
                    className= "yellow light" id={`${lightOn == "yellow" ? "on" : ""}`}
                    onClick={()=>makeLightOn("yellow")}>
                </div>

                <div 
                    className= "green light" id={`${lightOn == "green" ? "on" : ""}`}
                    onClick={()=>makeLightOn("green")}>
                </div>

            </div>
        </div> 
    )};

export default TrafficLight;
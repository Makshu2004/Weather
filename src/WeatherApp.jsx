import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo(){
let [weatherinfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 35.02,
        humidity: 38,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze"
});

let updateinfo=(newInfo)=>{
    setWeatherInfo(newInfo);
}

    return (
        
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}
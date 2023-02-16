import React, { useState, useEffect } from 'react'

import WeatherInfoMaim from '../../WeatherInfoMaim';
import WeatherForm from "./WeatherForm";
import Loading from "../common/Loading/index"

const urlbase = "http://api.weatherapi.com/v1/current.json"
const apikey = "d98837a318ce4a778d9115632232501"


export default function Weather() {

  const [infoWeather, setInfoWeather] = useState(null);

  useEffect(() => {
    loadingWeather();
  }, [])

  useEffect(() => {
    console.log(infoWeather)
  }, [infoWeather])

  async function loadingWeather(weather = "london") {
    let data = await fetch(`${urlbase}?key=${apikey}&q=${weather}&aqi=no`)
    let current = await data.json()
    setInfoWeather(null)
    setTimeout(() => {
      setInfoWeather(current)
    }, 2000);
  }

  return (
    <div className='weather'>
      <WeatherForm loadingWeather={loadingWeather} />
      {
        infoWeather ?
          <WeatherInfoMaim
            country={infoWeather?.location.country}
            city={infoWeather?.location.name}
            temp={infoWeather?.current.temp_c}
            icon={infoWeather?.current.condition.icon}
            text={infoWeather?.current.condition.text}
            long={infoWeather?.location.lat}
            lati={infoWeather?.location.lon}
          /> :
          <Loading />
      }
    </div>
  )
}

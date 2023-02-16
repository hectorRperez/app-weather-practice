import React, { useState } from 'react'

export default function WeatherForm({ loadingWeather }) {

  const [weather, setWeather] = useState("");

  function handlerChange(e) {
    const value = e.target.value;
    setWeather(value)
  }

  function handlerSubmit(e) {
    e.preventDefault();
    loadingWeather(weather)
  }

  return (
    <form onSubmit={handlerSubmit} className="form">
      <input
        value={weather}
        name="weatherInput"
        type="text"
        onChange={handlerChange} />
    </form>
  )
}

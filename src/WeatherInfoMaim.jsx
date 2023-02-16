import React from 'react'

import "./styles.css";

export default function WeatherInfoMaim(props) {
  const { country, city, icon, text, temp, long, lati } = props;
  console.log(long)
  console.log(lati)

  return (
    <div className='mainInfo'>
      <div className="header">
        <div className="title">
          <h2 className='cityName'>{city}</h2>
          <h2 className='countryName'>{country}</h2>
        </div>
        <div className="infoWeather">
          <img src={icon} alt="" />
          <div className="temp">
            <p>{text}</p>
            <h2>{temp}°</h2>
          </div>
        </div>
      </div>
      <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63072.36290953681!2d${long}5!3d${lati}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcd817e1043b5b7%3A0x5c5f23ae4dc752d9!2sEl%20Tigre%206050%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses!2sve!4v1676291140877!5m2!1ses!2sve`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"></iframe>
    </div>
  )
}

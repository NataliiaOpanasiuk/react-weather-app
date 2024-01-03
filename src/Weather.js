// import React from "react";
import axios from "axios";

export default function Weather(props) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b107f0128f12cb3797262a88dde7c0fa&units=metric`;
  axios.get(url).then(showTemperature);

  function showTemperature(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}°C.`
    );
  }
}

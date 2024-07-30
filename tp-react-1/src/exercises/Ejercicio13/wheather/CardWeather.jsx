import React from "react";
import PropTypes from "prop-types";
const CardWeather = (props) => {
  const { data } = props;
  return (
    <div className="card d-flex justify-content-center align-items-center">
      <h2>{data.name}</h2>
      <p className="card-title">{data.description}</p>
      <img
        className="w-25"
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />

      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>City: {data.name}</p>
    </div>
  );
};

CardWeather.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    main: PropTypes.object.isRequired,
    temp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    weather: PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default CardWeather;

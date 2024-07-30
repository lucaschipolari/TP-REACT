const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;
const API_KEY_URL = import.meta.env.VITE_API_KEY_WEATHER_URL;
export const getWeatherData = async (data) => {
  const res = await fetch(
    `${WEATHER_URL}?q=${data.city},${data.country}&appid=${API_KEY_URL}`
  );
  const weather = await res.json();
  if (weather.cod === "404") {
    console.log("el pais o ciudad no existe");
  }
  if (!res.ok) {
    throw new Error(`Error fetching weather data: ${res.status}`);
  }

  console.log("solicitud exitosa");
  console.log(weather);
  return weather;
};

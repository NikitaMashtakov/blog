export const getWeather = () =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=55.75222&lon=37.61556&appid=${
      import.meta.env.VITE_API_KEY
    }&lang=ru&units=metric`,
  ).then((response) => response.json());

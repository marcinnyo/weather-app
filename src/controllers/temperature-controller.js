const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const apiKey = process.env.WEATHER_API_KEY;

const getTemperature = async (req, res) => {
  try {
    const city = 'Budapest';
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const temperature = response.data.main.temp;
    res.json({
      temperature: temperature,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch temperature data.' });
  }
};

module.exports = { getTemperature };

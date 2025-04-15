const axios = require('axios');
const sendEmail = require('../services/email-service');

const postNotification = async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const city = 'Budapest';
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const temperature = response.data.main.temp;

    const emailRecipient = req.body.email;
    await sendEmail(
      emailRecipient,
      `Current Temperature in ${city}`,
      `The current temperature in ${city} is ${temperature}°C.`
    );

    res.json({
      city: city,
      temperature: temperature,
      unit: 'Celsius',
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Unable to fetch temperature data or send email.' });
  }
};

module.exports = { postNotification };

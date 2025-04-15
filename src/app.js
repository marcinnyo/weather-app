const express = require('express');
const temperatureRouter = require('./routes/temperature-router');
const notificationsRouter = require('./routes/notifications-router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/temperatures', temperatureRouter);
app.use('/notifications', notificationsRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}

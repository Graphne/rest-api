
const express = require('express');

const {json} = require('express');

const flight = require('./routes/flightRoute');

const app = express();

app.use(json());

app.use("/flight", flight);

const PORT = process.eventNames.PORT || 3000;

app.get("/", (req, res) => {
  res.send("all flights")
});

app.listen(PORT, () => console.log("serrving on port " + PORT));
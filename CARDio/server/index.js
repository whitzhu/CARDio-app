const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Cardio!')
})

const port = process.env.PORT || 3000;

app.listen(3000, function () {
  console.log(`App listening on port ${port}!`)
})
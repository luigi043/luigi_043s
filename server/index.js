const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  console.log('Received contact message:', req.body);
  res.status(200).send('Message received');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
